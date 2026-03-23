'use client';

import Link from 'next/link';
import Image from 'next/image';
import { type BlogPost } from '../../../i18n/blog-posts';
import type { Lang } from '../../../i18n';

interface BlogPostClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
  t: {
    backToBlog: string;
    published: string;
    author: string;
    minRead: string;
    relatedPosts: string;
    share: string;
  };
  lang: Lang;
}

// Improved markdown to HTML converter
function parseMarkdown(content: string): string {
  let html = content.trim();
  
  // Store code blocks first to preserve them
  const codeBlocks: string[] = [];
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (match, lang, code) => {
    codeBlocks.push(`<pre class="bg-stone-800 text-stone-100 p-4 rounded-lg overflow-x mb-6"><code class="language-${lang || 'text'}">${code.trim()}</code></pre>`);
    return `___CODEBLOCK_${codeBlocks.length - 1}___`;
  });
  
  // Store inline code
  const inlineCode: string[] = [];
  html = html.replace(/`([^`]+)`/g, (match, code) => {
    inlineCode.push(`<code class="bg-stone-100 text-stone-800 px-1.5 py-0.5 rounded text-sm font-mono">${code}</code>`);
    return `___INLINECODE_${inlineCode.length - 1}___`;
  });
  
  // Process lists FIRST - wrap immediately to avoid interference from other processing
  const listItems: {ul: string[], ol: string[]} = { ul: [], ol: [] };
  
  // Match unordered lists
  html = html.replace(/^[-*]\s+(.+)$/gm, (match, content) => {
    const idx = listItems.ul.length;
    listItems.ul.push(`<li class="ml-6 list-disc text-stone-700">${content}</li>`);
    return `___UL_${idx}___`;
  });
  
  // Match numbered lists
  html = html.replace(/^\d+\.\s+(.+)$/gm, (match, content) => {
    const idx = listItems.ol.length;
    listItems.ol.push(`<li class="ml-6 list-decimal text-stone-700">${content}</li>`);
    return `___OL_${idx}___`;
  });
  
  // Wrap list items - look for patterns of placeholders with flexible whitespace
  // This handles newlines between items
  html = html.replace(/(?:___\d+___\s*\n?)+/g, (match) => {
    const hasUL = match.includes('___UL_');
    const hasOL = match.includes('___OL_');
    
    if (hasUL && !hasOL) {
      const indices = match.match(/___UL_(\d+)___/g);
      if (!indices) return match;
      const items = indices.map(idx => {
        const num = parseInt(idx.match(/\d+/)?.[0] || '0');
        return listItems.ul[num];
      }).filter(Boolean);
      if (items.length === 0) return match;
      return `\n<ul class="my-6 ml-4 space-y-2">${items.join('')}</ul>\n`;
    }
    
    if (hasOL && !hasUL) {
      const indices = match.match(/___OL_(\d+)___/g);
      if (!indices) return match;
      const items = indices.map(idx => {
        const num = parseInt(idx.match(/\d+/)?.[0] || '0');
        return listItems.ol[num];
      }).filter(Boolean);
      if (items.length === 0) return match;
      return `\n<ol class="my-6 ml-4 space-y-2 list-decimal">${items.join('')}</ol>\n`;
    }
    
    return match;
  });
  
  // Headers - convert to proper heading tags with better margins
  html = html.replace(/^#### (.*$)/gm, '\n\n<h4 class="text-base font-bold text-stone-900 mt-10 mb-4">$1</h4>');
  html = html.replace(/^### (.*$)/gm, '\n\n<h3 class="text-xl font-bold text-stone-900 mt-12 mb-4">$1</h3>');
  html = html.replace(/^## (.*$)/gm, '\n\n<h2 class="text-2xl font-bold text-stone-900 mt-12 mb-5">$1</h2>');
  html = html.replace(/^# (.*$)/gm, '\n\n<h1 class="text-3xl font-bold text-stone-900 mt-8 mb-6">$1</h1>');
  
  // Bold and italic - process AFTER lists
  html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong class="font-bold"><em>$1</em></strong>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-stone-900">$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  
  // Process tables
  const tableBlocks: string[] = [];
  html = html.replace(/(\|.+\|)\n(\|[-:\s|]+\|)\n((?:\|.+\|\n?)+)/g, (match) => {
    const lines = match.trim().split('\n');
    if (lines.length < 3) return match;
    
    const headerCells = lines[0].split('|').filter(c => c.trim()).map(c => c.trim());
    const dataRows = lines.slice(2).filter(line => line.trim() && !line.match(/^\s*\|[\s-:|]*\|\s*$/));
    
    let tableHtml = '<div class="overflow-x my-8"><table class="w-full border-collapse rounded-lg overflow-hidden border border-stone-300">';
    
    tableHtml += '<thead><tr class="bg-stone-100">';
    headerCells.forEach((cell, idx) => {
      const isLast = idx === headerCells.length - 1;
      tableHtml += `<th class="border border-stone-300 px-4 py-3 text-left font-semibold text-stone-900 ${!isLast ? 'border-r-0' : ''}">${cell}</th>`;
    });
    tableHtml += '</tr></thead>';
    
    tableHtml += '<tbody>';
    dataRows.forEach((row, rowIdx) => {
      const cells = row.split('|').filter(c => c.trim()).map(c => c.trim());
      if (cells.length === 0) return;
      
      tableHtml += `<tr class="${rowIdx % 2 === 0 ? 'bg-white' : 'bg-stone-50'}">`;
      cells.forEach((cell, cellIdx) => {
        const isLastCell = cellIdx === cells.length - 1;
        tableHtml += `<td class="border border-stone-300 px-4 py-3 text-stone-700 ${!isLastCell ? 'border-r-0' : ''}">${cell}</td>`;
      });
      tableHtml += '</tr>';
    });
    tableHtml += '</tbody></table></div>';
    
    tableBlocks.push(tableHtml);
    return `___TABLE_${tableBlocks.length - 1}___`;
  });
  
  // Blockquotes
  const quoteBlocks: string[] = [];
  html = html.replace(/^>\s*(.*$)/gm, (match, text) => {
    quoteBlocks.push(`<blockquote class="border-l-4 border-accent pl-4 py-3 my-6 bg-stone-50 rounded-r-lg"><p class="text-stone-700 m-0">${text}</p></blockquote>`);
    return `___QUOTE_${quoteBlocks.length - 1}___`;
  });
  
  // Horizontal rules
  html = html.replace(/^---+$/gm, '<hr class="my-8 border-stone-300" />');
  html = html.replace(/^\*\*\*+$/gm, '<hr class="my-8 border-stone-300" />');
  
  // Now split into paragraphs - look for double newlines or treat each line
  const sections = html.split(/\n\n+/);
  let resultHtml = '';
  
  for (const section of sections) {
    if (!section.trim()) continue;
    
    // Skip if it's already a block element
    if (section.match(/^<(h[1-4]|ul|ol|blockquote|pre|hr|div|table)/)) {
      // Replace placeholders in block elements
      let processed = section
        .replace(/___CODEBLOCK_(\d+)___/g, (_, idx) => codeBlocks[parseInt(idx)] || '')
        .replace(/___INLINECODE_(\d+)___/g, (_, idx) => inlineCode[parseInt(idx)] || '')
        .replace(/___TABLE_(\d+)___/g, (_, idx) => tableBlocks[parseInt(idx)] || '')
        .replace(/___QUOTE_(\d+)___/g, (_, idx) => quoteBlocks[parseInt(idx)] || '')
        .replace(/___UL_\d+___/g, '')
        .replace(/___OL_\d+___/g, '');
      resultHtml += processed;
      continue;
    }
    
    // It's paragraph content - process each line
    const lines = section.split('\n');
    for (const line of lines) {
      if (!line.trim()) continue;
      if (line.includes('___')) continue; // Skip any leftover placeholders
      
      // Replace placeholders
      let processed = line
        .replace(/___CODEBLOCK_(\d+)___/g, (_, idx) => codeBlocks[parseInt(idx)] || '')
        .replace(/___INLINECODE_(\d+)___/g, (_, idx) => inlineCode[parseInt(idx)] || '')
        .replace(/___TABLE_(\d+)___/g, (_, idx) => tableBlocks[parseInt(idx)] || '')
        .replace(/___QUOTE_(\d+)___/g, (_, idx) => quoteBlocks[parseInt(idx)] || '')
        .replace(/___UL_(\d+)___/g, (_, idx) => listItems.ul[parseInt(idx)] || '')
        .replace(/___OL_(\d+)___/g, (_, idx) => listItems.ol[parseInt(idx)] || '');
      
      // Check for Key Takeaways
      if (processed.includes('<strong class="font-semibold text-stone-900">Key Takeaways:</strong>')) {
        resultHtml += `<h3 class="text-xl font-bold text-stone-900 mt-10 mb-5">Key Takeaways:</h3>`;
        continue;
      }
      
      resultHtml += `<p class="mb-4 text-stone-700 leading-relaxed">${processed}</p>`;
    }
  }
  
  // Clean up
  resultHtml = resultHtml.replace(/<p class="mb-4 text-stone-700 leading-relaxed"><\/p>/g, '');
  
  return resultHtml;
}

// Get category image
function getCategoryImage(category: string): string {
  const images: Record<string, string> = {
    'AI Agents': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    'Agenci AI': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    'AI Integration': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    'Integracja AI': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    'Business AI': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    'AI w biznesie': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
  };
  return images[category] || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80';
}

export default function BlogPostClient({ post, relatedPosts, t, lang }: BlogPostClientProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(lang === 'pl' ? 'pl-PL' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const contentHtml = parseMarkdown(post.content);

  // Schema.org structured data for EEat
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
      "description": post.authorBio
    },
    "publisher": {
      "@type": "Organization",
      "name": "InoxieSoft",
      "logo": {
        "@type": "ImageObject",
        "url": "https://inoxiesoft.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://inoxiesoft.com/${lang}/blog/${post.slug}`
    },
    "articleSection": post.category,
    "keywords": post.tags.join(', '),
    "wordCount": post.content.split(/\s+/).length,
    "inLanguage": lang === 'pl' ? 'pl' : 'en',
    "isAccessibleForFree": true,
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

          {/* Breadcrumb */}
          <nav className="bg-white border-b border-stone-200 py-4">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <ol className="flex items-center gap-2 text-sm text-stone-500">
                <li>
                  <Link href={`/${lang}`} className="hover:text-accent">
                    {lang === 'pl' ? 'Start' : 'Home'}
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href={`/${lang}/blog`} className="hover:text-accent">
                    {t.backToBlog}
                  </Link>
                </li>
                <li>/</li>
                <li className="text-stone-900 truncate max-w-[200px]">{post.title}</li>
              </ol>
            </div>
          </nav>

          {/* Article Header with Hero Image */}
          <header className="bg-white">
            {/* Hero Image */}
            <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
              <Image
                src={getCategoryImage(post.category)}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <div className="max-w-4xl mx-auto">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent text-white rounded-full mb-4">
                    {post.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    {post.title}
                  </h1>
                  <p className="text-lg text-stone-200 max-w-2xl">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Meta Info */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-b border-stone-200">
              <div className="flex flex-wrap items-center gap-6 text-sm text-stone-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{formatDate(post.date)}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{post.readingTime} {t.minRead}</span>
                </div>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article className="bg-white py-12 lg:py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="prose prose-lg max-w-none">
                {contentHtml.split('\n').map((line, i) => {
                  if (line.trim() === '') return null;
                  return <div key={i} dangerouslySetInnerHTML={{ __html: line }} />;
                })}
              </div>
              
              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-stone-200">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-stone-100 text-stone-600 text-sm rounded-full hover:bg-stone-200 transition-colors">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Author Bio Box */}
              <div className="mt-10 p-6 bg-gradient-to-r from-accent/5 to-accent/10 rounded-xl border border-accent/20">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-lg mb-1">{post.author}</h3>
                    <p className="text-stone-600">{post.authorBio}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="py-12 lg:py-16 bg-stone-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-stone-900 mb-8">{t.relatedPosts}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedPosts.map(relatedPost => (
                    <article key={relatedPost.slug} className="bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-accent/30 hover:shadow-lg transition-all">
                      <div className="relative h-40">
                        <Image
                          src={getCategoryImage(relatedPost.category)}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <span className="absolute top-3 left-3 text-xs font-semibold text-white bg-accent px-2 py-1 rounded">
                          {relatedPost.category}
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-stone-900 mt-2 mb-2 line-clamp-2">
                          <Link href={`/${lang}/blog/${relatedPost.slug}`} className="hover:text-accent">
                            {relatedPost.title}
                          </Link>
                        </h3>
                        <p className="text-stone-600 text-sm mb-3 line-clamp-2">{relatedPost.excerpt}</p>
                        <Link 
                          href={`/${lang}/blog/${relatedPost.slug}`}
                          className="text-accent font-semibold text-sm hover:text-accent-hover"
                        >
                          {t.backToBlog} →
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="py-12 lg:py-16 bg-stone-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                {lang === 'pl' ? 'Gotowy na transformację AI?' : 'Ready for AI Transformation?'}
              </h2>
              <p className="text-lg text-stone-400 mb-6 max-w-xl mx-auto">
                {lang === 'pl' 
                  ? 'Skontaktuj się z nami, aby omówić wdrożenie AI w Twojej firmie.'
                  : 'Contact us to discuss AI implementation for your business.'}
              </p>
              <Link 
                href={`/${lang}/contact`}
                className="inline-block bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                {lang === 'pl' ? 'Kontakt' : 'Contact Us'}
              </Link>
            </div>
          </section>
    </div>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import type { Lang } from '../i18n';
import { getBlogPosts, type BlogPost } from '../i18n/blog-posts';

interface FeaturedBlogsProps {
  lang: Lang;
}

// Get featured posts based on language - shows different posts for each language
function getFeaturedPosts(lang: 'pl' | 'en'): BlogPost[] {
  const posts = getBlogPosts(lang);
  // Filter for featured posts, or if none featured, take first 3
  const featured = posts.filter(post => post.featured);
  return featured.length > 0 ? featured.slice(0, 3) : posts.slice(0, 3);
}

// Blog Card Component
function BlogCard({ post, lang, t }: { post: BlogPost; lang: Lang; t: ReturnType<typeof useTranslations> }) {
  const blogUrl = `/${lang}/blog/${post.slug}`;
  
  // Image placeholder based on category
  const getCategoryImage = (category: string) => {
    const images: Record<string, string> = {
      'AI Agents': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      'Agenci AI': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      'AI Integration': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'Integracja AI': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'Business AI': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      'AI w biznesie': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    };
    return images[category] || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80';
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-accent/30 hover:shadow-xl transition-all duration-300"
    >
      <Link href={blogUrl} className="block">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={getCategoryImage(post.category)}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <span className="absolute top-4 left-4 bg-accent text-white text-xs font-medium px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
        
        <div className="p-6">
          <h3 className="text-lg font-bold text-stone-900 mb-3 group-hover:text-accent transition-colors line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-stone-600 text-sm mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-stone-500 text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readingTime} {t('minRead')}</span>
            </div>
            
            <span className="text-accent font-medium text-sm group-hover:underline">
              {t('readMore')} →
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

// Main Featured Blogs Section
export default function FeaturedBlogs({ lang }: FeaturedBlogsProps) {
  const t = useTranslations('featuredBlogs');
  const featuredPosts = getFeaturedPosts(lang as 'pl' | 'en');
  const blogListUrl = `/${lang}/blog`;

  return (
    <section className="py-20 lg:py-28 bg-stone-50" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-stone-600 max-w-xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <BlogCard post={post} lang={lang as Lang} t={t} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href={blogListUrl}
            className="inline-block bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-hover transition-colors hover:shadow-lg hover:shadow-accent/25"
          >
            {t('ctaButton')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

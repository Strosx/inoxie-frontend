import Link from 'next/link';
import type { Lang } from '../i18n';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  lang: Lang | string;
  items: BreadcrumbItem[];
}

const labels = {
  pl: {
    home: 'Strona główna',
    offer: 'Usługi',
  },
  en: {
    home: 'Home',
    offer: 'Services',
  },
};

export function BreadcrumbJsonLd({ lang, items }: BreadcrumbProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://inoxiesoft.com${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Breadcrumb({ lang, items }: BreadcrumbProps) {
  const l = labels[lang === 'pl' ? 'pl' : 'en'];

  const allItems = [
    { label: l.home, href: lang === 'pl' ? '/pl' : '/en' },
    { label: l.offer, href: lang === 'pl' ? '/pl/offer' : '/en/offer' },
    ...items,
  ];

  return (
    <nav aria-label="breadcrumb" className="bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center gap-2 text-sm text-stone-500 overflow-x-auto">
          {allItems.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2 shrink-0">
              {index > 0 && (
                <svg className="w-3 h-3 text-stone-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {index === allItems.length - 1 ? (
                <span className="text-stone-900 font-medium truncate max-w-[200px]" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-accent transition-colors shrink-0">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

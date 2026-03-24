import type { Lang } from '../i18n';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://inoxiesoft.com/#organization',
  name: 'InoxieSoft',
  url: 'https://inoxiesoft.com',
  logo: 'https://inoxiesoft.com/favicon.svg',
  description: 'InoxieSoft — software house specjalizujący się w automatyzacji AI i oprogramowaniu na zamówienie dla firm MŚP. Wrocław, Polska.',
  foundingDate: '2020',
  founder: {
    '@type': 'Person',
    name: 'Maciej Kamieniak',
    jobTitle: 'Founder',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+48-798-943-352',
    email: 'kontakt@inoxiesoft.com',
    contactType: 'customer service',
    availableLanguage: ['Polish', 'English'],
    areaServed: ['Poland', 'Europe', 'Worldwide'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kolejowa 14',
    addressLocality: 'Chróscina',
    postalCode: '46-073',
    addressCountry: 'PL',
    addressRegion: 'Lower Silesian Voivodeship',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.0,
    longitude: 17.0,
  },
  sameAs: [
    'https://www.linkedin.com/company/inoxiesoft',
    'https://github.com/inoxiesoft',
  ],
  areaServed: [
    { '@type': 'City', name: 'Wrocław' },
    { '@type': 'City', name: 'Warszawa' },
    { '@type': 'City', name: 'Kraków' },
    { '@type': 'City', name: 'Poznań' },
    { '@type': 'City', name: 'Katowice' },
    { '@type': 'Country', name: 'Poland' },
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'Web Development',
    'SaaS Development',
    'Business Process Automation',
    'AI Agents',
    'LLM Integration',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Usługi IT InoxieSoft',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automatyzacja AI', description: 'Wdrażanie agentów AI i automatyzacja procesów biznesowych' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Oprogramowanie na zamówienie', description: 'Dedykowane aplikacje webowe, systemy SaaS' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Strony www dla firm', description: 'Profesjonalne strony internetowe dla firm MŚP' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chatboty AI', description: 'Inteligentne chatboty na stronę i Messenger' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Integracje API', description: 'Integracje z systemami ERP, CRM, e-commerce' } },
    ],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://inoxiesoft.com/#website',
  url: 'https://inoxiesoft.com',
  name: 'InoxieSoft',
  description: 'Automatyzacja AI + Oprogramowanie na Zamówienie dla firm MŚP',
  publisher: { '@id': 'https://inoxiesoft.com/#organization' },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://inoxiesoft.com/pl/blog?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://inoxiesoft.com/#localbusiness',
  name: 'InoxieSoft',
  description: 'Software house — automatyzacja AI i oprogramowanie na zamówienie we Wrocławiu',
  url: 'https://inoxiesoft.com/pl',
  telephone: '+48-798-943-352',
  email: 'kontakt@inoxiesoft.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kolejowa 14',
    addressLocality: 'Chróscina',
    postalCode: '46-073',
    addressCountry: 'PL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.0,
    longitude: 17.0,
  },
  areaServed: {
    '@type': 'State',
    name: 'Lower Silesian Voivodeship',
  },
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '2',
    bestRating: '5',
    worstRating: '1',
  },
};

export function OrganizationJsonLd({ lang }: { lang: Lang }) {
  const schemas = [organizationSchema, websiteSchema, localBusinessSchema];
  const schemaToUse = lang === 'pl' ? schemas : [organizationSchema, websiteSchema];

  return (
    <>
      {schemaToUse.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

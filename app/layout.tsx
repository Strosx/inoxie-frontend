import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://inoxiesoft.com"),
  title: {
    default: "InoxieSoft | Automatyzacja AI + Oprogramowanie na Zamówienie",
    template: "%s | InoxieSoft"
  },
  description: "Tworzymy oprogramowanie na zlecenie i automatyzujemy procesy biznesowe z wykorzystaniem AI. Agenci AI, integracje LLM, szkolenia. Zmniejszamy koszty, zwiększamy efektywność. Skontaktuj się!",
  keywords: [
    "automatyzacja AI",
    "agenci AI", 
    "LLM",
    "integracje AI",
    "oprogramowanie na zamówienie",
    "automatyzacja procesów",
    "ChatGPT",
    "Claude",
    "Gemini",
    "szkolenia AI",
    "firmy Małych",
    "średnich",
    "dużych",
    "tworzenie stron www",
    "aplikacje webowe",
    "systemy ERP",
    "systemy CRM"
  ],
  authors: [{ name: "Maciej Kamieniak - InoxieSoft" }],
  publisher: "InoxieSoft",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://inoxiesoft.com",
    siteName: "InoxieSoft",
    title: "InoxieSoft | Automatyzacja AI + Oprogramowanie na Zamówienie",
    description: "Tworzymy oprogramowanie na zlecenie i automatyzujemy procesy biznesowe z wykorzystaniem AI. Agenci AI, integracje LLM, szkolenia.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "InoxieSoft - Automatyzacja AI i Oprogramowanie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InoxieSoft | Automatyzacja AI + Oprogramowanie",
    description: "Tworzymy oprogramowanie na zlecenie i automatyzujemy procesy biznesowe z AI.",
  },
  icons: {
    icon: "/icon-192.svg",
    shortcut: "/icon-192.svg",
  },
  manifest: "/manifest.json",
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://inoxiesoft.com",
    languages: {
      "pl": "https://inoxiesoft.com",
      "en": "https://inoxiesoft.com/en",
      "x-default": "https://inoxiesoft.com",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "InoxieSoft",
    "url": "https://inoxiesoft.com",
    "logo": "https://inoxiesoft.com/logo.svg",
    "description": "Tworzymy oprogramowanie na zamówienie i automatyzujemy procesy biznesowe z AI. Zmniejszamy koszty, zwiększamy efektywność.",
    "founder": {
      "@type": "Person",
      "name": "Maciej Kamieniak"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kolejowa 14",
      "postalCode": "46-073",
      "addressLocality": "Chróscina",
      "addressCountry": "PL"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+48-798-943-352",
      "contactType": "customer service",
      "email": "m.kamieniak@inoxiesoft.com"
    },
    "sameAs": [
      "https://linkedin.com/company/inoxiesoft",
      "https://twitter.com/inoxiesoft"
    ],
    "areaServed": "PL",
    "serviceType": [
      "Automatyzacja AI",
      "Oprogramowanie na zamówienie",
      "Agenci AI",
      "Szkolenia AI"
    ],
    "priceRange": "$$",
    "taxID": "PL9910535234",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 1,
      "maxValue": 10
    },
    "yearsInBusiness": 5
  };

  // LocalBusiness schema for local SEO
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "InoxieSoft",
    "image": "https://inoxiesoft.com/logo.svg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kolejowa 14",
      "postalCode": "46-073",
      "addressLocality": "Chróscina",
      "addressCountry": "PL"
    },
    "telephone": "+48-798-943-352",
    "email": "m.kamieniak@inoxiesoft.com",
    "url": "https://inoxiesoft.com",
    "priceRange": "$$",
    "openingHours": ["Mo-Fr 09:00-17:00"],
    "areaServed": {
      "@type": "Country",
      "name": "Poland"
    },
    "serviceType": ["Automatyzacja AI", "Oprogramowanie na zamówienie", "Agenci AI"]
  };

  return (
    // suppressHydrationWarning because lang is set dynamically by [lang]/layout.tsx
    <html lang="pl" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon-192.svg" type="image/svg+xml" sizes="192x192" />
        <link rel="apple-touch-icon" href="/icon-192.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

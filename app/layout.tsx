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
        url: "/og-image.png",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "InoxieSoft",
    "url": "https://inoxiesoft.com",
    "logo": "https://inoxiesoft.com/logo.png",
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

  return (
    <html lang="pl">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-stone-50 antialiased">
        {children}
      </body>
    </html>
  );
}

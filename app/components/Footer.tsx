'use client';

import Link from 'next/link';

function Logo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
      <rect width="32" height="32" rx="6" className="fill-current text-accent"/>
      <path d="M8 10h6v12H8V10z" fill="white"/>
      <path d="M16 10h8v4h-8v-4z" fill="white"/>
      <path d="M16 16h8v6h-8v-6z" fill="white"/>
    </svg>
  );
}

const footerLinks = {
  uslugi: [
    { label: 'Oprogramowanie na zamówienie', href: '/offer' },
    { label: 'Automatyzacja AI', href: '/offer' },
    { label: 'Agenci AI', href: '/offer' },
    { label: 'Szkolenia z AI', href: '/offer' },
  ],
  firma: [
    { label: 'O nas', href: '/about-us' },
    { label: 'Oferta', href: '/offer' },
    { label: 'Kontakt', href: '/contact' },
  ],
};

const industries = ['E-commerce', 'Finanse', 'Produkcja', 'Usługi', 'Healthcare', 'Retail'];

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Logo />
              <span className="text-xl font-bold text-accent">InoxieSoft</span>
            </Link>
            <p className="text-stone-400 mb-6 max-w-md">
              Tworzymy oprogramowanie na zamówienie i automatyzujemy procesy biznesowe 
              z wykorzystaniem AI. Zmniejszamy koszty, zwiększamy efektywność.
            </p>
            
            {/* Industries */}
            <div className="mb-6">
              <p className="text-stone-500 text-sm mb-2">Branże:</p>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <span key={industry} className="text-stone-400 text-sm">{industry}</span>
                ))}
              </div>
            </div>
            
            <div className="space-y-2 text-stone-400 text-sm">
              <p>kontakt@inoxiesoft.com</p>
              <p>+48 XXX XXX XXXX</p>
              <p>Polska - obsługujemy cały kraj</p>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4">Usługi</h4>
            <ul className="space-y-2">
              {footerLinks.uslugi.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Firma</h4>
            <ul className="space-y-2">
              {footerLinks.firma.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-8 pt-8 text-center text-stone-500 text-sm">
          <p>© {new Date().getFullYear()} InoxieSoft. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}

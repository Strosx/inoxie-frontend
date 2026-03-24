import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SUPPORTED_LANGS = ['pl', 'en'];

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip static files, API, etc.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // If path already has a language prefix (/en, /pl), pass through
  // NEVER redirect these — prevents SSR/hydration mismatch
  const pathLang = pathname.split('/')[1];
  if (SUPPORTED_LANGS.includes(pathLang)) {
    return NextResponse.next();
  }

  // Root path without lang prefix — redirect based on cookie or default to /pl
  const savedLang = request.cookies.get('preferred_lang')?.value;
  const lang = (savedLang && SUPPORTED_LANGS.includes(savedLang)) ? savedLang : 'pl';
  const url = request.nextUrl.clone();
  url.pathname = `/${lang}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};

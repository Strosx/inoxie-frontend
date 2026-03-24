import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SUPPORTED_LANGS = ['pl', 'en'];
const DEFAULT_LANG = 'pl';

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

  // Check if path already has a language prefix
  const pathLang = pathname.split('/')[1];
  if (SUPPORTED_LANGS.includes(pathLang)) {
    return NextResponse.next();
  }

  // Check cookie for saved preference
  const savedLang = request.cookies.get('preferred_lang')?.value;
  if (savedLang && SUPPORTED_LANGS.includes(savedLang)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${savedLang}${pathname === '/' ? '' : pathname}`;
    return NextResponse.redirect(url);
  }

  // Detect browser language
  const acceptLanguage = request.headers.get('accept-language') || '';
  let detectedLang = DEFAULT_LANG;

  if (acceptLanguage.startsWith('en')) {
    detectedLang = 'en';
  } else if (acceptLanguage.startsWith('pl')) {
    detectedLang = 'pl';
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${detectedLang}${pathname === '/' ? '' : pathname}`;
  const response = NextResponse.redirect(url);
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};

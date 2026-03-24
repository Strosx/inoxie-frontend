import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["pl", "en"],
  defaultLocale: "pl",
  localePrefix: "always",
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

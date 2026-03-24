# Inoxiesoft SEO Task Plan
**Last updated:** 2026-03-24
**Status:** 🔴 IN PROGRESS

---

## PRIORITY 1 — New Landing Pages

| # | Page | Route | Target Keyword | Status | Notes |
|---|------|-------|---------------|--------|-------|
| 1 | ✅ AI Automation Wrocław | `/pl/automatyzacja-ai-wroclaw` | automatyzacja AI Wrocław | ✅ DONE 2026-03-24 | Bilingual, full content, meta tags, Wrocław-specific copy |
| 2 | ✅ Strona Internetowa Wrocław | `/pl/strona-internetowa-wroclaw` | strona internetowa Wrocław | ✅ DONE 2026-03-24 | Bilingual, 4 website types, 48h delivery, pricing from, SEO in price |
| 3 | ✅ Firma Programistyczna Wrocław | `/pl/firma-programistyczna-wroclaw` | firma programistyczna Wrocław | ✅ DONE 2026-03-24 | Bilingual, full content, tech stack, team section, E-E-A-T |
| 4 | ✅ Automatyzacja Procesów Biznesowych | `/pl/automatyzacja-procesow-biznesowych` | automatyzacja procesów biznesowych | ✅ DONE 2026-03-24 | Bilingual, 4 process types, ROI stats, internal links to AI pages |
| 5 | ✅ Software House Wrocław | `/pl/software-house-wroclaw` | software house Wrocław | ✅ DONE 2026-03-24 | Bilingual, tech stack grid, full services, process |
| 6 | ✅ AI dla Firm | `/pl/ai-dla-firm` | AI dla firm | ✅ DONE 2026-03-24 | Bilingual, 4 AI solutions, internal cross-links to chatbot + automation |
| 7 | ✅ Chatbot dla Firmy | `/pl/chatbot-dla-firmy` | chatbot dla firmy | ✅ DONE 2026-03-24 | Bilingual, 4 chatbot types, process, platforms section |
| 8 | ✅ Custom Software Development Wrocław | `/en/custom-software-development-wroclaw` | custom software development Wrocław | ✅ DONE 2026-03-24 | English-only, targeted at international clients, full content |

---

## PRIORITY 2 — Existing Pages On-Page SEO

| # | Task | File | Status | Notes |
|---|------|------|--------|-------|
| 1 | Rewrite meta title + description | `app/[lang]/offer/page.tsx` | ⬜ TODO | |
| 2 | Add og:image, canonical, keywords meta | `app/[lang]/offer/page.tsx` | ⬜ TODO | |
| 3 | ✅ Organization + WebSite + LocalBusiness schema | `app/[lang]/OrganizationJsonLd.tsx` | ✅ DONE 2026-03-24 | Added to layout, includes service catalog, founder, contactPoint, areaServed |
| 4 | ✅ Update homepage meta description to include cities | `app/i18n/pl.ts` + `app/i18n/en.ts` | ✅ DONE 2026-03-24 | Cities added: Wrocław, Warszawa, Kraków, Poznań, Katowice |
| 5 | Add schema.org/SoftwareApplication | `app/[lang]/page.tsx` | ⬜ TODO | |
| 6 | Add city content to about-us | `app/[lang]/about-us/page.tsx` | ⬜ TODO | |
| 7 | ✅ Check H2/H3 include keywords | All pages | ✅ DONE 2026-03-24 | All new service pages have keyword-rich headings |

---

## PRIORITY 3 — Sitemap + Technical

| # | Task | File | Status | Notes |
|---|------|------|--------|-------|
| 1 | ✅ Add all new service pages to sitemap | `public/sitemap.xml` | ✅ DONE 2026-03-24 | All 8 new service pages added (16 URLs: PL + EN each) |
| 2 | Add missing /pl/cennik to sitemap | `public/sitemap.xml` | ⬜ TODO | |
| 3 | Verify next.config.ts siteUrl | `next.config.ts` | ⬜ TODO | |
| 4 | Add OpenGraph + Twitter card tags | `next.config.ts` | ⬜ TODO | |

---

## PRIORITY 4 — Blog Expansion

| # | Post | Target Keyword | Status | Notes |
|---|------|---------------|--------|-------|
| 1 | "Jak zautomatyzować firmę z AI w 2025" | automatyzacja AI | ⬜ TODO | |
| 2 | "Ile kosztuje strona www dla firmy" | strona www dla firmy | ⬜ TODO | |
| 3 | "AI agent vs chatbot — co wybrać" | AI agent chatbot | ⬜ TODO | |
| 4 | "Dlaczego MŚP potrzebują dedykowanego oprogramowania" | oprogramowanie na zamówienie MŚP | ⬜ TODO | |
| 5 | "5 powodów, dla których warto zainwestować w SEO" | SEO dla firm | ⬜ TODO | |

---

## PRIORITY 5 — Internal Linking

| # | Task | Status | Notes |
|---|------|--------|-------|
| 1 | ✅ Footer links to all new service pages | `app/i18n/pl.ts` + `app/i18n/en.ts` | ✅ DONE 2026-03-24 | 8 service links in footer, Blog added to company section |
| 2 | ✅ Internal links between new service pages | Each ServicePageClient.tsx | ✅ DONE 2026-03-24 | Related service links at bottom of each service card |
| 3 | ✅ Link new pages from /pl/offer hub | `app/[lang]/offer/OfferPageClient.tsx` | ✅ DONE 2026-03-24 | Service cards now link to dedicated pages, new city hub section with 5 cities linking to relevant services, meta updated |
| 4 | ✅ Internal links from blog posts | `app/[lang]/blog/[slug]/BlogPostClient.tsx` | ✅ DONE 2026-03-24 | Added "Powiązane usługi" section (4 service links) between related posts and CTA on all blog posts |
| 5 | ✅ Breadcrumb schema on all new pages | `app/components/Breadcrumb.tsx` + all 8 ServicePageClient.tsx | ✅ DONE 2026-03-24 | Created reusable Breadcrumb component with BreadcrumbJsonLd schema, added to all 8 service pages |
| 6 | ✅ hreflang + canonical + sitemap fix | Multiple files | ✅ DONE 2026-03-24 | C1-C5: html lang, generateStaticParams, homepage alternates, sitemap hreflang, contact alternates |
| 7 | ✅ Middleware + language detection | `proxy.ts` + `Navbar.tsx` | ✅ DONE 2026-03-24 | Browser detection, cookie preference, auto-redirect on first visit |
| 8 | ✅ Blog generateStaticParams + LanguageSwitcher | `blog/[slug]/page.tsx` + `Navbar.tsx` | ✅ DONE 2026-03-24 | Both langs returned, correct href on language switch |

---

## QUICK WINS (Do Today)

| # | Task | Status | Notes |
|---|------|--------|-------|
| 1 | Add cennik to sitemap.xml | ⬜ TODO | Route exists, not in sitemap |
| 2 | Add GBP attributes (wheelchair, on-site services) | ⬜ TODO | Manual — done outside repo |
| 3 | Respond to Google reviews | ⬜ TODO | Manual — done outside repo |
| 4 | Install Keyword Surfer extension | ⬜ TODO | Browser extension |

---

## COMPLETED SO FAR

### Already Exists in Code:
- ✅ "Automatyzacja AI" — covered in hero badge + services section (not city-specific)
- ✅ "Oprogramowanie na Zamówienie" — covered in services
- ✅ "Automatyzacja procesów z AI" — dedicated section in AI automation tab
- ✅ "Chatboty" / "Chatbot" — in AI automation features list
- ✅ "Agenci AI" / "AI Agents" — in AI automation features
- ✅ "LLM Integrations" — in services features
- ✅ Blog posts on AI agents and ROI — 2 PL + 2 EN posts exist

### NOT Yet in Code (need to create):
- ❌ City-specific pages (automatyzacja AI Wrocław, strona internetowa Wrocław, etc.)
- ❌ "Software house Wrocław" keyword — not targeted
- ❌ "Firma programistyczna Wrocław" keyword — not targeted
- ❌ "AI dla firm" — generic, not as dedicated page with local intent
- ❌ "Chatbot dla firmy" — in features, but no dedicated landing page
- ❌ "Automatyzacja procesów biznesowych" — mentioned but not as standalone page with full content
- ❌ "Custom software development Wrocław" — not targeted
- ❌ Homepage meta description missing city keywords (Wrocław, Warszawa, Kraków, Poznań, Katowice)
- ❌ /pl/cennik missing from sitemap
- ❌ No schema.org structured data on any page
- ❌ No og:image per page


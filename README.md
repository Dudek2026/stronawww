# DUDEK Car Studio — premium landing page

Profesjonalna strona dla studia detailingu samochodowego DUDEK Car Studio (Kościelec).
Cinematic dark luxury · editorial typography · mobile-first.

## Stack

- **Next.js 16** (App Router, Turbopack, statyczny prerender)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first config przez `@theme`)
- **motion** — animacje
- **lucide-react** — ikonografia
- **Fraunces** + **Geist** + **Geist Mono** (Google Fonts via `next/font`)

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000).

## Skrypty

| skrypt | opis |
|---|---|
| `npm run dev` | dev server (Turbopack) |
| `npm run build` | build produkcyjny (statyczny prerender) |
| `npm run start` | serwer produkcyjny |
| `npm run lint` | lint (Next ESLint) |
| `npm run typecheck` | sprawdzenie typów TypeScript |

## Deploy na Vercel

1. Zainicjalizuj repo i wypchnij na GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: dudek car studio landing page"
   git branch -M main
   git remote add origin <twoje-repo-na-github>.git
   git push -u origin main
   ```
2. Wejdź na [vercel.com/new](https://vercel.com/new) → wybierz repo → **Deploy**.
3. Vercel wykryje Next.js automatycznie. Brak wymaganych zmiennych środowiskowych.

## Struktura

```
src/
├── app/
│   ├── layout.tsx        ← fonty, metadata, JSON-LD LocalBusiness + AggregateRating
│   ├── page.tsx          ← komponuje wszystkie sekcje
│   ├── globals.css       ← design tokens (kolory, typografia, utilities)
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── sections/         ← Hero, Manifesto, PillarsMarquee, Services,
│   │                       Studio, Gallery, Process, Testimonials, FinalCTA, Footer
│   ├── ui/               ← Container, SectionHeading, Navigation, Lightbox
│   └── motion/           ← Reveal (scroll-triggered)
├── data/                 ← single source of truth (services, contact, gallery,
│                           testimonials, process, pillars)
└── lib/                  ← cn() helper
public/
├── images/               ← zdjęcia studia / realizacji
└── logo/                 ← wersje logo (white / black)
```

## Edycja treści

Wszystkie teksty i dane kontaktowe są centralnie zarządzane w `src/data/`:

- **Dane kontaktowe** (telefon, email, adres, godziny, social): `src/data/contact.ts`
- **Lista usług**: `src/data/services.ts`
- **Galeria**: `src/data/gallery.ts`
- **Opinie**: `src/data/testimonials.ts`
- **Proces**: `src/data/process.ts`

Aby podmienić zdjęcia: wrzuć pliki do `public/images/` i zaktualizuj ścieżki w `gallery.ts`.

## SEO

- `metadata` w `layout.tsx` (title, description, OG, Twitter Card)
- `JSON-LD` `LocalBusiness` + `AutomotiveBusiness` + `AggregateRating` + `Review`
- `sitemap.xml` i `robots.txt` generowane automatycznie
- `next/image` (AVIF + WebP, lazy loading, blur placeholder)
- `next/font` z preloadem display fontu

## Performance

- Strona w pełni statyczna (`○ Static`), prerenderowana w build time
- Wszystkie obrazy serwowane jako WebP/AVIF przez `next/image`
- Animacje respektują `prefers-reduced-motion`
- Brak runtime backendu (CTA przez `tel:` i `mailto:`)

## Hasło firmowe

> **TWOJE AUTO. NASZA PASJA.**

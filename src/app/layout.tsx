import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import { contact } from "@/data/contact";
import { testimonials } from "@/data/testimonials";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const geist = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-mono",
  display: "swap",
});

const siteUrl = "https://dudekcarstudio.pl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DUDEK Car Studio — Detailing premium · Kościelec",
    template: "%s · DUDEK Car Studio",
  },
  description:
    "Profesjonalne studio detailingu samochodowego w Kościelcu. Korekta lakieru, powłoki ceramiczne, detailing wnętrza, ozonowanie. Twoje Auto. Nasza Pasja.",
  keywords: [
    "detailing",
    "detailing samochodowy",
    "powłoka ceramiczna",
    "korekta lakieru",
    "polerowanie lakieru",
    "DUDEK Car Studio",
    "Kościelec",
    "Konin",
    "Wielkopolska",
    "detailing premium",
  ],
  authors: [{ name: "DUDEK Car Studio" }],
  creator: "DUDEK Car Studio",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteUrl,
    siteName: "DUDEK Car Studio",
    title: "DUDEK Car Studio — Detailing premium · Kościelec",
    description:
      "Profesjonalne studio detailingu samochodowego. Korekta lakieru, powłoki ceramiczne, detailing wnętrza. Twoje Auto. Nasza Pasja.",
    // OG image generated automatically by app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "DUDEK Car Studio — Detailing premium",
    description:
      "Korekta lakieru, powłoki ceramiczne, detailing wnętrza. Kościelec.",
    // Twitter image: Next.js falls back to OG image automatically
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutomotiveBusiness"],
  "@id": `${siteUrl}/#business`,
  name: contact.brand,
  alternateName: "Dudek Car Studio Detailing",
  url: siteUrl,
  telephone: contact.phoneE164,
  email: contact.email,
  image: `${siteUrl}/images/IMG_6798a.jpg`,
  logo: `${siteUrl}/logo/dudek-white.png`,
  priceRange: "$$$",
  description: contact.shortDescription,
  slogan: contact.tagline,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.address.street,
    addressLocality: contact.address.city,
    postalCode: contact.address.postal,
    addressRegion: contact.address.region,
    addressCountry: contact.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: contact.geo.lat,
    longitude: contact.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  sameAs: [contact.social.facebook, contact.social.instagram],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: contact.rating.value,
    reviewCount: contact.rating.count,
    bestRating: 5,
    worstRating: 1,
  },
  review: testimonials.slice(0, 5).map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.author },
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: 5,
    },
    reviewBody: t.body,
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${fraunces.variable} ${geist.variable} ${geistMono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[var(--color-accent)] focus:text-[var(--color-ink)] focus:px-4 focus:py-2 focus:font-mono focus:text-xs"
        >
          Przejdź do treści
        </a>
        <div className="noise" aria-hidden="true" />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

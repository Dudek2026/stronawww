import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { contact } from "@/data/contact";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5H17V4.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10.5H8v3h2.6V21h2.9z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--color-iron)] bg-[var(--color-graphite)] overflow-hidden">
      <div className="absolute inset-0 hex-grid opacity-30" aria-hidden="true" />
      <Container className="relative pt-20 sm:pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-6">
            <Image
              src="/logo/dudek-white.png"
              alt="DUDEK Car Studio"
              width={180}
              height={50}
              className="h-12 w-auto"
            />
            <p className="text-[var(--color-silver)]/70 text-sm max-w-sm leading-relaxed">
              Profesjonalne studio detailingu samochodowego. Korekta lakieru,
              powłoki ceramiczne, detailing wnętrza.
            </p>
            <p className="font-display italic-display text-2xl text-[var(--color-bone)]">
              Twoje Auto. Nasza Pasja.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-3 lg:col-span-2 md:col-start-7 lg:col-start-6">
            <p className="eyebrow mb-5">Nawigacja</p>
            <ul className="flex flex-col gap-3 font-mono text-sm">
              <FootLink href="#uslugi">Usługi</FootLink>
              <FootLink href="#studio">Studio</FootLink>
              <FootLink href="#realizacje">Realizacje</FootLink>
              <FootLink href="#opinie">Opinie</FootLink>
              <FootLink href="#kontakt">Kontakt</FootLink>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 lg:col-span-3">
            <p className="eyebrow mb-5">Kontakt</p>
            <ul className="flex flex-col gap-3 font-mono text-sm text-[var(--color-silver)]/80">
              <li>
                <a
                  href={`tel:${contact.phoneE164}`}
                  className="inline-flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                  {contact.email}
                </a>
              </li>
              <li className="text-[var(--color-silver)]/70">
                {contact.address.street}
                <br />
                {contact.address.postal} {contact.address.city}
              </li>
            </ul>
          </div>

          {/* Hours + Social */}
          <div className="md:col-span-12 lg:col-span-3">
            <p className="eyebrow mb-5">Godziny</p>
            <ul className="flex flex-col gap-1.5 font-mono text-xs text-[var(--color-silver)]/70">
              {contact.hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between">
                  <span>{h.day}</span>
                  <span className="tabular-nums text-[var(--color-bone)]/80">
                    {h.value}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex gap-3">
              <a
                href={contact.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center border border-[var(--color-iron)] text-[var(--color-silver)]/80 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center border border-[var(--color-iron)] text-[var(--color-silver)]/80 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-iron)] flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--color-mute)]">
            © {year} DUDEK Car Studio · Wszelkie prawa zastrzeżone
          </p>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--color-mute)]">
            Kościelec, Wielkopolska · PL
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FootLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="text-[var(--color-silver)]/80 hover:text-[var(--color-accent)] transition-colors"
      >
        {children}
      </a>
    </li>
  );
}

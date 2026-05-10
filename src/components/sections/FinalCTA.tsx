import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { contact } from "@/data/contact";

export function FinalCTA() {
  return (
    <section
      id="kontakt"
      className="relative py-28 sm:py-36 lg:py-48 overflow-hidden bg-[var(--color-ink)]"
    >
      <div className="absolute inset-x-0 top-0 h-[60%] glow-radial" aria-hidden="true" />
      <Container className="relative">
        <div className="text-center max-w-5xl mx-auto">
          <Reveal>
            <p className="eyebrow">07 / Kontakt</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 text-display-xl text-[var(--color-bone)]">
              Twoje Auto.
              <br />
              <span className="italic-display text-[var(--color-accent)]">Nasza Pasja.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 text-[var(--color-silver)]/75 text-lg max-w-xl mx-auto leading-relaxed">
              Umów wizytę, opisz potrzeby swojego auta — przygotujemy plan zabiegów
              dopasowany indywidualnie.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${contact.phoneE164}`}
                className="group inline-flex items-center justify-center gap-3 bg-[var(--color-bone)] text-[var(--color-ink)] px-8 py-5 font-mono text-[0.78rem] uppercase tracking-[0.24em] transition-all hover:bg-[var(--color-accent)] hover:tracking-[0.28em]"
              >
                <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                <span>{contact.phone}</span>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center justify-center gap-3 border border-[var(--color-silver)]/40 text-[var(--color-silver)] px-8 py-5 font-mono text-[0.78rem] uppercase tracking-[0.24em] transition-all hover:border-[var(--color-bone)] hover:text-[var(--color-bone)]"
              >
                <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                <span>Napisz mail</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Contact details + map */}
        <div className="mt-24 sm:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <Reveal className="lg:col-span-5" delay={0.15}>
            <div className="flex flex-col gap-10">
              <ContactBlock
                icon={<Phone className="h-4 w-4" strokeWidth={1.5} />}
                label="Telefon"
                value={contact.phone}
                href={`tel:${contact.phoneE164}`}
              />
              <ContactBlock
                icon={<Mail className="h-4 w-4" strokeWidth={1.5} />}
                label="E-mail"
                value={contact.email}
                href={`mailto:${contact.email}`}
              />
              <ContactBlock
                icon={<MapPin className="h-4 w-4" strokeWidth={1.5} />}
                label="Adres"
                value={`${contact.address.street}, ${contact.address.postal} ${contact.address.city}`}
              />
              <div className="flex gap-5 items-start">
                <span className="mt-1.5 text-[var(--color-mute)]">
                  <Clock className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <p className="eyebrow mb-3">Godziny otwarcia</p>
                  <ul className="space-y-1.5 font-mono text-sm">
                    {contact.hours.map((h) => (
                      <li
                        key={h.day}
                        className="flex items-center justify-between text-[var(--color-silver)]/80"
                      >
                        <span>{h.day}</span>
                        <span className="tabular-nums text-[var(--color-bone)]">
                          {h.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.25}>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${contact.address.street}, ${contact.address.postal} ${contact.address.city}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[4/3] lg:aspect-auto lg:h-full min-h-[420px] border border-[var(--color-iron)] overflow-hidden bg-[var(--color-graphite)] hover:border-[var(--color-accent)]/60 transition-colors"
              aria-label={`Otwórz nawigację do ${contact.brand}`}
            >
              {/* Stylized "map" — radial dot grid + glowing pin */}
              <div className="absolute inset-0 hex-grid opacity-60" aria-hidden="true" />
              <div
                className="absolute inset-0"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(200,204,208,0.06) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div
                className="absolute inset-0"
                aria-hidden="true"
                style={{
                  background:
                    "radial-gradient(50% 60% at 50% 50%, rgba(31,184,206,0.16) 0%, transparent 70%)",
                }}
              />

              {/* Diagonal road lines */}
              <svg
                aria-hidden="true"
                viewBox="0 0 800 600"
                className="absolute inset-0 w-full h-full opacity-30"
                preserveAspectRatio="none"
              >
                <line x1="0" y1="120" x2="800" y2="380" stroke="rgba(200,204,208,0.18)" strokeWidth="1" />
                <line x1="0" y1="420" x2="800" y2="180" stroke="rgba(200,204,208,0.12)" strokeWidth="1" />
                <line x1="200" y1="0" x2="540" y2="600" stroke="rgba(200,204,208,0.10)" strokeWidth="1" />
              </svg>

              {/* Pin */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
                <span
                  className="absolute -inset-12 rounded-full"
                  aria-hidden="true"
                  style={{
                    background: "radial-gradient(circle, rgba(31,184,206,0.35) 0%, transparent 70%)",
                  }}
                />
                <span
                  className="relative inline-flex h-3 w-3 rounded-full bg-[var(--color-accent)]"
                  aria-hidden="true"
                >
                  <span className="absolute -inset-2 rounded-full border border-[var(--color-accent)]/50 animate-ping" />
                </span>
              </div>

              {/* Address card */}
              <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8 flex flex-col gap-3 border border-[var(--color-iron)] bg-[var(--color-ink)]/85 backdrop-blur-md p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow mb-2">Lokalizacja</p>
                    <p className="font-display text-xl sm:text-2xl text-[var(--color-bone)] leading-tight">
                      {contact.address.street}
                      <br />
                      {contact.address.postal} {contact.address.city}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="h-5 w-5 text-[var(--color-mute)] group-hover:text-[var(--color-accent)] transition-colors mt-1"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                </div>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-accent)]">
                  Otwórz w Google Maps →
                </p>
              </div>
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ContactBlock({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex gap-5 items-start group">
      <span className="mt-1.5 text-[var(--color-mute)] group-hover:text-[var(--color-accent)] transition-colors">
        {icon}
      </span>
      <div>
        <p className="eyebrow mb-2">{label}</p>
        <p className="font-display text-2xl text-[var(--color-bone)] group-hover:text-[var(--color-accent)] transition-colors">
          {value}
        </p>
      </div>
    </div>
  );
  if (href) return <a href={href}>{content}</a>;
  return content;
}

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
            <p className="eyebrow">09 / Kontakt</p>
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
                className="group inline-flex items-center justify-center gap-3 bg-[var(--color-accent)] text-[var(--color-ink)] px-8 py-5 font-mono text-[0.78rem] uppercase tracking-[0.24em] transition-all hover:bg-[var(--color-bone)] hover:tracking-[0.28em] shadow-[0_0_60px_rgba(31,184,206,0.32)]"
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
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[420px] border border-[var(--color-iron)] overflow-hidden bg-[var(--color-graphite)]">
              <iframe
                title={`Mapa — ${contact.brand}, ${contact.address.street}, ${contact.address.city}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(`DUDEK Car Studio, ${contact.address.street}, ${contact.address.postal} ${contact.address.city}`)}&output=embed`}
                className="absolute inset-0 w-full h-full"
                style={{
                  border: 0,
                  filter: "grayscale(0.4) contrast(1.05) brightness(0.85)",
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${contact.address.street}, ${contact.address.postal} ${contact.address.city}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group absolute bottom-4 right-4 inline-flex items-center gap-2 bg-[var(--color-ink)]/90 backdrop-blur-md border border-[var(--color-iron)] hover:border-[var(--color-accent)] text-[var(--color-silver)] hover:text-[var(--color-accent)] font-mono text-[0.7rem] uppercase tracking-[0.22em] px-4 py-2.5 transition-colors"
                aria-label="Otwórz nawigację do studia w Google Maps"
              >
                <span>Wyznacz trasę</span>
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
              </a>
            </div>
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

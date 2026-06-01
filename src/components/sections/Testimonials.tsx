import { ArrowUpRight, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { testimonials } from "@/data/testimonials";
import { contact } from "@/data/contact";

export function Testimonials() {
  return (
    <section
      id="opinie"
      className="relative py-16 sm:py-28 lg:py-44 overflow-hidden"
    >
      <div
        className="absolute inset-x-0 top-0 h-[35%] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(70% 100% at 50% 0%, rgba(31, 184, 206, 0.06) 0%, transparent 60%)",
        }}
      />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                index="08 / Opinie"
                eyebrow="Klienci o nas"
                title="Cyfry,"
                italic="które mówią same za siebie."
              />
            </Reveal>
          </div>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="border border-[var(--color-iron)] bg-[var(--color-graphite)] p-8 sm:p-10 lg:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[var(--color-accent)] text-[var(--color-accent)]"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <p className="font-display text-5xl sm:text-6xl text-[var(--color-bone)] leading-none">
                  {contact.rating.value} / 5
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-silver)]/70">
                  {contact.rating.count} opinii w {contact.rating.source}
                </p>
              </div>
              <a
                href={contact.social.googleProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-[var(--color-silver)] hover:text-[var(--color-accent)] transition-colors"
              >
                Zobacz na Google
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Testimonials grid — individual borders, no empty gray cells */}
        <div className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {testimonials.map((t, idx) => (
            <Reveal
              key={t.id}
              delay={Math.min(idx * 0.05, 0.4)}
            >
              <article className="group flex h-full flex-col gap-4 sm:gap-6 p-5 sm:p-7 lg:p-10 border border-[var(--color-iron)] bg-[var(--color-ink)] hover:border-[var(--color-accent)]/70 hover:shadow-[0_0_30px_rgba(31,184,206,0.08)] transition-all duration-500">
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-[var(--color-accent)] text-[var(--color-accent)]"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                <p className="text-[var(--color-silver)]/85 text-base leading-relaxed">
                  „{t.body}"
                </p>

                <div className="mt-auto pt-6 border-t border-[var(--color-iron)] flex items-center justify-between">
                  <p className="font-display text-lg text-[var(--color-bone)]">
                    {t.author}
                  </p>
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--color-mute)]">
                    {t.age}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

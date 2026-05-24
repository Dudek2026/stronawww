import { MapPin, Car, Phone, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { doorToDoor } from "@/data/pricing";
import { contact } from "@/data/contact";

const benefitIcons = [Clock, ShieldCheck, Sparkles];

export function DoorToDoor() {
  return (
    <section
      id="door-to-door"
      className="relative py-28 sm:py-36 lg:py-44 overflow-hidden bg-[var(--color-graphite)]"
    >
      {/* Decorative — diagonal route line + glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(120% 60% at 50% 10%, rgba(31, 184, 206, 0.10) 0%, transparent 55%)",
        }}
      />
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
        viewBox="0 0 1480 800"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 600 Q 370 580 740 480 T 1480 200"
          stroke="rgba(31, 184, 206, 0.9)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="6 8"
        />
      </svg>

      <Container className="relative">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 gap-x-12 items-end">
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-4 text-[var(--color-mute)]">
              <span className="font-mono text-[0.72rem] tracking-[0.22em] text-[var(--color-accent)]">
                04 / Premium service
              </span>
              <span
                className="h-px w-12 bg-[var(--color-accent)]/40"
                aria-hidden="true"
              />
            </div>

            <h2 className="mt-6 text-display-lg text-[var(--color-bone)]">
              <span className="text-[var(--color-accent)]">Door</span> to{" "}
              <span className="italic-display text-[var(--color-silver)]">Door.</span>
            </h2>

            <p className="mt-7 text-[var(--color-silver)]/85 text-lg leading-relaxed max-w-2xl">
              {doorToDoor.promiseLong}
            </p>
          </Reveal>

          {/* Pricing badge */}
          <Reveal className="lg:col-span-5" delay={0.15}>
            <div className="relative border border-[var(--color-accent)] bg-[var(--color-ink)]/80 backdrop-blur-sm p-8 sm:p-10">
              <div
                className="absolute top-0 inset-x-0 h-[3px] bg-[var(--color-accent)]"
                aria-hidden="true"
              />
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-accent)] mb-5">
                Cennik usługi
              </p>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-6">
                <div>
                  <p className="font-display text-5xl sm:text-6xl text-[var(--color-bone)] leading-none">
                    {doorToDoor.range}
                  </p>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-silver)]/70">
                    Promień od studia
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="font-display text-5xl sm:text-6xl text-[var(--color-accent)] leading-none">
                    {doorToDoor.surcharge}
                  </p>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-silver)]/70">
                    Dopłata ryczałtowa
                  </p>
                </div>
              </div>
              <p className="mt-7 pt-6 border-t border-[var(--color-iron)] text-xs text-[var(--color-silver)]/60 leading-relaxed">
                {doorToDoor.rangeNote}
              </p>
            </div>
          </Reveal>
        </div>

        {/* 3-step flow */}
        <div className="relative mt-20 sm:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 relative">
            {doorToDoor.steps.map((step, idx) => {
              const Icon = idx === 0 ? MapPin : idx === 1 ? Car : MapPin;
              return (
                <Reveal key={step.number} delay={idx * 0.1}>
                  <article className="relative h-full border border-[var(--color-iron)] bg-[var(--color-ink)] p-8 sm:p-10 group hover:border-[var(--color-accent)]/60 transition-colors duration-500">
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-mono text-sm tracking-[0.18em] text-[var(--color-accent)]">
                        {step.number}
                      </span>
                      <span
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-iron)] text-[var(--color-accent)] group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/10 transition-all duration-500"
                        aria-hidden="true"
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </span>
                    </div>
                    <h3 className="font-display text-3xl text-[var(--color-bone)] leading-tight">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-[var(--color-silver)]/75 text-sm leading-relaxed">
                      {step.body}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Benefits row */}
        <Reveal delay={0.2}>
          <ul className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {doorToDoor.benefits.map((b, idx) => {
              const Icon = benefitIcons[idx];
              return (
                <li
                  key={b.label}
                  className="flex items-start gap-4 p-6 border border-[var(--color-iron)] bg-[var(--color-ink)]/60"
                >
                  <span
                    className="shrink-0 inline-flex h-10 w-10 items-center justify-center bg-[var(--color-accent)]/12 text-[var(--color-accent)]"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="font-display text-lg text-[var(--color-bone)] leading-tight">
                      {b.label}
                    </p>
                    <p className="mt-1 text-[var(--color-silver)]/70 text-sm leading-relaxed">
                      {b.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>

        {/* Closing CTA */}
        <Reveal delay={0.25}>
          <div className="mt-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 p-8 sm:p-10 border-y border-[var(--color-accent)]/30 bg-[var(--color-ink)]/40">
            <div>
              <p className="font-display italic-display text-3xl sm:text-4xl text-[var(--color-bone)] leading-tight">
                {doorToDoor.tagline}
              </p>
              <p className="mt-3 text-[var(--color-silver)]/70 text-sm">
                {doorToDoor.promiseShort}
              </p>
            </div>
            <a
              href={`tel:${contact.phoneE164}`}
              className="group inline-flex shrink-0 items-center justify-center gap-3 bg-[var(--color-accent)] text-[var(--color-ink)] px-8 py-5 font-mono text-[0.78rem] uppercase tracking-[0.24em] hover:bg-[var(--color-bone)] transition-colors"
            >
              <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              <span>Umów odbiór · {contact.phone}</span>
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

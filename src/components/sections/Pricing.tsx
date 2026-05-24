import { Phone, Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { priceGroups, priceMatrices, pricingNote } from "@/data/pricing";
import { contact } from "@/data/contact";

export function Pricing() {
  return (
    <section
      id="cennik"
      className="relative py-28 sm:py-36 lg:py-44 overflow-hidden"
    >
      {/* Subtle accent glow at top */}
      <div
        className="absolute inset-x-0 top-0 h-[40%] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(80% 100% at 50% 0%, rgba(31, 184, 206, 0.08) 0%, transparent 60%)",
        }}
      />
      <Container className="relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <Reveal>
            <SectionHeading
              index="03 / Cennik"
              eyebrow="Ceny startowe"
              title="Transparentne stawki,"
              italic="bez ukrytych dopłat."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-[var(--color-silver)]/75 text-sm leading-relaxed">
              Wszystkie ceny są <span className="text-[var(--color-accent)] font-medium">cenami startowymi</span>.
              Finalna wycena zależy od stanu pojazdu i zakresu prac.
            </p>
          </Reveal>
        </div>

        {/* Pojedyncze pakiety */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {priceGroups.map((group, idx) => (
            <Reveal key={group.id} delay={Math.min(idx * 0.06, 0.24)}>
              <article className="relative h-full flex flex-col gap-5 p-7 sm:p-8 border border-[var(--color-iron)] bg-[var(--color-graphite)] hover:border-[var(--color-accent)]/50 transition-colors duration-500">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[0.72rem] tracking-[0.18em] text-[var(--color-accent)]">
                    {group.number}
                  </span>
                  <span className="h-px w-12 bg-[var(--color-iron)]" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl text-[var(--color-bone)] leading-tight">
                  {group.title}
                </h3>
                {group.description && (
                  <p className="text-[var(--color-silver)]/70 text-sm leading-relaxed">
                    {group.description}
                  </p>
                )}
                <ul className="mt-auto pt-5 border-t border-[var(--color-iron)] space-y-3">
                  {group.rows.map((row) => (
                    <li
                      key={row.label}
                      className="flex items-baseline justify-between gap-4"
                    >
                      <span className="text-[var(--color-silver)]/80 text-sm leading-snug">
                        {row.label}
                      </span>
                      <span className="font-mono text-[var(--color-accent)] text-sm whitespace-nowrap tabular-nums">
                        {row.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Macierze cenowe — Korekta + Powłoki */}
        <div className="mt-16 sm:mt-20 flex flex-col gap-6 sm:gap-8">
          {priceMatrices.map((matrix, idx) => (
            <Reveal key={matrix.id} delay={Math.min(idx * 0.1, 0.2)}>
              <article className="border border-[var(--color-iron)] bg-[var(--color-graphite)] overflow-hidden">
                <header className="flex flex-col gap-4 p-7 sm:p-10 border-b border-[var(--color-iron)]">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[0.72rem] tracking-[0.18em] text-[var(--color-accent)]">
                      {matrix.number}
                    </span>
                    <span className="h-px w-10 bg-[var(--color-accent)]/40" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-3xl sm:text-[2.25rem] text-[var(--color-bone)] leading-tight">
                    {matrix.title}
                  </h3>
                  {matrix.description && (
                    <p className="text-[var(--color-silver)]/70 text-sm leading-relaxed max-w-3xl">
                      {matrix.description}
                    </p>
                  )}
                </header>

                {/* Desktop: matrix table */}
                <div className="hidden lg:block">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-[var(--color-iron)]">
                        <th className="text-left p-5 lg:p-6 eyebrow font-mono text-[var(--color-mute)]">
                          Wariant
                        </th>
                        {matrix.carSizes.map((c) => (
                          <th
                            key={c}
                            className="text-right p-5 lg:p-6 eyebrow font-mono text-[var(--color-silver)]/80"
                          >
                            {c}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {matrix.tiers.map((tier, i) => (
                        <tr
                          key={tier.label}
                          className={
                            i < matrix.tiers.length - 1
                              ? "border-b border-[var(--color-iron)]"
                              : ""
                          }
                        >
                          <td className="p-5 lg:p-6">
                            <p className="font-display text-lg text-[var(--color-bone)] leading-tight">
                              {tier.label}
                            </p>
                            {tier.sublabel && (
                              <p className="font-mono text-xs text-[var(--color-mute)] mt-1 tracking-[0.12em] uppercase">
                                {tier.sublabel}
                              </p>
                            )}
                          </td>
                          {tier.prices.map((p, idx2) => (
                            <td
                              key={idx2}
                              className="p-5 lg:p-6 text-right font-mono text-[var(--color-accent)] text-base tabular-nums"
                            >
                              {p}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile: stacked cards */}
                <div className="lg:hidden divide-y divide-[var(--color-iron)]">
                  {matrix.tiers.map((tier) => (
                    <div key={tier.label} className="p-6 sm:p-7 flex flex-col gap-3">
                      <div>
                        <p className="font-display text-xl text-[var(--color-bone)] leading-tight">
                          {tier.label}
                        </p>
                        {tier.sublabel && (
                          <p className="font-mono text-[0.65rem] text-[var(--color-mute)] mt-1 tracking-[0.18em] uppercase">
                            {tier.sublabel}
                          </p>
                        )}
                      </div>
                      <ul className="space-y-1.5">
                        {matrix.carSizes.map((c, idx2) => (
                          <li
                            key={c}
                            className="flex items-baseline justify-between gap-3 py-1.5"
                          >
                            <span className="text-[var(--color-silver)]/75 text-sm">
                              {c}
                            </span>
                            <span className="font-mono text-[var(--color-accent)] text-sm tabular-nums">
                              {tier.prices[idx2]}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Note + CTA */}
        <Reveal delay={0.15}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-7 flex gap-4 p-6 border border-[var(--color-iron)] bg-[var(--color-graphite)]">
              <span className="mt-1 shrink-0 text-[var(--color-accent)]">
                <Info className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <p className="text-[var(--color-silver)]/80 text-sm leading-relaxed">
                {pricingNote}
              </p>
            </div>
            <div className="md:col-span-5">
              <a
                href={`tel:${contact.phoneE164}`}
                className="group inline-flex w-full items-center justify-between gap-4 bg-[var(--color-accent)] text-[var(--color-ink)] px-6 py-5 font-mono text-[0.78rem] uppercase tracking-[0.22em] hover:bg-[var(--color-bone)] transition-colors"
              >
                <span className="flex items-center gap-3">
                  <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  <span>Wycena indywidualna</span>
                </span>
                <span className="font-mono">{contact.phone}</span>
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

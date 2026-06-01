import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

const stats = [
  { value: "100%", label: "Indywidualne podejście" },
  { value: "14+", label: "Specjalizacji w ofercie" },
  { value: "4.8★", label: "Średnia z 21 opinii Google" },
];

export function Manifesto() {
  return (
    <section id="manifesto" className="relative py-14 sm:py-24 lg:py-44">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-iron)] to-transparent" />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-14 gap-x-12">
          {/* Left column — visual + meta */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs tracking-[0.18em] text-[var(--color-accent)]">
                  01 / Manifest
                </span>
                <span className="h-px w-10 bg-[var(--color-accent)]/40" aria-hidden="true" />
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="relative aspect-[4/5] overflow-hidden border border-[var(--color-iron)] max-w-md">
                <Image
                  src="/images/02.jpg"
                  alt="Czarne auto w studiu DUDEK Car Studio z heksagonalnym oświetleniem LED"
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  aria-hidden="true"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 40%, rgba(5,5,5,0.85) 100%)",
                  }}
                />
                <div className="absolute bottom-6 left-6 right-6 text-[var(--color-bone)]">
                  <p className="font-display italic-display text-3xl sm:text-4xl leading-[1.05]">
                    Twoje Auto.
                    <br />
                    <span className="text-[var(--color-accent)]">Nasza Pasja.</span>
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex items-start gap-3 max-w-md">
                <span
                  className="font-display text-5xl text-[var(--color-accent)] leading-none"
                  aria-hidden="true"
                >
                  „
                </span>
                <p className="text-[var(--color-silver)]/70 text-sm leading-relaxed pt-2">
                  Każde auto traktujemy indywidualnie — od pierwszego kontaktu po
                  ostatni etap pracy.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right column — manifesto copy + stats */}
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={0.1}>
              <h2 className="text-display-lg text-[var(--color-bone)]">
                Studio detailingu, w którym{" "}
                <span className="italic-display text-[var(--color-silver)]">
                  każdy detal ma znaczenie.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-10 max-w-2xl text-[var(--color-silver)]/85 text-lg leading-relaxed">
                DUDEK Car Studio to profesjonalne studio detailingu samochodowego oferujące
                kompleksową pielęgnację pojazdów. Specjalizujemy się w korekcie lakieru,
                aplikacji powłok ceramicznych, czyszczeniu wnętrza oraz detailingu premium.
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <p className="mt-6 max-w-2xl text-[var(--color-silver)]/70 text-base leading-relaxed">
                Pracujemy na sprawdzonych kosmetykach i profesjonalnym sprzęcie — dbając o
                każdy detal i perfekcyjny efekt końcowy. Obsługujemy auta osobowe, SUV‑y,
                pojazdy premium oraz specjalne. Każde z nich traktujemy indywidualnie.
              </p>
            </Reveal>

            <Reveal delay={0.36}>
              <dl className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-[var(--color-iron)] pt-10">
                {stats.map((s) => (
                  <div key={s.label} className="flex flex-col gap-2">
                    <dt className="eyebrow">{s.label}</dt>
                    <dd className="font-display text-4xl sm:text-5xl text-[var(--color-accent)] leading-none">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

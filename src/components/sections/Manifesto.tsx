import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

const stats = [
  { value: "100%", label: "Indywidualne podejście" },
  { value: "14+", label: "Specjalizacji w ofercie" },
  { value: "4.8★", label: "Średnia z 21 opinii Google" },
];

export function Manifesto() {
  return (
    <section id="manifesto" className="relative py-28 sm:py-36 lg:py-44">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-iron)] to-transparent" />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-14 gap-x-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-4 text-[var(--color-mute)]">
                <span className="numeric-tag">01 / Manifest</span>
                <span className="h-px w-10 bg-[var(--color-iron)]" aria-hidden="true" />
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-silver)]/70">
                Twoje Auto. Nasza Pasja.
              </p>
            </Reveal>
          </div>
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
                    <dd className="font-display text-4xl sm:text-5xl text-[var(--color-bone)] leading-none">
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

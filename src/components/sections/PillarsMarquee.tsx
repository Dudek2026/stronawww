import { pillars } from "@/data/gallery";

export function PillarsMarquee() {
  // Duplicate so the seamless marquee loops
  const items = [...pillars, ...pillars];
  return (
    <section
      aria-label="Wartości DUDEK Car Studio"
      className="relative py-12 sm:py-16 border-y border-[var(--color-iron)]/60 overflow-hidden bg-[var(--color-graphite)]"
    >
      <div className="marquee-track">
        {items.map((p, i) => (
          <span
            key={`${p}-${i}`}
            className="flex items-center gap-12 px-8 whitespace-nowrap"
          >
            <span className="font-display italic-display text-4xl sm:text-5xl lg:text-6xl text-[var(--color-bone)] leading-none">
              {p}
            </span>
            <Spark />
          </span>
        ))}
      </div>
    </section>
  );
}

function Spark() {
  return (
    <span className="relative inline-flex h-2 w-2 shrink-0" aria-hidden="true">
      <span className="absolute inset-0 rounded-full bg-[var(--color-accent)] opacity-80" />
      <span className="absolute -inset-2 rounded-full bg-[var(--color-accent)] opacity-20 blur-md" />
    </span>
  );
}

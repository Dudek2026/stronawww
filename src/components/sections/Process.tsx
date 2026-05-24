import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { process } from "@/data/process";

export function Process() {
  return (
    <section
      id="proces"
      className="relative py-28 sm:py-36 lg:py-44 bg-[var(--color-graphite)] overflow-hidden"
    >
      <Container>
        <Reveal>
          <SectionHeading
            index="07 / Proces"
            eyebrow="Współpraca"
            title="Cztery kroki"
            italic="do nowego życia auta."
          />
        </Reveal>

        <ol className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-iron)] border border-[var(--color-iron)]">
          {process.map((step, idx) => (
            <li key={step.number} className="bg-[var(--color-graphite)]">
              <Reveal delay={idx * 0.08}>
                <div className="flex h-full flex-col gap-8 p-7 sm:p-8 lg:p-10 group">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-7xl text-[var(--color-bone)]/90 leading-none group-hover:text-[var(--color-accent)] transition-colors">
                      {step.number}
                    </span>
                    <span
                      className="h-px w-16 bg-[var(--color-iron)] group-hover:bg-[var(--color-accent)]/50 transition-colors"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="font-display text-2xl text-[var(--color-bone)]">
                    {step.title}
                  </h3>

                  <p className="text-[var(--color-silver)]/70 text-sm leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

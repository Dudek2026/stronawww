import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { studioImages } from "@/data/gallery";

const features = [
  "Zamknięte, klimatyzowane studio",
  "Heksagonalne oświetlenie LED studyjne",
  "Profesjonalne kosmetyki marki premium",
  "Maszyny polerskie i akcesoria detailingowe",
];

export function Studio() {
  return (
    <section
      id="studio"
      className="relative py-28 sm:py-36 lg:py-44 bg-[var(--color-graphite)] overflow-hidden"
    >
      <div className="absolute inset-0 hex-grid opacity-50" aria-hidden="true" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            index="03 / Studio"
            eyebrow="Przestrzeń pracy"
            title="Zamknięte studio,"
            italic="warunki bez kompromisów."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-12 gap-4 sm:gap-6">
          {/* Big image */}
          <Reveal className="col-span-12 lg:col-span-8 row-span-2" delay={0.1}>
            <div className="relative aspect-[4/3] lg:aspect-[3/2.6] overflow-hidden border border-[var(--color-iron)]">
              <Image
                src={studioImages[0].src}
                alt={studioImages[0].alt}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover transition-transform duration-[1200ms] hover:scale-[1.03]"
              />
            </div>
          </Reveal>

          {/* Two stacked */}
          <Reveal className="col-span-6 lg:col-span-4" delay={0.2}>
            <div className="relative aspect-[4/3] overflow-hidden border border-[var(--color-iron)]">
              <Image
                src={studioImages[1].src}
                alt={studioImages[1].alt}
                fill
                sizes="(min-width: 1024px) 30vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] hover:scale-[1.03]"
              />
            </div>
          </Reveal>

          <Reveal className="col-span-6 lg:col-span-4" delay={0.28}>
            <div className="relative aspect-[4/3] overflow-hidden border border-[var(--color-iron)]">
              <Image
                src={studioImages[2].src}
                alt={studioImages[2].alt}
                fill
                sizes="(min-width: 1024px) 30vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] hover:scale-[1.03]"
              />
            </div>
          </Reveal>
        </div>

        {/* Features list */}
        <Reveal delay={0.35}>
          <ul className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-iron)] border border-[var(--color-iron)]">
            {features.map((f, i) => (
              <li
                key={f}
                className="bg-[var(--color-graphite)] p-6 sm:p-8 flex flex-col gap-3"
              >
                <span className="numeric-tag text-[var(--color-mute)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[var(--color-bone)] font-display text-lg sm:text-xl leading-tight">
                  {f}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Lightbox } from "@/components/ui/Lightbox";
import { galleryItems } from "@/data/gallery";

const aspectClass: Record<string, string> = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/10]",
  tall: "aspect-[9/16]",
};

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="realizacje"
      className="relative py-24 sm:py-32 lg:py-44 overflow-hidden"
    >
      <div
        className="absolute inset-x-0 top-0 h-[30%] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(70% 100% at 50% 0%, rgba(31, 184, 206, 0.06) 0%, transparent 60%)",
        }}
      />
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <Reveal>
            <SectionHeading
              index="06 / Realizacje"
              eyebrow="Wybrane prace"
              title="Studio w akcji,"
              italic="auta po zabiegach."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-[var(--color-silver)]/70 text-sm leading-relaxed">
              Wycinek pracy z ostatnich miesięcy — od korekty lakieru, przez powłoki,
              po renowacje wnętrz. Kliknij, aby powiększyć.
            </p>
          </Reveal>
        </div>

        {/* CSS columns masonry — naturally handles mixed aspects */}
        <div className="mt-12 sm:mt-14 columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-4 [column-fill:_balance]">
          {galleryItems.map((it, idx) => (
            <Reveal
              key={it.id}
              className="mb-3 sm:mb-4 break-inside-avoid"
              delay={Math.min(idx * 0.04, 0.4)}
            >
              <button
                type="button"
                onClick={() => setActive(idx)}
                className={`group relative w-full overflow-hidden border border-[var(--color-iron)] bg-[var(--color-graphite)] transition-colors hover:border-[var(--color-accent)]/60 ${aspectClass[it.aspect]}`}
                aria-label={`Otwórz: ${it.alt}`}
              >
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                />
                <span
                  className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/65 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
                <span className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-end justify-between text-[var(--color-bone)]">
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] opacity-80">
                    {it.category}
                  </span>
                  <span className="font-mono text-[0.62rem] tabular-nums opacity-70">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      <Lightbox
        items={galleryItems}
        index={active}
        onClose={() => setActive(null)}
        onPrev={() =>
          setActive((i) => (i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length))
        }
        onNext={() =>
          setActive((i) => (i === null ? null : (i + 1) % galleryItems.length))
        }
      />
    </section>
  );
}

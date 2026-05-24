"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { categories, services, type ServiceCategory } from "@/data/services";
import { cn } from "@/lib/utils";

export function Services() {
  const [active, setActive] = useState<ServiceCategory | "wszystko">("wszystko");

  const filtered =
    active === "wszystko" ? services : services.filter((s) => s.category === active);

  return (
    <section id="uslugi" className="relative py-28 sm:py-36 lg:py-44 overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-[35%] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(70% 100% at 50% 0%, rgba(31, 184, 206, 0.07) 0%, transparent 60%)",
        }}
      />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            index="02 / Usługi"
            eyebrow="Zakres prac"
            title="Pełny detailing,"
            italic="bez kompromisów."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl text-[var(--color-silver)]/75 text-base leading-relaxed">
            Czternaście usług połączonych w cztery obszary. Każdy zabieg wykonywany ręcznie,
            z użyciem profesjonalnych kosmetyków i sprzętu studyjnego.
          </p>
        </Reveal>

        {/* Category filter */}
        <Reveal delay={0.15}>
          <div className="mt-14 flex flex-wrap gap-2 sm:gap-3 border-b border-[var(--color-iron)] pb-3">
            <FilterButton
              active={active === "wszystko"}
              onClick={() => setActive("wszystko")}
            >
              Wszystkie · {services.length}
            </FilterButton>
            {categories.map((c) => {
              const count = services.filter((s) => s.category === c.id).length;
              return (
                <FilterButton
                  key={c.id}
                  active={active === c.id}
                  onClick={() => setActive(c.id)}
                >
                  {c.label} · {count}
                </FilterButton>
              );
            })}
          </div>
        </Reveal>

        {/* Service grid — individual borders, no empty gray cells */}
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {filtered.map((s, idx) => (
            <li key={s.id}>
              <Reveal delay={Math.min(idx * 0.04, 0.32)} y={20}>
                <ServiceTile
                  number={s.number}
                  title={s.title}
                  description={s.long}
                  short={s.short}
                  comingSoon={s.comingSoon}
                />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function FilterButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "font-mono text-[0.72rem] uppercase tracking-[0.22em] px-4 py-2.5 transition-colors border",
        active
          ? "bg-[var(--color-bone)] text-[var(--color-ink)] border-[var(--color-bone)]"
          : "bg-transparent text-[var(--color-silver)]/70 border-[var(--color-iron)] hover:text-[var(--color-bone)] hover:border-[var(--color-silver)]/50",
      )}
    >
      {children}
    </button>
  );
}

function ServiceTile({
  number,
  title,
  description,
  short,
  comingSoon,
}: {
  number: string;
  title: string;
  description: string;
  short: string;
  comingSoon?: boolean;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col gap-6 p-7 sm:p-8 lg:p-10 border border-[var(--color-iron)] bg-[var(--color-ink)] transition-all duration-500",
        "hover:bg-[var(--color-graphite)] hover:border-[var(--color-accent)]/70 hover:shadow-[0_0_30px_rgba(31,184,206,0.08)]",
        comingSoon && "opacity-70",
      )}
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-xs tracking-[0.18em] text-[var(--color-accent)] tabular-nums">{number}</span>
        {comingSoon ? (
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[var(--color-accent)] border border-[var(--color-accent)]/40 px-2 py-1">
            Wkrótce
          </span>
        ) : (
          <ArrowUpRight
            className="h-5 w-5 text-[var(--color-mute)] group-hover:text-[var(--color-accent)] transition-colors"
            strokeWidth={1.25}
            aria-hidden="true"
          />
        )}
      </div>

      <h3 className="text-2xl sm:text-[1.6rem] font-display text-[var(--color-bone)] leading-[1.1]">
        {title}
      </h3>

      <p className="text-[var(--color-silver)]/70 text-sm leading-relaxed">{short}</p>

      <p className="text-[var(--color-silver)]/55 text-[0.84rem] leading-relaxed border-t border-[var(--color-iron)] pt-5 mt-auto">
        {description}
      </p>
    </article>
  );
}

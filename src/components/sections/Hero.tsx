"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Phone } from "lucide-react";
import { contact } from "@/data/contact";
import { heroImage } from "@/data/gallery";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[var(--color-ink)]"
      aria-label="Hero — DUDEK Car Studio"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <motion.div
          initial={reduce ? false : { scale: 1.1 }}
          animate={reduce ? undefined : { scale: 1 }}
          transition={{ duration: 6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-65"
          />
        </motion.div>
        <div className="absolute inset-0 cine-vignette" aria-hidden="true" />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(120% 80% at 30% 100%, rgba(31, 184, 206, 0.10) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1480px] flex-col px-6 sm:px-8 lg:px-12 pt-28 sm:pt-32 lg:pt-36 pb-12">
        {/* Top meta row */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: -10 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[var(--color-silver)]/85"
        >
          <span className="eyebrow">Detailing Studio</span>
          <span className="h-px w-8 bg-[var(--color-silver)]/30" aria-hidden="true" />
          <span className="eyebrow">Kościelec · Wielkopolska</span>
        </motion.div>

        {/* Two-column row: headline left, big logo right */}
        <div className="mt-auto pt-16 sm:pt-20 lg:pt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left — headline + copy + CTAs */}
          <div className="lg:col-span-7">
          <h1 className="text-display-xl text-[var(--color-bone)] max-w-[14ch]">
            <RevealLine delay={0.3}>Twoje Auto.</RevealLine>
            <RevealLine delay={0.55}>
              <span className="italic-display text-[var(--color-accent)]">Nasza Pasja.</span>
            </RevealLine>
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-xl text-[var(--color-silver)]/85 text-base sm:text-lg leading-relaxed"
          >
            Profesjonalne studio detailingu w Kościelcu — korekta lakieru, powłoki
            ceramiczne, detailing wnętrza. Każdy detal wykonany z pasją do najmniejszego
            szczegółu.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center"
          >
            <a
              href={`tel:${contact.phoneE164}`}
              className="group relative inline-flex items-center justify-center gap-3 bg-[var(--color-accent)] text-[var(--color-ink)] px-7 py-4 font-mono text-[0.78rem] uppercase tracking-[0.24em] transition-all hover:bg-[var(--color-bone)] hover:tracking-[0.28em] shadow-[0_0_40px_rgba(31,184,206,0.32)]"
            >
              <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              <span>Umów wizytę</span>
            </a>
            <a
              href="#uslugi"
              className="inline-flex items-center justify-center gap-3 border border-[var(--color-silver)]/40 text-[var(--color-silver)] px-7 py-4 font-mono text-[0.78rem] uppercase tracking-[0.24em] transition-all hover:border-[var(--color-bone)] hover:text-[var(--color-bone)]"
            >
              <span>Zobacz usługi</span>
              <ArrowDown className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            </a>
          </motion.div>
          </div>

          {/* Right — big logo */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.92 }}
            animate={reduce ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex lg:col-span-5 items-center justify-center"
          >
            <Image
              src="/logo/dudek-white.png"
              alt="DUDEK Car Studio"
              width={1999}
              height={1518}
              priority
              sizes="(min-width: 1280px) 420px, 320px"
              style={{ height: "auto" }}
              className="w-full max-w-[420px] drop-shadow-[0_12px_40px_rgba(0,0,0,0.55)]"
            />
          </motion.div>
        </div>

        {/* Bottom meta strip */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="mt-14 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 border-t border-[var(--color-silver)]/15 pt-8"
        >
          <MetaCell label="Telefon" value={contact.phone} href={`tel:${contact.phoneE164}`} />
          <MetaCell
            label="Adres"
            value={`${contact.address.city}, ${contact.address.street}`}
          />
          <MetaCell label="Otwarte" value="Pn — Pt · 8:00 — 17:00" />
          <MetaCell label="Ocena" value={`${contact.rating.value} / 5 · ${contact.rating.count} opinii`} />
        </motion.div>
      </div>

      {/* Frame corners */}
      <span
        aria-hidden="true"
        className="frame-corner top-6 left-6 border-t border-l"
      />
      <span
        aria-hidden="true"
        className="frame-corner top-6 right-6 border-t border-r"
      />
      <span
        aria-hidden="true"
        className="frame-corner bottom-6 left-6 border-b border-l"
      />
      <span
        aria-hidden="true"
        className="frame-corner bottom-6 right-6 border-b border-r"
      />
    </section>
  );
}

function RevealLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <span className="block">{children}</span>;
  return (
    <span className="block overflow-hidden pb-[0.22em] -mb-[0.18em]">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function MetaCell({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const Wrap = href ? "a" : "div";
  return (
    <Wrap
      {...(href ? { href } : {})}
      className="flex flex-col gap-1.5 group"
    >
      <span className="eyebrow">{label}</span>
      <span className="font-mono text-sm text-[var(--color-bone)] tracking-tight group-hover:text-[var(--color-accent)] transition-colors">
        {value}
      </span>
    </Wrap>
  );
}

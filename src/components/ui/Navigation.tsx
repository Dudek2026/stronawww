"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { contact } from "@/data/contact";
import { cn } from "@/lib/utils";

const links = [
  { href: "#uslugi", label: "Usługi" },
  { href: "#cennik", label: "Cennik" },
  { href: "#door-to-door", label: "Door to Door" },
  { href: "#studio", label: "Studio" },
  { href: "#realizacje", label: "Realizacje" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[var(--color-ink)]/72 backdrop-blur-xl border-b border-[var(--color-iron)]/60"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Główna nawigacja"
        className="mx-auto flex w-full max-w-[1480px] items-center justify-between px-6 sm:px-8 lg:px-12 h-16 sm:h-20"
      >
        <a href="#hero" className="flex items-center gap-3 group" aria-label="DUDEK Car Studio — Strona główna">
          <Image
            src="/logo/dudek-white.png"
            alt=""
            width={1999}
            height={1518}
            priority
            sizes="140px"
            style={{ width: "auto" }}
            className="h-9 sm:h-10 transition-opacity group-hover:opacity-80"
          />
          <span className="sr-only">DUDEK Car Studio</span>
        </a>

        <ul className="hidden lg:flex items-center gap-10 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-[var(--color-silver)]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative py-2 transition-colors hover:text-[var(--color-bone)] focus-visible:text-[var(--color-bone)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${contact.phoneE164}`}
            className="hidden md:inline-flex items-center gap-2 border border-[var(--color-silver)]/30 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] text-[var(--color-silver)] font-mono text-[0.72rem] uppercase tracking-[0.22em] px-4 py-2.5 transition-colors"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={1.5} />
            <span>Zadzwoń</span>
          </a>
          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center text-[var(--color-bone)]"
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-[var(--color-iron)]/60 bg-[var(--color-ink)]/95 backdrop-blur-xl">
          <ul className="flex flex-col px-6 py-6 gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-2xl text-[var(--color-bone)] border-b border-[var(--color-iron)]/40"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href={`tel:${contact.phoneE164}`}
                className="inline-flex items-center gap-3 text-[var(--color-accent)] font-mono text-sm tracking-[0.18em] uppercase"
              >
                <Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                {contact.phone}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

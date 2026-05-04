"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ThemeToggle } from "./theme-toggle";

export function HeaderPill() {
  const { scrollY } = useScroll();
  const maxWidth = useTransform(scrollY, [0, 200], [1120, 760]);
  const height = useTransform(scrollY, [0, 200], [64, 52]);
  const blur = useTransform(scrollY, [0, 200], [12, 18]);
  const backdrop = useTransform(blur, (b) => `blur(${b}px)`);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ maxWidth, height, backdropFilter: backdrop, WebkitBackdropFilter: backdrop as unknown as string }}
      className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-32px)] -translate-x-1/2 items-center justify-between gap-4 rounded-full border border-border bg-bg-elevated/85 px-5 shadow-[0_8px_32px_-12px_rgba(20,19,17,0.12)]"
    >
      <a
        href="/"
        className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink"
      >
        NEVOXIA
      </a>

      <nav className="hidden items-center gap-6 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted sm:flex">
        <a href="#productos" className="transition-colors hover:text-ink">
          Productos
        </a>
        <a href="#por-que" className="transition-colors hover:text-ink">
          Por qué
        </a>
        <a href="#israel" className="transition-colors hover:text-ink">
          Israel
        </a>
      </nav>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <a
          href="https://reseabot.es"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-bg-anchor px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-on-anchor transition-transform hover:scale-[1.03] sm:inline-flex"
        >
          Empezar con ReseaBot
        </a>
      </div>
    </motion.header>
  );
}

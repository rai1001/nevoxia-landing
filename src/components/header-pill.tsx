"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ThemeToggle } from "./theme-toggle";

export function HeaderPill() {
  const { scrollY } = useScroll();
  const width = useTransform(scrollY, [0, 200], ["min(420px, 92vw)", "min(280px, 88vw)"]);
  const opacity = useTransform(scrollY, [0, 100], [0.95, 1]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ width, opacity }}
      className="fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-full border border-border bg-bg-elevated/90 px-4 py-2 shadow-sm backdrop-blur"
    >
      <div className="flex items-center justify-between gap-4">
        <a
          href="/"
          className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-fg"
        >
          NEVOXIA
        </a>
        <nav className="hidden items-center gap-5 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-muted sm:flex">
          <a href="#productos" className="hover:text-fg transition-colors">
            01 Productos
          </a>
          <a href="#sobre" className="hover:text-fg transition-colors">
            02 Sobre
          </a>
          <a href="#contacto" className="hover:text-fg transition-colors">
            03 Contacto
          </a>
        </nav>
        <ThemeToggle />
      </div>
    </motion.header>
  );
}

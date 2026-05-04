"use client";

import { motion } from "motion/react";

const HERO_EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-[100vh] flex-col justify-end px-6 pb-16 pt-32 sm:px-12 sm:pb-24">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-2"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <span className="eyebrow">Nevoxia // A Coruña</span>
          <span className="eyebrow text-ink-subtle">Producto // Directo</span>
        </motion.div>

        <motion.h1
          className="font-display text-[clamp(4.8rem,13vw,15rem)] font-black leading-[0.8] tracking-[-0.07em] text-ink"
          initial={{ y: 104, opacity: 0, scale: 0.98, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.14, duration: 0.82, ease: HERO_EASE }}
        >
          Hecho en turno.
        </motion.h1>

        <motion.div
          className="mt-12 grid gap-8 sm:grid-cols-[1fr,auto] sm:items-end"
          initial={{ y: 28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.68, duration: 0.68, ease: HERO_EASE }}
        >
          <p className="max-w-[44ch] text-lg leading-[1.55] text-ink-muted sm:text-xl">
            Software para reseñas, cocina, sala y pyme española. Lo probamos
            donde se trabaja: turnos reales, poco margen y cero tiempo para
            herramientas que estorban. Primero lo usamos. Después lo vendemos.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://reseabot.es"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent-fg transition-transform hover:scale-[1.03]"
            >
              Empezar con ReseaBot
              <span aria-hidden>→</span>
            </a>
            <motion.a
              href="#productos"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-bg-elevated"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.82, duration: 0.5 }}
            >
              Ver productos
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

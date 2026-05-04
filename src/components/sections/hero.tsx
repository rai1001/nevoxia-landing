"use client";

import { motion } from "motion/react";

/**
 * HERO — provisional hasta output GPT.
 * Manifiesto, sub-copy y eyebrow se sustituirán por el copy final.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-32 pb-20">
      <motion.span
        className="eyebrow mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        Estudio // A Coruña
      </motion.span>

      <motion.h1
        className="max-w-5xl text-center text-[clamp(3.5rem,11vw,10rem)] font-bold leading-[0.95] tracking-tight text-fg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6, ease: [0.72, 0, 0.43, 1.01] }}
      >
        Manifiesto pendiente.
      </motion.h1>

      <motion.p
        className="mt-8 max-w-xl text-center text-lg text-fg-muted sm:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        Sub-copy hero pendiente del output GPT. Línea que explica qué hace
        Nevoxia y para quién, sin generalidades agencia.
      </motion.p>

      <motion.div
        className="mt-16 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span>↓</span>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}

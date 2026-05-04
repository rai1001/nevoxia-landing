"use client";

import { motion } from "motion/react";

const STAMPS = ["47", "A Coruña", "Head Chef en activo", "Tech entrepreneur"];

export function AboutIsrael() {
  return (
    <section id="israel" className="px-6 py-32 sm:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">Israel // Head Chef</span>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[auto,1fr] lg:items-end">
          <motion.div
            className="font-display text-[clamp(8rem,22vw,22rem)] font-black leading-[0.8] tracking-[-0.08em] text-ink"
            initial={{ scale: 0.94, opacity: 0, y: 22 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 24,
              bounce: 0.16,
            }}
          >
            47.
          </motion.div>

          <div className="max-w-xl">
            <motion.h2
              className="font-display text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-5xl"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Un Head Chef escribiendo software.
            </motion.h2>
            <motion.p
              className="mt-6 text-base text-ink-muted sm:text-lg"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Israel tiene 47 años, vive en A Coruña y sigue en activo como Head
              Chef en Eurostars. Eso cambia el tipo de software que construye.
              Sabe lo que pasa cuando una herramienta promete ahorrar tiempo
              pero pide más pasos. Sabe que un buen sistema no debe hacerse
              notar más que el problema que resuelve. Nevoxia nace de esa
              mezcla: turno, código y pyme española.
            </motion.p>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          {STAMPS.map((stamp, i) => (
            <motion.span
              key={stamp}
              className="rounded-full border border-border-strong px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-ink"
              initial={{ scale: 0.94, opacity: 0, y: 22 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                delay: 0.1 * i,
                type: "spring",
                stiffness: 220,
                damping: 24,
                bounce: 0.16,
              }}
            >
              {stamp}
            </motion.span>
          ))}
        </div>

        <motion.p
          className="eyebrow mt-16 text-ink"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Primero // Dentro &nbsp;·&nbsp; Después // Producto
        </motion.p>
      </div>
    </section>
  );
}

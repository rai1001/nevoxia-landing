"use client";

import { motion } from "motion/react";

export function AboutIsrael() {
  return (
    <section id="sobre" className="px-6 py-32">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-2 sm:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">Quién está detrás</span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-fg sm:text-5xl">
            Israel.
          </h2>
          <p className="mt-6 text-lg text-fg-muted">
            Head Chef en Eurostars y emprendedor tecnológico. A Coruña.
          </p>
          <p className="mt-4 text-base text-fg-subtle">
            Construyo Nevoxia desde la cocina, no desde la consultoría. Cada
            producto que sale del estudio resuelve un problema que pisé antes.
          </p>
        </motion.div>

        <motion.div
          className="aspect-square w-full rounded-2xl bg-bg-elevated"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          aria-hidden
        />
      </div>
    </section>
  );
}

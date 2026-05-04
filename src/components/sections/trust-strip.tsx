"use client";

import { motion } from "motion/react";

const CLAIMS = [
  "Dentro del problema",
  "A Coruña como base",
  "Precio claro",
  "Producto directo",
];

export function TrustStrip() {
  return (
    <section className="relative bg-bg-strip">
      <motion.div
        className="absolute left-0 right-0 top-0 h-px origin-left bg-border-strong"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 0.05, duration: 0.72, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-border-strong"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 0.05, duration: 0.72, ease: [0.76, 0, 0.24, 1] }}
      />

      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-12">
        <div className="mb-6 max-w-2xl">
          <span className="eyebrow">Estudio // Productos</span>
          <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            No hace falta otra reunión.
          </h2>
          <p className="mt-4 max-w-xl text-base text-ink-muted sm:text-lg">
            Si un producto está listo, se ve, se entiende y se puede contratar.
            En Nevoxia no hay horas, discovery ni presupuestos eternos: hay
            herramientas pequeñas para tareas que se repiten todos los días.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-10 gap-y-4 pt-2">
          {CLAIMS.map((claim, i) => (
            <motion.span
              key={claim}
              className="eyebrow text-ink"
              initial={{ x: 18, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                delay: 0.08 * i,
                duration: 0.44,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {claim}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "motion/react";

const PILLARS = [
  {
    eyebrow: "Operador // No observador",
    body: "Israel trabaja donde los problemas aparecen, no donde se presentan.",
  },
  {
    eyebrow: "Precio // Claro",
    body: "Si el producto existe, el cliente debe poder saber cuánto cuesta.",
  },
  {
    eyebrow: "España // Primero",
    body: "Textos, flujos y casos pensados para negocios de aquí.",
  },
  {
    eyebrow: "Producto // Antes que oferta",
    body: "Primero una herramienta que funciona. Después una web que la vende.",
  },
];

export function WhyNevoxia() {
  return (
    <section id="por-que" className="bg-bg-soft px-6 py-32 sm:px-12">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr,1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="lg:sticky lg:top-32 lg:self-start"
        >
          <span className="eyebrow">Por qué // Nevoxia</span>
          <h2 className="font-display mt-3 text-4xl font-extrabold leading-[0.94] tracking-[-0.04em] text-ink sm:text-6xl">
            La pyme no tiene un departamento para probar software.
          </h2>
          <p className="mt-6 max-w-xl text-base text-ink-muted sm:text-lg">
            Un restaurante, una clínica o una peluquería no compran herramientas
            para jugar con dashboards. Compran cuando algo les quita una tarea
            pesada sin meter otra. Nevoxia parte de ahí: menos pasos, menos
            palabras raras y más producto usable.
          </p>
        </motion.div>

        <div className="space-y-10">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.eyebrow}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="border-l-2 border-border-strong pl-6"
            >
              <span className="eyebrow">{p.eyebrow}</span>
              <p className="font-display mt-3 text-2xl font-bold leading-[1.15] tracking-[-0.02em] text-ink sm:text-3xl">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

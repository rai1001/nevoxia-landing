"use client";

import { motion } from "motion/react";

const PILLARS = [
  {
    number: "01",
    title: "Built first, sold second",
    body:
      "Construimos el producto para resolver un problema que sufrimos. Solo después lo abrimos a quien tenga el mismo problema.",
  },
  {
    number: "02",
    title: "Operadores, no consultores",
    body:
      "El fundador es Head Chef en activo. No vendemos teoría sobre digitalización: vendemos lo que ya usamos.",
  },
  {
    number: "03",
    title: "Pyme española, entendida",
    body:
      "Castellano, soporte en horario peninsular, pricing en euros, factura como Dios manda. Sin postureo silicon valley.",
  },
];

export function Approach() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">Cómo trabajamos</span>
          <h2 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-fg sm:text-6xl">
            Tres reglas no negociables.
          </h2>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-3">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
                {p.number}
              </span>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-fg">
                {p.title}
              </h3>
              <p className="mt-4 text-base text-fg-muted">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

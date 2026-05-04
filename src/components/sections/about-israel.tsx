"use client";

import { motion } from "motion/react";

const SIGNALS = [
  "4 Productos",
  "A Coruña",
  "Producto cerrado",
  "Cliente directo",
];

const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

export function AboutIsrael() {
  return (
    <section id="estudio" className="px-6 py-32 sm:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">Estudio // A Coruña</span>
          <h2 className="font-display mt-3 text-4xl font-extrabold leading-[0.94] tracking-[-0.04em] text-ink sm:text-7xl">
            Estudio operativo, no observador.
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr,1fr] lg:items-start">
          <motion.div
            className="space-y-6 text-lg leading-[1.55] text-ink-muted"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.6, ease: REVEAL_EASE }}
          >
            <p>
              Nevoxia es un estudio independiente de software para pyme
              española. No vende horas, ni reuniones, ni propuestas a medida.
              Vende productos cerrados, con precio claro y entrada directa.
            </p>
            <p>
              Cada producto resuelve una tarea concreta y se construye desde
              dentro de un negocio real, no desde una sala de pitch. Reseñas,
              cocina, sala y prospección: lo que afecta al día a día de
              restaurantes, clínicas y peluquerías.
            </p>
            <p>
              Conocemos el dolor de la pyme porque lo tratamos: pedidos que se
              cruzan, reseñas sin responder, hojas de cálculo que nadie acaba
              de mantener, llamadas que llegan en el peor momento. Por eso los
              productos no parten de una hipótesis: parten de una rutina vivida.
            </p>
          </motion.div>

          <motion.div
            className="space-y-2 rounded-3xl border border-border-strong bg-bg-elevated p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6, ease: REVEAL_EASE }}
          >
            <span className="eyebrow">Señales // Estudio</span>
            <ul className="mt-6 divide-y divide-border">
              {SIGNALS.map((s, i) => (
                <li
                  key={s}
                  className="flex items-baseline justify-between py-3 font-mono text-xs uppercase tracking-[0.18em] text-ink"
                >
                  <span className="text-ink-subtle">0{i + 1}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <p className="eyebrow mt-8 text-ink">
              Primero // Dentro &nbsp;·&nbsp; Después // Producto
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "motion/react";

export function CtaBlack() {
  return (
    <section id="contacto" className="bg-bg-anchor px-6 py-32 text-fg-on-anchor">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          className="text-[clamp(3rem,9vw,7rem)] font-bold leading-[0.95] tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          ¿Negocio que mejorar?
        </motion.h2>
        <motion.p
          className="mt-8 text-xl opacity-80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Empieza por ReseaBot.
        </motion.p>
        <motion.a
          href="https://reseabot.es"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-3 rounded-full bg-fg-on-anchor px-8 py-4 font-mono text-sm uppercase tracking-[0.14em] text-bg-anchor transition-transform hover:scale-[1.02]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Ir a ReseaBot
          <span>→</span>
        </motion.a>
      </div>
    </section>
  );
}

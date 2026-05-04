"use client";

import { motion } from "motion/react";

const CTA_EASE = [0.76, 0, 0.24, 1] as const;

export function CtaBlack() {
  return (
    <motion.section
      id="contacto"
      className="bg-bg-anchor text-ink-on-anchor"
      initial={{ y: 72, opacity: 0, clipPath: "inset(10% 0% 0% 0%)" }}
      whileInView={{ y: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: 0.05, duration: 0.9, ease: CTA_EASE }}
    >
      <div className="mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-between px-6 py-20 sm:px-12 sm:py-28">
        <span className="eyebrow text-ink-on-anchor/70">Hecho // En turno</span>

        <motion.h2
          className="font-display mt-12 text-[clamp(3.5rem,11vw,12rem)] font-black leading-[0.84] tracking-[-0.06em]"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.24, duration: 0.7, ease: CTA_EASE }}
        >
          Empieza por las reseñas.
        </motion.h2>

        <div className="mt-12 grid gap-12 sm:grid-cols-[1.1fr,auto] sm:items-end">
          <motion.p
            className="max-w-xl text-lg leading-[1.5] opacity-90 sm:text-xl"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 0.9 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Si hoy tus reseñas se responden tarde, con prisa o con una plantilla
            que no suena a tu negocio, entra en ReseaBot. Conecta Google, recibe
            borradores por WhatsApp y aprueba antes de publicar. Desde 49€/mes.
            Sin reunión de venta.
          </motion.p>

          <motion.div
            className="flex flex-col gap-3 sm:items-end"
            initial={{ scale: 0.94, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              delay: 0.62,
              type: "spring",
              stiffness: 300,
              damping: 22,
              bounce: 0.12,
            }}
          >
            <a
              href="https://reseabot.es"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-ink-on-anchor px-8 py-4 font-mono text-sm font-semibold uppercase tracking-[0.16em] text-bg-anchor transition-transform hover:scale-[1.03]"
            >
              Empezar con ReseaBot
              <span aria-hidden>→</span>
            </a>
            <a
              href="#productos"
              className="inline-flex items-center gap-2 px-2 py-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-ink-on-anchor/80 transition-colors hover:text-ink-on-anchor"
            >
              Ver todos los productos
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

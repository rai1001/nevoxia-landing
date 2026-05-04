"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

export function Products() {
  return (
    <section id="productos" className="px-6 py-32 sm:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">Productos // Nevoxia</span>
          <h2 className="font-display mt-3 text-4xl font-extrabold leading-[0.94] tracking-[-0.04em] text-ink sm:text-7xl">
            Productos con tarea, precio y entrada.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-ink-muted">
            Nevoxia no empaqueta horas. Cada producto tiene una tarea concreta,
            una puerta de entrada y una forma clara de contratarlo. ReseaBot va
            primero porque las reseñas duelen hoy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <ReseabotCard />
          <ChefosCard />
          <RestoosCard />
          <ProspectosCard />
        </div>
      </div>
    </section>
  );
}

type CardWrapProps = {
  href?: string;
  className: string;
  index: number;
  initialScale?: number;
  children: ReactNode;
  external?: boolean;
};

function CardWrap({
  href,
  className,
  index,
  initialScale,
  children,
  external = true,
}: CardWrapProps) {
  const Element = href ? motion.a : motion.div;
  return (
    <Element
      href={href}
      target={href && external ? "_blank" : undefined}
      rel={href && external ? "noopener noreferrer" : undefined}
      className={`group relative flex flex-col rounded-3xl border border-border-strong bg-bg-elevated p-8 transition-colors hover:border-ink sm:p-10 ${className}`}
      initial={{ y: 64, opacity: 0, scale: initialScale ?? 1, filter: "blur(8px)" }}
      whileInView={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
      whileHover={{ y: -6 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        delay: 0.08 * index,
        duration: 0.72,
        ease: REVEAL_EASE,
      }}
    >
      {children}
    </Element>
  );
}

function ReseabotCard() {
  return (
    <CardWrap
      href="https://reseabot.es"
      className="lg:col-span-7 lg:row-span-2"
      index={0}
      initialScale={0.98}
    >
      <span className="eyebrow text-accent">ReseaBot // Reseñas</span>
      <h3 className="font-display mt-6 text-4xl font-extrabold tracking-[-0.04em] text-ink sm:text-6xl">
        Responde reseñas sin sonar a plantilla.
      </h3>
      <p className="mt-6 max-w-xl text-base text-ink-muted sm:text-lg">
        ReseaBot aprende el tono del negocio, prepara respuestas y las manda por
        WhatsApp para aprobar antes de publicar.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="eyebrow">Aprobación // WhatsApp</span>
        <span className="eyebrow">Google // Reseñas</span>
      </div>

      <p className="mt-8 max-w-md text-sm text-ink-subtle">
        Para restaurantes, clínicas y peluquerías.
      </p>

      <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="eyebrow">Planes</span>
          <p className="font-display mt-2 text-3xl font-extrabold tracking-tight text-ink">
            <span className="text-accent">49€</span>
            <span className="text-ink-subtle"> · 99€ · 199€</span>
            <span className="ml-2 text-base font-semibold text-ink-muted">/ mes</span>
          </p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-bg-anchor px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-ink-on-anchor transition-transform group-hover:scale-[1.03]">
          Empezar con ReseaBot
          <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </CardWrap>
  );
}

function ChefosCard() {
  return (
    <CardWrap href="https://chefos.es" className="lg:col-span-5" index={1}>
      <span className="eyebrow">ChefOS // Cocina</span>
      <h3 className="font-display mt-5 text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl">
        Menos Excel en cocina.
      </h3>
      <p className="mt-5 text-base text-ink-muted">
        Fichas, costes, pedidos y rutina de producción para quien está sacando
        servicio, no mirando una hoja desde una oficina.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="eyebrow">Excel // Fuera</span>
      </div>
      <span className="mt-auto inline-flex items-center gap-2 pt-8 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-colors group-hover:text-accent">
        Ver ChefOS
        <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </CardWrap>
  );
}

function RestoosCard() {
  return (
    <CardWrap href="https://restoos.es" className="lg:col-span-5" index={2}>
      <span className="eyebrow">RestoOS // Restaurante</span>
      <h3 className="font-display mt-5 text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl">
        Restaurante completo, sin sistema a trozos.
      </h3>
      <p className="mt-5 text-base text-ink-muted">
        Sala, cocina y decisiones del día en una herramienta que no depende de
        acordarse de qué grupo de WhatsApp tenía el dato.
      </p>
      <span className="mt-auto inline-flex items-center gap-2 pt-8 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-colors group-hover:text-accent">
        Ver RestoOS
        <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </CardWrap>
  );
}

function ProspectosCard() {
  return (
    <CardWrap className="lg:col-span-7" index={3}>
      <div className="flex flex-wrap items-center gap-3">
        <span className="eyebrow">ProspectOS // Prospección</span>
        <span className="eyebrow text-accent-2">Uso interno // Pronto</span>
      </div>
      <h3 className="font-display mt-5 text-2xl font-extrabold tracking-[-0.04em] text-ink sm:text-3xl">
        Prospección con IA, sin llenar el día de ruido.
      </h3>
      <p className="mt-4 max-w-xl text-base text-ink-muted">
        Hoy trabaja dentro de Nevoxia. Saldrá fuera cuando sea lo bastante
        simple para venderse solo.
      </p>
      <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">
        En desarrollo
      </span>
    </CardWrap>
  );
}

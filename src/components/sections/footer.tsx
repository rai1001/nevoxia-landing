"use client";

import { motion } from "motion/react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-bg px-6 pb-12 pt-20 sm:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.p
          className="max-w-2xl text-base text-ink-muted sm:text-lg"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Software hecho desde A Coruña para negocios que mañana vuelven a
          abrir. Productos pequeños, entrada directa y una regla simple:
          primero uso real, después venta.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <FooterColumn title="Productos">
            <FooterLink href="https://reseabot.es" external>ReseaBot</FooterLink>
            <FooterLink href="https://chefos.es" external>ChefOS</FooterLink>
            <FooterLink href="https://restoos.es" external>RestoOS</FooterLink>
            <FooterLink href="#productos">ProspectOS</FooterLink>
          </FooterColumn>

          <FooterColumn title="Estudio">
            <FooterLink href="#por-que">Por qué Nevoxia</FooterLink>
            <FooterLink href="#estudio">El estudio</FooterLink>
            <FooterLink href="mailto:hola@reseabot.es">hola@reseabot.es</FooterLink>
            <FooterLink href="#" disabled>A Coruña, España</FooterLink>
          </FooterColumn>

          <FooterColumn title="Legal">
            <FooterLink href="#" disabled>Privacidad</FooterLink>
            <FooterLink href="#" disabled>Aviso legal</FooterLink>
          </FooterColumn>
        </div>

        <motion.div
          className="mt-20 overflow-hidden"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-display select-none whitespace-nowrap text-[clamp(5rem,18vw,18rem)] font-black leading-[0.85] tracking-[-0.07em] text-ink">
            NEVOXIA
          </p>
        </motion.div>

        <p className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-ink-subtle">
          © {year} Nevoxia · Hecho en turno
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow">{title}</p>
      <ul className="mt-4 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
  external = false,
  disabled = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  disabled?: boolean;
}) {
  if (disabled) {
    return <li className="text-sm text-ink-subtle">{children}</li>;
  }
  return (
    <li>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="text-sm text-ink-muted transition-colors hover:text-ink"
      >
        {children}
      </a>
    </li>
  );
}

"use client";

import { motion } from "motion/react";

const PRODUCTS = ["ReseaBot", "ChefOS", "RestoOS", "ProspectOS"];

export function TrustStrip() {
  return (
    <section className="border-y border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6">
        {PRODUCTS.map((name, i) => (
          <motion.span
            key={name}
            className="font-mono text-sm uppercase tracking-[0.18em] text-fg-muted"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            {name}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

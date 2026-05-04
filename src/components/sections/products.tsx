"use client";

import { motion } from "motion/react";

type Product = {
  number: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  audience: string;
  url: string;
};

const PRODUCTS: Product[] = [
  {
    number: "01",
    name: "ReseaBot",
    category: "Reseñas",
    headline: "Responde reseñas como tú, sin ponerte a escribir.",
    description:
      "Detecta cada reseña nueva, propone una respuesta con la voz real del negocio y la publica cuando das un toque por WhatsApp.",
    audience: "Restaurantes · Clínicas · Peluquerías",
    url: "https://reseabot.es",
  },
  {
    number: "02",
    name: "ChefOS",
    category: "Cocina",
    headline: "Operativa F&B sin Excel.",
    description:
      "Escandallos, inventario FIFO y turnos para chefs que ya están hartos de hojas de cálculo.",
    audience: "Chefs · Operadores F&B",
    url: "https://chefos.es",
  },
  {
    number: "03",
    name: "RestoOS",
    category: "Restaurante",
    headline: "Sistema completo para tu restaurante.",
    description:
      "POS, reservas, billing y reporting en un solo sistema, pensado para grupos de restauración.",
    audience: "Grupos de restauración",
    url: "https://restoos.es",
  },
];

export function Products() {
  return (
    <section id="productos" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">Productos</span>
          <h2 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-fg sm:text-6xl">
            Software para sectores que conocemos.
          </h2>
        </motion.div>

        <div className="space-y-12">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const isEven = index % 2 === 0;
  return (
    <motion.a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-border bg-bg-elevated p-8 transition-colors hover:border-border-strong sm:p-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 18,
      }}
    >
      <div
        className={`flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-12 ${
          isEven ? "" : "sm:flex-row-reverse"
        }`}
      >
        <div className="flex-1">
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
              {product.number} // {product.category}
            </span>
          </div>
          <h3 className="text-3xl font-bold tracking-tight text-fg sm:text-5xl">
            {product.name}
          </h3>
          <p className="mt-4 max-w-xl text-lg text-fg-muted">{product.headline}</p>
          <p className="mt-6 max-w-xl text-base text-fg-subtle">
            {product.description}
          </p>
          <p className="eyebrow mt-6">{product.audience}</p>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-fg-muted transition-colors group-hover:text-fg">
          <span>Visitar</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </motion.a>
  );
}

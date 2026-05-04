@AGENTS.md

# Nevoxia Landing

Landing pública del estudio Nevoxia. Sirve como página paraguas que agrupa los productos SaaS de Israel y deriva tráfico a la web de cada producto.

## Qué es Nevoxia

Estudio de software fundado por Israel (Head Chef en Eurostars + tech entrepreneur, A Coruña). NO es agencia de servicios a medida — es estudio con productos cerrados que se contratan en self-serve. La legitimidad de Nevoxia es que construye software para sectores que su fundador conoce de primera mano (hostelería, F&B, pyme española).

Productos visibles que enlaza esta landing:
- ReseaBot (reseabot.es) — Responde reseñas de Google con la voz real del negocio. Producto prioritario.
- ChefOS (chefos.es) — Operativa F&B sin Excel.
- RestoOS (restoos.es) — Sistema completo de restaurante.
- ProspectOS — Prospección IA, uso interno + venta futura.

## Stack

- Next.js 16.2.4 + TypeScript + App Router + Turbopack
- Tailwind v4 (`@tailwindcss/postcss`)
- `motion` ^12.38 (sucesor de framer-motion) para animaciones nivel byfrontyard.com
- Deploy: Vercel desde GitHub
- Dominio: `nevoxia.es` (Arsys cuenta 660611, DNS apunta a Vercel vía A/CNAME)

## Reglas críticas de diseño

### Modo claro/oscuro

**Light mode es el default. Toggle dark/light obligatorio.**

- Audiencia objetivo: pyme española mainstream (restaurantes, clínicas, peluquerías). NO developers, NO early adopters tech. Dark mode tiene asociación dev/insider que no resuena con esa audiencia.
- Toggle visible en el header. Respeta `prefers-color-scheme` del SO en primera visita. Persiste elección en `localStorage`.
- Implementación: CSS variables o Tailwind v4 dark variant. **Nunca colores hardcodeados** — todo a través de variables que cambian con el modo.
- Coherente con la referencia visual byfrontyard.com (también light por defecto, fondo `#F5F5F5`).

### Tono y copy

- Español primera lengua. Frases hero en inglés solo si el tono lo pide y se justifica.
- Tono pyme española mainstream. NO suena a deck de YC, NO suena a agencia de Madrid, NO suena a founder de Berlín.
- Cero generalidades agencia: "transformación digital", "soluciones a medida", "potenciamos tu negocio" — desterrado.
- Cero emojis en el copy de la landing.

### Inspiración visual

byfrontyard.com — estilo light asimétrico, tipografía bold enorme para manifiestos, microcopy CAPS con tracking ancho (`PRODUCTO // CATEGORIA`), bloques negros como ancla de contraste, animaciones Framer Motion (delays escalonados, springs, parallax, scroll-driven).

Diferencias deliberadas con Front Yard:
- Nevoxia NO vende servicios, vende productos cerrados.
- Nevoxia es ES-first.
- Nevoxia tiene legitimidad operador real (Head Chef), no postureo creativo agencia.

## Reglas de código

- Respetar el alias `@/*` en imports.
- Componentes en `src/app/` siguiendo convenciones App Router.
- Server components por defecto, client components solo donde haga falta interactividad o `motion`.
- Tailwind v4 sin `tailwind.config.js` — configuración en CSS via `@theme`.
- Imágenes y assets de productos en `public/`. Optimizar con `next/image`.
- Variables de entorno en `.env.local` (no commitear).

## Cosas que NO hacer

- NO añadir dependencias sin necesidad clara.
- NO sustituir el toggle dark/light por solo dark o solo light "porque queda mejor". La regla es operativa, no estética.
- NO hardcodear colores. Si añades un color nuevo, va al sistema de variables.
- NO copiar contenido de Front Yard literalmente. Inspiración sí, plagio no.
- NO crear formularios "pide propuesta agencia", "agenda llamada", "pricing servicios". Esta landing deriva a productos, no vende consultoría.
- NO promesas que no podemos cumplir hoy (clientes ficticios, métricas inventadas, casos de éxito que no existen).

## Repos relacionados

- ReseaBot app + landing: `C:\APLICACIONES\resenabot`
- ReseaBot Growth Engine: `C:\APLICACIONES\ReseaBot Growth Engine v1`
- ProspectOS: `C:\APLICACIONES\ProspectOS`
- ChefOS v3: `C:\APLICACIONES\ChefOsv3`
- RestoOS: `C:\RestoOsvscode`
- Brand assets ReseaBot: `C:\APLICACIONES\brand-reseabot`

## Decisiones tomadas

- 2026-05-04 — Light mode default + toggle obligatorio. Memoria: `feedback_diseno_para_clientes.md`.
- 2026-05-04 — Nevoxia es estudio paraguas **visible y comercial**, no invisible. La nota antigua `Nevoxio - Rol paraguas invisible.md` queda obsoleta y debe actualizarse en bóveda.
- 2026-05-04 — Inspiración visual cerrada: byfrontyard.com.
- 2026-05-04 — Stack cerrado: Next.js 16 + Tailwind v4 + motion. NO se cambia sin revisar.

## Cómo arrancar

```bash
npm run dev   # localhost:3000, Turbopack, HMR
npm run build # producción
npm run lint  # ESLint
```

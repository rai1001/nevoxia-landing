import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso legal — Nevoxia",
  description:
    "Información legal del titular del sitio nevoxia.es conforme a la LSSI-CE.",
};

export default function AvisoLegalPage() {
  return (
    <article className="prose-nevoxia">
      <span className="eyebrow">Legal // Aviso</span>
      <h1 className="font-display mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-6xl">
        Aviso legal.
      </h1>
      <p className="mt-4 text-sm text-ink-subtle">Última actualización: 4 de mayo de 2026.</p>

      <section className="mt-12 space-y-6 text-base text-ink-muted">
        <p>
          En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la
          Sociedad de la Información y de Comercio Electrónico (LSSI-CE) y demás
          normativa aplicable, se informa de los siguientes datos sobre el
          titular del sitio web <strong className="text-ink">nevoxia.es</strong>.
        </p>

        <h2 className="font-display pt-6 text-2xl font-bold tracking-tight text-ink">
          1. Titular del sitio
        </h2>
        <ul className="space-y-2">
          <li>Titular: <strong className="text-ink">Israel Méndez Vázquez</strong></li>
          <li>NIF: <span className="font-mono text-sm text-ink-subtle">[PENDIENTE — añadir antes de publicar]</span></li>
          <li>Domicilio a efectos de notificaciones: <span className="font-mono text-sm text-ink-subtle">[PENDIENTE — A Coruña, dirección completa]</span></li>
          <li>Correo electrónico: <a className="text-accent hover:underline" href="mailto:hola@reseabot.es">hola@reseabot.es</a></li>
          <li>
            Nombre comercial: <strong className="text-ink">Nevoxia</strong> (estudio
            de software, sin razón social independiente).
          </li>
        </ul>

        <h2 className="font-display pt-6 text-2xl font-bold tracking-tight text-ink">
          2. Objeto
        </h2>
        <p>
          El presente sitio tiene como finalidad presentar la actividad del
          estudio Nevoxia y dar acceso a los productos digitales que desarrolla
          (ReseaBot, ChefOS, RestoOS y ProspectOS). Cada producto cuenta con su
          propia web, condiciones y aviso legal, accesibles desde sus
          respectivos dominios.
        </p>

        <h2 className="font-display pt-6 text-2xl font-bold tracking-tight text-ink">
          3. Condiciones de uso
        </h2>
        <p>
          El acceso y uso de nevoxia.es es gratuito. El usuario se compromete a
          utilizar el sitio conforme a la ley, a la moral y al orden público,
          absteniéndose de cualquier conducta que pueda dañar la imagen, los
          intereses o los derechos del titular o de terceros.
        </p>

        <h2 className="font-display pt-6 text-2xl font-bold tracking-tight text-ink">
          4. Propiedad intelectual e industrial
        </h2>
        <p>
          Todos los contenidos del sitio (textos, gráficos, código,
          ilustraciones, marcas, logotipos, vídeos y demás material) son
          propiedad del titular o se utilizan con la correspondiente
          autorización. Queda prohibida su reproducción, distribución,
          comunicación pública o transformación sin autorización expresa.
        </p>
        <p>
          Las marcas <strong className="text-ink">Nevoxia</strong>,{" "}
          <strong className="text-ink">ReseaBot</strong>,{" "}
          <strong className="text-ink">ChefOS</strong> y{" "}
          <strong className="text-ink">RestoOS</strong> y sus logotipos son
          propiedad del titular.
        </p>

        <h2 className="font-display pt-6 text-2xl font-bold tracking-tight text-ink">
          5. Exclusión de responsabilidad
        </h2>
        <p>
          El titular no garantiza la disponibilidad continuada del sitio ni la
          ausencia de errores. Se reserva el derecho a modificar, suspender o
          interrumpir, total o parcialmente, el acceso al sitio sin previo
          aviso. No se hace responsable de los enlaces a sitios de terceros
          accesibles desde nevoxia.es.
        </p>

        <h2 className="font-display pt-6 text-2xl font-bold tracking-tight text-ink">
          6. Legislación aplicable y jurisdicción
        </h2>
        <p>
          Las presentes condiciones se rigen por la legislación española.
          Para cualquier controversia derivada del uso del sitio, las partes se
          someten a los Juzgados y Tribunales de A Coruña, salvo que la ley
          imponga otro fuero.
        </p>

        <h2 className="font-display pt-6 text-2xl font-bold tracking-tight text-ink">
          7. Contacto
        </h2>
        <p>
          Para cualquier consulta sobre este aviso legal, puedes escribir a{" "}
          <a className="text-accent hover:underline" href="mailto:hola@reseabot.es">
            hola@reseabot.es
          </a>
          .
        </p>
      </section>
    </article>
  );
}

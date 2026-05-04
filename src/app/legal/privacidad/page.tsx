import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad — Nevoxia",
  description:
    "Política de privacidad y tratamiento de datos personales del sitio nevoxia.es conforme al RGPD.",
};

export default function PrivacidadPage() {
  return (
    <article>
      <span className="eyebrow">Legal // Privacidad</span>
      <h1 className="font-display mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-6xl">
        Política de privacidad.
      </h1>
      <p className="mt-4 text-sm text-ink-subtle">
        Última actualización: 4 de mayo de 2026.
      </p>

      <section className="mt-12 space-y-6 text-base text-ink-muted">
        <p>
          Esta política describe cómo se tratan los datos personales recogidos a
          través de <strong className="text-ink">nevoxia.es</strong> conforme al
          Reglamento (UE) 2016/679 (RGPD), la Ley Orgánica 3/2018 de Protección
          de Datos Personales y garantía de los derechos digitales (LOPDGDD) y
          demás normativa aplicable.
        </p>

        <h2 className="font-display pt-6 text-2xl font-bold tracking-tight text-ink">
          1. Responsable del tratamiento
        </h2>
        <ul className="space-y-2">
          <li>Responsable: <strong className="text-ink">Israel Méndez Vázquez</strong></li>
          <li>NIF: <span className="font-mono text-sm text-ink-subtle">[PENDIENTE — añadir antes de publicar]</span></li>
          <li>Domicilio: <span className="font-mono text-sm text-ink-subtle">[PENDIENTE — A Coruña, dirección completa]</span></li>
          <li>Correo electrónico: <a className="text-accent hover:underline" href="mailto:hola@reseabot.es">hola@reseabot.es</a></li>
        </ul>

        <h2 className="font-display pt-6 text-2xl font-bold tracking-tight text-ink">
          2. Datos que recogemos
        </h2>
        <p>
          Esta web actúa como página corporativa. <strong className="text-ink">Actualmente
          no contiene formularios de contacto, registro ni cualquier mecanismo
          de recogida directa de datos personales</strong>.
        </p>
        <p>
          Si decides escribir voluntariamente al correo de contacto
          <a className="text-accent hover:underline" href="mailto:hola@reseabot.es">
            {" "}hola@reseabot.es
          </a>
          , trataremos tu dirección de correo y el contenido de tu mensaje con
          el único fin de responder a tu consulta. La base legal es el interés
          legítimo del responsable (art. 6.1.f RGPD).
        </p>

        <h2 className="font-display pt-6 text-2xl font-bold tracking-tight text-ink">
          3. Finalidad del tratamiento
        </h2>
        <ul className="list-inside list-disc space-y-2">
          <li>Atender consultas o solicitudes recibidas por correo electrónico.</li>
          <li>Enviar respuestas relacionadas con los productos del estudio.</li>
          <li>
            Cumplir con las obligaciones legales aplicables al responsable.
          </li>
        </ul>

        <h2 className="font-display pt-6 text-2xl font-bold tracking-tight text-ink">
          4. Plazo de conservación
        </h2>
        <p>
          Los datos se conservarán durante el tiempo necesario para resolver la
          consulta y, posteriormente, durante los plazos legales mínimos
          aplicables. En cualquier momento puedes solicitar su supresión.
        </p>

        <h2 className="font-display pt-6 text-2xl font-bold tracking-tight text-ink">
          5. Destinatarios y encargados del tratamiento
        </h2>
        <p>
          Tus datos no se ceden a terceros salvo obligación legal. Para la
          prestación del servicio, este sitio se aloja en infraestructura de{" "}
          <strong className="text-ink">Vercel Inc.</strong> (proveedor de
          hosting), cuyas garantías de seguridad y transferencia internacional
          de datos están documentadas en su política de privacidad.
        </p>
        <p>
          El correo de contacto se gestiona a través del servicio de correo
          asociado al dominio reseabot.es (proveedor: Arsys Internet S.L.).
        </p>

        <h2 className="font-display pt-6 text-2xl font-bold tracking-tight text-ink">
          6. Derechos del usuario
        </h2>
        <p>
          Puedes ejercer en cualquier momento los derechos de acceso,
          rectificación, supresión, oposición, limitación del tratamiento y
          portabilidad de tus datos personales. Para hacerlo, escribe a{" "}
          <a className="text-accent hover:underline" href="mailto:hola@reseabot.es">
            hola@reseabot.es
          </a>{" "}
          indicando el derecho que deseas ejercer.
        </p>
        <p>
          Si consideras que el tratamiento de tus datos no se ajusta a la
          normativa, también puedes presentar una reclamación ante la Agencia
          Española de Protección de Datos (
          <a
            className="text-accent hover:underline"
            href="https://www.aepd.es"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.aepd.es
          </a>
          ).
        </p>

        <h2 className="font-display pt-6 text-2xl font-bold tracking-tight text-ink">
          7. Cookies
        </h2>
        <p>
          Este sitio <strong className="text-ink">no utiliza cookies de
          seguimiento, analítica ni publicidad</strong>. Únicamente puede
          almacenar en tu dispositivo una preferencia local
          (<code className="font-mono text-sm">nevoxia:theme</code>) para
          recordar el modo claro u oscuro elegido. Esta preferencia es estricta-
          mente técnica, no se envía a ningún servidor y puedes borrarla en
          cualquier momento desde tu navegador.
        </p>

        <h2 className="font-display pt-6 text-2xl font-bold tracking-tight text-ink">
          8. Cambios en la política
        </h2>
        <p>
          Podemos modificar esta política para adaptarla a cambios legales o de
          servicio. La fecha de última actualización aparece al inicio del
          documento.
        </p>
      </section>
    </article>
  );
}

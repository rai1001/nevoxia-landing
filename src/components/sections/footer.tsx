export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-fg-muted">
            Nevoxia
          </p>
          <p className="mt-3 text-sm text-fg-subtle">
            Estudio de software desde A Coruña.
          </p>
        </div>

        <div>
          <p className="eyebrow">Productos</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href="https://reseabot.es"
                className="text-fg-muted transition-colors hover:text-fg"
                target="_blank"
                rel="noopener noreferrer"
              >
                ReseaBot
              </a>
            </li>
            <li>
              <a
                href="https://chefos.es"
                className="text-fg-muted transition-colors hover:text-fg"
                target="_blank"
                rel="noopener noreferrer"
              >
                ChefOS
              </a>
            </li>
            <li>
              <a
                href="https://restoos.es"
                className="text-fg-muted transition-colors hover:text-fg"
                target="_blank"
                rel="noopener noreferrer"
              >
                RestoOS
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Contacto</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href="mailto:hola@reseabot.es"
                className="text-fg-muted transition-colors hover:text-fg"
              >
                hola@reseabot.es
              </a>
            </li>
            <li className="text-fg-subtle">A Coruña, España</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Legal</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="text-fg-subtle">© {year} Nevoxia</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

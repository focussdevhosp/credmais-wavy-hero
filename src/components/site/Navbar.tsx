import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/credmais-logo.asset.json";

const links = [
  { to: "/", label: "Início" },
  { to: "/antecipacao-de-recebiveis", label: "Antecipação" },
  { to: "/boleto-garantido", label: "Boleto Garantido" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header
      data-nav-root
      className="fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur-xl"
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logoAsset.url}
            alt="Credmais Securitizadora"
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-full px-5 py-2.5 text-sm font-medium text-ink-soft transition hover:bg-secondary hover:text-ink"
              activeProps={{ className: "bg-primary/10 text-ink" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contato"
            className="ml-4 inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-ink/90"
          >
            Falar com consultor
          </Link>
        </nav>

        <button
          className="md:hidden rounded-full border border-border p-2.5 text-ink-soft transition hover:bg-secondary hover:text-ink"
          onClick={() => setOpen((s) => !s)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container-page flex flex-col gap-1 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-secondary hover:text-ink"
                activeProps={{ className: "bg-primary/10 text-ink" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-ink/90"
            >
              Falar com consultor
            </Link>
          </div>
        </div>
      )}

      {/* Onda inferior */}
      <svg
        aria-hidden
        viewBox="0 0 1440 24"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 -bottom-6 h-6 w-full text-background"
      >
        <path
          fill="currentColor"
          d="M0,0 C360,24 720,24 1080,0 C1260,-12 1380,-12 1440,0 L1440,24 L0,24 Z"
        />
      </svg>
    </header>
  );
}

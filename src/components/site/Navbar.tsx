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
      className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl"
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoAsset.url} alt="Credmais Securitizadora" className="h-8 w-auto" />
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition hover:bg-secondary hover:text-ink"
              activeProps={{ className: "bg-secondary text-ink" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contato"
            className="ml-2 inline-flex items-center rounded-full bg-ink px-4 py-2 text-sm font-medium text-background transition hover:bg-ink/90"
          >
            Falar com consultor
          </Link>
        </nav>
        <button
          className="md:hidden rounded-full border border-border p-2"
          onClick={() => setOpen((s) => !s)}
          aria-label="Menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-page flex flex-col gap-1 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink-soft hover:bg-secondary hover:text-ink"
                activeProps={{ className: "bg-secondary text-ink" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

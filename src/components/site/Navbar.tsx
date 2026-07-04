import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-nav-root
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Cápsula de vidro */}
        <div
          className={[
            "relative flex items-center justify-between rounded-2xl border px-4 py-3 md:px-6 md:py-4",
            "backdrop-blur-xl transition-all duration-300",
            scrolled
              ? "border-border/60 bg-background/85 shadow-[0_12px_40px_-12px_rgba(15,42,30,0.18)]"
              : "border-white/50 bg-background/70 shadow-[0_8px_32px_-16px_rgba(15,42,30,0.10)]",
          ].join(" ")}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Credmais Securitizadora"
              className="h-9 w-auto md:h-10"
            />
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.24em] text-ink-soft sm:block">
              Securitizadora
            </span>
          </Link>

          {/* Links */}
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="group relative py-1 text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-primary"
                activeProps={{ className: "!text-primary" }}
              >
                {l.label}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100 group-[.active]:scale-x-100"
                />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <Link
              to="/contato"
              className="hidden btn-cta-base btn-cta-dark rounded-xl px-5 py-2.5 md:inline-flex"
            >
              Simular agora
            </Link>

            <button
              className="rounded-xl border border-border bg-background/60 p-2.5 text-ink-soft transition hover:bg-secondary hover:text-ink lg:hidden"
              onClick={() => setOpen((s) => !s)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Linha decorativa sob a cápsula */}
        <div
          aria-hidden
          className="mx-auto mt-1 h-px w-[70%] bg-gradient-to-r from-transparent via-primary/25 to-transparent"
        />

        {/* Menu mobile */}
        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-border/60 bg-background/95 shadow-[0_16px_48px_-16px_rgba(15,42,30,0.18)] backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-1 p-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-secondary hover:text-ink"
                  activeProps={{ className: "bg-primary/10 !text-primary" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contato"
                onClick={() => setOpen(false)}
                className="mt-2 btn-cta-base btn-cta-dark rounded-xl px-5 py-2.5"
              >
                Simular agora
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

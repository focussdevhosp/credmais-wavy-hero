import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoAsset from "@/assets/credmais-logo.asset.json";

const mainLinks = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

const productLinks = [
  { to: "/antecipacao-de-recebiveis", label: "Antecipação de Recebíveis", desc: "Transforme vendas a prazo em caixa hoje." },
  { to: "/boleto-garantido", label: "Boleto Garantido", desc: "Recebimento garantido, sem risco de inadimplência." },
  { to: "/consultoria", label: "Consultoria", desc: "Estruturação financeira sob medida." },
  { to: "/crediario", label: "Crediário", desc: "Ofereça parcelamento ao seu cliente final." },
  { to: "/gestao-de-contas", label: "Gestão de Contas", desc: "Controle e conciliação do seu fluxo." },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openProducts = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProductsOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setProductsOpen(false), 120);
  };

  return (
    <header
      data-nav-root
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div
          className={[
            "relative flex items-center justify-between rounded-2xl border px-4 py-3 md:px-6 md:py-4",
            "backdrop-blur-xl transition-all duration-300",
            scrolled
              ? "border-border/60 bg-background/85 shadow-[0_12px_40px_-12px_rgba(15,42,30,0.18)]"
              : "border-white/50 bg-background/70 shadow-[0_8px_32px_-16px_rgba(15,42,30,0.10)]",
          ].join(" ")}
        >
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

          <nav className="hidden items-center gap-8 lg:flex">
            <Link
              to="/"
              activeOptions={{ exact: true }}
              className="group relative py-1 text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-primary"
              activeProps={{ className: "!text-primary" }}
            >
              Início
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
            </Link>

            {/* Dropdown Soluções */}
            <div
              className="relative"
              onMouseEnter={openProducts}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                onClick={() => setProductsOpen((s) => !s)}
                className="group inline-flex items-center gap-1 py-1 text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-primary"
                aria-expanded={productsOpen}
                aria-haspopup="menu"
              >
                Soluções
                <ChevronDown
                  className={[
                    "h-3.5 w-3.5 transition-transform duration-300",
                    productsOpen ? "rotate-180" : "",
                  ].join(" ")}
                />
              </button>

              {productsOpen && (
                <div
                  role="menu"
                  onMouseEnter={openProducts}
                  onMouseLeave={scheduleClose}
                  className="absolute left-1/2 top-full z-50 mt-3 w-[380px] -translate-x-1/2 overflow-hidden rounded-2xl border border-border/60 bg-background/95 p-2 shadow-[0_16px_48px_-16px_rgba(15,42,30,0.22)] backdrop-blur-xl"
                >
                  {productLinks.map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      onClick={() => setProductsOpen(false)}
                      className="group flex flex-col gap-0.5 rounded-xl px-3 py-2.5 transition-colors hover:bg-secondary"
                      activeProps={{ className: "bg-primary/10" }}
                    >
                      <span className="text-sm font-semibold text-ink group-hover:text-primary">
                        {p.label}
                      </span>
                      <span className="text-xs leading-snug text-ink-soft">
                        {p.desc}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {mainLinks
              .filter((l) => l.to !== "/")
              .map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="group relative py-1 text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-primary"
                  activeProps={{ className: "!text-primary" }}
                >
                  {l.label}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100"
                  />
                </Link>
              ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contato"
              className="hidden rounded-xl bg-ink px-5 py-2.5 text-sm font-semibold text-background shadow-[0_10px_24px_-10px_rgba(15,42,30,0.55)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-ink/90 active:scale-[0.98] md:inline-flex"
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

        <div
          aria-hidden
          className="mx-auto mt-1 h-px w-[70%] bg-gradient-to-r from-transparent via-primary/25 to-transparent"
        />

        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-border/60 bg-background/95 shadow-[0_16px_48px_-16px_rgba(15,42,30,0.18)] backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-1 p-3">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-secondary hover:text-ink"
                activeProps={{ className: "bg-primary/10 !text-primary" }}
              >
                Início
              </Link>

              <button
                type="button"
                onClick={() => setMobileProductsOpen((s) => !s)}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium text-ink-soft hover:bg-secondary hover:text-ink"
              >
                Soluções
                <ChevronDown
                  className={[
                    "h-4 w-4 transition-transform",
                    mobileProductsOpen ? "rotate-180" : "",
                  ].join(" ")}
                />
              </button>
              {mobileProductsOpen && (
                <div className="ml-2 flex flex-col gap-0.5 border-l border-border pl-3">
                  {productLinks.map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      onClick={() => {
                        setOpen(false);
                        setMobileProductsOpen(false);
                      }}
                      className="rounded-lg px-3 py-2 text-sm text-ink-soft hover:bg-secondary hover:text-ink"
                      activeProps={{ className: "bg-primary/10 !text-primary" }}
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              )}

              {mainLinks
                .filter((l) => l.to !== "/")
                .map((l) => (
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
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-ink px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-ink/90"
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

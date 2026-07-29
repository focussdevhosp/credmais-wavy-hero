import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoAsset from "@/assets/credmais-logo.png.asset.json";


const mainLinks = [
  { to: "/", label: "INÍCIO" },
  { to: "/sobre", label: "SOBRE" },
  { to: "/contato", label: "CONTATO" },
] as const;

const productLinks = [
  { to: "/antecipacao-de-recebiveis", label: "Antecipação de Recebíveis", desc: "Transforme vendas a prazo em caixa hoje." },
  { to: "/boleto-garantido", label: "Boleto Garantido", desc: "Recebimento garantido, sem risco de inadimplência." },
  { to: "/consultoria", label: "Consultoria", desc: "Estruturação financeira sob medida." },
  { to: "/crediario", label: "Crediário", desc: "Ofereça parcelamento ao seu cliente final." },
  { to: "/gestao-de-contas", label: "Gestão de Contas", desc: "Controle e conciliação do seu fluxo." },
] as const;

const navLinkBase = [
  "relative py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white/80",
  "transition-colors duration-200 hover:text-[#e9f0fa]",
].join(" ");

const navLinkActive = "!text-[#e9f0fa]";

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
            "relative flex items-center justify-between rounded-full border px-2 py-2 md:px-3 md:py-2.5",
            "backdrop-blur-xl transition-all duration-300",
            scrolled
              ? "border-white/20 bg-[#142946]/85 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)]"
              : "border-white/25 bg-[#142946]/70 shadow-[0_8px_32px_-16px_rgba(0,0,0,0.25)]",
          ].join(" ")}
        >
          {/* Logo transparente */}
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2 rounded-full px-3 py-1.5 md:px-4 md:py-2"
          >
            <img
              src={logoAsset.url}
              alt="Credmais Securitizadora"
              className="h-7 w-auto md:h-8"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            <Link
              to="/"
              activeOptions={{ exact: true }}
              className={navLinkBase}
              activeProps={{ className: navLinkActive }}
            >
              INÍCIO
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
                className={[
                  navLinkBase,
                  "inline-flex items-center gap-1.5",
                ].join(" ")}
                aria-expanded={productsOpen}
                aria-haspopup="menu"
              >
                SOLUÇÕES
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
                  className="absolute left-1/2 top-full z-50 mt-4 w-[380px] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/15 bg-[#142946]/95 p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
                >
                  {productLinks.map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      onClick={() => setProductsOpen(false)}
                      className="group flex flex-col gap-0.5 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/10"
                      activeProps={{ className: "bg-[#e9f0fa]/10" }}
                    >
                      <span className="text-sm font-semibold text-white group-hover:text-[#e9f0fa]">
                        {p.label}
                      </span>
                      <span className="text-xs leading-snug text-white/60">
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
                  className={navLinkBase}
                  activeProps={{ className: navLinkActive }}
                >
                  {l.label}
                </Link>
              ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contato"
              className="hidden items-center justify-center rounded-full bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[#142946] shadow-[0_10px_28px_-12px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-white/90 active:scale-[0.98] md:inline-flex"
            >
              Simular agora
            </Link>

            <button
              className="rounded-full border border-white/20 bg-white/10 p-2.5 text-white transition hover:bg-white/20 lg:hidden"
              onClick={() => setOpen((s) => !s)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-white/15 bg-[#142946]/95 shadow-[0_16px_48px_-16px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-1 p-3">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-bold uppercase tracking-wider text-white/80 hover:bg-white/10 hover:text-[#e9f0fa]"
                activeProps={{ className: "bg-[#e9f0fa]/10 !text-[#e9f0fa]" }}
              >
                INÍCIO
              </Link>

              <button
                type="button"
                onClick={() => setMobileProductsOpen((s) => !s)}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-bold uppercase tracking-wider text-white/80 hover:bg-white/10 hover:text-[#e9f0fa]"
              >
                SOLUÇÕES
                <ChevronDown
                  className={[
                    "h-4 w-4 transition-transform",
                    mobileProductsOpen ? "rotate-180" : "",
                  ].join(" ")}
                />
              </button>
              {mobileProductsOpen && (
                <div className="ml-2 flex flex-col gap-0.5 border-l border-white/15 pl-3">
                  {productLinks.map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      onClick={() => {
                        setOpen(false);
                        setMobileProductsOpen(false);
                      }}
                      className="rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
                      activeProps={{ className: "bg-[#e9f0fa]/10 !text-[#e9f0fa]" }}
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
                    className="rounded-lg px-3 py-2.5 text-sm font-bold uppercase tracking-wider text-white/80 hover:bg-white/10 hover:text-[#e9f0fa]"
                    activeProps={{ className: "bg-[#e9f0fa]/10 !text-[#e9f0fa]" }}
                  >
                    {l.label}
                  </Link>
                ))}

              <Link
                to="/contato"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-[#142946] transition hover:bg-white/90"
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


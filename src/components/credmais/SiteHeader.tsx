import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  CONTACT_WHATSAPP_URL,
  LOGO_IMAGE,
  solutionPath,
  solutions,
  whatsappLink,
} from "@/lib/site-data";

const primaryLinks = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname }) || "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const solutionsActive = solutions.some((item) => pathname === `/${item.slug}`);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || mobileOpen
          ? "bg-[#071A33]/95 shadow-[0_10px_40px_-24px_rgba(7,26,51,0.9)] backdrop-blur-xl"
          : "bg-transparent",
      )}
      onMouseLeave={() => setMegaOpen(false)}
    >
      <div className="container-page">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
          <Link to="/" className="flex min-w-0 items-center" aria-label="Credmais — página inicial">
            <img
              src={LOGO_IMAGE}
              alt="Credmais Securitizadora"
              className={cn(
                "w-auto object-contain transition-all duration-500",
                scrolled ? "h-10 md:h-12" : "h-12 md:h-16",
              )}
            />
          </Link>

          {/* navegação desktop */}
          <nav className="hidden items-center justify-center gap-1 lg:flex" aria-label="Navegação principal">
            <HeaderLink to="/" label="Início" active={pathname === "/"} />

            <div className="relative" onMouseEnter={() => setMegaOpen(true)}>
              <button
                type="button"
                onClick={() => setMegaOpen((v) => !v)}
                aria-expanded={megaOpen}
                aria-haspopup="true"
                className={cn(
                  "relative inline-flex min-h-11 items-center gap-1.5 rounded-full px-5 py-2 text-[13px] font-semibold tracking-wide transition-all duration-300",
                  solutionsActive 
                    ? "text-[#C7A96B] after:absolute after:bottom-2 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-[#C7A96B]" 
                    : "text-white/70 hover:bg-white/5 hover:text-white",
                  megaOpen && "bg-white/10 text-white"
                )}
              >
                Soluções
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", megaOpen && "rotate-180")} />
              </button>

              {megaOpen ? (
                <div className="absolute left-1/2 top-full w-[min(92vw,720px)] -translate-x-1/2 pt-4">
                  <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#071A33]/90 p-6 shadow-card backdrop-blur-2xl">
                    <p className="eyebrow">Soluções Credmais</p>
                    <div className="mt-5 grid gap-2 sm:grid-cols-2">
                      {solutions.map((solution) => {
                        const Icon = solution.icon;
                        return (
                          <Link
                            key={solution.slug}
                            to={solutionPath(solution.slug)}
                            className="group flex items-start gap-4 rounded-2xl p-4 transition-colors hover:bg-white/5"
                          >
                            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/5 text-[#C7A96B] transition-colors group-hover:bg-[#C7A96B] group-hover:text-[#071A33]">
                              <Icon className="h-5 w-5" />
                            </span>
                            <span className="min-w-0">
                              <strong className="block text-sm font-semibold text-white">{solution.title}</strong>
                              <span className="mt-1 block text-xs leading-relaxed text-white/55">{solution.summary}</span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <HeaderLink to="/sobre" label="Sobre" active={pathname === "/sobre"} />
            <HeaderLink to="/contato" label="Contato" active={pathname === "/contato"} />
          </nav>

          <div className="flex items-center justify-end gap-2">
            <a
              href={whatsappLink("Olá, Credmais! Quero simular uma operação.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-11 items-center gap-2 rounded-full bg-[#C7A96B] px-6 text-[12px] font-bold uppercase tracking-[0.1em] text-[#071A33] shadow-[0_8px_20px_-8px_rgba(199,169,107,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_24px_-8px_rgba(255,255,255,0.4)] lg:inline-flex"
            >
              Simular agora
              <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
              className="grid size-11 place-items-center rounded-full border border-white/20 text-white lg:hidden"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* menu mobile */}
      {mobileOpen ? (
        <div className="max-h-[calc(100dvh-88px)] overflow-y-auto border-t border-white/10 bg-[#071A33] pb-10 lg:hidden">
          <div className="container-page pt-6">
            <nav className="grid gap-1" aria-label="Navegação mobile">
              {primaryLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-2xl px-4 py-4 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <p className="eyebrow mt-6 px-4">Soluções</p>
            <nav className="mt-3 grid gap-1" aria-label="Soluções">
              {solutions.map((solution) => {
                const Icon = solution.icon;
                return (
                  <Link
                    key={solution.slug}
                    to={solutionPath(solution.slug)}
                    className="flex items-center gap-3 rounded-2xl px-4 py-4 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-[#C7A96B]" />
                    {solution.title}
                  </Link>
                );
              })}
            </nav>

            <a
              href={CONTACT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#C7A96B] px-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#071A33]"
            >
              Falar no WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function HeaderLink({ to, label, active }: { to: string; label: string; active: boolean }) {
  return (
    <Link
      to={to}
      className={cn(
        "relative inline-flex min-h-11 items-center rounded-full px-5 py-2 text-[13px] font-semibold tracking-wide transition-all duration-300",
        active 
          ? "text-[#C7A96B] after:absolute after:bottom-2 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-[#C7A96B]" 
          : "text-white/70 hover:bg-white/5 hover:text-white",
      )}
    >
      {label}
    </Link>
  );
}

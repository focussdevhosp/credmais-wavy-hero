import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "@/assets/hero-woman-orange.webp.asset.json";

gsap.registerPlugin(ScrollTrigger);

const H1_LINES = ["Antecipe recebíveis", "com a segurança de", "uma securitizadora."];

export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const nav = document.querySelector<HTMLElement>("[data-nav-root]");
      const eyebrow = root.current!.querySelector("[data-hero-eyebrow]");
      const lines = root.current!.querySelectorAll("[data-hero-line] > span");
      const sub = root.current!.querySelector("[data-hero-sub]");
      const ctas = root.current!.querySelectorAll("[data-hero-cta]");
      const scrollHint = root.current!.querySelector("[data-scroll-hint]");
      const textCol = root.current!.querySelector("[data-hero-text-col]");

      gsap.set(lines, { yPercent: 110 });
      gsap.set([sub, ...ctas], { y: 20, opacity: 0 });
      gsap.set(eyebrow, { clipPath: "inset(0 100% 0 0)" });
      gsap.set(scrollHint, { opacity: 0, scaleY: 0.4, transformOrigin: "top center" });

      const tlHero = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (nav) tlHero.from(nav, { y: -20, opacity: 0, duration: 0.6 }, 0.0);
      tlHero.to(eyebrow, { clipPath: "inset(0 0% 0 0)", duration: 0.5, ease: "power2.out" }, 0.1);
      tlHero.to(lines, { yPercent: 0, duration: 0.85, stagger: 0.12, ease: "power3.out" }, 0.25);
      tlHero.to([sub, ...ctas], { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 }, 0.6);

      if (textCol) {
        gsap.to(textCol, {
          yPercent: -6,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      ScrollTrigger.create({
        trigger: root.current,
        start: "top top",
        end: "bottom top",
        onUpdate: (self) => {
          if (self.progress > 0.4) {
            gsap.to(scrollHint, { opacity: 1, scaleY: 1, duration: 0.4 });
          } else {
            gsap.to(scrollHint, { opacity: 0, scaleY: 0.4, duration: 0.3 });
          }
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative isolate overflow-hidden bg-ink pt-28 md:pt-32"
    >
      {/* Imagem de fundo full-bleed */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-ink">
        <img
          src={(heroImage as { url: string }).url}
          alt="Executiva gerenciando antecipação de recebíveis"
          className="absolute inset-0 h-full w-full object-cover object-[35%_center]"
        />
        {/* Leve degradê lateral apenas para legibilidade do texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
      </div>

      <div className="container-page relative pb-20 md:pb-28 md:pt-16">
        {/* TEXT COL */}
        <div data-hero-text-col className="relative text-background">
          <div
            data-hero-eyebrow
            className="inline-flex items-center gap-2 rounded-full border border-primary-glow/40 bg-primary/15 px-3 py-1.5 text-xs font-medium text-primary-glow text-shadow-soft backdrop-blur-md"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            Securitizadora registrada · CVM
          </div>

          <h1 className="mt-6 text-[40px] font-semibold leading-[1.02] text-background text-shadow-lg md:text-[64px]">
            {H1_LINES.map((l, i) => (
              <span key={i} data-hero-line className="reveal-line">
                <span>{l}</span>
              </span>
            ))}
          </h1>

          <p
            data-hero-sub
            className="mt-6 max-w-lg text-base text-background/80 text-shadow-soft md:text-lg"
          >
            Transforme boletos e recebíveis em caixa hoje. A Credmais estrutura operações
            sob medida — do PME ao middle market — com liquidação em D+0 e cobrança 100%
            garantida.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/antecipacao-de-recebiveis"
              data-hero-cta
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground text-shadow-soft shadow-[var(--shadow-soft)] transition hover:bg-primary-glow"
            >
              Simular antecipação
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/boleto-garantido"
              data-hero-cta
              className="inline-flex items-center gap-2 rounded-full border border-background/25 bg-background/10 px-6 py-3 text-sm font-semibold text-background text-shadow-soft backdrop-blur-md transition hover:border-background/50 hover:bg-background/15"
            >
              <Zap className="h-4 w-4 text-primary-glow" />
              Conhecer Boleto Garantido
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        data-scroll-hint
        className="pointer-events-none absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary-glow">
          scroll
        </span>
        <span
          className="block h-16 w-px bg-gradient-to-b from-primary-glow to-transparent"
          style={{ animation: "pulse-line 1.6s ease-in-out infinite" }}
        />
      </div>

      {/* Wave — transição suave para a próxima seção */}
      <svg
        aria-hidden
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-x-0 -bottom-px h-14 w-full md:h-20"
      >
        <path
          fill="var(--background)"
          d="M0,120 L0,60 C240,10 480,-20 720,40 C960,100 1200,70 1440,20 L1440,120 Z"
        />
      </svg>
    </section>
  );
}

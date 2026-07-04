import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "@/assets/hero-woman.png.asset.json";

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
      const counters = root.current!.querySelectorAll<HTMLElement>("[data-counter]");
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

      tlHero.add(() => {
        counters.forEach((el) => {
          const target = Number(el.dataset.counter || "0");
          const decimals = Number(el.dataset.decimals || "0");
          const obj = { v: 0 };
          gsap.to(obj, {
            v: target,
            duration: 1.6,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = obj.v.toLocaleString("pt-BR", {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals,
              });
            },
          });
        });
      }, 1.2);

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
      className="relative isolate overflow-hidden rounded-b-3xl bg-ink pt-28 md:rounded-b-[48px] md:pt-32"
    >
      {/* Imagem de fundo full-bleed */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-ink">
        <img
          src={(heroImage as { url: string }).url}
          alt="Executiva gerenciando antecipação de recebíveis"
          className="absolute inset-0 h-full w-full object-cover object-center md:object-[right_center]"
        />
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

          {/* Trust line — counters */}
          <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-background/15 pt-6">
            <Metric value={2.8} decimals={1} suffix="B" label="antecipados em 2025" />
            <Metric value={12000} decimals={0} suffix="+" label="empresas atendidas" />
            <Metric value={99.7} decimals={1} suffix="%" label="cobrança liquidada" />
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

      {/* Wave */}
      <svg
        aria-hidden
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-10 w-full text-background md:h-14"
      >
        <path
          fill="currentColor"
          d="M0,64 C240,140 480,140 720,90 C960,40 1200,40 1440,90 L1440,140 L0,140 Z"
        />
      </svg>
    </section>
  );
}

function Metric({
  value,
  decimals,
  suffix,
  label,
}: {
  value: number;
  decimals: number;
  suffix: string;
  label: string;
}) {
  return (
    <div>
      <p className="text-2xl font-semibold text-background text-shadow-lg md:text-3xl">
        <span data-counter={value} data-decimals={decimals}>
          0
        </span>
        <span className="text-primary-glow">{suffix}</span>
      </p>
      <p className="mt-1 text-[11px] leading-tight text-background/65 text-shadow-soft">{label}</p>
    </div>
  );
}

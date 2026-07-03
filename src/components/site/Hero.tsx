import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Zap, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroVideo from "@/assets/hero-woman.asset.json";

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
      const card = root.current!.querySelector("[data-hero-card]");
      const counters = root.current!.querySelectorAll<HTMLElement>("[data-counter]");
      const particles = root.current!.querySelectorAll<HTMLElement>("[data-particle]");
      const scrollHint = root.current!.querySelector("[data-scroll-hint]");
      const textCol = root.current!.querySelector("[data-hero-text-col]");

      gsap.set(lines, { yPercent: 110 });
      gsap.set([sub, ...ctas], { y: 20, opacity: 0 });
      gsap.set(card, { x: 60, rotationY: 8, opacity: 0, transformPerspective: 900 });
      gsap.set(eyebrow, { clipPath: "inset(0 100% 0 0)" });
      gsap.set(scrollHint, { opacity: 0, scaleY: 0.4, transformOrigin: "top center" });

      const tlHero = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (nav) tlHero.from(nav, { y: -20, opacity: 0, duration: 0.6 }, 0.0);
      tlHero.to(eyebrow, { clipPath: "inset(0 0% 0 0)", duration: 0.5, ease: "power2.out" }, 0.1);
      tlHero.to(lines, { yPercent: 0, duration: 0.85, stagger: 0.12, ease: "power3.out" }, 0.25);
      tlHero.to([sub, ...ctas], { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 }, 0.6);
      tlHero.to(card, { x: 0, rotationY: 0, opacity: 1, duration: 0.9, ease: "power3.out" }, 0.7);

      tlHero.add(() => {
        const loop = gsap.timeline({ repeat: -1, repeatDelay: 2.5 });
        loop
          .fromTo(
            particles,
            { xPercent: 0, opacity: 0, scale: 0.6 },
            {
              xPercent: 100,
              opacity: 1,
              scale: 1,
              duration: 1.1,
              stagger: 0.12,
              ease: "power2.inOut",
            }
          )
          .to(particles, { opacity: 0, duration: 0.3 }, ">-0.2");
      }, 1.2);

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
      }, 1.4);

      if (textCol && card) {
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
      {/* Vídeo de fundo full-bleed — object-cover mantém o enquadramento em qualquer tela */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-ink">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster=""
          className="absolute inset-0 h-full w-full object-cover object-[65%_center] md:object-center"
        >
          <source src={(heroVideo as { url: string }).url} type="video/mp4" />
        </video>
        {/* Overlays para legibilidade do texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/40 md:from-ink/85 md:via-ink/55 md:to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="absolute -right-24 top-24 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container-page relative grid items-center gap-14 pb-32 md:grid-cols-[1.1fr_0.9fr] md:pb-44 md:pt-16">
        {/* TEXT COL */}
        <div data-hero-text-col className="relative text-background">
          <div
            data-hero-eyebrow
            className="inline-flex items-center gap-2 rounded-full border border-primary-glow/40 bg-primary/15 px-3 py-1.5 text-xs font-medium text-primary-glow backdrop-blur-md"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            Securitizadora registrada · CVM
          </div>

          <h1 className="mt-6 text-[40px] font-semibold leading-[1.02] text-background drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)] md:text-[64px]">
            {H1_LINES.map((l, i) => (
              <span key={i} data-hero-line className="reveal-line">
                <span>{l}</span>
              </span>
            ))}
          </h1>

          <p
            data-hero-sub
            className="mt-6 max-w-lg text-base text-background/80 md:text-lg"
          >
            Transforme boletos e recebíveis em caixa hoje. A Credmais estrutura operações
            sob medida — do PME ao middle market — com liquidação em D+0 e cobrança 100%
            garantida.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/antecipacao-de-recebiveis"
              data-hero-cta
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:bg-primary-glow"
            >
              Simular antecipação
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/boleto-garantido"
              data-hero-cta
              className="inline-flex items-center gap-2 rounded-full border border-background/25 bg-background/10 px-6 py-3 text-sm font-semibold text-background backdrop-blur-md transition hover:border-background/50 hover:bg-background/15"
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

        {/* FLOATING CARD (glass) — fundo escuro sólido */}
        <div className="relative md:justify-self-end">
          <div
            data-hero-card
            className="relative w-full max-w-sm rounded-3xl border border-background/15 bg-background/10 p-5 text-background shadow-[var(--shadow-card)] backdrop-blur-xl md:p-6"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-background/60">
              Fluxo em tempo real
            </p>
            <p className="mt-1 text-base font-semibold text-background">
              Boleto compensado → PIX na sua conta
            </p>

            {/* Desktop: fluxo com partículas */}
            <div className="mt-5 hidden items-stretch gap-3 md:flex">
              <MiniCard label="Boleto emitido" value="R$ 48.290,00" />
              <div className="relative flex flex-1 items-center">
                <div className="absolute inset-x-2 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-primary/10 via-primary-glow to-primary/10" />
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    data-particle
                    className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-primary-glow shadow-[0_0_14px_var(--primary-glow)]"
                    style={{ left: "0%" }}
                  />
                ))}
              </div>
              <MiniCard label="PIX D+0" value="R$ 48.108,50" accent />
            </div>

            {/* Mobile simplificado */}
            <div className="mt-5 grid grid-cols-2 gap-3 md:hidden">
              <MiniCard label="Boleto" value="R$ 48.290" />
              <MiniCard label="PIX D+0" value="R$ 48.108" accent />
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-background/15 pt-4 text-xs text-background/70">
              <span>Taxa a partir de</span>
              <span className="text-sm font-semibold text-background">
                1,29% <span className="font-normal text-background/60">a.m.</span>
              </span>
            </div>
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
        className="absolute inset-x-0 bottom-0 h-24 w-full text-background md:h-32"
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
      <p className="text-2xl font-semibold text-background md:text-3xl">
        <span data-counter={value} data-decimals={decimals}>
          0
        </span>
        <span className="text-primary-glow">{suffix}</span>
      </p>
      <p className="mt-1 text-[11px] leading-tight text-background/65">{label}</p>
    </div>
  );
}

function MiniCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      className={
        "flex flex-1 flex-col justify-between rounded-xl border p-3 " +
        (accent
          ? "border-primary-glow/40 bg-primary/15"
          : "border-background/15 bg-background/10")
      }
    >
      <p className="text-[10px] font-medium uppercase tracking-wider text-background/60">
        {label}
      </p>
      <p className="mt-2 text-sm font-semibold text-background">
        {accent && (
          <CheckCircle2 className="mr-1 inline h-3.5 w-3.5 -translate-y-px text-primary-glow" />
        )}
        {value}
      </p>
    </div>
  );
}

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

      // 1.2s — loop partículas boleto → pix
      tlHero.add(() => {
        const loop = gsap.timeline({ repeat: -1, repeatDelay: 2.5 });
        loop.fromTo(
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
        ).to(particles, { opacity: 0, duration: 0.3 }, ">-0.2");
      }, 1.2);

      // 1.4s — countUp
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

      // Parallax scrub
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

      // Scroll hint at 40%
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
      className="relative overflow-hidden bg-gradient-to-b from-background via-background to-surface-alt pt-28 md:pt-32"
    >
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-40 h-[28rem] w-[28rem] rounded-full bg-primary-glow/10 blur-3xl" />

      <div className="container-page relative grid items-center gap-14 pb-24 md:grid-cols-[1.05fr_0.95fr] md:pb-40">
        {/* TEXT COL */}
        <div data-hero-text-col className="relative">
          <div
            data-hero-eyebrow
            className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-3 py-1.5 text-xs font-medium text-primary"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            Securitizadora registrada · CVM
          </div>

          <h1 className="mt-6 text-[40px] font-semibold leading-[1.02] text-ink md:text-[64px]">
            {H1_LINES.map((l, i) => (
              <span key={i} data-hero-line className="reveal-line">
                <span>{l}</span>
              </span>
            ))}
          </h1>

          <p data-hero-sub className="mt-6 max-w-lg text-base text-ink-soft md:text-lg">
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
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-ink transition hover:border-primary/40"
            >
              <Zap className="h-4 w-4 text-primary" />
              Conhecer Boleto Garantido
            </Link>
          </div>

          {/* Trust line — counters */}
          <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
            <Metric value={2.8} decimals={1} suffix="B" label="antecipados em 2025" />
            <Metric value={12000} decimals={0} suffix="+" label="empresas atendidas" />
            <Metric value={99.7} decimals={1} suffix="%" label="cobrança liquidada" />
          </div>
        </div>

        {/* CARD */}
        <div className="relative">
          <div
            data-hero-card
            className="relative rounded-3xl border border-border bg-surface p-4 shadow-[var(--shadow-card)] md:p-5"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <video
                src={heroVideo.url}
                autoPlay
                muted
                loop
                playsInline
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>

            {/* Floating boleto → pix flow (desktop) */}
            <div className="mt-4 hidden items-stretch gap-3 md:flex">
              <MiniCard label="Boleto emitido" value="R$ 48.290,00" />
              <div className="relative flex flex-1 items-center">
                <div className="absolute inset-x-2 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-primary/10 via-primary/60 to-primary/10" />
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    data-particle
                    className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]"
                    style={{ left: "0%" }}
                  />
                ))}
              </div>
              <MiniCard label="PIX liquidado · D+0" value="R$ 48.108,50" accent />
            </div>

            {/* Mobile simplified crossfade */}
            <div className="mt-4 grid grid-cols-2 gap-3 md:hidden">
              <MiniCard label="Boleto" value="R$ 48.290" />
              <MiniCard label="PIX D+0" value="R$ 48.108" accent />
            </div>
          </div>

          {/* Badge */}
          <div className="absolute -left-3 -top-3 hidden rounded-2xl border border-border bg-surface px-4 py-3 shadow-[var(--shadow-soft)] md:block">
            <p className="text-[10px] font-medium uppercase tracking-wider text-ink-soft">Taxa a partir de</p>
            <p className="mt-0.5 text-xl font-semibold text-ink">1,29% <span className="text-xs font-normal text-ink-soft">a.m.</span></p>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        data-scroll-hint
        className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary">scroll</span>
        <span
          className="block h-16 w-px bg-gradient-to-b from-primary to-transparent"
          style={{ animation: "pulse-line 1.6s ease-in-out infinite" }}
        />
      </div>

      {/* Wave */}
      <svg
        aria-hidden
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-24 w-full text-surface-alt md:h-32"
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
      <p className="text-2xl font-semibold text-ink md:text-3xl">
        <span data-counter={value} data-decimals={decimals}>0</span>
        <span className="text-primary">{suffix}</span>
      </p>
      <p className="mt-1 text-[11px] leading-tight text-ink-soft">{label}</p>
    </div>
  );
}

function MiniCard({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div
      className={
        "flex flex-1 flex-col justify-between rounded-xl border p-3 " +
        (accent
          ? "border-primary/30 bg-primary/8"
          : "border-border bg-surface-alt")
      }
    >
      <p className="text-[10px] font-medium uppercase tracking-wider text-ink-soft">{label}</p>
      <p className="mt-2 text-sm font-semibold text-ink">
        {accent && <CheckCircle2 className="mr-1 inline h-3.5 w-3.5 -translate-y-px text-primary" />}
        {value}
      </p>
    </div>
  );
}

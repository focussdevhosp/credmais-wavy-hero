import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, ShieldCheck, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "@/assets/hero-businessman.png.asset.json";

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
      const image = root.current!.querySelector("[data-hero-image]");

      gsap.set(lines, { yPercent: 110 });
      gsap.set([sub, ...ctas], { y: 20, opacity: 0 });
      gsap.set(eyebrow, { clipPath: "inset(0 100% 0 0)" });
      gsap.set(image, { scale: 1.08, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      if (nav) tl.from(nav, { y: -20, opacity: 0, duration: 0.6 }, 0.0);
      tl.to(image, { scale: 1, opacity: 1, duration: 1.4, ease: "power2.out" }, 0.1);
      tl.to(eyebrow, { clipPath: "inset(0 0% 0 0)", duration: 0.5, ease: "power2.out" }, 0.2);
      tl.to(lines, { yPercent: 0, duration: 0.85, stagger: 0.12 }, 0.3);
      tl.to([sub, ...ctas], { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 }, 0.7);

      tl.add(() => {
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
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-background pt-28 pb-16 md:pt-36 md:pb-24"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="container-page relative">
        <div className="relative grid grid-cols-1 items-stretch overflow-hidden rounded-3xl bg-surface shadow-[0_40px_100px_-40px_rgba(60,40,20,0.35)] lg:grid-cols-12">
          {/* LEFT — dark contrast panel */}
          <div className="relative z-10 bg-ink p-8 md:p-14 lg:col-span-6 lg:p-16">
            {/* subtle inner glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
            />

            <div className="relative">
              <span
                data-hero-eyebrow
                className="inline-flex items-center gap-2 border-l-2 border-primary pl-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary"
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                Securitizadora registrada · CVM
              </span>

              <h1 className="mt-8 font-display text-4xl font-bold leading-[1.05] text-background md:text-5xl lg:text-[56px]">
                {H1_LINES.map((l, i) => (
                  <span key={i} data-hero-line className="reveal-line">
                    <span>
                      {i === 2 ? (
                        <>
                          uma <span className="text-primary">securitizadora.</span>
                        </>
                      ) : (
                        l
                      )}
                    </span>
                  </span>
                ))}
              </h1>

              <p
                data-hero-sub
                className="mt-6 max-w-md text-base leading-relaxed text-background/70 md:text-lg"
              >
                Transforme boletos e recebíveis em caixa hoje. A Credmais estrutura operações
                sob medida — do PME ao middle market — com liquidação em D+0 e cobrança 100%
                garantida.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  to="/antecipacao-de-recebiveis"
                  data-hero-cta
                  className="group btn-cta-base btn-cta-primary px-7 py-3.5"
                >
                  Simular antecipação
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/boleto-garantido"
                  data-hero-cta
                  className="btn-cta-base btn-cta-ghost-light px-7 py-3.5"
                >
                  <Zap className="h-4 w-4 text-primary-glow" />
                  Conhecer Boleto Garantido
                </Link>
              </div>

              {/* Trust line — counters */}
              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-background/15 pt-6">
                <Metric value={2.8} decimals={1} suffix="B" label="antecipados em 2025" />
                <Metric value={12000} decimals={0} suffix="+" label="empresas atendidas" />
                <Metric value={99.7} decimals={1} suffix="%" label="cobrança liquidada" />
              </div>
            </div>
          </div>

          {/* RIGHT — editorial image panel */}
          <div className="relative min-h-[340px] bg-ink lg:col-span-6 lg:min-h-[640px]">
            <img
              data-hero-image
              src={(heroImage as { url: string }).url}
              alt="Executivo Credmais — antecipação de recebíveis"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            {/* Left-to-right seam blending into dark panel */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-ink to-transparent lg:w-56" />
            {/* Bottom fade for polish */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/60 to-transparent" />
            {/* Gold hairline accent */}
            <div className="pointer-events-none absolute right-6 top-6 hidden items-center gap-2 rounded-full border border-primary/40 bg-ink/50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-glow backdrop-blur-md md:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Liquidação D+0
            </div>
          </div>
        </div>
      </div>
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
      <p className="font-display text-2xl font-bold text-background md:text-3xl">
        <span data-counter={value} data-decimals={decimals}>
          0
        </span>
        <span className="text-primary">{suffix}</span>
      </p>
      <p className="mt-1 text-[11px] leading-tight text-background/60">{label}</p>
    </div>
  );
}

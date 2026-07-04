import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock3, LineChart, ShieldCheck, Quote } from "lucide-react";
import featureVelocity from "@/assets/feature-velocity.png.asset.json";
import featureScale from "@/assets/feature-scale.png.asset.json";
import featureTrust from "@/assets/feature-trust.png.asset.json";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Clock3,
    title: "Onboarding em 48h",
    desc: "Cadastro digital, análise de crédito e primeiro desembolso na mesma semana.",
    detail:
      "Do primeiro contato ao dinheiro na conta em até 48 horas — sem papelada, sem burocracia.",
    tag: "Velocidade",
    image: featureVelocity.url,
  },
  {
    icon: LineChart,
    title: "Limite que cresce com você",
    desc: "Reavaliação automática do limite conforme seu histórico de operações.",
    detail:
      "Quanto mais você opera, maior seu limite. Um motor de crédito inteligente acompanhando sua evolução.",
    tag: "Escala",
    image: featureScale.url,
  },
  {
    icon: ShieldCheck,
    title: "Governança de securitizadora",
    desc: "Emissão de CRs, auditoria independente e transparência total.",
    detail:
      "Estrutura regulada pela CVM, com relatórios auditados e rastreabilidade completa de cada operação.",
    tag: "Confiança",
    image: featureTrust.url,
  },
];

export function FlipFeatures() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=250%",
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        },
      });

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        tl.to(
          card,
          { rotationY: 180, ease: "power2.inOut", duration: 1 },
          i * 0.35,
        );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex h-screen items-center overflow-hidden bg-gradient-to-b from-background via-surface/40 to-background"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--primary) 10%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--primary) 10%, transparent) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      <div className="container-page relative">
        <div className="mb-10 flex flex-col items-start gap-3 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Diferenciais
            </span>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              Uma operação desenhada para{" "}
              <span className="italic text-primary">crescer com você</span>.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink-soft md:text-right">
            Role para descobrir cada pilar da nossa plataforma.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="perspective-2000 h-[440px] w-full">
                <div
                  ref={(el) => {
                    cardsRef.current[i] = el;
                  }}
                  className="transform-style-3d relative h-full w-full will-change-transform"
                >
                  {/* FRONT */}
                  <div className="backface-hidden absolute inset-0 flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-[0_30px_80px_-50px_rgba(15,42,30,0.35)]">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-soft">
                        0{i + 1} — {f.tag}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-ink">
                        {f.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                        {f.desc}
                      </p>
                    </div>
                    <div className="relative mt-4 flex-1 min-h-0 overflow-hidden rounded-2xl">
                      <img
                        src={f.image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-border/70 pt-4 text-xs uppercase tracking-widest text-ink-soft">
                      <span>Vire para saber mais</span>
                      <span className="text-primary">→</span>
                    </div>
                  </div>

                  {/* BACK */}
                  <div
                    className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col justify-between overflow-hidden rounded-3xl border border-primary/30 bg-primary p-8 text-primary-foreground shadow-[0_30px_80px_-40px_rgba(15,42,30,0.55)]"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, color-mix(in oklab, var(--primary) 92%, black) 0%, color-mix(in oklab, var(--primary) 70%, black) 100%)",
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.25em] opacity-80">
                        {f.tag}
                      </span>
                      <Quote
                        className="h-6 w-6 opacity-80"
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    </div>
                    <p className="text-lg font-medium leading-relaxed md:text-xl">
                      {f.detail}
                    </p>
                    <div>
                      <div className="mb-3 h-[2px] w-10 bg-primary-foreground/70" />
                      <p className="text-sm font-semibold uppercase tracking-widest">
                        {f.title}
                      </p>
                      <p className="text-xs opacity-70">CredMais Securitizadora</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .perspective-2000 { perspective: 2000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </section>
  );
}

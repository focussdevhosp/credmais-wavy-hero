import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock3, LineChart, ShieldCheck, ArrowRight } from "lucide-react";
import featureVelocity from "@/assets/feature-velocity.png.asset.json";
import featureScale from "@/assets/feature-scale.png.asset.json";
import featureTrust from "@/assets/feature-trust.png.asset.json";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Clock3,
    title: "Onboarding em 48h",
    desc: "Cadastro digital, análise de crédito e primeiro desembolso na mesma semana.",
    tag: "Velocidade",
    image: featureVelocity.url,
  },
  {
    icon: LineChart,
    title: "Limite que cresce com você",
    desc: "Reavaliação automática do limite conforme seu histórico de operações.",
    tag: "Escala",
    image: featureScale.url,
  },
  {
    icon: ShieldCheck,
    title: "Governança de securitizadora",
    desc: "Emissão de CRs, auditoria independente e transparência total.",
    tag: "Confiança",
    image: featureTrust.url,
  },
];

export function FlipFeatures() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-background py-24 md:py-32"
    >
      <div className="container-page">
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
            Conheça cada pilar da nossa plataforma.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                className="group flex h-full flex-col rounded-[2rem] border border-border bg-card p-8 shadow-[0_8px_30px_-12px_color-mix(in_oklab,var(--ink)_6%,transparent)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_50px_-16px_color-mix(in_oklab,var(--ink)_12%,transparent)]"
              >
                <div className="mb-10 flex items-start justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="pt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-ink-soft">
                    0{i + 1} — {f.tag}
                  </span>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-extrabold leading-tight text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {f.desc}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl">
                    <img
                      src={f.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex cursor-pointer items-center justify-between border-t border-border pt-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-ink-soft transition-colors group-hover:text-ink">
                      Vire para saber mais
                    </span>
                    <ArrowRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

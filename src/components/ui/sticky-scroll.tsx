import { useRef, useState, type ReactNode } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import parallax1 from "@/assets/parallax/parallax-new-1.webp.asset.json";
import parallax2 from "@/assets/parallax/parallax-new-2.webp.asset.json";
import parallax3 from "@/assets/parallax/parallax-new-3.webp.asset.json";

type StickyScrollContent = {
  title: string;
  description: string;
  content: ReactNode;
};

const content: StickyScrollContent[] = [
  {
    title: "Caixa em até 24h.",
    description:
      "Antecipe duplicatas, cheques e contratos com análise em poucas horas e liquidação no mesmo dia. Sem burocracia bancária.",
    content: (
      <img
        src={parallax3.url}
        alt="Antecipação de recebíveis"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: "Boleto sem inadimplência.",
    description:
      "Emita boletos com garantia de recebimento. A CredMais assume o risco de inadimplência e você previsibiliza o fluxo.",
    content: (
      <img
        src={parallax1.url}
        alt="Boleto garantido"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: "Governança de securitizadora.",
    description:
      "Estruturação, emissão de títulos e distribuição de risco com transparência total sobre custos, prazos e garantias.",
    content: (
      <img
        src={parallax2.url}
        alt="Securitizadora CredMais"
        className="h-full w-full object-cover"
      />
    ),
  },
];

const backgroundColors = [
  "#142946",
  "#0f1c2e",
  "#0b1628",
];

const linearGradients = [
  "linear-gradient(to bottom right, oklch(0.55 0.16 148), oklch(0.72 0.19 145))",
  "linear-gradient(to bottom right, oklch(0.45 0.12 180), oklch(0.65 0.16 150))",
  "linear-gradient(to bottom right, oklch(0.55 0.14 130), oklch(0.75 0.18 145))",
];

function StickyScroll({ content }: { content: StickyScrollContent[] }) {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / content.length);
    const closest = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) return index;
      return acc;
    }, 0);
    setActiveCard(closest);
  });

  const backgroundGradient = linearGradients[activeCard % linearGradients.length];

  return (
    <section ref={containerRef} className="bg-[oklch(0.08_0.02_165)] relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden py-24">
        <div className="container-page">
          <div className="mb-12 max-w-2xl">
            <h2 className="font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
              Soluções que giram seu caixa
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/70">
              Role para conhecer cada frente de crédito.
            </p>
          </div>

          <motion.div
            animate={{ backgroundColor: backgroundColors[activeCard % backgroundColors.length] }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-[30rem] justify-center space-x-10 overflow-hidden rounded-3xl p-10 shadow-2xl ring-1 ring-primary-foreground/10"
          >
            <div className="relative flex items-start px-4">
              <div className="max-w-2xl">
                {content.map((item, index) => (
                  <div key={item.title + index} className="my-20">
                    <motion.h3
                      animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                      transition={{ duration: 0.4 }}
                      className="text-2xl font-bold text-primary-foreground md:text-3xl"
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                      transition={{ duration: 0.4 }}
                      className="mt-4 max-w-sm text-base leading-relaxed text-primary-foreground/70 md:text-lg"
                    >
                      {item.description}
                    </motion.p>
                  </div>
                ))}
                <div className="my-20">
                  <p className="max-w-sm text-base text-primary-foreground/70">
                    Descubra em 2 minutos quanto sua empresa pode antecipar.
                  </p>
                  <Link
                    to="/contato"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-glow"
                  >
                    Fazer simulação <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <motion.div
              style={{ background: backgroundGradient }}
              className="sticky top-10 hidden h-60 w-96 overflow-hidden rounded-2xl bg-primary-foreground shadow-xl lg:block"
            >
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full"
              >
                {content[activeCard]?.content}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function StickyScrollReveal() {
  return <StickyScroll content={content} />;
}

export default StickyScrollReveal;

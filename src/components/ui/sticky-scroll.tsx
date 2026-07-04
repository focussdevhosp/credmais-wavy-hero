import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import parallax1 from "@/assets/parallax/parallax-new-1.png.asset.json";
import parallax2 from "@/assets/parallax/parallax-new-2.png.asset.json";
import parallax3 from "@/assets/parallax/parallax-new-3.png.asset.json";

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
  "oklch(0.16 0.03 165)",
  "oklch(0.14 0.03 165)",
  "oklch(0.12 0.03 165)",
];

const linearGradients = [
  "linear-gradient(to bottom right, oklch(0.55 0.16 148), oklch(0.72 0.19 145))",
  "linear-gradient(to bottom right, oklch(0.45 0.12 180), oklch(0.65 0.16 150))",
  "linear-gradient(to bottom right, oklch(0.55 0.14 130), oklch(0.75 0.18 145))",
];

function StickyScroll({ content }: { content: StickyScrollContent[] }) {
  const [activeCard, setActiveCard] = useState(0);
  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / content.length);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.section
      ref={ref}
      className="relative min-h-[300vh] overflow-hidden"
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-page relative z-10 grid grid-cols-1 gap-16 py-24 lg:grid-cols-2 lg:gap-24">
        {/* Texto */}
        <div className="relative z-10 flex flex-col">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="flex min-h-[80vh] flex-col justify-center py-12 lg:min-h-screen"
            >
              {/* Imagem visível apenas no mobile */}
              <div className="mb-8 block aspect-[4/3] w-full overflow-hidden rounded-2xl lg:hidden">
                {item.content}
              </div>

              <motion.h2
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                transition={{ duration: 0.5 }}
                className="font-display text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl"
              >
                {item.title}
              </motion.h2>

              <motion.p
                animate={{
                  opacity: activeCard === index ? 1 : 0.35,
                }}
                transition={{ duration: 0.5 }}
                className="mt-6 max-w-md text-lg leading-relaxed text-primary-foreground/70 md:text-xl"
              >
                {item.description}
              </motion.p>
            </div>
          ))}

          <div className="flex min-h-[40vh] flex-col justify-center py-12">
            <p className="max-w-md text-lg text-primary-foreground/70">
              Descubra em 2 minutos quanto sua empresa pode antecipar, com resposta de um consultor humano.
            </p>
            <Link
              to="/contato"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-glow"
            >
              Fazer simulação <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Painel sticky desktop */}
        <div className="hidden lg:sticky lg:top-32 lg:flex lg:h-[560px] lg:items-center lg:justify-center">
          <div className="relative h-[420px] w-full max-w-sm overflow-hidden rounded-3xl bg-primary-foreground shadow-2xl">
            {/* Gradiente que muda conforme o card ativo */}
            <motion.div
              animate={{
                background: backgroundGradient,
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -inset-[80px] opacity-70 blur-3xl"
            />

            <motion.div
              key={activeCard}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full w-full"
            >
              {content[activeCard]?.content}
            </motion.div>

            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-primary-foreground/20" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export function StickyScrollReveal() {
  return <StickyScroll content={content} />;
}

export default StickyScrollReveal;

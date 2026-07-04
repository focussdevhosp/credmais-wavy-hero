import { useRef, useState, type ReactNode } from "react";
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

function StickyScroll({ content }: { content: StickyScrollContent[] }) {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

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
      className="relative min-h-[300vh] overflow-hidden bg-background"
    >
      <div className="container-page relative z-10 grid grid-cols-1 gap-12 py-24 lg:grid-cols-2 lg:gap-24">
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
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.35,
                }}
                className="font-display text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl lg:text-6xl"
              >
                {item.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.4,
                }}
                className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft md:text-xl"
              >
                {item.description}
              </motion.p>
            </div>
          ))}

          <div className="flex min-h-[40vh] flex-col justify-center py-12">
            <p className="max-w-md text-lg text-ink-soft">
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

        {/* Imagem sticky desktop */}
        <div className="hidden lg:sticky lg:top-32 lg:flex lg:h-[560px] lg:items-center lg:justify-center">
          <div className="relative h-[480px] w-full max-w-md overflow-hidden rounded-3xl shadow-card">
            <motion.div
              animate={{
                opacity: activeCard === -1 ? 0 : 1,
                scale: [1, 1.04, 1],
              }}
              transition={{
                opacity: { duration: 0.5 },
                scale: {
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
              className="absolute -inset-2 bg-gradient-to-br from-primary to-primary-glow opacity-60 blur-2xl"
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

            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-ink/5" />
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

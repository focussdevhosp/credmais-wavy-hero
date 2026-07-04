import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import credmaisOffice from "@/assets/credmais-woman.png.asset.json";

type StickyItem = {
  title: string;
  description: string;
  content?: ReactNode;
  gradient: string;
};

const CONTENT: StickyItem[] = [
  {
    title: "Recebíveis",
    description:
      "O patrimônio invisível gerado todos os dias pelo seu negócio. Boletos, duplicatas e contratos que podem virar caixa agora.",
    gradient:
      "linear-gradient(135deg, oklch(0.75 0.18 145), oklch(0.55 0.20 148))",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-primary-glow p-8 text-center">
        <p className="font-display text-3xl font-bold uppercase tracking-tight text-primary-foreground">
          Recebíveis
        </p>
      </div>
    ),
  },
  {
    title: "Securitização",
    description:
      "Estruturamos, emitimos títulos e distribuímos o risco com governança. Uma securitizadora registrada na CVM cuida de cada detalhe.",
    gradient:
      "linear-gradient(135deg, oklch(0.95 0.18 95), oklch(0.75 0.18 80))",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-300 to-amber-500 p-8 text-center">
        <p className="font-display text-3xl font-bold uppercase tracking-tight text-ink">
          Securitização
        </p>
      </div>
    ),
  },
  {
    title: "Caixa",
    description:
      "Antecipação com taxas competitivas — sem a burocracia de um banco. Liquidação em D+0 e cobrança 100% garantida.",
    gradient:
      "linear-gradient(135deg, oklch(0.55 0.20 148), oklch(0.35 0.15 150))",
    content: (
      <div className="h-full w-full">
        <img
          src={credmaisOffice.url}
          alt="CredMais Securitizadora — escritório"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
];

function StickyScroll({ content }: { content: StickyItem[] }) {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const breakpoints = content.map((_, i) => i / content.length);
    const closest = breakpoints.reduce(
      (acc, bp, i) =>
        Math.abs(latest - bp) < Math.abs(latest - breakpoints[acc]) ? i : acc,
      0,
    );
    setActiveCard(closest);
  });

  const backgroundColors = ["oklch(0.18 0.02 150)", "oklch(0.12 0 0)", "oklch(0.20 0.02 148)"];

  return (
    <motion.div
      ref={ref}
      animate={{ backgroundColor: backgroundColors[activeCard % backgroundColors.length] }}
      className="no-scrollbar relative flex h-[35rem] justify-center space-x-10 overflow-y-auto rounded-3xl p-6 md:p-10 scroll-smooth"
    >
      <div className="relative flex items-start px-2 md:px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="font-display text-3xl font-bold text-background md:text-4xl"
              >
                {item.title}
              </motion.h2>
              <motion.p
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="mt-6 max-w-sm text-base text-background/80 md:text-lg"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: content[activeCard].gradient }}
        className="sticky top-10 hidden h-60 w-80 overflow-hidden rounded-2xl bg-background lg:block"
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
}

export function SecuritizadoraStory() {
  return (
    <section className="container-page py-16 md:py-24" id="securitizadora-scroll">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Como funciona
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">
          Do recebível ao caixa, com a segurança de uma securitizadora.
        </h2>
      </div>
      <StickyScroll content={CONTENT} />
    </section>
  );
}

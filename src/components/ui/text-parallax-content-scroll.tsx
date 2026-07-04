import React, { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import parallax1 from "@/assets/parallax/parallax-new-1.png.asset.json";
import parallax2 from "@/assets/parallax/parallax-new-2.png.asset.json";
import parallax3 from "@/assets/parallax/parallax-new-3.png.asset.json";

const IMG_PADDING = 8;

type TextParallaxContentProps = {
  imgUrl: string;
  subheading: string;
  heading: string;
  children?: React.ReactNode;
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(65vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-2xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{ opacity }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]) as MotionValue<number>;
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">{subheading}</p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: TextParallaxContentProps) => {
  return (
    <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className="relative h-[110vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 pb-16 pt-8 md:grid-cols-12">
    <h2 className="col-span-1 text-2xl font-bold md:col-span-4">
      Recebíveis que viram caixa, sem fricção.
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-3 text-lg text-neutral-600 md:text-xl">
        Antecipamos duplicatas, cheques e contratos com análise em horas e
        liquidação no mesmo dia — para você focar no que importa: crescer.
      </p>
      <p className="mb-6 text-lg text-neutral-600 md:text-xl">
        Governança de securitizadora, cobrança integrada e limites que evoluem
        com o seu histórico.
      </p>
      <button className="w-full rounded bg-neutral-900 px-7 py-3 text-lg text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Saiba mais <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl={parallax3.url}
        subheading="Antecipação"
        heading="Caixa em até 24h."
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={parallax1.url}
        subheading="Garantia"
        heading="Boleto sem inadimplência."
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={parallax2.url}
        subheading="Governança"
        heading="Securitizadora ao seu lado."
      >
        <ExampleContent />
      </TextParallaxContent>
    </div>
  );
};

export default TextParallaxContentExample;

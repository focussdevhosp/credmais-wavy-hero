export function WavyMarquee() {
  const words = [
    "ANTECIPAÇÃO",
    "RECEBÍVEIS",
    "BOLETO GARANTIDO",
    "CRÉDITO",
    "SECURITIZAÇÃO",
    "CAIXA D+0",
    "COBRANÇA",
    "GARANTIA",
  ];
  // Repeat enough times so the animated text always fills the path
  const text = Array(6).fill(words.join(" • ")).join(" • ") + " • ";

  return (
    <section aria-hidden className="relative overflow-hidden bg-background py-16 md:py-24">
      <svg
        viewBox="0 0 1200 240"
        preserveAspectRatio="none"
        className="block h-[180px] w-full md:h-[240px]"
      >
        <defs>
          {/* Wide green ribbon path */}
          <path
            id="wavy-ribbon"
            d="M -100 120 C 200 20, 400 220, 600 120 S 1000 20, 1300 120"
            fill="none"
          />
          {/* Center line for the text, sits on the ribbon */}
          <path
            id="wavy-textline"
            d="M -100 120 C 200 20, 400 220, 600 120 S 1000 20, 1300 120"
            fill="none"
          />
        </defs>

        {/* Ribbon stroke */}
        <use
          href="#wavy-ribbon"
          stroke="oklch(0.72 0.18 152)"
          strokeWidth="72"
          strokeLinecap="round"
          fill="none"
        />

        {/* Animated text on the ribbon */}
        <text
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight={800}
          fontSize="22"
          letterSpacing="2"
          fill="white"
        >
          <textPath href="#wavy-textline" startOffset="0%">
            {text}
            <animate
              attributeName="startOffset"
              from="0%"
              to="-50%"
              dur="30s"
              repeatCount="indefinite"
            />
          </textPath>
        </text>
      </svg>
    </section>
  );
}

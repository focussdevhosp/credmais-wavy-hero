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

  const text = words.join(" • ");
  const repeatedText = `${text} • `.repeat(6);

  return (
    <section
      aria-hidden
      className="relative overflow-hidden bg-background py-10 md:py-14"
    >
      {/* Top wave transition */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-10 w-[calc(100%+1.3px)] fill-primary md:h-14"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        </svg>
      </div>

      {/* Main marquee band */}
      <div className="relative bg-primary py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] md:py-10">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          <div className="flex items-center gap-8 px-8 md:gap-12">
            <span className="font-display text-3xl font-black italic uppercase tracking-tighter text-primary-foreground md:text-5xl">
              {repeatedText}
            </span>
          </div>
          <div className="flex items-center gap-8 px-8 md:gap-12">
            <span className="font-display text-3xl font-black italic uppercase tracking-tighter text-primary-foreground md:text-5xl">
              {repeatedText}
            </span>
          </div>
        </div>

        {/* Subtle top/bottom light lines */}
        <div className="absolute inset-x-0 top-0 h-px bg-primary-foreground/10" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-ink/5" />
      </div>

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 w-full rotate-180 overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-10 w-[calc(100%+1.3px)] fill-primary md:h-14"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        </svg>
      </div>
    </section>
  );
}

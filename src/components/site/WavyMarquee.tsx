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
    <section aria-hidden className="bg-primary">
      <div className="relative bg-primary py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] md:py-10">
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

        <div className="absolute inset-x-0 top-0 h-px bg-primary-foreground/10" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-ink/5" />
      </div>
    </section>
  );
}

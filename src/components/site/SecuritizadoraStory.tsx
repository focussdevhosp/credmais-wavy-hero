import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Seção editorial "securitizadora" com efeito pinned de scroll GSAP.
 * Mesma coreografia do protótipo AETHER, adaptada ao fundo branco do site.
 */
export function SecuritizadoraStory() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollRef.current || !pinRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollRef.current!,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: pinRef.current!,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      tl.to("#textBlock1", {
        opacity: 0,
        scale: 0.9,
        yPercent: -20,
        duration: 2,
        ease: "power2.inOut",
      });

      tl.to(
        "#textBlock2",
        {
          opacity: 1,
          scale: 1,
          yPercent: 0,
          y: 0,
          duration: 2,
          ease: "power2.inOut",
        },
        "-=1.6",
      );

      tl.to(
        "#textBlock2",
        {
          opacity: 0,
          scale: 0.9,
          yPercent: -30,
          duration: 2,
          ease: "power2.inOut",
        },
        "+=0.6",
      );

      tl.to(
        "#textBlock3",
        {
          opacity: 1,
          scale: 1,
          yPercent: 0,
          y: 0,
          duration: 2,
          ease: "power2.inOut",
        },
        "-=1.6",
      );

      tl.to(
        "#textBlock3",
        {
          opacity: 0,
          scale: 1.08,
          yPercent: -20,
          duration: 2,
          ease: "power2.inOut",
        },
        "+=0.6",
      );

      tl.to(
        "#imageRevealWrapper",
        { opacity: 1, duration: 1.5, ease: "power2.out" },
        "-=1.4",
      );

      tl.to(
        "#imageMask",
        {
          clipPath: "inset(0% 0% round 0px)",
          duration: 2.5,
          ease: "power3.inOut",
        },
        "-=1.0",
      );

      tl.to(
        "#revealImage",
        { scale: 1, duration: 2.5, ease: "power3.inOut" },
        "<",
      );

      tl.to(
        "#captionText",
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
        "-=0.8",
      );
    }, scrollRef);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={scrollRef}
      className="relative h-[450vh] w-full bg-background"
      id="securitizadora-scroll"
    >
      <div
        ref={pinRef}
        className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-background"
      >
        {/* Atmosfera de fundo sutil (clara) */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div
            className="absolute left-[25%] top-[15%] h-[35vw] w-[35vw] rounded-full blur-[130px]"
            style={{ background: "var(--primary-glow, rgba(15,42,30,0.10))" }}
          />
          <div className="absolute bottom-[15%] right-[15%] h-[40vw] w-[40vw] rounded-full bg-primary/10 blur-[150px]" />
        </div>

        {/* TEXTO I */}
        <div
          id="textBlock1"
          className="pointer-events-none absolute w-full select-none px-6 text-center"
        >
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.6em] text-primary md:text-sm">
            Capítulo I
          </span>
          <h2 className="font-display text-5xl font-bold uppercase leading-none tracking-tighter text-ink md:text-9xl lg:text-[11rem]">
            Recebíveis
          </h2>
          <p className="mx-auto mt-6 max-w-xs text-xs font-light uppercase tracking-widest text-ink-soft md:text-sm">
            O patrimônio invisível gerado todos os dias pelo seu negócio.
          </p>
        </div>

        {/* TEXTO II */}
        <div
          id="textBlock2"
          className="pointer-events-none absolute w-full translate-y-20 scale-95 select-none px-6 text-center opacity-0"
        >
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.6em] text-primary md:text-sm">
            Capítulo II
          </span>
          <h2 className="font-display text-5xl font-bold uppercase leading-none tracking-tighter text-ink md:text-9xl lg:text-[11rem]">
            Securitização
          </h2>
          <p className="mx-auto mt-6 max-w-xs text-xs font-light uppercase tracking-widest text-ink-soft md:text-sm">
            Estruturamos, emitimos títulos e distribuímos o risco com governança.
          </p>
        </div>

        {/* TEXTO III */}
        <div
          id="textBlock3"
          className="pointer-events-none absolute w-full translate-y-20 scale-95 select-none px-6 text-center opacity-0"
        >
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.6em] text-primary md:text-sm">
            Capítulo III
          </span>
          <h2 className="font-display text-5xl font-bold uppercase leading-none tracking-tighter text-ink md:text-9xl lg:text-[11rem]">
            Caixa
          </h2>
          <p className="mx-auto mt-6 max-w-xs text-xs font-light uppercase tracking-widest text-ink-soft md:text-sm">
            Antecipação com taxas competitivas — sem a burocracia de um banco.
          </p>
        </div>

        {/* REVELAÇÃO DA IMAGEM */}
        <div
          id="imageRevealWrapper"
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center opacity-0"
        >
          <div
            id="imageMask"
            className="relative h-full w-full overflow-hidden"
            style={{
              clipPath: "inset(20% 25% round 24px)",
              willChange: "clip-path, transform",
            }}
          >
            <img
              id="revealImage"
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
              alt="Estrutura financeira"
              className="h-full w-full origin-center scale-[1.3] object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/30 to-transparent p-8 md:p-24">
              <div
                id="captionText"
                className="max-w-xl translate-y-10 opacity-0"
              >
                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.4em] text-primary-foreground/90">
                  Manifesto
                </span>
                <h3 className="mb-6 font-display text-3xl font-medium leading-tight text-white md:text-6xl">
                  Crédito é engenharia a serviço de quem produz.
                </h3>
                <p className="text-xs font-light leading-relaxed tracking-wide text-white/80 md:text-base">
                  Cada operação é desenhada sob medida, com transparência total sobre
                  custos, prazos e garantias. Sem letras miúdas — só o rigor de uma
                  securitizadora que respeita o tempo do seu negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

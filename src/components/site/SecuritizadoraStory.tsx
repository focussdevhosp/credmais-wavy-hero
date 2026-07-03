import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import credmaisOffice from "@/assets/credmais-founder.jpeg.asset.json";

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

      // Fundos: começam com bg1 visível
      tl.to("#bg1", { opacity: 0, duration: 2, ease: "power2.inOut" }, 0);
      tl.to("#bg2", { opacity: 1, duration: 2, ease: "power2.inOut" }, 0);

      tl.to("#textBlock1", {
        opacity: 0,
        scale: 0.9,
        yPercent: -20,
        duration: 2,
        ease: "power2.inOut",
      }, 0);


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
      tl.to("#bg2", { opacity: 0, duration: 2, ease: "power2.inOut" }, "<");
      tl.to("#bg3", { opacity: 1, duration: 2, ease: "power2.inOut" }, "<");


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
      tl.to("#bg3", { opacity: 0, duration: 2, ease: "power2.inOut" }, "<");
      tl.to("#bg4", { opacity: 1, duration: 2, ease: "power2.inOut" }, "<");


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
        className="relative flex h-screen w-full items-center justify-center overflow-hidden"
      >
        {/* Fundos gradientes imersivos — cor distinta por capítulo */}
        <div
          id="bg1"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 20% 20%, oklch(0.72 0.19 145 / 0.35), transparent 55%), radial-gradient(100% 80% at 85% 80%, oklch(0.58 0.16 148 / 0.22), transparent 60%), linear-gradient(180deg, #f3faf5 0%, #dff3e6 100%)",
            animation: "securiFloat1 14s ease-in-out infinite alternate",
          }}
        />
        <div
          id="bg2"
          className="pointer-events-none absolute inset-0 opacity-0"
          style={{
            background:
              "radial-gradient(90% 70% at 80% 25%, oklch(0.65 0.22 300 / 0.45), transparent 55%), radial-gradient(110% 90% at 15% 85%, oklch(0.55 0.24 285 / 0.30), transparent 60%), linear-gradient(160deg, #1a0f2e 0%, #2d1b4e 100%)",
            animation: "securiFloat2 18s ease-in-out infinite alternate",
          }}
        />
        <div
          id="bg3"
          className="pointer-events-none absolute inset-0 opacity-0"
          style={{
            background:
              "conic-gradient(from 210deg at 50% 50%, oklch(0.85 0.18 90), #fff8dc 40%, oklch(0.78 0.20 75) 70%, #fef3c7)",
            animation: "securiSpin 30s linear infinite",
            filter: "blur(20px)",
          }}
        />
        <div
          id="bg4"
          className="pointer-events-none absolute inset-0 opacity-0"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 50%, oklch(0.58 0.16 148 / 0.35), transparent 60%), linear-gradient(180deg, #0f1f14 0%, #05100a 100%)",
            animation: "securiPulse 8s ease-in-out infinite",
          }}
        />


        <style>{`
          @keyframes securiFloat1 {
            0% { background-position: 0% 0%, 100% 100%, 0 0; transform: scale(1); }
            100% { background-position: 10% 20%, 80% 70%, 0 0; transform: scale(1.05); }
          }
          @keyframes securiFloat2 {
            0% { background-position: 100% 0%, 0% 100%, 0 0; transform: translate3d(0,0,0); }
            100% { background-position: 70% 30%, 20% 60%, 0 0; transform: translate3d(-2%,1%,0); }
          }
          @keyframes securiSpin {
            to { transform: rotate(360deg); }
          }
          @keyframes securiPulse {
            0%,100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.08); opacity: 0.85; }
          }
        `}</style>


        {/* TEXTO I */}
        <div
          id="textBlock1"
          className="pointer-events-none absolute w-full select-none px-6 text-center"
        >
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.6em] md:text-sm" style={{ color: "oklch(0.45 0.16 148)" }}>
            Capítulo I
          </span>
          <h2 className="font-display text-5xl font-bold uppercase leading-none tracking-tighter md:text-9xl lg:text-[11rem]" style={{ color: "oklch(0.22 0.08 150)" }}>
            Recebíveis
          </h2>
          <p className="mx-auto mt-6 max-w-xs text-xs font-light uppercase tracking-widest md:text-sm" style={{ color: "oklch(0.38 0.08 150)" }}>
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
              src={credmaisOffice.url}
              alt="CredMais Securitizadora — escritório"
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

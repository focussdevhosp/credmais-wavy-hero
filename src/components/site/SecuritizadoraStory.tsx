import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import credmaisOffice from "@/assets/credmais-woman.png.asset.json";

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
      // Garante estados iniciais independentemente do estado anterior
      gsap.set("#bg1", { opacity: 1 });
      gsap.set("#bg2, #bg3", { opacity: 0 });
      gsap.set("#textBlock1", { opacity: 1, scale: 1, yPercent: 0 });
      gsap.set("#textBlock2, #textBlock3, #imageRevealWrapper", { opacity: 0 });
      gsap.set("#imageMask", { clipPath: "inset(20% 25% round 24px)" });
      gsap.set("#revealImage", { scale: 1.3 });
      gsap.set("#captionText", { opacity: 0, y: 40 });

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

      // Capítulo I -> Capítulo II
      tl.to("#bg1", { opacity: 0, duration: 2, ease: "power2.inOut" }, 0);
      tl.to("#bg2", { opacity: 1, duration: 2, ease: "power2.inOut" }, 0);
      tl.to("#textBlock1", { opacity: 0, scale: 0.9, yPercent: -20, duration: 2, ease: "power2.inOut" }, 0);
      tl.fromTo(
        "#textBlock2",
        { opacity: 0, scale: 0.95, yPercent: 20 },
        { opacity: 1, scale: 1, yPercent: 0, duration: 2, ease: "power2.inOut" },
        0.4,
      );

      // Capítulo II -> Capítulo III
      tl.to("#bg2", { opacity: 0, duration: 2, ease: "power2.inOut" }, 3);
      tl.to("#bg3", { opacity: 1, duration: 2, ease: "power2.inOut" }, 3);
      tl.to("#textBlock2", { opacity: 0, scale: 0.9, yPercent: -30, duration: 2, ease: "power2.inOut" }, 3);
      tl.fromTo(
        "#textBlock3",
        { opacity: 0, scale: 0.95, yPercent: 20 },
        { opacity: 1, scale: 1, yPercent: 0, duration: 2, ease: "power2.inOut" },
        3.4,
      );

      // Capítulo III -> Revelação da imagem
      tl.to("#bg3", { opacity: 0, duration: 2, ease: "power2.inOut" }, 6);
      tl.to("#textBlock3", { opacity: 0, scale: 1.08, yPercent: -20, duration: 2, ease: "power2.inOut" }, 6);
      tl.to("#imageRevealWrapper", { opacity: 1, duration: 1.5, ease: "power2.out" }, 6.4);

      tl.to(
        "#imageMask",
        { clipPath: "inset(0% 0% round 0px)", duration: 2.5, ease: "power3.inOut" },
        6.8,
      );

      tl.to(
        "#revealImage",
        { scale: 1, duration: 2.5, ease: "power3.inOut" },
        6.8,
      );

      tl.to(
        "#captionText",
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
        8.0,
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
        {/* Fundos imersivos — cor distinta por capítulo */}
        <div
          id="bg1"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 20% 20%, oklch(0.99 0.01 80) 0%, oklch(0.95 0.03 78) 45%, oklch(0.90 0.04 75) 100%)",
            animation: "securiFloat1 14s ease-in-out infinite alternate",
          }}
        />
        <div
          id="bg2"
          className="pointer-events-none absolute inset-0 opacity-0"
          style={{
            background:
              "radial-gradient(120% 90% at 80% 25%, oklch(0.95 0.18 95) 0%, oklch(0.88 0.20 85) 50%, oklch(0.75 0.18 80) 100%)",
            animation: "securiFloat2 18s ease-in-out infinite alternate",
          }}
        />
        <div
          id="bg3"
          className="pointer-events-none absolute inset-0 opacity-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 30%, oklch(0.78 0.12 82) 0%, oklch(0.62 0.10 70) 45%, oklch(0.42 0.06 55) 100%)",
            animation: "securiFloat1 16s ease-in-out infinite alternate",
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
        `}</style>

        {/* TEXTO I, II, III — agrupados e levemente subidos para reduzir o vazio entre a onda e a palavra */}
        <div className="pointer-events-none absolute inset-0 flex -translate-y-12 items-center justify-center md:-translate-y-20">
          {/* TEXTO I */}
          <div
            id="textBlock1"
            className="pointer-events-none absolute w-full select-none px-6 text-center"
          >
            <h2
              className="font-display text-5xl font-bold uppercase leading-none tracking-tighter md:text-9xl lg:text-[11rem]"
              style={{
                color: "oklch(1 0 0)",
                textShadow: "0 2px 24px rgba(0, 0, 0, 0.32)",
              }}
            >
              Recebíveis
            </h2>
            <p
              className="mx-auto mt-6 max-w-xs text-xs font-light uppercase tracking-widest md:text-sm"
              style={{
                color: "oklch(1 0 0 / 0.95)",
                textShadow: "0 1px 12px rgba(0, 0, 0, 0.3)",
              }}
            >
              O patrimônio invisível gerado todos os dias pelo seu negócio.
            </p>
          </div>

          {/* TEXTO II */}
          <div
            id="textBlock2"
            className="pointer-events-none absolute w-full translate-y-20 scale-95 select-none px-6 text-center opacity-0"
          >
            <h2
              className="font-display text-5xl font-bold uppercase leading-none tracking-tighter md:text-9xl lg:text-[11rem]"
              style={{
                color: "oklch(1 0 0)",
                textShadow: "0 2px 24px rgba(0, 0, 0, 0.32)",
              }}
            >
              Securitização
            </h2>
            <p
              className="mx-auto mt-6 max-w-xs text-xs font-light uppercase tracking-widest md:text-sm"
              style={{
                color: "oklch(1 0 0 / 0.95)",
                textShadow: "0 1px 12px rgba(0, 0, 0, 0.3)",
              }}
            >
              Estruturamos, emitimos títulos e distribuímos o risco com governança.
            </p>
          </div>

          {/* TEXTO III */}
          <div
            id="textBlock3"
            className="pointer-events-none absolute w-full translate-y-20 scale-95 select-none px-6 text-center opacity-0"
          >
            <h2
              className="font-display text-5xl font-bold uppercase leading-none tracking-tighter md:text-9xl lg:text-[11rem]"
              style={{
                color: "oklch(1 0 0)",
                textShadow: "0 2px 24px rgba(0, 0, 0, 0.32)",
              }}
            >
              Caixa
            </h2>
            <p
              className="mx-auto mt-6 max-w-xs text-xs font-light uppercase tracking-widest md:text-sm"
              style={{
                color: "oklch(1 0 0 / 0.95)",
                textShadow: "0 1px 12px rgba(0, 0, 0, 0.3)",
              }}
            >
              Antecipação com taxas competitivas — sem a burocracia de um banco.
            </p>
          </div>
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

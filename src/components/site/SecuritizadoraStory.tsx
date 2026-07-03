import { useEffect, useRef } from "react";
import { ShieldCheck, Layers, Sparkles } from "lucide-react";

/**
 * Seção editorial que apresenta o tema "securitizadora".
 * Fundo branco para continuar a onda do Hero sem quebra visual.
 */
export function SecuritizadoraStory() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const items = root.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-background text-ink"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--primary-glow), transparent 60%)" }}
      />

      <div className="container-page relative py-28 md:py-36">
        {/* Cabeçalho editorial */}
        <div className="max-w-3xl" data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            O que é uma securitizadora
          </p>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] text-ink md:text-6xl">
            Transformamos <em className="italic text-primary">recebíveis</em> em capital,
            com a disciplina de um mercado regulado.
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-ink-soft">
            Somos uma securitizadora: adquirimos direitos creditórios do seu negócio,
            emitimos títulos lastreados nessas operações e devolvemos para você
            aquilo que mais importa — <span className="text-ink">caixa hoje, previsibilidade amanhã</span>.
          </p>
        </div>

        {/* Capítulos */}
        <div className="mt-20 grid gap-10 md:mt-28 md:grid-cols-3">
          <Chapter
            n="I"
            title="Origem"
            kicker="O recebível"
            copy="Duplicatas, contratos e boletos que sua empresa gera todos os dias. Um patrimônio invisível, esperando para ser destravado."
            icon={<Layers className="h-5 w-5" />}
          />
          <Chapter
            n="II"
            title="Estrutura"
            kicker="A securitização"
            copy="Estruturamos a operação, emitimos títulos (CRs) e distribuímos o risco entre investidores institucionais — com auditoria e governança."
            icon={<ShieldCheck className="h-5 w-5" />}
          />
          <Chapter
            n="III"
            title="Resultado"
            kicker="O seu caixa"
            copy="Você recebe antecipado, com taxas competitivas e sem a burocracia de um banco. Continua vendendo — nós cuidamos do resto."
            icon={<Sparkles className="h-5 w-5" />}
          />
        </div>

        {/* Manifesto */}
        <div
          className="mt-24 rounded-3xl border border-border bg-surface p-10 shadow-[0_30px_80px_-40px_rgba(15,42,30,0.18)] md:mt-32 md:p-16"
          data-reveal
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Manifesto
          </p>
          <p className="mt-6 font-display text-3xl leading-tight text-ink md:text-5xl">
            Crédito não é favor. É <span className="italic text-primary">engenharia financeira</span>
            <br className="hidden md:block" />
            a serviço de quem produz.
          </p>
          <p className="mt-6 max-w-2xl text-ink-soft">
            Cada operação é desenhada sob medida, com transparência total sobre custos,
            prazos e garantias. Sem letras miúdas, sem surpresas — só o rigor de uma
            securitizadora que respeita o tempo do seu negócio.
          </p>
        </div>
      </div>

      <style>{`
        [data-reveal] {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 900ms cubic-bezier(0.22, 1, 0.36, 1),
                      transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        [data-reveal].is-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}

function Chapter({
  n,
  title,
  kicker,
  copy,
  icon,
}: {
  n: string;
  title: string;
  kicker: string;
  copy: string;
  icon: React.ReactNode;
}) {
  return (
    <article className="group relative" data-reveal>
      <div className="flex items-center gap-4 text-primary">
        <span className="font-display text-5xl italic">{n}</span>
        <span className="h-px flex-1 bg-border" />
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface">
          {icon}
        </span>
      </div>
      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft">
        Capítulo — {kicker}
      </p>
      <h3 className="mt-3 font-display text-3xl text-ink md:text-4xl">{title}</h3>
      <p className="mt-4 text-ink-soft">{copy}</p>
    </article>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre | Credmais Securitizadora" },
      {
        name: "description",
        content:
          "Somos uma securitizadora criada para simplificar o crédito de empresas brasileiras. Conheça a Credmais.",
      },
      { property: "og:title", content: "Sobre a Credmais" },
      { property: "og:description", content: "Nossa história, propósito e time." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      eyebrow="Institucional"
      title="Crédito estruturado, feito por gente que respira o mercado."
      intro="A Credmais nasceu para preencher o espaço entre bancos tradicionais e fintechs de balcão: securitização séria, ágil e transparente."
    >
      <div className="grid gap-16 md:grid-cols-[1fr_1fr]">
        <div className="space-y-6 body-text">
          <p>
            Estruturamos operações de securitização desde 2016, com atuação em todo o território
            nacional. Nossa mesa é formada por profissionais oriundos de bancos, factorings e
            gestoras de FIDC.
          </p>
          <p>
            Combinamos disciplina de crédito com tecnologia proprietária de esteira digital, o
            que nos permite responder em horas o que o mercado costuma responder em semanas.
          </p>
          <p>
            Somos regulados e auditados anualmente, seguindo as melhores práticas de governança
            corporativa aplicáveis a securitizadoras.
          </p>
        </div>

        <div className="grid gap-4">
          {[
            ["+ R$ 8 bi", "originados desde a fundação"],
            ["12 mil", "empresas atendidas"],
            ["27 estados", "cobertura nacional"],
            ["0,4%", "taxa média de inadimplência líquida"],
          ].map(([n, d]) => (
            <div key={n} className="card-surface">
              <p className="text-3xl font-semibold text-ink">{n}</p>
              <p className="mt-1 body-sm">{d}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h2 className="section-subtitle">Nossos princípios</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["Transparência", "Contratos claros, taxas explícitas e sem letras miúdas."],
            ["Velocidade", "Decisão de crédito em horas, liquidação em D+0."],
            ["Parceria", "Consultor humano do cadastro à renovação do limite."],
          ].map(([t, d]) => (
            <div key={t} className="card-surface-alt">
              <p className="card-title">{t}</p>
              <p className="mt-2 body-sm">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

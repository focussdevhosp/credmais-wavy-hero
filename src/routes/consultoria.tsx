import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Compass, Target, TrendingUp, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/consultoria")({
  head: () => ({
    meta: [
      { title: "Consultoria Financeira | Credmais Securitizadora" },
      {
        name: "description",
        content:
          "Consultoria financeira especializada para estruturar capital de giro, crédito e governança da sua empresa.",
      },
      { property: "og:title", content: "Consultoria Financeira | Credmais" },
      {
        property: "og:description",
        content: "Estruturação financeira sob medida para empresas que querem crescer com previsibilidade.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const pillars = [
    { icon: Compass, t: "Diagnóstico 360°", d: "Mapeamos capital de giro, ciclo financeiro e estrutura de crédito atual." },
    { icon: Target, t: "Plano de ação", d: "Definimos metas, produtos e limites ideais para a sua operação." },
    { icon: TrendingUp, t: "Acompanhamento", d: "Comitê recorrente com indicadores e ajustes trimestrais." },
  ];

  return (
    <PageShell
      eyebrow="Serviço · Consultoria"
      title="Estratégia financeira que sustenta o seu crescimento."
      intro="Nosso time de especialistas ajuda sua empresa a organizar o caixa, reduzir custo de capital e estruturar operações financeiras sob medida."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.t} className="rounded-2xl border border-border bg-surface p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-ink">{p.t}</h3>
            <p className="mt-2 text-sm text-ink-soft">{p.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-border bg-ink p-8 text-background md:p-12">
        <h2 className="text-3xl font-semibold">Para quem é a consultoria Credmais?</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {[
            "Empresas com faturamento acima de R$ 5MM ao ano",
            "Operações com carteira pulverizada de recebíveis",
            "Grupos que buscam securitizar ativos próprios",
            "Times financeiros em reestruturação de capital",
          ].map((i) => (
            <li key={i} className="flex items-start gap-2 text-background/85">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
              {i}
            </li>
          ))}
        </ul>
        <Link
          to="/contato"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-glow"
        >
          Falar com um consultor <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </PageShell>
  );
}

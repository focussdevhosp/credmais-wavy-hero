import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Wallet, BarChart3, RefreshCcw, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/gestao-de-contas")({
  head: () => ({
    meta: [
      { title: "Gestão de Contas | Credmais Securitizadora" },
      {
        name: "description",
        content:
          "Conciliação bancária, contas a pagar e a receber e relatórios em tempo real para tirar o controle financeiro do improviso.",
      },
      { property: "og:title", content: "Gestão de Contas | Credmais" },
      {
        property: "og:description",
        content: "Uma central financeira que unifica bancos, recebíveis e obrigações da sua empresa.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const items = [
    { icon: Wallet, t: "Contas unificadas", d: "Todas as contas bancárias e adquirentes em um só painel." },
    { icon: RefreshCcw, t: "Conciliação automática", d: "Batimento inteligente de recebíveis, boletos e PIX." },
    { icon: BarChart3, t: "DRE em tempo real", d: "Relatórios gerenciais atualizados diariamente." },
  ];

  return (
    <PageShell
      eyebrow="Serviço · Gestão de Contas"
      title="Uma central financeira para toda a sua operação."
      intro="Centralize bancos, adquirentes e recebíveis, elimine planilhas e tenha visão diária do resultado da empresa."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((f) => (
          <div key={f.t} className="rounded-2xl border border-border bg-surface p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-ink">{f.t}</h3>
            <p className="mt-2 text-sm text-ink-soft">{f.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-border bg-surface p-8 md:p-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-ink">
              Do caixa diário ao fechamento mensal, sem retrabalho.
            </h2>
            <ul className="mt-6 space-y-3 text-ink">
              {[
                "Contas a pagar e a receber com aprovação em fluxo",
                "Integração com os principais bancos e ERPs",
                "Alertas automáticos de inadimplência",
                "Relatórios exportáveis para contabilidade",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  {i}
                </li>
              ))}
            </ul>
            <Link
              to="/contato"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-glow"
            >
              Quero organizar meu financeiro <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-3xl border border-border bg-background p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Resumo do mês</p>
            <div className="mt-4 space-y-3 text-sm">
              <Row a="Entradas conciliadas" b="R$ 482.310" />
              <Row a="Boletos em aberto" b="R$ 38.900" />
              <Row a="Contas a pagar" b="R$ 129.450" />
              <Row a="Resultado líquido" b="R$ 313.960" strong />
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function Row({ a, b, strong }: { a: string; b: string; strong?: boolean }) {
  return (
    <div className={"flex items-center justify-between border-b border-border py-2 " + (strong ? "font-semibold text-ink" : "text-ink-soft")}>
      <span>{a}</span>
      <span>{b}</span>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ShieldCheck, Zap, Cog, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/boleto-garantido")({
  head: () => ({
    meta: [
      { title: "Boleto Garantido | Credmais Securitizadora" },
      {
        name: "description",
        content:
          "Emita boletos com garantia total de recebimento. A Credmais assume o risco de inadimplência e você recebe em dia.",
      },
      { property: "og:title", content: "Boleto Garantido | Credmais" },
      {
        property: "og:description",
        content: "Zero risco de inadimplência: a Credmais garante 100% dos boletos emitidos.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      eyebrow="Produto · Boleto Garantido"
      title="Boleto emitido é boleto recebido."
      intro="Com a garantia da Credmais, você previsibiliza seu fluxo de caixa e transfere para nós o risco e a operação de cobrança."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            icon: <ShieldCheck className="h-5 w-5" />,
            t: "Garantia 100%",
            d: "Independentemente do sacado pagar ou não, o valor é liquidado na sua conta na data prevista.",
          },
          {
            icon: <Zap className="h-5 w-5" />,
            t: "Régua de cobrança",
            d: "Régua multicanal (SMS, e-mail, WhatsApp) e negativação por conta da Credmais.",
            featured: true,
          },
          {
            icon: <Cog className="h-5 w-5" />,
            t: "Integração simples",
            d: "API REST, webhooks e conectores para os principais ERPs e gateways do mercado.",
          },
        ].map((f) => (
          <div
            key={f.t}
            className={
              f.featured
                ? "group relative overflow-hidden rounded-2xl bg-ink p-6 text-background shadow-[0_30px_60px_-30px_rgba(60,40,20,0.45)] transition hover:-translate-y-1"
                : "group card-surface transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            }
          >
            {f.featured && (
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/25 blur-3xl" />
            )}
            <div
              className={
                f.featured
                  ? "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-background/10 text-primary-glow"
                  : "icon-badge"
              }
            >
              {f.icon}
            </div>
            <h3
              className={
                f.featured
                  ? "mt-4 font-display text-lg font-semibold text-background"
                  : "mt-4 card-title"
              }
            >
              {f.t}
            </h3>
            <p
              className={
                f.featured ? "mt-2 text-sm text-background/70" : "mt-2 body-sm"
              }
            >
              {f.d}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="section-title">Para quem faz sentido?</h2>
          <ul className="mt-6 space-y-3 text-ink">
            {[
              "Distribuidoras e atacados com carteira pulverizada",
              "SaaS e assinaturas com faturamento recorrente",
              "Educação, saúde e serviços B2C de ticket médio",
              "Marketplaces que precisam garantir o repasse aos sellers",
            ].map((i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div className="card-dark">
          <p className="text-sm text-background/70">Exemplo de operação</p>
          <p className="mt-3 text-3xl font-semibold">R$ 100.000</p>
          <p className="text-background/70">em boletos emitidos no mês</p>
          <div className="mt-6 space-y-2 text-sm">
            <Row a="Taxa de garantia" b="1,49%" />
            <Row a="Custo total" b="R$ 1.490,00" />
            <Row a="Você recebe (líquido)" b="R$ 98.510,00" strong />
            <Row a="Dias de atraso absorvidos" b="Todos" strong />
          </div>
          <Link
            to="/contato"
            className="mt-8 btn-cta-base btn-cta-primary px-5 py-3"
          >
            Quero uma proposta <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </PageShell>
  );
}

function Row({ a, b, strong }: { a: string; b: string; strong?: boolean }) {
  return (
    <div className={"flex items-center justify-between border-b border-white/10 py-2 " + (strong ? "font-semibold text-background" : "text-background/80")}>
      <span>{a}</span>
      <span>{b}</span>
    </div>
  );
}

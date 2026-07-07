import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CreditCard, Users, ShieldCheck, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/crediario")({
  head: () => ({
    meta: [
      { title: "Crediário Próprio | Credmais Securitizadora" },
      {
        name: "description",
        content:
          "Ofereça crediário próprio ao seu cliente final com análise de crédito, cobrança e garantia da Credmais.",
      },
      { property: "og:title", content: "Crediário Próprio | Credmais" },
      {
        property: "og:description",
        content: "Aumente suas vendas parcelando direto com o cliente, sem custo de maquininha.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const items = [
    { icon: CreditCard, t: "Parcelamento próprio", d: "Você define prazos e taxas; nós cuidamos da análise e do risco." },
    { icon: Users, t: "Análise instantânea", d: "Aprovação em segundos com motor de crédito próprio." },
    { icon: ShieldCheck, t: "Cobrança gerenciada", d: "Régua multicanal e negativação por conta da Credmais." },
  ];

  return (
    <PageShell
      eyebrow="Produto · Crediário"
      title="Venda mais, parcelando direto com o seu cliente."
      intro="Ofereça crediário próprio no PDV ou no e-commerce sem depender de bandeiras e maquininhas. A Credmais assume risco, cobrança e liquidação."
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

      <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl font-semibold text-ink">Segmentos que mais crescem</h2>
          <ul className="mt-6 space-y-3 text-ink">
            {[
              "Móveis e eletrodomésticos",
              "Óticas e clínicas de estética",
              "Materiais de construção",
              "Educação e cursos livres",
            ].map((i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-border bg-surface p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Como funciona</p>
          <ol className="mt-4 space-y-4">
            {[
              ["Cliente escolhe pagar no crediário", "No PDV, WhatsApp ou checkout."],
              ["Análise em segundos", "Motor Credmais valida e aprova."],
              ["Contrato digital assinado", "Assinatura eletrônica com validade jurídica."],
              ["Você recebe à vista", "Credmais assume o risco e cobra o cliente."],
            ].map(([t, d], i) => (
              <li key={t} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-ink">{t}</p>
                  <p className="text-sm text-ink-soft">{d}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link
            to="/contato"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-glow"
          >
            Ativar o crediário <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </PageShell>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/antecipacao-de-recebiveis")({
  head: () => ({
    meta: [
      { title: "Antecipação de Recebíveis | Credmais Securitizadora" },
      {
        name: "description",
        content:
          "Antecipe duplicatas, cheques e contratos com a Credmais. Liquidação em D+0, taxas competitivas e limite recorrente.",
      },
      { property: "og:title", content: "Antecipação de Recebíveis | Credmais" },
      {
        property: "og:description",
        content: "Transforme suas vendas a prazo em caixa hoje mesmo, com governança de securitizadora.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      eyebrow="Produto · Antecipação"
      title="Venda hoje, receba hoje."
      intro="Antecipe duplicatas, cheques, contratos e recebíveis de cartão com uma securitizadora que entende do seu segmento."
    >
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 text-ink-soft">
          <p>
            A operação de antecipação da Credmais é estruturada sob a forma de aquisição de
            direitos creditórios, com emissão de CR (Certificado de Recebíveis) quando aplicável.
            Isso significa mais segurança jurídica para você e para os investidores que fundeiam
            a operação.
          </p>
          <p>
            Nosso comitê analisa concentração, safra e comportamento dos sacados para desenhar um
            limite recorrente que cresce à medida que sua operação evolui.
          </p>

          <div className="mt-8 grid gap-3">
            {[
              "Duplicatas mercantis e de serviço",
              "Cheques pré-datados",
              "Contratos de fornecimento (B2B)",
              "Recebíveis de cartão e maquininhas",
              "CCB e CCE lastreadas",
            ].map((i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span className="text-ink">{i}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)]">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Como funciona</p>
          <ol className="mt-4 space-y-4">
            {[
              ["Cadastro digital", "Envio dos documentos e KYC em minutos."],
              ["Análise em 4h", "Comitê define limite e taxa."],
              ["Envio dos títulos", "Upload ou integração via API."],
              ["Liquidação D+0", "Recebimento por PIX no mesmo dia."],
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
            className="mt-6 w-full btn-cta-base btn-cta-primary px-5 py-3"
          >
            Simular agora <ArrowRight className="h-4 w-4" />
          </Link>
        </aside>
      </div>
    </PageShell>
  );
}

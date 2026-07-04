import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Credmais Securitizadora" },
      {
        name: "description",
        content:
          "Fale com um consultor da Credmais. Simulação gratuita de antecipação de recebíveis e boleto garantido.",
      },
      { property: "og:title", content: "Contato · Credmais" },
      { property: "og:description", content: "Fale com nosso time comercial." },
    ],
  }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell
      eyebrow="Fale com a gente"
      title="Um consultor responde em até 1 hora útil."
      intro="Conte um pouco sobre sua operação. Preferimos entender antes de propor."
    >
      <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-4 card-surface-lg"
        >
          <Field label="Empresa" name="empresa" required />
          <Field label="Nome do responsável" name="nome" required />
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="E-mail" name="email" type="email" required />
            <Field label="Telefone / WhatsApp" name="fone" required />
          </div>
          <label className="block text-sm">
            <span className="mb-1 block font-medium text-ink">Sobre sua necessidade</span>
            <textarea
              rows={4}
              className="field-input"
              placeholder="Ex.: Faturamos R$ 1M/mês em duplicatas, gostaria de simular antecipação."
            />
          </label>
          <button
            type="submit"
            className="w-full btn-cta-base btn-cta-primary px-5 py-3"
          >
            <Send className="h-4 w-4" /> Enviar mensagem
          </button>
          {sent && (
            <p className="text-sm text-primary">Recebemos! Entraremos em contato em breve.</p>
          )}
        </form>

        <div className="space-y-4">
          <InfoCard
            icon={<Mail className="h-5 w-5" />}
            title="E-mail"
            content="comercial@credmais.com.br"
          />
          <InfoCard
            icon={<Phone className="h-5 w-5" />}
            title="Telefone"
            content="0800 000 0000"
          />
          <InfoCard
            icon={<MapPin className="h-5 w-5" />}
            title="Endereço"
            content="Av. Faria Lima, 1000 · São Paulo/SP"
          />
          <div className="card-dark p-6">
            <p className="text-sm text-background/70">Horário de atendimento</p>
            <p className="mt-2 font-semibold">Seg a Sex · 8h às 19h</p>
            <p className="text-background/70">Sábado · 9h às 13h</p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block font-medium text-ink">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="field-input"
      />
    </label>
  );
}

function InfoCard({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) {
  return (
    <div className="flex items-start gap-4 card-surface p-5">
      <span className="icon-badge">{icon}</span>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-ink-soft">{title}</p>
        <p className="mt-1 font-semibold text-ink">{content}</p>
      </div>
    </div>
  );
}

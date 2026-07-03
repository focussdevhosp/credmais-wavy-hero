import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { SecuritizadoraStory } from "@/components/site/SecuritizadoraStory";
import { ParallaxSection } from "@/components/ui/parallax-scrolling";
import { ArrowRight, Banknote, ShieldCheck, Clock3, LineChart } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <SecuritizadoraStory />

      <section className="container-page py-24">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Nossas soluções</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">
              Dois produtos, um único objetivo: caixa previsível.
            </h2>
          </div>
          <p className="text-ink-soft">
            Estruturamos operações de crédito lastreadas em recebíveis performados e a performar,
            com governança de securitizadora e cobrança integrada.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <ProductCard
            to="/antecipacao-de-recebiveis"
            icon={<Banknote className="h-5 w-5" />}
            title="Antecipação de Recebíveis"
            copy="Duplicatas, cheques e contratos convertidos em caixa em até 24h, com taxas competitivas e limite recorrente."
            bullets={["Liquidação D+0", "Análise em 4 horas", "Sem tarifa de cadastro"]}
          />
          <ProductCard
            to="/boleto-garantido"
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Boleto Garantido"
            copy="Emita boletos sabendo que o valor cai na sua conta — inadimplência é problema nosso, não seu."
            bullets={["Garantia 100%", "Régua de cobrança inclusa", "Integração via API"]}
          />
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {[
            { icon: <Clock3 className="h-5 w-5" />, t: "Onboarding em 48h", d: "Cadastro digital, análise de crédito e primeiro desembolso na mesma semana." },
            { icon: <LineChart className="h-5 w-5" />, t: "Limite que cresce com você", d: "Reavaliação automática do limite conforme seu histórico de operações." },
            { icon: <ShieldCheck className="h-5 w-5" />, t: "Governança de securitizadora", d: "Emissão de CRs, auditoria independente e transparência total." },
          ].map((f) => (
            <div key={f.t} className="rounded-2xl border border-border bg-surface p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">{f.t}</h3>
              <p className="mt-2 text-sm text-ink-soft">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-24">
        <div className="rounded-3xl border border-border bg-surface p-10 shadow-[0_30px_80px_-40px_rgba(15,42,30,0.18)] md:p-14">
          <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-3xl font-semibold text-ink md:text-4xl">
                Descubra em 2 minutos quanto sua empresa pode antecipar.
              </h2>
              <p className="mt-4 max-w-xl text-ink-soft">
                Simulação gratuita, sem compromisso, com resposta de um consultor humano.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-glow"
              >
                Fazer simulação <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCard({
  to,
  icon,
  title,
  copy,
  bullets,
}: {
  to: string;
  icon: React.ReactNode;
  title: string;
  copy: string;
  bullets: string[];
}) {
  return (
    <Link
      to={to}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-surface p-8 transition hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
    >
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mt-5 text-2xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-ink-soft">{copy}</p>
      <ul className="mt-6 space-y-2 text-sm text-ink">
        {bullets.map((b) => (
          <li key={b} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {b}
          </li>
        ))}
      </ul>
      <span className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-primary">
        Saiba mais <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

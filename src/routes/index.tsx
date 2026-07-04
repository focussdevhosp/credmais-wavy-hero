import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { SecuritizadoraStory } from "@/components/site/SecuritizadoraStory";
import { ParallaxSection } from "@/components/ui/parallax-scrolling";
import { TextParallaxContentExample } from "@/components/ui/text-parallax-content-scroll";
import { WavyMarquee } from "@/components/site/WavyMarquee";
import { ArrowRight, ShieldCheck, Clock3, LineChart } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <SecuritizadoraStory />


      <WavyMarquee />

      <TextParallaxContentExample />




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


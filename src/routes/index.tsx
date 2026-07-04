import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { SecuritizadoraStory } from "@/components/site/SecuritizadoraStory";
import { StickyScrollReveal } from "@/components/ui/sticky-scroll";
import { ArrowRight } from "lucide-react";
import { FlipFeatures } from "@/components/site/FlipFeatures";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <SecuritizadoraStory />


      <TextParallaxContentExample />




      <FlipFeatures />


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


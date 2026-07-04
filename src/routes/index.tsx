import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { SecuritizadoraStory } from "@/components/site/SecuritizadoraStory";
import { ParallaxSection } from "@/components/ui/parallax-scrolling";
import { TextParallaxContentExample } from "@/components/ui/text-parallax-content-scroll";
import { WavyMarquee } from "@/components/site/WavyMarquee";
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


      <WavyMarquee />

      <TextParallaxContentExample />




      <FlipFeatures />


      <section className="container-page py-24">
        <div className="card-surface-lg md:p-14">
          <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="section-title">
                Descubra em 2 minutos quanto sua empresa pode antecipar.
              </h2>
              <p className="mt-4 max-w-xl body-text">
                Simulação gratuita, sem compromisso, com resposta de um consultor humano.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link
                to="/contato"
                className="btn-cta-base btn-cta-primary px-6 py-3"
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


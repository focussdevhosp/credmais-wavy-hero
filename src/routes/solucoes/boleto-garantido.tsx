import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '@/components/credmais/Hero';
import { Navbar } from '@/components/credmais/Navbar';
import { Footer } from '@/components/credmais/Footer';
import { SolutionFeatures } from '@/components/credmais/SolutionFeatures';
import { FAQSection } from '@/components/credmais/FAQSection';
import heroAsset from '@/assets/boleto-hero.png.asset.json';
import benefit1Asset from '@/assets/boleto-benefit-1.png.asset.json';
import benefit2Asset from '@/assets/boleto-benefit-2.png.asset.json';
import bannerAsset from '@/assets/boleto-banner.png.asset.json';
import { assetUrl } from '@/lib/asset-url';

export const Route = createFileRoute('/solucoes/boleto-garantido')({
  component: BoletoGarantidoPage,
});

function BoletoGarantidoPage() {
  const features = [
    {
      title: "Mais Previsibilidade para Planejar",
      description: "Antecipe o recebimento de seus boletos e mantenha o foco no crescimento. O Boleto Garantido CredMais elimina o tempo de espera e a burocracia, garantindo que o capital das suas vendas esteja disponível quando você mais precisa.",
      image: assetUrl(benefit1Asset),
      imageLeft: false,
      buttonText: "Simular Agora"
    },
    {
      title: "Segurança e Clareza em Cada Antecipação",
      description: "Acompanhe suas operações com transparência total. Nossa solução oferece previsibilidade absoluta para seu fluxo de caixa, permitindo um planejamento financeiro sólido e sem surpresas desagradáveis.",
      image: assetUrl(benefit2Asset),
      imageLeft: true,
      buttonText: "Falar com Consultor"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero 
        title="CredMais Securitizadora."
        subtitle="Seus boletos transformados em liquidez imediata com segurança e solidez."
        image={assetUrl(heroAsset)}
      />
      
      <SolutionFeatures features={features} />

      <section className="w-full">
        <img 
          src={assetUrl(bannerAsset)} 
          alt="Você vende a prazo. A CredMais antecipa." 
          className="w-full h-auto block"
        />
      </section>

      <div className="py-16 sm:py-24 bg-[#F6F8FA]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-gold rounded-lg" />
              </div>
              <h4 className="text-xl font-heading font-bold text-navy">Fim da Inadimplência</h4>
              <p className="text-navy/60 font-light leading-relaxed">
                Reduza riscos e garanta o recebimento das suas vendas, independente do comportamento do cliente.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-gold rounded-lg" />
              </div>
              <h4 className="text-xl font-heading font-bold text-navy">Capital de Giro</h4>
              <p className="text-navy/60 font-light leading-relaxed">
                Mantenha seu caixa saudável para aproveitar oportunidades de mercado e negociações com fornecedores.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-gold rounded-lg" />
              </div>
              <h4 className="text-xl font-heading font-bold text-navy">Agilidade Digital</h4>
              <p className="text-navy/60 font-light leading-relaxed">
                Processo de antecipação 100% online, rápido e sem as burocracias das instituições bancárias.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <FAQSection />
      <Footer />
    </div>
  );
}

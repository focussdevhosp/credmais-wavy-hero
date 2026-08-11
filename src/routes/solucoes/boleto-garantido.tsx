import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '@/components/credmais/Hero';
import { Navbar } from '@/components/credmais/Navbar';
import { Footer } from '@/components/credmais/Footer';
import { SolutionFeatures } from '@/components/credmais/SolutionFeatures';
import boletoHeroAsset from '@/assets/boleto-hero.png.asset.json';
import benefit1Asset from '@/assets/boleto-benefit-1.png.asset.json';
import benefit2Asset from '@/assets/boleto-benefit-2.png.asset.json';
import bannerAsset from '@/assets/boleto-banner.png.asset.json';

export const Route = createFileRoute('/solucoes/boleto-garantido')({
  component: BoletoGarantidoPage,
});

function BoletoGarantidoPage() {
  const features = [
    {
      title: "Antecipe o Valor das suas Vendas a Prazo",
      description: "Com o Boleto Garantido CredMais, você não precisa esperar o vencimento para ter capital em mãos. Transformamos seus boletos futuros em liquidez imediata para sua empresa continuar crescendo, repondo estoque e mantendo a produção avançando.",
      image: benefit1Asset.url,
      imageLeft: false,
      buttonText: "Simular Antecipação"
    },
    {
      title: "Segurança e Clareza em Cada Operação",
      description: "Oferecemos uma solução financeira transparente para o fluxo de caixa da sua empresa. Acompanhe cada etapa com previsibilidade total, garantindo que seu dinheiro não fique parado e sua gestão financeira seja impecável.",
      image: benefit2Asset.url,
      imageLeft: true,
      buttonText: "Falar com Consultor"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero 
        title="Você vende a prazo. A CredMais antecipa."
        subtitle="Converta seus boletos a receber em capital imediato para o seu negócio."
        image={boletoHeroAsset.url}
      />
      
      <SolutionFeatures features={features} />

      <section className="w-full">
        <img 
          src={bannerAsset.url} 
          alt="CredMais Securitizadora - Seus boletos transformados em capital" 
          className="w-full h-auto block"
        />
      </section>

      <div className="py-24 bg-[#F6F8FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-gold rounded-lg" />
              </div>
              <h4 className="text-xl font-heading font-bold text-navy">Fim da Inadimplência</h4>
              <p className="text-navy/60 font-light leading-relaxed">
                Reduza riscos e garanta o recebimento das suas vendas, independente do pagamento do cliente final.
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
                Processo de antecipação 100% online, rápido e sem as burocracias das instituições bancárias tradicionais.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

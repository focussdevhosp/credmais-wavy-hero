import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '@/components/credmais/Hero';
import { Navbar } from '@/components/credmais/Navbar';
import { Footer } from '@/components/credmais/Footer';
import { SolutionFeatures } from '@/components/credmais/SolutionFeatures';
import heroAsset from '@/assets/antecipacao-hero.png.asset.json';
import benefit1Asset from '@/assets/antecipacao-benefit-1.png.asset.json';
import benefit2Asset from '@/assets/antecipacao-benefit-2.png.asset.json';
import bannerAsset from '@/assets/antecipacao-banner.png.asset.json';

export const Route = createFileRoute('/solucoes/antecipacao-de-recebiveis')({
  component: AntecipacaoPage,
});

function AntecipacaoPage() {
  const features = [
    {
      title: "Seu dinheiro não precisa ficar parado",
      description: "Antecipe seus boletos e mantenha a produção avançando. A CredMais oferece a liquidez que sua indústria ou comércio precisa para não interromper o ciclo de crescimento por falta de capital de giro.",
      image: benefit1Asset.url,
      imageLeft: false,
      buttonText: "Antecipar Agora"
    },
    {
      title: "Boletos a Receber? Antecipe o Valor.",
      description: "Venda a prazo e receba antes do vencimento. Nossa solução de antecipação é simples, rápida e pensada para empresas que buscam eficiência financeira sem as taxas abusivas do mercado tradicional.",
      image: benefit2Asset.url,
      imageLeft: true,
      buttonText: "Consultar Taxas"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero 
        title="Do boleto ao Capital."
        subtitle="Antecipação simples para sua empresa continuar crescendo com segurança."
        image={heroAsset.url}
      />
      
      <SolutionFeatures features={features} />

      <section className="w-full">
        <img 
          src={bannerAsset.url} 
          alt="Não espere o vencimento - CredMais" 
          className="w-full h-auto block"
        />
      </section>

      <div className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-light mb-4">Por que antecipar com a <span className="text-gold font-bold">CredMais</span>?</h2>
            <p className="text-white/60 font-light max-w-2xl mx-auto">Experiência e solidez no mercado de securitização para impulsionar seu negócio.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-gold text-4xl font-bold mb-4">0%</div>
              <h4 className="font-heading font-bold mb-2">IOF</h4>
              <p className="text-white/40 text-sm font-light">Isenção de IOF em todas as operações de securitização.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-gold text-4xl font-bold mb-4">2h</div>
              <h4 className="font-heading font-bold mb-2">Liberação</h4>
              <p className="text-white/40 text-sm font-light">Análise e crédito na conta em tempo recorde após aprovação.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-gold text-4xl font-bold mb-4">100%</div>
              <h4 className="font-heading font-bold mb-2">Digital</h4>
              <p className="text-white/40 text-sm font-light">Toda a operação realizada através da nossa plataforma segura.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-gold text-4xl font-bold mb-4">Suporte</div>
              <h4 className="font-heading font-bold mb-2">Personalizado</h4>
              <p className="text-white/40 text-sm font-light">Consultores especialistas dedicados ao seu negócio.</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

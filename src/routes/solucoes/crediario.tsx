import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '@/components/credmais/Hero';
import { Navbar } from '@/components/credmais/Navbar';
import { Footer } from '@/components/credmais/Footer';
import { SolutionFeatures } from '@/components/credmais/SolutionFeatures';
import heroAsset from '@/assets/crediario-hero.png.asset.json';
import benefit1Asset from '@/assets/crediario-benefit-1.png.asset.json';
import benefit2Asset from '@/assets/crediario-benefit-2.png.asset.json';
import benefit3Asset from '@/assets/crediario-benefit-3.png.asset.json';
import benefit4Asset from '@/assets/crediario-benefit-4.png.asset.json';
import benefit5Asset from '@/assets/crediario-benefit-5.png.asset.json';
import benefit6Asset from '@/assets/crediario-benefit-6.png.asset.json';
import benefit7Asset from '@/assets/crediario-benefit-7.png.asset.json';
import benefit8Asset from '@/assets/crediario-benefit-8.png.asset.json';
import bannerAsset from '@/assets/crediario-banner.png.asset.json';
import { assetUrl } from '@/lib/asset-url';

export const Route = createFileRoute('/solucoes/crediario')({
  component: CrediarioPage,
});

function CrediarioPage() {
  const features = [
    {
      title: "Facilite a Compra. Aumente suas Vendas.",
      description: "Ofereça parcelamento próprio e transforme o interesse do seu cliente em negócio fechado. Nossa plataforma simplifica a aprovação de crédito em tempo real.",
      image: assetUrl(benefit1Asset),
      imageLeft: false,
      buttonText: "Ativar Crediário"
    },
    {
      title: "Mais Poder de Compra para seus Clientes",
      description: "Dê liberdade para seus clientes escolherem a melhor forma de pagar, aumentando o ticket médio e a fidelização com sua marca.",
      image: assetUrl(benefit2Asset),
      imageLeft: true,
      buttonText: "Saber Mais"
    },
    {
      title: "Crediário Também para Serviços",
      description: "Sua clínica, escritório ou empresa de serviços pode oferecer condições que ajudam seus clientes a realizar planos importantes hoje.",
      image: assetUrl(benefit3Asset),
      imageLeft: false,
      buttonText: "Ver Soluções"
    },
    {
      title: "Parcele. Venda. Cresça.",
      description: "Uma solução de crediário pensada especificamente para o comércio, com taxas competitivas e gestão completa de cobrança.",
      image: assetUrl(benefit4Asset),
      imageLeft: true,
      buttonText: "Simular Taxas"
    },
    {
      title: "Mais Opções para Vender a Prazo",
      description: "Aproxime seus clientes da compra com flexibilidade total. O Crediário CredMais se adapta ao seu modelo de negócio.",
      image: assetUrl(benefit5Asset),
      imageLeft: false,
      buttonText: "Consultar Especialista"
    },
    {
      title: "Do Orçamento à Venda Fechada",
      description: "Elimine as barreiras no fechamento da venda. Facilite o pagamento e amplie suas oportunidades de mercado com segurança.",
      image: assetUrl(benefit6Asset),
      imageLeft: true,
      buttonText: "Começar Agora"
    },
    {
      title: "Mais Flexibilidade no Pagamento",
      description: "Abra novos caminhos para o seu cliente concluir a compra. Oferecemos suporte completo para implementar seu crediário garantido.",
      image: assetUrl(benefit7Asset),
      imageLeft: false,
      buttonText: "Solicitar Proposta"
    },
    {
      title: "Fortaleça seu Relacionamento",
      description: "Crediário inteligente para fortalecer suas vendas e o vínculo com seus clientes, criando uma base sólida para o crescimento.",
      image: assetUrl(benefit8Asset),
      imageLeft: true,
      buttonText: "Ver Benefícios"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero 
        title="Seu Crediário. Nossa Garantia."
        subtitle="Venda parcelado no boleto ou carnê com risco zero e liquidez imediata."
        image={assetUrl(heroAsset)}
      />
      
      <SolutionFeatures features={features} />

      <section className="w-full">
        <img 
          src={assetUrl(bannerAsset)} 
          alt="Receba antes, continue crescendo - CredMais" 
          className="w-full h-auto block"
        />
      </section>

      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-navy rounded-[60px] p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-heading font-light text-white mb-8">
                Pronto para transformar as vendas da sua <span className="text-gold font-bold">empresa</span>?
              </h2>
              <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto font-light">
                Junte-se a milhares de lojistas que já vendem com o Crediário Garantido CredMais.
              </p>
              <button className="bg-gold hover:bg-gold/90 text-white px-12 py-5 rounded-full font-heading font-bold uppercase tracking-widest text-sm transition-all shadow-xl shadow-gold/20">
                Começar agora
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

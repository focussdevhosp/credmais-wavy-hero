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

export const Route = createFileRoute('/solucoes/crediario')({
  component: CrediarioPage,
});

function CrediarioPage() {
  const features = [
    {
      title: "Venda no Carnê com Segurança Total",
      description: "O Crediário CredMais permite que sua empresa ofereça parcelamento próprio sem correr riscos de inadimplência. Nós assumimos a gestão de crédito, permitindo que você foque apenas em vender mais e fidelizar seus clientes.",
      image: benefit1Asset.url,
      imageLeft: false,
      buttonText: "Ativar Crediário"
    },
    {
      title: "Mais Previsibilidade para seu Planejamento",
      description: "Antecipe os recebimentos do seu crediário e organize melhor o seu fluxo de caixa. Com nossa solução, o valor das parcelas futuras vira capital disponível hoje para novos investimentos e expansão do seu negócio.",
      image: benefit2Asset.url,
      imageLeft: true,
      buttonText: "Simular Agora"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero 
        title="Seu Crediário. Nossa Garantia."
        subtitle="Venda parcelado no boleto ou carnê com risco zero e liquidez imediata."
        image={heroAsset.url}
      />
      
      <SolutionFeatures features={features} />

      <section className="w-full">
        <img 
          src={bannerAsset.url} 
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

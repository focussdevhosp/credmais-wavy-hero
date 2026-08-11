import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '@/components/credmais/Hero';
import { Navbar } from '@/components/credmais/Navbar';
import { Footer } from '@/components/credmais/Footer';
import { SolutionFeatures } from '@/components/credmais/SolutionFeatures';
import heroAsset from '@/assets/seguro-hero.png.asset.json';
import benefit1Asset from '@/assets/seguro-benefit-1.png.asset.json';
import benefit2Asset from '@/assets/seguro-benefit-2.png.asset.json';
import bannerAsset from '@/assets/seguro-banner.png.asset.json';

export const Route = createFileRoute('/solucoes/seguro-vendas')({
  component: SeguroVendasPage,
});

function SeguroVendasPage() {
  const features = [
    {
      title: "Proteção Total contra Inadimplência",
      description: "O Seguro Vendas CredMais garante que sua empresa receba o valor de cada transação realizada, mesmo que o cliente final não honre o pagamento. Uma camada extra de segurança para suas operações de crédito e vendas a prazo.",
      image: benefit1Asset.url,
      imageLeft: false,
      buttonText: "Contratar Seguro"
    },
    {
      title: "Mais Capital para Movimentar seu Caixa",
      description: "Use hoje o valor das vendas que receberia depois. Combinamos a proteção do seguro com a liquidez da antecipação, oferecendo o pacote completo para a saúde financeira do seu negócio crescer sem limites.",
      image: benefit2Asset.url,
      imageLeft: true,
      buttonText: "Saiba Mais"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero 
        title="Blindagem Financeira para seu Negócio."
        subtitle="Venda com a certeza do recebimento. Proteção ativa contra riscos de crédito."
        image={heroAsset.url}
      />
      
      <SolutionFeatures features={features} />

      <section className="w-full">
        <img 
          src={bannerAsset.url} 
          alt="Seu dinheiro não precisa ficar parado - CredMais" 
          className="w-full h-auto block"
        />
      </section>

      <div className="py-24 bg-[#F6F8FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-light text-navy mb-8 leading-tight">
                Venda sem <span className="text-gold font-bold">preocupações</span>.
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0 border border-navy/5">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy mb-1">Certeza de Recebimento</h4>
                    <p className="text-navy/60 text-sm font-light">Independente do comportamento do pagador, seu caixa está garantido.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0 border border-navy/5">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy mb-1">Score de Crédito</h4>
                    <p className="text-navy/60 text-sm font-light">Melhoria nos indicadores financeiros da sua empresa perante o mercado.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0 border border-navy/5">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy mb-1">Tranquilidade Jurídica</h4>
                    <p className="text-navy/60 text-sm font-light">Redução drástica de custos com cobranças e processos judiciais.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-navy rounded-[40px] p-10 text-white">
              <h3 className="text-2xl font-heading font-bold mb-6">Solicite um Diagnóstico</h3>
              <p className="text-white/60 font-light mb-8">Nossos especialistas analisarão seu volume de vendas para oferecer a melhor cobertura.</p>
              <form className="space-y-4">
                <input type="text" placeholder="Nome da Empresa" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-all" />
                <input type="email" placeholder="E-mail Corporativo" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-all" />
                <button className="w-full bg-gold hover:bg-gold/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-gold/20">
                  Falar com Consultor
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

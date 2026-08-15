import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '@/components/credmais/Hero';
import { Navbar } from '@/components/credmais/Navbar';
import { Footer } from '@/components/credmais/Footer';
import { SolutionFeatures } from '@/components/credmais/SolutionFeatures';
import { ContactForm } from '@/components/credmais/ContactForm';
import { motion } from 'framer-motion';

import heroAsset from '@/assets/seguro-v3-hero.png.asset.json';
import strongAsset from '@/assets/seguro-v3-strong.png.asset.json';
import riskAsset from '@/assets/seguro-v3-risk.png.asset.json';
import applianceAsset from '@/assets/seguro-v3-appliance.png.asset.json';
import contractAsset from '@/assets/seguro-v3-contract.png.asset.json';
import shoppingAsset from '@/assets/seguro-v3-shopping.png.asset.json';
import opticalAsset from '@/assets/seguro-v3-optical.png.asset.json';
import meetingAsset from '@/assets/seguro-v3-meeting.png.asset.json';
import discussionAsset from '@/assets/seguro-v3-seguranca.png.asset.json';
import familyAsset from '@/assets/seguro-v3-family.png.asset.json';
import { assetUrl } from '@/lib/asset-url';

export const Route = createFileRoute('/solucoes/seguro-vendas')({
  component: SeguroVendasPage,
});

function SeguroVendasPage() {
  const features = [
    {
      title: "Seu Caixa Protegido. Sua Empresa Mais Forte.",
      description: "Venda a prazo com a segurança de receber. O Seguro Vendas CredMais blinda seu capital de giro contra imprevistos, permitindo que você foque no que realmente importa: o crescimento do seu negócio.",
      image: assetUrl(strongAsset),
      imageLeft: false,
      buttonText: "Fortalecer meu Caixa"
    },
    {
      title: "Mais Vendas. Menos Risco.",
      description: "Proteção para sua empresa vender a prazo com confiança. Analisamos o perfil de crédito e garantimos o recebimento, eliminando o medo da inadimplência no momento de fechar novos negócios.",
      image: assetUrl(riskAsset),
      imageLeft: true,
      buttonText: "Reduzir Riscos"
    },
    {
      title: "O Cliente Compra. Sua Empresa Vende Protegida.",
      description: "O seguro reduz o impacto da inadimplência no seu negócio. Ofereça prazos competitivos para seus clientes enquanto mantém seu fluxo de caixa totalmente segurado e previsível.",
      image: assetUrl(applianceAsset),
      imageLeft: false,
      buttonText: "Vender com Segurança"
    },
    {
      title: "Venda a Prazo Sem Expor o Seu Caixa.",
      description: "Mais segurança para sua empresa continuar crescendo. Com nossa estrutura de securitização e seguro, você escala suas operações sem comprometer a liquidez imediata necessária para o dia a dia.",
      image: assetUrl(contractAsset),
      imageLeft: true,
      buttonText: "Escalar Vendas"
    },
    {
      title: "Inadimplência Não Precisa Parar Suas Vendas.",
      description: "Proteja seus recebimentos e mantenha o caixa em movimento. Nossa cobertura garante que, mesmo em cenários adversos, o fluxo de entrada da sua empresa permaneça constante e saudável.",
      image: assetUrl(shoppingAsset),
      imageLeft: false,
      buttonText: "Proteger Recebimentos"
    },
    {
      title: "Venda com Confiança. Receba com Segurança.",
      description: "Proteção para o seu negócio continuar vendendo a prazo. Ideal para prestadores de serviços e varejistas que buscam expandir sua base de clientes sem aumentar a exposição ao risco de crédito.",
      image: assetUrl(opticalAsset),
      imageLeft: true,
      buttonText: "Garantir Segurança"
    },
    {
      title: "Proteja o Recebimento. Preserve o Crescimento.",
      description: "O seguro ajuda a manter a previsibilidade do seu caixa. Planeje seus investimentos futuros com a certeza de que os valores das vendas realizadas entrarão conforme o previsto.",
      image: assetUrl(meetingAsset),
      imageLeft: false,
      buttonText: "Preservar Crescimento"
    },
    {
      title: "Mais Segurança Para Quem Vende.",
      description: "Sua empresa protegida contra o impacto da inadimplência. Uma solução robusta que integra análise de risco, garantia de recebimento e gestão eficiente de cobrança.",
      image: assetUrl(discussionAsset),
      imageLeft: true,
      buttonText: "Solicitar Proteção"
    },
    {
      title: "Venda Mais. Arrisque Menos.",
      description: "Com o seguro, seu recebimento fica protegido. Aumente seu ticket médio e fidelize clientes oferecendo melhores condições de pagamento, tudo com a garantia da CredMais.",
      image: assetUrl(familyAsset),
      imageLeft: false,
      buttonText: "Vender Agora"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <Hero 
        title="Seu Caixa no Ritmo do seu Negócio."
        subtitle="O seguro que protege suas vendas e garante a liquidez que sua empresa precisa para crescer sem riscos."
        image={assetUrl(heroAsset)}
        hideContent
      />

      <div className="bg-ice py-20 border-y border-navy/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-5xl font-heading font-bold text-gold">100%</h3>
              <p className="text-navy/60 font-light uppercase tracking-widest text-sm">Garantia de Recebimento</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-5xl font-heading font-bold text-navy">ZERO</h3>
              <p className="text-navy/60 font-light uppercase tracking-widest text-sm">Risco de Inadimplência</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-5xl font-heading font-bold text-gold">24h</h3>
              <p className="text-navy/60 font-light uppercase tracking-widest text-sm">Análise de Crédito Ágil</p>
            </motion.div>
          </div>
        </div>
      </div>
      
      <SolutionFeatures features={features} />

      <section className="py-16 sm:py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-light mb-8 leading-tight">
                Venda com <span className="text-gold font-bold italic">liberdade</span> e segurança total.
              </h2>
              <div className="space-y-8">
                {[
                  { title: "Previsibilidade", desc: "Saiba exatamente quando e quanto vai receber." },
                  { title: "Expansão", desc: "Aumente seus limites de venda sem medo." },
                  { title: "Eficiência", desc: "Reduza custos com departamentos de cobrança." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-gold/50 transition-colors">
                      <div className="w-2 h-2 bg-gold rounded-full shadow-[0_0_15px_rgba(199,169,107,0.8)]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-heading font-bold mb-2">{item.title}</h4>
                      <p className="text-white/40 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <ContactForm
              title="Seja um parceiro"
              description="Proteja suas vendas agora mesmo. Preencha os dados e nossa equipe entrará em contato."
              submitLabel="Solicitar diagnóstico gratuito"
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
import { createFileRoute } from '@tanstack/react-router';
import { Navbar } from '@/components/credmais/Navbar';
import { Footer } from '@/components/credmais/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

// Assets
import heroAsset from '@/assets/antecipacao-v3-hero.png.asset.json';
import benefit1Asset from '@/assets/antecipacao-v3-benefit-1.png.asset.json';
import benefit2Asset from '@/assets/antecipacao-v3-benefit-2.png.asset.json';
import bannerAsset from '@/assets/antecipacao-v3-banner.png.asset.json';
import teamAsset from '@/assets/antecipacao-v3-team.png.asset.json';
import growthAsset from '@/assets/antecipacao-v3-growth.png.asset.json';
import intelligentAsset from '@/assets/antecipacao-v3-intelligent.png.asset.json';
import supportAsset from '@/assets/antecipacao-v3-support.png.asset.json';
import motionAsset from '@/assets/antecipacao-v3-motion-v2.png.asset.json';

export const Route = createFileRoute('/solucoes/antecipacao-de-recebiveis')({
  component: AntecipacaoPage,
});

function AntecipacaoPage() {
  return (
    <div className="min-h-screen bg-ice">
      <Navbar />
      
      {/* Hero Section - Layout Monumental */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-bold tracking-widest text-sm uppercase mb-6 block">
              Liquidez Imediata
            </span>
            <h1 className="fluid-text-h1 font-heading font-light text-navy leading-[0.9] mb-8">
              VENDA HOJE.<br />
              <span className="font-bold text-gold italic">RECEBA AGORA.</span>
            </h1>
            <p className="text-navy/70 text-xl font-light max-w-lg mb-10 leading-relaxed">
              Antecipação de recebíveis com a inteligência e segurança que o seu negócio exige para crescer sem pausas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-navy hover:bg-navy/90 text-white rounded-full px-10 py-7 text-lg shadow-2xl transition-all hover:scale-105 active:scale-95">
                Simular Antecipação
              </Button>
              <Button variant="outline" className="border-navy/20 text-navy rounded-full px-10 py-7 text-lg hover:bg-navy/5 transition-all">
                Falar com Especialista
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(7,26,51,0.3)] border border-white/20">
              <img 
                src={heroAsset.url} 
                alt="Executiva CredMais" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Float Cards */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl shadow-xl hidden lg:block border border-gold/20"
            >
              <div className="text-gold font-bold text-2xl">+ R$ 2.8B</div>
              <div className="text-navy/50 text-xs uppercase tracking-tighter">Antecipados em 2024</div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-navy/5 -skew-x-12 translate-x-1/3 -z-0" />
      </section>

      {/* Stats Bar */}
      <section className="bg-navy py-12">
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Empresas Atendidas", value: "12.000+" },
            { label: "Liquidação", value: "99.7%" },
            { label: "Tempo de Análise", value: "Até 2h" },
            { label: "Taxas", value: "Competitivas" }
          ].map((stat, i) => (
            <div key={i} className="text-center border-r last:border-0 border-white/10">
              <div className="text-gold font-bold text-3xl mb-1">{stat.value}</div>
              <div className="text-white/40 text-xs uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature 1: Intelligent Credit */}
      <section className="py-24 lg:py-40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="rounded-[60px] overflow-hidden shadow-2xl">
                <img src={intelligentAsset.url} alt="Crédito Inteligente" className="w-full h-auto" />
              </div>
            </motion.div>
            <div className="order-1 lg:order-2">
              <h2 className="fluid-text-h2 font-heading font-light text-navy leading-tight mb-8 text-balance">
                Crédito inteligente para empresas que <span className="font-bold italic">querem crescer.</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Análise criteriosa e personalizada",
                  "Sem burocracia bancária tradicional",
                  "Foco na saúde do seu fluxo de caixa",
                  "Transparência em todas as taxas"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                    </div>
                    <span className="text-navy/80 text-lg font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Case Growth */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="fluid-text-h2 font-heading font-light text-navy leading-tight mb-8">
                MAIS CAPITAL PARA <span className="text-gold font-bold">MOVIMENTAR</span> O SEU CAIXA.
              </h2>
              <p className="text-navy/70 text-lg font-light mb-10 leading-relaxed">
                A pessoa tem uma conta a receber e a gente antecipa o valor para ela. Simples assim. Liberte o capital que está preso em vendas a prazo e reinvista no que importa: seu crescimento.
              </p>
              <Button className="bg-gold hover:bg-gold/90 text-white rounded-full px-10 py-6 text-lg shadow-lg">
                Começar agora
              </Button>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="rounded-[60px] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                <img src={growthAsset.url} alt="Crescimento Empresarial" className="w-full h-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wide Motion Banner */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={motionAsset.url} 
            alt="Seu Caixa em Movimento" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 text-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[60px] p-12 lg:p-20 max-w-4xl mx-auto shadow-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="fluid-text-h2 font-heading font-light text-white mb-8 leading-tight drop-shadow-lg"
            >
              SEU CAIXA EM <span className="font-bold text-gold italic">MOVIMENTO.</span>
            </motion.h2>
            <p className="text-white/90 text-xl font-light mb-10 max-w-2xl mx-auto drop-shadow-md">
              Liquidez para manter sua operação avançando sem interrupções.
            </p>
            <Button className="bg-gold hover:bg-gold/90 text-white hover:scale-105 active:scale-95 transition-all rounded-full px-12 py-7 text-xl shadow-2xl">
              Antecipe agora
            </Button>
          </div>
        </div>
      </section>

      {/* Z-Pattern Features */}
      <section className="py-24 lg:py-40">
        <div className="container mx-auto px-6 space-y-40">
          {/* Item 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="lg:pr-12">
              <h3 className="text-3xl font-heading font-light text-navy mb-6">
                Mais previsibilidade para <span className="font-bold italic">planejar.</span>
              </h3>
              <p className="text-navy/70 text-lg font-light leading-relaxed">
                Transforme recebíveis futuros em capital imediato. Com a CredMais, você tem o controle total do seu planejamento financeiro, sem depender do vencimento dos boletos.
              </p>
            </div>
            <div className="rounded-[40px] overflow-hidden shadow-xl">
              <img src={benefit1Asset.url} alt="Planejamento" className="w-full h-auto" />
            </div>
          </div>

          {/* Item 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 rounded-[40px] overflow-hidden shadow-xl">
              <img src={benefit2Asset.url} alt="Segurança" className="w-full h-auto" />
            </div>
            <div className="order-1 lg:order-2 lg:pl-12">
              <h3 className="text-3xl font-heading font-light text-navy mb-6">
                Segurança e clareza em <span className="font-bold italic text-gold">cada operação.</span>
              </h3>
              <p className="text-navy/70 text-lg font-light leading-relaxed">
                Nossa plataforma oferece transparência total. Você sabe exatamente o que está pagando e quando terá o dinheiro disponível. Sem surpresas, sem taxas ocultas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Support */}
      <section className="bg-ice py-24 lg:py-40">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[60px] p-8 lg:p-20 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-heading font-light text-navy mb-8">
                ATENDIMENTO QUE <span className="text-gold font-bold italic">ENTENDE</span> O SEU NEGÓCIO.
              </h2>
              <p className="text-navy/70 text-lg font-light mb-10 leading-relaxed">
                Nossos consultores são especialistas em mercado financeiro e securitização, prontos para oferecer a melhor estratégia para sua empresa.
              </p>
              <Button className="bg-navy text-white hover:bg-navy/90 rounded-full px-10 py-6 text-lg w-full sm:w-auto">
                Falar com consultor
              </Button>
            </div>
            <div className="relative">
              <img src={supportAsset.url} alt="Consultoria Especializada" className="w-full h-auto rounded-[40px]" />
              <div className="absolute inset-0 border-[20px] border-ice rounded-[40px] pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Final Banner */}
      <section className="w-full">
        <img src={bannerAsset.url} alt="CredMais Securitizadora" className="w-full h-auto" />
      </section>

      <Footer />
    </div>
  );
}

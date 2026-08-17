import { motion } from 'framer-motion';
import { CTAButton } from '@/components/credmais/CTAButton';
import growthAsset from '@/assets/solutions-growth.png.asset.json';
import securitizacaoAsset from '@/assets/securitizacao-hero.png.asset.json';
import logoCardFooter from '@/assets/logo-card-footer.png.asset.json';
import { assetUrl } from '@/lib/asset-url';

export function SolutionsBenefits() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6">
        {/* Bloco 1: Imagem Esquerda, Texto Direita */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative group"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl relative">
              <div className="aspect-[4/3] sm:aspect-video bg-ice relative">
                <img 
                  src={assetUrl(growthAsset)} 
                  alt="Soluções Credmais" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Logo Overlay at the bottom */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 sm:w-64 opacity-90 brightness-0 invert filter group-hover:brightness-100 group-hover:invert-0 transition-all duration-500">
                <img 
                  src={assetUrl(logoCardFooter)} 
                  alt="Credmais Securitizadora" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -left-4 -top-4 w-24 h-24 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/20 transition-colors" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-[clamp(1.75rem,4.2vw,2.75rem)] font-heading font-medium text-navy mb-5 sm:mb-6 leading-[1.15] tracking-tight">
              A <span className="font-semibold italic text-gold">Credmais</span> ajuda a expandir o seu patrimônio
            </h3>
            <p className="text-navy/80 text-base sm:text-lg leading-relaxed font-normal mb-8">
              Transformamos seus recebíveis em capital imediato. Construa o futuro da sua empresa com planejamento estratégico e toda a solidez que só a Credmais oferece ao mercado.
            </p>
            <CTAButton variant="gold" href="/contato">Simular operação com um consultor</CTAButton>
          </motion.div>
        </div>

        {/* Bloco 2: Texto Esquerda, Imagem Direita */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-[clamp(1.75rem,4.2vw,2.75rem)] font-heading font-medium text-navy mb-5 sm:mb-6 leading-[1.15] tracking-tight text-balance">
              O que é a Securitização de Ativos Empresariais?
            </h3>
            <div className="space-y-6">
              <p className="text-navy/80 text-base sm:text-lg leading-relaxed font-normal">
                A securitização é uma solução estratégica que ajuda sua empresa a antecipar recursos de vendas a prazo, de forma planejada, sem comprometer linhas de crédito bancárias tradicionais.
              </p>
              <p className="text-navy/80 text-base sm:text-lg leading-relaxed font-normal border-l-2 border-gold pl-6 py-2 bg-gold/5 rounded-r-2xl">
                Com a Credmais, você transforma duplicatas e cheques em liquidez imediata para investir em estoque, matéria-prima, sede própria ou expansão da sua frota.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl relative">
              <div className="aspect-[4/3] sm:aspect-video bg-ice relative">
                <img 
                  src={assetUrl(securitizacaoAsset)} 
                  alt="Benefícios da Securitização" 
                  className="w-full h-full object-cover object-bottom transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -right-4 -bottom-4 w-32 h-32 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-colors" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

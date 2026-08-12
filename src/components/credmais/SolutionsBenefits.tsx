import { motion } from 'framer-motion';
import { CTAButton } from '@/components/credmais/CTAButton';
import asset from '@/assets/solutions-benefits.png.asset.json';
import growthAsset from '@/assets/solutions-growth.png.asset.json';
import securitizacaoAsset from '@/assets/securitizacao-hero.png.asset.json';
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
            className="order-2 lg:order-1"
          >
            <div className="rounded-[40px] overflow-hidden shadow-xl">
              {/* Usando uma região específica da imagem de referência ou simulando o layout */}
              <div className="aspect-video bg-ice relative">
                <img 
                  src={assetUrl(growthAsset)} 
                  alt="Soluções Credmais" 
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop";
                  }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-[clamp(1.75rem,4.2vw,2.75rem)] font-heading font-medium text-navy mb-5 sm:mb-6 leading-[1.15] tracking-tight">
              A <span className="font-semibold italic">Credmais</span> ajuda a expandir o seu patrimônio
            </h3>
            <p className="text-navy/80 text-base sm:text-lg leading-relaxed font-normal mb-8">
              Transformamos seus recebíveis em capital imediato. Construa o futuro da sua empresa com planejamento estratégico e toda a solidez que só a Credmais oferece ao mercado.
            </p>
            <CTAButton variant="gold">Simular operação com um consultor</CTAButton>
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
              <p className="text-navy/80 text-base sm:text-lg leading-relaxed font-normal">
                Com a Credmais, você transforma duplicatas e cheques em liquidez imediata para investir em estoque, matéria-prima, sede própria ou expansão da sua frota, por exemplo.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-[40px] overflow-hidden shadow-xl">
              <div className="aspect-video bg-ice relative">
                <img 
                  src={assetUrl(securitizacaoAsset)} 
                  alt="Benefícios da Securitização" 
                  className="w-full h-full object-cover object-bottom"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop";
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

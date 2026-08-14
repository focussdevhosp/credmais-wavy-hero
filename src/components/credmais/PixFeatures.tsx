import { CTAButton } from '@/components/credmais/CTAButton';
import { motion } from 'framer-motion';
import consultoriaAsset from '@/assets/pix-consultoria-v2.png.asset.json';
import { assetUrl } from '@/lib/asset-url';

export function PixFeatures() {
  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Coluna de Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-extralight text-navy leading-tight mb-8">
              Consultoria <span className="font-bold text-accent">Especializada</span>
            </h2>
            
            <p className="text-xl text-navy/70 font-light leading-relaxed mb-10 text-balance">
              Um time de consultores em negócios com Setor Público e Privado à sua disposição para implementar o Pix Parcelado na sua empresa.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full border border-accent flex-shrink-0 mt-1 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-navy text-lg">Venda mais, receba antes</h3>
                  <p className="text-navy/60 font-light">Seu cliente parcela no Pix e você recebe o valor à vista, sem burocracia.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full border border-accent flex-shrink-0 mt-1 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-navy text-lg">Inadimplência Zero</h3>
                  <p className="text-navy/60 font-light">A CredMais assume o risco da operação, garantindo o fluxo de caixa da sua empresa.</p>
                </div>
              </div>
            </div>

            <CTAButton variant="gold">Solicitar atendimento consultivo</CTAButton>
          </motion.div>

          {/* Coluna da Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-[32px] sm:rounded-[48px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] border border-navy/5">
              <img
                src={assetUrl(consultoriaAsset)}
                alt="Consultoria especializada CredMais: conversas que movimentam negócios"
                loading="lazy"
                className="w-full h-auto block"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

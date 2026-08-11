import { motion } from 'framer-motion';
import consultoriaAsset from '@/assets/pix-consultoria.png.asset.json';

export function PixFeatures() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
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

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-navy px-10 py-4 rounded-full font-heading font-bold uppercase tracking-wider text-sm shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all"
            >
              Saiba Mais
            </motion.button>
          </motion.div>

          {/* Coluna da Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Elemento decorativo amarelo atrás da imagem, como na referência */}
            <div className="absolute inset-0 bg-[#FFFF00] rounded-[40px] translate-x-6 translate-y-6 -z-10" />
            
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src={consultoriaAsset.url} 
                alt="Consultoria Especializada Pix Parcelado" 
                className="w-full h-auto block"
              />
            </div>

            {/* Ícones flutuantes decorativos (Triângulos azuis da referência) */}
            <div className="absolute top-1/2 left-4 w-8 h-8 bg-blue-600 clip-triangle -translate-y-12 animate-pulse" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
            <div className="absolute bottom-1/4 right-4 w-6 h-6 bg-blue-600 clip-triangle rotate-180 opacity-80" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

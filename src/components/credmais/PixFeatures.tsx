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

          {/* Coluna da Imagem Reconstruída */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* O container principal que simula o card branco da referência */}
            <div className="bg-white rounded-[60px] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-navy/5 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
              
              {/* Conteúdo Interno do Card Simulado */}
              <div className="flex-1 z-10">
                <h3 className="text-3xl font-heading font-bold text-accent mb-4">
                  Consultoria Especializada
                </h3>
                <p className="text-navy/60 font-light mb-8 max-w-[280px]">
                  Um time de consultores em negócios com Setor Público à sua disposição.
                </p>
                
                <div className="inline-block bg-accent text-navy px-8 py-3 rounded-md font-heading font-bold text-xs tracking-widest uppercase cursor-pointer hover:shadow-lg hover:shadow-accent/20 transition-all">
                  SAIBA MAIS
                </div>
              </div>

              {/* A Imagem com fundo amarelo vibrante */}
              <div className="relative z-10 w-full md:w-[320px] aspect-square md:aspect-[4/5] bg-accent/10 rounded-[40px] overflow-hidden flex items-end justify-center">
                <img 
                  src={consultoriaAsset.url} 
                  alt="Consultor Especializado" 
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop";
                  }}
                />
                
                {/* Triângulos Azuis Decorativos da referência */}
                <div 
                  className="absolute top-1/2 left-4 w-6 h-6 bg-accent" 
                  style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                />
                <div 
                  className="absolute bottom-1/4 right-4 w-4 h-4 bg-accent rotate-180" 
                  style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                />
              </div>

              {/* Triângulo azul flutuando fora da imagem, no card branco */}
              <div 
                className="absolute top-1/3 left-6 w-10 h-10 bg-accent/20" 
                style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import aboutAsset from '@/assets/about-credmais-v2.png.asset.json';

const steps = [
  {
    number: 1,
    text: "Soluções personalizadas para o fluxo de caixa da sua empresa, com taxas competitivas e transparência total."
  },
  {
    number: 2,
    text: "Antecipação de recebíveis de forma ágil, permitindo que você foque no que realmente importa: crescer."
  },
  {
    number: 3,
    text: "Segurança jurídica e operacional em todas as transações, garantindo tranquilidade para sua gestão."
  },
  {
    number: 4,
    text: "Atendimento consultivo e próximo, entendendo a fundo a necessidade do seu modelo de negócio."
  },
  {
    number: 5,
    text: "Tecnologia de ponta para simulações rápidas e liberações de crédito sem burocracia excessiva."
  },
  {
    number: 6,
    text: "Experiência de mercado consolidada, ajudando milhares de empresas a otimizarem seus recursos."
  }
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 sm:py-32 bg-[#F6F8FA] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-heading font-light text-navy mb-12 leading-tight">
              A força da Securitizadora <br />
              <span className="font-semibold italic">Credmais</span> no seu negócio
            </h2>

            <div className="space-y-8 mb-12">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-gold flex items-center justify-center text-gold font-medium text-sm">
                    {step.number}
                  </div>
                  <p className="text-navy/70 text-lg leading-relaxed font-light">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>

            <Button 
              className="bg-gold hover:bg-gold/90 text-white rounded-full px-10 py-6 text-lg transition-all duration-300 shadow-lg shadow-gold/20"
            >
              Consulte agora
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[40px] sm:rounded-[60px] overflow-hidden shadow-2xl">
              <img 
                src={aboutAsset.url} 
                alt="Especialista Credmais" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Elemento Decorativo Dourado */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-24 bg-gold rounded-l-full hidden lg:block" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

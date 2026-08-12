import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CTAButton } from '@/components/credmais/CTAButton';
import { ChevronDown, Plus } from 'lucide-react';
import faqAgentAsset from '@/assets/faq-agent.png.asset.json';
import { assetUrl } from '@/lib/asset-url';

const faqs = [
  {
    question: "O que é securitização de ativos?",
    answer: "A securitização é um processo financeiro onde ativos empresariais (como duplicatas e cheques) são convertidos em títulos negociáveis, permitindo que a empresa antecipe o recebimento desses valores de forma imediata."
  },
  {
    question: "Quais documentos são necessários para começar?",
    answer: "Para a análise inicial, solicitamos documentos básicos da empresa (Contrato Social, faturamento recente) e os documentos comprobatórios das operações a serem antecipadas (notas fiscais e comprovantes de entrega)."
  },
  {
    question: "Qual o prazo para liberação do recurso?",
    answer: "Após o cadastro aprovado, a operação de antecipação costuma ser liquidada no mesmo dia, garantindo a agilidade que seu fluxo de caixa precisa."
  },
  {
    question: "A Credmais atende empresas de quais setores?",
    answer: "Atendemos diversos setores da indústria, comércio e serviços, desde pequenas empresas até grandes corporações que buscam otimização financeira."
  },
  {
    question: "Existe limite para antecipação?",
    answer: "Os limites são personalizados e escaláveis, definidos de acordo com a saúde financeira da sua empresa e a qualidade dos ativos apresentados."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#F6F8FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src={assetUrl(faqAgentAsset)} 
                alt="Especialista Credmais" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop";
                }}
              />
            </div>
            {/* Decorative Gold Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C7A96B] rounded-3xl -z-10" />
          </motion.div>

          {/* Content Container */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-light text-[#071A33] leading-tight mb-4">
                Dúvidas frequentes sobre a <span className="font-bold">Securitização</span>
              </h2>
              <p className="text-lg text-[#071A33]/70 font-light">
                Tudo o que você precisa saber para transformar seus recebíveis em capital de giro com segurança.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full text-left p-6 bg-white rounded-2xl border border-black/5 hover:border-[#C7A96B]/30 transition-all flex justify-between items-center group"
                  >
                    <span className={`text-lg transition-colors ${openIndex === index ? 'text-[#C7A96B] font-medium' : 'text-[#071A33]'}`}>
                      {faq.question}
                    </span>
                    <div className={`p-2 rounded-full transition-all ${openIndex === index ? 'bg-[#C7A96B] text-white rotate-180' : 'bg-[#F6F8FA] text-[#071A33]'}`}>
                      <ChevronDown size={20} />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-2 text-[#071A33]/80 leading-relaxed font-light">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <CTAButton variant="navy">Falar com um especialista</CTAButton>
                <button className="flex items-center justify-center sm:justify-start gap-2 text-[#C7A96B] font-semibold hover:gap-3 transition-all group min-h-[44px]">
                  Ver mais perguntas
                  <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

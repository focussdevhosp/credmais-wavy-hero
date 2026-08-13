import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import faqAgentAsset from '@/assets/faq-agent.png.asset.json';
import { assetUrl } from '@/lib/asset-url';

const pixFaqs = [
  {
    question: "O que é o Pix Parcelado CredMais?",
    answer: "É uma solução que permite ao seu cliente parcelar as compras via Pix, enquanto sua empresa recebe o valor total à vista, com liquidez imediata e sem burocracia."
  },
  {
    question: "Como funciona para o meu cliente?",
    answer: "O cliente escolhe o Pix Parcelado no momento do pagamento, define o número de parcelas e finaliza a transação em segundos. Ele não precisa comprometer o limite do cartão de crédito."
  },
  {
    question: "Minha empresa corre risco de inadimplência?",
    answer: "Não. A CredMais assume 100% do risco de crédito. Uma vez aprovada a transação, o pagamento à sua empresa é garantido, independente se o cliente pagar as parcelas futuras."
  },
  {
    question: "Quais são as taxas para o lojista?",
    answer: "As taxas são competitivas e variam de acordo com o volume de vendas e o prazo de parcelamento. Entre em contato com nossos consultores para uma proposta personalizada."
  },
  {
    question: "Preciso de integração técnica complexa?",
    answer: "Não. Nossa solução é desenhada para ser simples. Oferecemos checkout transparente, link de pagamento ou integração via API, dependendo da necessidade do seu negócio."
  }
];

export function PixFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-24 bg-[#F6F8FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          
          {/* Content Container */}
          <div className="space-y-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[clamp(1.85rem,6vw,3rem)] font-light text-[#071A33] leading-tight mb-4">
                Tudo sobre o <span className="font-bold">Pix Parcelado</span>
              </h2>
              <p className="text-lg text-[#071A33]/70 font-light">
                Esclareça suas dúvidas e comece a vender mais agora mesmo.
              </p>
            </motion.div>

            <div className="space-y-4">
              {pixFaqs.map((faq, index) => (
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
                    className="w-full text-left p-4 sm:p-6 bg-white rounded-2xl border border-black/5 hover:border-[#C7A96B]/30 transition-all flex justify-between items-center group"
                  >
                    <span className={`text-base sm:text-lg pr-3 transition-colors ${openIndex === index ? 'text-[#C7A96B] font-medium' : 'text-[#071A33]'}`}>
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
                        <div className="p-4 sm:p-6 pt-2 text-sm sm:text-base text-[#071A33]/80 leading-relaxed font-light">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="aspect-[4/5] rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src={assetUrl(faqAgentAsset)} 
                alt="Especialista Credmais" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Gold Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#C7A96B] rounded-3xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

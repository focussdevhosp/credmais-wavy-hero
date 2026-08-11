import { motion } from 'framer-motion';
import bannerAsset from '@/assets/banner-antecipacao.png.asset.json';

export function WideBanner() {
  return (
    <section className="w-full bg-[#F6F8FA] overflow-hidden relative min-h-[50px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <img 
          src={bannerAsset.url} 
          alt="Antecipe seus recebíveis - Credmais" 
          className="w-full h-auto block"
          loading="eager"
        />
        
        {/* SEO Accessibility Content */}
        <div className="sr-only">
          <h2>Antecipe seus recebíveis</h2>
          <p>Transforme vendas a prazo em capital imediato para sua empresa crescer.</p>
        </div>
      </motion.div>
    </section>
  );
}

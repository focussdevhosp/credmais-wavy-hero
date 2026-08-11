import { motion } from 'framer-motion';
import bannerAsset from '@/assets/banner-antecipacao.png.asset.json';

export function WideBanner() {
  return (
    <section className="w-full bg-[#F6F8FA] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full"
      >
        <img 
          src={bannerAsset.url} 
          alt="Antecipe seus recebíveis - Credmais" 
          className="w-full h-auto object-cover block"
          loading="lazy"
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

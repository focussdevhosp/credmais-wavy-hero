import { motion } from 'framer-motion';
import bannerAsset from '@/assets/banner-antecipacao.png.asset.json';
import { assetUrl } from '@/lib/asset-url';

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
          src={assetUrl(bannerAsset)} 
          alt="Antecipe seus recebíveis - Credmais" 
          className="w-full h-auto block min-h-[50px] bg-ice"
          loading="eager"
          onError={(e) => {
            console.error("Erro no banner:", assetUrl(bannerAsset));
            e.currentTarget.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop";
          }}
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

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroHomeAsset from '@/assets/hero-home.png.asset.json';
import heroMovimentoAsset from '@/assets/hero-movimento.png.asset.json';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
}

export function Hero({ title, subtitle, image }: HeroProps) {
  // Use the image prop if it's not a placeholder, otherwise use the asset
  // Check specifically for placeholder strings to use the user's uploaded hero
  const heroImage = image === "hero-movimento" 
    ? heroMovimentoAsset.url 
    : (image === "hero-placeholder" || image.includes('unsplash')) 
      ? heroHomeAsset.url 
      : image;

  return (
    <section className="relative min-h-[80vh] sm:h-screen flex items-center pt-24 sm:pt-20 overflow-hidden bg-[#F6F8FA]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <img 
          src={heroImage} 
          alt="Capital para sua empresa" 
          className="w-full h-full object-cover sm:object-contain object-center"
          loading="eager"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-[90%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* 
                We keep the structure for SEO but hide the content visually 
                as requested since it's already in the image 
            */}
            <div className="sr-only">
              <h1>{title}</h1>
              <p>{subtitle}</p>
              <p>de responsatvidade a todos os tamanhos de tela</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
        <span className="text-[10px] uppercase tracking-[0.3em] text-navy">Scroll</span>
        <div className="w-px h-12 bg-navy/30" />
      </div>
    </section>
  );
}

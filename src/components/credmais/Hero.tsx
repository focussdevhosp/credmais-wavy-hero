import { motion } from 'framer-motion';
import heroHomeAsset from '@/assets/hero-home.png.asset.json';
import heroMovimentoAsset from '@/assets/hero-movimento.png.asset.json';

interface HeroProps {
  title?: string;
  subtitle?: string;
  image?: string;
}

export function Hero({ title, subtitle, image }: HeroProps) {
  // Use the image prop if it's not a placeholder, otherwise use the asset
  const heroImage = image === "hero-movimento" 
    ? heroMovimentoAsset.url 
    : (image === "hero-home" || !image || image.includes('unsplash')) 
      ? heroHomeAsset.url 
      : image;

  return (
    <section className="relative min-h-[60vh] sm:h-screen flex items-center pt-24 sm:pt-0 overflow-hidden bg-[#F6F8FA]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#F6F8FA]">
        <img 
          src={heroImage} 
          alt={title || "Capital para sua empresa"} 
          className="w-full h-full object-cover sm:object-cover object-center"
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
              <p>Identifique falhas, erros de lógica e bugs no código fornecido. Forneça a correção exata para cada problema encontrado, acompanhada de uma explicação clara sobre a causa raiz e a solução aplicada, garantindo que o código funcione perfeitamente e sem erros.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

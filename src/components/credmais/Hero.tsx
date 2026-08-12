import { motion } from 'framer-motion';
import heroHomeAsset from '@/assets/hero-home.png.asset.json';
import heroMovimentoAsset from '@/assets/hero-movimento.png.asset.json';
import heroHomeNewAsset from '@/assets/hero-home-new.png.asset.json';

interface HeroProps {
  title?: string;
  subtitle?: string;
  image?: string;
}

export function Hero({ title, subtitle, image }: HeroProps) {
  // Use a hardcoded fallback to the project's own assets if the import fails
  // or use the imported asset URL which is the safe way in TanStack Start with Lovable
  const heroImage = image === "hero-movimento" 
    ? heroMovimentoAsset.url 
    : image === "hero-home-new"
      ? heroHomeNewAsset.url
      : (image === "hero-home" || !image) 
        ? heroHomeAsset.url 
        : image;

  // Add a base URL check for production if needed, but assets-v1 should be relative and work.
  // We'll also ensure the image tag has basic styling to prevent layout shift.

  return (
    <section className="relative min-h-[60vh] sm:h-screen flex items-center pt-24 sm:pt-0 overflow-hidden bg-[#F6F8FA]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#F6F8FA]">
        {heroImage && (
          <img 
            src={heroImage} 
            alt={title || "Capital para sua empresa"} 
            className="w-full h-full object-cover sm:object-cover object-center"
            loading="eager"
            onError={(e) => {
              const target = e.currentTarget;
              console.error("Erro ao carregar imagem da hero:", heroImage);
              // Simple relative fallback just in case
              if (!target.src.includes('unsplash')) {
                target.src = "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1920&auto=format&fit=crop";
              }
            }}
          />
        )}
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

import { motion } from 'framer-motion';
import heroHomeAsset from '@/assets/hero-home.png.asset.json';
import heroMovimentoAsset from '@/assets/hero-movimento.png.asset.json';
import heroHomeNewAsset from '@/assets/hero-home-new.png.asset.json';
import { assetUrl } from '@/lib/asset-url';

interface HeroProps {
  title?: string;
  subtitle?: string;
  image?: string;
}

export function Hero({ title, subtitle, image }: HeroProps) {
  // As imagens ficam na CDN de assets; assetUrl garante URL absoluta em
  // qualquer domínio (inclusive domínio próprio publicado na Cloudflare).
  const heroImage = image === "hero-movimento"
    ? assetUrl(heroMovimentoAsset)
    : image === "hero-home-new"
      ? assetUrl(heroHomeNewAsset)
      : (image === "hero-home" || !image)
        ? assetUrl(heroHomeAsset)
        : assetUrl(image);


  return (
    <section className="relative block sm:flex sm:items-center pt-20 sm:pt-0 overflow-hidden bg-[#F6F8FA] min-h-0 sm:min-h-[70vh] lg:h-screen">
      {/* Background Image Container */}
      <div className="relative sm:absolute sm:inset-0 z-0 w-full flex items-center justify-center bg-[#F6F8FA]">
        {heroImage && (
          <img 
            src={heroImage} 
            alt={title || "Capital para sua empresa"} 
            className="w-full h-auto object-contain sm:h-full sm:object-cover object-center"
            loading="eager"

            onError={(e) => {
              const target = e.currentTarget;
              console.error("Erro ao carregar imagem da hero:", heroImage);
              // Simple fallback that actually works if R2 is failing
              if (!target.src.includes('unsplash')) {
                target.src = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1920&auto=format&fit=crop";
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

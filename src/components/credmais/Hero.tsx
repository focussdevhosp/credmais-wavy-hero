import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroAsset from '@/assets/hero-home.png.asset.json';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
}

export function Hero({ title, subtitle, image }: HeroProps) {
  // Use the image prop if it's not a placeholder, otherwise use the asset
  const heroImage = image.includes('unsplash') ? heroAsset.url : image;

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 px-6 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Capital para sua empresa" 
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-ice/80 via-ice/40 to-transparent lg:from-ice/90" />
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-gold font-medium tracking-widest uppercase text-sm mb-6">
              Elite Financial Solutions
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin leading-[0.9] text-navy mb-8 text-balance">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-navy/70 mb-12 max-w-xl leading-relaxed font-light">
              {subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full bg-navy text-ice hover:bg-navy/90 px-8 py-7 text-lg shadow-xl shadow-navy/20">
                Simular Agora
              </Button>
              <Button variant="outline" size="lg" className="rounded-full border-navy/20 text-navy hover:bg-navy/5 px-8 py-7 text-lg">
                Nossas Soluções
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
        <span className="text-[10px] uppercase tracking-[0.3em] text-navy">Scroll</span>
        <div className="w-px h-12 bg-navy/30" />
      </div>
    </section>
  );
}

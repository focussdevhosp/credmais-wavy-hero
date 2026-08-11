import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface SolutionFeaturesProps {
  features: {
    title: string;
    description: string;
    image: string;
    imageLeft?: boolean;
    buttonText?: string;
  }[];
}

export function SolutionFeatures({ features }: SolutionFeaturesProps) {
  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index !== features.length - 1 ? 'mb-24 lg:mb-32' : ''}`}
          >
            <motion.div
              initial={{ opacity: 0, x: feature.imageLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={feature.imageLeft ? 'order-2 lg:order-1' : 'order-2'}
            >
              <div className="rounded-[40px] overflow-hidden shadow-xl border border-navy/5">
                <div className="aspect-[16/9] bg-ice relative">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: feature.imageLeft ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={feature.imageLeft ? 'order-1 lg:order-2' : 'order-1'}
            >
              <h3 className="text-3xl sm:text-4xl font-heading font-light text-navy mb-6 leading-tight">
                {feature.title}
              </h3>
              <p className="text-navy/70 text-lg leading-relaxed font-light mb-8">
                {feature.description}
              </p>
              {feature.buttonText && (
                <Button 
                  className="bg-gold hover:bg-gold/90 text-white rounded-full px-10 py-6 text-lg transition-all duration-300 shadow-lg shadow-gold/20"
                >
                  {feature.buttonText}
                </Button>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

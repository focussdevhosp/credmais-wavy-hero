import { motion } from 'framer-motion';
import { CTAButton } from '@/components/credmais/CTAButton';

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
    <section className="py-16 sm:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center ${index !== features.length - 1 ? 'mb-16 sm:mb-24 lg:mb-32' : ''}`}
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
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop";
                    }}
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
              <h3 className="text-[clamp(1.75rem,4.2vw,2.75rem)] font-heading font-medium text-navy mb-5 sm:mb-6 leading-[1.15] tracking-tight">
                {feature.title}
              </h3>
              <p className="text-navy/80 text-base sm:text-lg leading-relaxed font-normal mb-8">
                {feature.description}
              </p>
              {feature.buttonText && (
                <CTAButton variant="gold" href="/contato">{feature.buttonText}</CTAButton>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

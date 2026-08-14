import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/credmais/Navbar';
import { Footer } from '@/components/credmais/Footer';
import { PixFeatures } from '@/components/credmais/PixFeatures';
import { PixFAQ } from '@/components/credmais/PixFAQ';
import { CTAButton } from '@/components/credmais/CTAButton';
import pixHeroAsset from '@/assets/pix-parcelado-hero-new.png.asset.json';
import pixBannerAssetV2 from '@/assets/pix-banner-v2.png.asset.json';
import { assetUrl } from '@/lib/asset-url';

export const Route = createFileRoute('/solucoes/pix-parcelado')({
  component: PixParceladoPage,
});

function PixParceladoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Dynamic Hero with Gradient & Glassmorphism */}
      <section className="relative pt-32 pb-20 sm:pt-48 sm:pb-32 overflow-hidden bg-navy">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] -mr-64 -mt-32" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -ml-48 -mb-24" />
        
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-gold text-xs font-bold uppercase tracking-widest">Solução Exclusiva CredMais</span>
              </div>
              <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-heading font-extralight text-white leading-[1.1] tracking-tighter mb-8">
                O Pix que <br /> 
                <span className="font-bold italic text-gold">multiplica</span> <br />
                suas vendas.
              </h1>
              <p className="text-xl text-white/70 font-light leading-relaxed mb-10 max-w-lg">
                Venda em até 12x no Pix, receba o valor total à vista e ofereça a flexibilidade que seu cliente procura sem comprometer o limite do cartão.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton variant="gold" className="px-10 py-5 text-lg">Solicitar Proposta</CTAButton>
                <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-navy bg-ice flex items-center justify-center overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Client" />
                      </div>
                    ))}
                  </div>
                  <span className="text-white/60 text-xs font-light">Join +12k companies</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[60px] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={assetUrl(pixHeroAsset)} 
                  alt="Pix Parcelado CredMais" 
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating feature card */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 z-20 p-6 rounded-3xl bg-white shadow-2xl border border-gold/20 max-w-[240px]"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m17 19-5 3-5-3"/><path d="M2 12h20"/><path d="m5 17-3-5 3-5"/><path d="m19 17 3-5-3-5"/></svg>
                </div>
                <h4 className="text-navy font-bold text-sm mb-1">Liquidez Imediata</h4>
                <p className="text-navy/60 text-[10px] leading-tight font-light">Receba o valor total da venda em D+1 direto na sua conta.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Minimalist Benefit Grid */}
      <section className="py-24 sm:py-32 bg-ice">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <h2 className="text-[clamp(2rem,6vw,3.5rem)] font-heading font-extralight text-navy leading-tight mb-6">
              Venda sem <span className="font-bold text-accent">barreiras</span>
            </h2>
            <p className="text-lg text-navy/60 font-light">
              Nossa tecnologia de crédito remove o atrito no momento da compra, permitindo que seu cliente feche negócio mesmo sem limite no cartão.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Aprovação em Segundos", 
                desc: "Análise inteligente de perfil que aprova vendas de alto valor instantaneamente.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              },
              { 
                title: "Risco Zero", 
                desc: "A inadimplência é por nossa conta. Sua empresa recebe sempre o valor total garantido.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              },
              { 
                title: "Taxas Competitivas", 
                desc: "Melhor custo-benefício do mercado para antecipação e parcelamento via Pix.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group p-10 rounded-[48px] bg-white border border-navy/5 shadow-sm hover:shadow-xl hover:shadow-gold/5 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-ice flex items-center justify-center text-navy mb-8 group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">{item.title}</h3>
                <p className="text-navy/60 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <PixFeatures />
      
      {/* Full Width Banner with parallax-like effect */}
      <section className="relative w-full py-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={assetUrl(pixBannerAssetV2)} 
            alt="Background" 
            className="w-full h-full object-cover scale-110"
          />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h2 className="text-[clamp(2rem,6vw,4rem)] font-heading font-extralight text-white mb-10 leading-none">
            Pronto para <span className="text-gold font-bold italic">escalar?</span>
          </h2>
          <CTAButton variant="gold" className="px-12 py-6 text-xl rounded-full">Quero contratar para minha empresa</CTAButton>
        </div>
      </section>
      
      <PixFAQ />
      <Footer />
    </div>
  );
}

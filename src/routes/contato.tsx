import { createFileRoute } from '@tanstack/react-router';
import { Navbar } from '@/components/credmais/Navbar';
import { Footer } from '@/components/credmais/Footer';
import { ContactForm } from '@/components/credmais/ContactForm';
import { assetUrl } from '@/lib/asset-url';
import heroAsset from '@/assets/contato-hero-2026.png.asset.json';
import { Helmet } from 'react-helmet-async';

export const Route = createFileRoute('/contato')({
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="relative bg-ice min-h-screen">
      <Helmet>
        <title>Contato | CredMais Securitizadora</title>
        <meta name="description" content="Fale com a CredMais. Estamos prontos para oferecer as melhores soluções financeiras para sua empresa." />
        <meta property="og:title" content="Contato | CredMais Securitizadora" />
        <meta property="og:description" content="Fale com a CredMais. Estamos prontos para oferecer as melhores soluções financeiras para sua empresa." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-widest">
                Atendimento Exclusivo
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-navy leading-[1.1]">
                ESTAMOS PRONTOS PARA <span className="text-gold">OUVIR VOCÊ.</span>
              </h1>
              
              <p className="text-lg text-navy/60 font-light leading-relaxed max-w-xl">
                Dúvidas, propostas ou consultoria personalizada? Nossa equipe de especialistas está à disposição para acelerar o crescimento do seu negócio.
              </p>

              <div className="relative rounded-[48px] overflow-hidden shadow-2xl border border-white/20 aspect-video lg:aspect-square max-h-[500px]">
                <img 
                  src={assetUrl(heroAsset.url)} 
                  alt="Atendimento CredMais" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>
            </div>

            {/* Form Container */}
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 blur-[80px] rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-navy/5 blur-[80px] rounded-full" />
              
              <ContactForm 
                title="Comece sua jornada"
                description="Preencha o formulário abaixo e um de nossos consultores entrará em contato em breve."
                submitLabel="Solicitar Consultoria"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

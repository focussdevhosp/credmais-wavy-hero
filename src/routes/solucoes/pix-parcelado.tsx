import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '@/components/credmais/Hero';
import { Navbar } from '@/components/credmais/Navbar';
import { Footer } from '@/components/credmais/Footer';
import pixHeroAsset from '@/assets/pix-parcelado-hero.png.asset.json';

export const Route = createFileRoute('/solucoes/pix-parcelado')({
  component: PixParceladoPage,
});

function PixParceladoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero 
        title="Simples para vender. Fácil para pagar."
        subtitle="Pix Parcelado CredMais: A evolução do pagamento para o seu negócio."
        image={pixHeroAsset.url}
      />
      <div className="py-24 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-heading font-light text-navy mb-8">
          Em breve, mais detalhes sobre esta <span className="font-bold">Solução</span>
        </h2>
        <p className="text-navy/60 max-w-2xl mx-auto font-light leading-relaxed">
          Estamos preparando uma experiência completa para você conhecer todos os benefícios do Pix Parcelado CredMais.
        </p>
      </div>
      <Footer />
    </div>
  );
}

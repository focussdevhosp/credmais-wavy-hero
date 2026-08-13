import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '@/components/credmais/Hero';
import { Navbar } from '@/components/credmais/Navbar';
import { Footer } from '@/components/credmais/Footer';
import { PixFeatures } from '@/components/credmais/PixFeatures';
import { WideBanner } from '@/components/credmais/WideBanner';
import { PixFAQ } from '@/components/credmais/PixFAQ';
import pixHeroAsset from '@/assets/pix-parcelado-hero.png.asset.json';
import pixBannerAssetV2 from '@/assets/pix-banner-v2.png.asset.json';
import { assetUrl } from '@/lib/asset-url';

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
        image={assetUrl(pixHeroAsset)}
      />
      
      <PixFeatures />
      
      <section className="w-full">
        <img 
          src={assetUrl(pixBannerAssetV2)} 
          alt="Pix Parcelado para sua Empresa - CredMais" 
          className="w-full h-auto block"
        />
      </section>
      
      <div className="py-16 sm:py-24 bg-ice/30">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 text-center">
          <h2 className="text-[clamp(1.85rem,6vw,2.5rem)] font-heading font-light text-navy mb-6 sm:mb-8 leading-tight">
            Venda com <span className="font-bold">Pix Parcelado</span> na sua empresa
          </h2>
          <p className="text-navy/60 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Transforme o checkout do seu negócio com a modalidade que mais cresce no Brasil. 
            Mais opções para seus clientes, mais liquidez para você.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-left">
            <div className="bg-white p-6 sm:p-8 rounded-[32px] border border-navy/5 shadow-sm">
              <span className="text-accent text-4xl mb-6 block font-bold">01</span>
              <h3 className="text-navy font-bold mb-4">Aprovação Instantânea</h3>
              <p className="text-navy/60 text-sm">Análise de crédito em tempo real para não perder nenhuma venda.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-[32px] border border-navy/5 shadow-sm">
              <span className="text-accent text-4xl mb-6 block font-bold">02</span>
              <h3 className="text-navy font-bold mb-4">Sem Uso de Limite</h3>
              <p className="text-navy/60 text-sm">O cliente não precisa ter limite no cartão de crédito para parcelar.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-[32px] border border-navy/5 shadow-sm">
              <span className="text-accent text-4xl mb-6 block font-bold">03</span>
              <h3 className="text-navy font-bold mb-4">Pagamento Garantido</h3>
              <p className="text-navy/60 text-sm">A CredMais garante o recebimento total da venda para o lojista.</p>
            </div>
          </div>
        </div>
      </div>
      
      <PixFAQ />
      <Footer />
    </div>
  );
}

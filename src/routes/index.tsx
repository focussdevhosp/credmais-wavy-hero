import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '@/components/credmais/Hero';
import { Navbar } from '@/components/credmais/Navbar';
import { AboutSection } from '@/components/credmais/AboutSection';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="relative">
      <Navbar />
      <Hero 
        title="seu caixa em movimento"
        subtitle="Liquidez para manter sua operação avançando."
        image="hero-movimento" 
      />
      
      <AboutSection />
      {/* Próximas seções aqui */}
    </div>
  );
}

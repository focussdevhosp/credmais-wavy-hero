import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '@/components/credmais/Hero';
import { Navbar } from '@/components/credmais/Navbar';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="relative">
      <Navbar />
      <Hero 
        title="seu caixa no ritmo do seu negócio"
        subtitle="Soluções financeiras de elite para antecipação de recebíveis, gestão de crédito e estruturação de capital com agilidade máxima."
        image="hero-placeholder" // Component is now hardcoded to use hero-home asset for placeholder strings
      />
      
      {/* Espaço para próximas seções */}
      <div className="h-[200vh] bg-ice" />
    </div>
  );
}

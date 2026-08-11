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
        title="capital para sua empresa crescer"
        subtitle="Soluções financeiras de elite para antecipação de recebíveis, gestão de crédito e estruturação de capital com agilidade máxima."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2560&auto=format&fit=crop"
      />
      
      {/* Espaço para próximas seções */}
      <div className="h-[200vh] bg-ice" />
    </div>
  );
}

import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '@/components/credmais/Hero';
import { Navbar } from '@/components/credmais/Navbar';
import { AboutSection } from '@/components/credmais/AboutSection';
import { SolutionsBenefits } from '@/components/credmais/SolutionsBenefits';
import { WideBanner } from '@/components/credmais/WideBanner';
import { FAQSection } from '@/components/credmais/FAQSection';
import { Footer } from '@/components/credmais/Footer';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="relative">
      <Navbar />
      <Hero 
        title="VENDA MAIS. CRESÇA COM INTELIGÊNCIA."
        subtitle="Soluções financeiras para fortalecer o seu negócio."
        image="hero-home-new" 
      />
      
      <AboutSection />
      <SolutionsBenefits />
      <WideBanner />
      <FAQSection />
      <Footer />
    </div>
  );
}

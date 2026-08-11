import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/site-data';

export function Navbar() {
  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-6 pointer-events-none">
      <nav className="glass-pill rounded-full px-6 py-3 flex items-center justify-between w-full max-w-6xl pointer-events-auto">
        <div className="flex items-center">
          <img 
            src={SITE_CONFIG.logo} 
            alt="Credmais" 
            className="h-10 w-auto"
          />
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-navy/80 tracking-wide uppercase">
          <a href="/" className="hover:text-gold transition-colors">Início</a>
          <a href="#solucoes" className="hover:text-gold transition-colors">Soluções</a>
          <a href="#sobre" className="hover:text-gold transition-colors">Institucional</a>
          <a href="#contato" className="hover:text-gold transition-colors">Contato</a>
        </div>

        <div>
          <button className="bg-navy text-ice text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full shadow-lg shadow-navy/20 hover:scale-105 transition-transform active:scale-95">
            Acesso Restrito
          </button>
        </div>
      </nav>
    </header>
  );
}

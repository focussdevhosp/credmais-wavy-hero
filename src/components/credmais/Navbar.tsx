import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/site-data';

export function Navbar() {
  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      <nav className="bg-white/70 backdrop-blur-xl border border-white/20 shadow-sm rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between w-full max-w-6xl pointer-events-auto">
        <div className="flex items-center">
          <div className="text-navy font-heading font-bold text-lg sm:text-xl tracking-tighter">
            CRED<span className="text-gold">MAIS</span>
          </div>
        </div>

        {/* Hidden on small mobile, visible from md up */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[10px] sm:text-[11px] font-bold text-navy/80 tracking-widest uppercase">
          <a href="/" className="hover:text-gold transition-colors">Início</a>
          <a href="#solucoes" className="hover:text-gold transition-colors">Soluções</a>
          <a href="#sobre" className="hover:text-gold transition-colors">Institucional</a>
          <a href="#contato" className="hover:text-gold transition-colors">Contato</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-navy text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-lg shadow-navy/20 hover:scale-105 transition-transform active:scale-95 min-h-[44px] min-w-[44px] flex items-center justify-center">
            Acesso Restrito
          </button>
        </div>
      </nav>
    </header>
  );
}

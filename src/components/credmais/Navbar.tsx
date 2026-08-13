import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, Zap, TrendingUp, ShieldCheck, CreditCard, Lock } from 'lucide-react';
import { SITE_CONFIG, SOLUTIONS } from '@/lib/site-data';
import logoAsset from '@/assets/logo-credmais-premium.png.asset.json';
import { assetUrl } from '@/lib/asset-url';

export function Navbar() {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'zap': return <Zap size={18} />;
      case 'trending-up': return <TrendingUp size={18} />;
      case 'shield-check': return <ShieldCheck size={18} />;
      case 'credit-card': return <CreditCard size={18} />;
      case 'lock': return <Lock size={18} />;
      default: return <Zap size={18} />;
    }
  };

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      <nav className="bg-white/70 backdrop-blur-xl border border-white/20 shadow-sm rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between w-full max-w-6xl pointer-events-auto relative">
        <div className="flex items-center">
          <a href="/" className="hover:opacity-80 transition-opacity flex items-center">
            <img src={assetUrl(logoAsset.url)} alt="CredMais" className="h-10 sm:h-12 w-auto" />
          </a>
        </div>

        {/* Hidden on small mobile, visible from md up */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[10px] sm:text-[11px] font-bold text-navy/80 tracking-widest uppercase">
          <a href="/" className="hover:text-gold transition-colors">Início</a>
          
          {/* Dropdown Solutions */}
          <div 
            className="relative"
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
          >
            <button className="flex items-center gap-1.5 hover:text-gold transition-colors cursor-pointer outline-none">
              Soluções
              <ChevronDown size={12} className={`transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isSolutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[480px]"
                >
                  <div className="bg-white/95 backdrop-blur-2xl rounded-[32px] shadow-2xl border border-black/5 overflow-hidden p-4 grid grid-cols-2 gap-2">
                    {SOLUTIONS.map((solution) => (
                      <a
                        key={solution.slug}
                        href={`/solucoes/${solution.slug}`}
                        className="flex items-start gap-4 p-4 rounded-2xl hover:bg-[#F6F8FA] transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-[#071A33]/5 flex items-center justify-center text-[#071A33] group-hover:bg-[#C7A96B] group-hover:text-white transition-all">
                          {getIcon(solution.icon)}
                        </div>
                        <div className="space-y-1">
                          <p className="text-[12px] font-bold text-[#071A33] normal-case tracking-normal">
                            {solution.title}
                          </p>
                          <p className="text-[10px] font-light text-[#071A33]/60 normal-case tracking-normal leading-tight">
                            {solution.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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

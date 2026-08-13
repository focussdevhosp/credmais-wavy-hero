import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronDown, Zap, TrendingUp, ShieldCheck, CreditCard, Lock, Menu, X } from 'lucide-react';
import { SITE_CONFIG, SOLUTIONS } from '@/lib/site-data';
import logoAsset from '@/assets/logo-credmais-premium.png.asset.json';
import { assetUrl } from '@/lib/asset-url';

export function Navbar() {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);


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
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-0 sm:px-0 pointer-events-none pt-4 sm:pt-6">
      <nav className="bg-white/40 backdrop-blur-2xl border border-white/30 shadow-[0_8px_32px_0_rgba(7,26,51,0.08)] rounded-full px-4 sm:px-8 py-2.5 sm:py-4 flex items-center justify-between w-full max-w-6xl pointer-events-auto relative mx-3 sm:mx-4 transition-all duration-300 hover:bg-white/60">
        <div className="flex items-center min-w-0">
          <a href="/" className="hover:opacity-80 transition-opacity flex items-center">
            <img src={assetUrl(logoAsset.url)} alt="CredMais" className="h-8 sm:h-11 w-auto transition-transform duration-300 hover:scale-105" />

          </a>
        </div>

        {/* Hidden on small mobile, visible from md up */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[10px] sm:text-[11px] font-bold text-navy/80 tracking-widest uppercase">
          <a href="/" className="hover:text-gold transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold after:transition-all hover:after:w-full">Início</a>
          
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

          <a href="#sobre" className="hover:text-gold transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold after:transition-all hover:after:w-full">Institucional</a>
          <a href="#contato" className="hover:text-gold transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold after:transition-all hover:after:w-full">Contato</a>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a 
            href="#contato"
            className="hidden sm:flex bg-gold text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-[0_4px_20px_0_rgba(199,169,107,0.15)] hover:shadow-[0_8px_30px_0_rgba(199,169,107,0.3)] hover:-translate-y-1 hover:brightness-110 transition-all duration-300 active:scale-95 min-h-[48px] items-center justify-center whitespace-nowrap"
          >
            Falar com Especialista
          </a>

          <button
            type="button"
            aria-label={isMobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((v) => !v)}
            className="lg:hidden w-11 h-11 shrink-0 rounded-full bg-navy text-white flex items-center justify-center active:scale-95 transition-transform"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden fixed inset-x-3 top-[92px] bottom-3 z-40 pointer-events-auto overflow-y-auto rounded-[32px] bg-white/95 backdrop-blur-2xl border border-black/5 shadow-2xl p-5"
          >
            <nav className="flex flex-col gap-1">
              <a href="/" onClick={() => setIsMobileOpen(false)} className="px-4 py-4 rounded-2xl text-navy font-semibold hover:bg-ice transition-colors">Início</a>

              <button
                type="button"
                onClick={() => setIsMobileSolutionsOpen((v) => !v)}
                className="px-4 py-4 rounded-2xl text-navy font-semibold hover:bg-ice transition-colors flex items-center justify-between"
              >
                Soluções
                <ChevronDown size={16} className={`transition-transform ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence initial={false}>
                {isMobileSolutionsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-1 pb-2">
                      {SOLUTIONS.map((solution) => (
                        <a
                          key={solution.slug}
                          href={`/solucoes/${solution.slug}`}
                          onClick={() => setIsMobileOpen(false)}
                          className="flex items-start gap-3 px-4 py-3 rounded-2xl hover:bg-ice transition-colors"
                        >
                          <div className="w-9 h-9 shrink-0 rounded-xl bg-navy/5 flex items-center justify-center text-navy">
                            {getIcon(solution.icon)}
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-navy">{solution.title}</p>
                            <p className="text-xs text-navy/60 leading-snug">{solution.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <a href="#sobre" onClick={() => setIsMobileOpen(false)} className="px-4 py-4 rounded-2xl text-navy font-semibold hover:bg-ice transition-colors">Institucional</a>
              <a href="#contato" onClick={() => setIsMobileOpen(false)} className="px-4 py-4 rounded-2xl text-navy font-semibold hover:bg-ice transition-colors">Contato</a>

              <a
                href="#contato"
                onClick={() => setIsMobileOpen(false)}
                className="mt-3 bg-gold text-white text-[11px] font-bold uppercase tracking-widest px-6 py-4 rounded-full text-center active:scale-95 transition-transform"
              >
                Falar com Especialista
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


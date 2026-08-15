import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import logoAsset from '@/assets/logo-credmais-transparente.png.asset.json';
import { assetUrl } from '@/lib/asset-url';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071A33] text-white pt-16 sm:pt-24 pb-10 sm:pb-12 overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C7A96B]/5 -skew-x-12 transform origin-top translate-x-20 pointer-events-none hidden sm:block" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-8 mb-12 sm:mb-20">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <a href="/" className="hover:opacity-90 transition-opacity block w-fit">
              <img src={assetUrl(logoAsset.url)} alt="CredMais" className="h-11 w-auto brightness-0 invert" />
            </a>
            <p className="text-white/60 font-light leading-relaxed max-w-xs">
              Transformando ativos empresariais em liquidez imediata para impulsionar o crescimento do seu negócio com solidez e transparência.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#C7A96B] hover:border-[#C7A96B] transition-all group">
                <Linkedin size={18} className="text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#C7A96B] hover:border-[#C7A96B] transition-all group">
                <Instagram size={18} className="text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="space-y-8">
            <h4 className="text-lg font-bold tracking-tight">Soluções</h4>
            <ul className="space-y-4 text-white/60 font-light">
              <li><a href="#" className="hover:text-[#C7A96B] transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" /> Antecipação</a></li>
              <li><a href="#" className="hover:text-[#C7A96B] transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" /> Boleto Garantido</a></li>
              <li><a href="#" className="hover:text-[#C7A96B] transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" /> Gestão de Contas</a></li>
              <li><a href="#" className="hover:text-[#C7A96B] transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" /> Securitização</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="space-y-8">
            <h4 className="text-lg font-bold tracking-tight">Empresa</h4>
            <ul className="space-y-4 text-white/60 font-light">
              <li><a href="#" className="hover:text-[#C7A96B] transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" /> Sobre nós</a></li>
              <li><a href="#" className="hover:text-[#C7A96B] transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" /> Compliance</a></li>
              <li><a href="#" className="hover:text-[#C7A96B] transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" /> Termos de Uso</a></li>
              <li><a href="/contato" className="hover:text-[#C7A96B] transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" /> Contato</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-8">
            <h4 className="text-lg font-bold tracking-tight">Canais</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#C7A96B]/20 transition-colors">
                  <Mail size={18} className="text-[#C7A96B]" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">E-mail</p>
                  <a href="mailto:contato@sejacredmais.com" className="text-sm hover:text-[#C7A96B] transition-colors">contato@sejacredmais.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#C7A96B]/20 transition-colors">
                  <Phone size={18} className="text-[#C7A96B]" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Telefone</p>
                  <a href="tel:5511940893852" className="text-sm hover:text-[#C7A96B] transition-colors">(11) 94089-3852</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6 text-xs text-white/30 font-light">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <p>© {currentYear} Credmais Securitizadora. Todos os direitos reservados.</p>
            <span className="hidden md:block">|</span>
            <p>CNPJ: 00.000.000/0000-00</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Segurança</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

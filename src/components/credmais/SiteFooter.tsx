import { Link } from "@tanstack/react-router";
import { Clock, Mail, MessageCircle } from "lucide-react";
import {
  CONTACT_CNPJ,
  CONTACT_EMAIL,
  CONTACT_HOURS,
  CONTACT_WHATSAPP_DISPLAY,
  CONTACT_WHATSAPP_URL,
  LOGO_IMAGE,
  solutionPath,
  solutions,
} from "@/lib/site-data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#071A33] pt-20 pb-10 text-white/60">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" aria-label="Credmais — página inicial">
              <img src={LOGO_IMAGE} alt="Credmais Securitizadora" className="h-14 w-auto object-contain" />
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">
              Securitizadora especializada em capital de giro, proteção de recebíveis e
              estruturação financeira para empresas que querem crescer com previsibilidade.
            </p>
          </div>

          <nav aria-label="Soluções">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/35">Soluções</h2>
            <ul className="mt-6 space-y-3">
              {solutions.map((solution) => (
                <li key={solution.slug}>
                  <Link
                    to={solutionPath(solution.slug)}
                    className="text-sm text-white/60 transition-colors hover:text-[#C7A96B]"
                  >
                    {solution.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Institucional">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/35">Institucional</h2>
            <ul className="mt-6 space-y-3">
              <li><Link to="/sobre" className="text-sm text-white/60 transition-colors hover:text-[#C7A96B]">Sobre a Credmais</Link></li>
              <li><Link to="/contato" className="text-sm text-white/60 transition-colors hover:text-[#C7A96B]">Contato</Link></li>
              <li><Link to="/politica-de-privacidade" className="text-sm text-white/60 transition-colors hover:text-[#C7A96B]">Política de Privacidade</Link></li>
              <li><Link to="/termos-de-uso" className="text-sm text-white/60 transition-colors hover:text-[#C7A96B]">Termos de Uso</Link></li>
            </ul>
          </nav>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/35">Contato</h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href={CONTACT_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 transition-colors hover:text-[#C7A96B]"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-[#C7A96B]" />
                  {CONTACT_WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-3 break-all text-white/60 transition-colors hover:text-[#C7A96B]"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#C7A96B]" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Clock className="h-4 w-4 shrink-0 text-[#C7A96B]" />
                {CONTACT_HOURS}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
          <p>© {year} Credmais Securitizadora. Todos os direitos reservados.</p>
          <p>CNPJ {CONTACT_CNPJ}</p>
        </div>
      </div>
    </footer>
  );
}

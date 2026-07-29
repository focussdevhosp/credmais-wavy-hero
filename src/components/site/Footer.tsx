import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/credmais-logo-transparent.png.asset.json";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface-alt">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logoAsset.url} alt="Credmais" className="h-8 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-ink-soft">
            Securitizadora especializada em antecipação de recebíveis e boleto garantido
            para empresas que precisam de fluxo de caixa previsível.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-ink">Produtos</p>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            <li><Link to="/antecipacao-de-recebiveis" className="hover:text-ink">Antecipação de Recebíveis</Link></li>
            <li><Link to="/boleto-garantido" className="hover:text-ink">Boleto Garantido</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-ink">Institucional</p>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            <li><Link to="/sobre" className="hover:text-ink">Sobre a Credmais</Link></li>
            <li><Link to="/contato" className="hover:text-ink">Contato</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-6 text-xs text-ink-soft md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Credmais Securitizadora S.A. Todos os direitos reservados.</p>
          <p>CNPJ 00.000.000/0001-00 · Atuação nacional</p>
        </div>
      </div>
    </footer>
  );
}

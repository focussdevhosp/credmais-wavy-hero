import React, { ComponentType, CSSProperties, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import heroWomanNew from "@/assets/hero-woman-new.png.asset.json";
import logoNew from "@/assets/credmais-logo-new.png.asset.json";
import baseOperacional from "@/assets/base-operacional.png.asset.json";
import cardAntecipacao from "@/assets/card-antecipacao.png.asset.json";
import cardBoleto from "@/assets/boleto-garantido-card.png.asset.json";
import cardConsultoria from "@/assets/consultoria-card.png.asset.json";
import cardCrediario from "@/assets/crediario-card.png.asset.json";
import railCapital from "@/assets/rail-capital.png.asset.json";
import railBoleto from "@/assets/rail-boleto.png.asset.json";
import railCrediario from "@/assets/rail-crediario.png.asset.json";
import railGestao from "@/assets/rail-gestao.png.asset.json";
import { useRouterState } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  FileText,
  HandCoins,
  LineChart,
  Mail,
  Menu,
  Phone,
  Workflow,
  X,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type IconComponent = ComponentType<{ className?: string; strokeWidth?: number }>;

type Solution = {
  slug: string;
  title: string;
  headline: string;
  summary: string;
  detail: string;
  icon: IconComponent;
  bullets: string[];
  image: string;
  metric: string;
  accent: string;
};

type SolutionVisualSet = {
  hero: string;
  banner: string;
  flow: string;
  layout: "capital" | "protection" | "advisory" | "retail" | "control";
};

type SolutionTheme = {
  proof: { value: string; label: string }[];
  audience: string;
  promise: string;
  operatingTitle: string;
  operatingText: string;
  operating: { title: string; text: string }[];
  cases: { title: string; text: string }[];
  flow: { title: string; text: string }[];
  faq: { q: string; a: string }[];
};

const HERO_IMAGE = heroWomanNew.url;
const ABOUT_IMAGE = "/assets/credmais-campaign-about.png";
const CONTACT_IMAGE = "/assets/credmais-humanized-finance.png";
const LOGO_IMAGE = logoNew.url;
const CONTACT_EMAIL = "contato@credmaissecuritizadora.com.br";
const CONTACT_WHATSAPP_DISPLAY = "(11) 94089-3852";
const CONTACT_WHATSAPP_URL = "https://wa.me/5511940893852";
const CONTACT_CNPJ = "67.859.471/0001-20";

const solutionVisualSets: Partial<Record<string, SolutionVisualSet>> = {
  "antecipacao-de-recebiveis": {
    hero: "/assets/page-antecipacao-hero.png",
    banner: "/assets/page-antecipacao-banner.png",
    flow: "/assets/page-antecipacao-flow.png",
    layout: "capital",
  },
  "boleto-garantido": {
    hero: "/assets/page-boleto-hero.png",
    banner: "/assets/page-boleto-banner.png",
    flow: "/assets/page-boleto-flow.png",
    layout: "protection",
  },
  consultoria: {
    hero: "/assets/page-consultoria-hero.png",
    banner: "/assets/page-consultoria-banner.png",
    flow: "/assets/page-consultoria-flow.png",
    layout: "advisory",
  },
  crediario: {
    hero: "/assets/page-crediario-hero.png",
    banner: "/assets/page-crediario-banner.png",
    flow: "/assets/page-crediario-flow.png",
    layout: "retail",
  },
  "gestao-de-contas": {
    hero: "/assets/page-gestao-hero.png",
    banner: "/assets/page-gestao-banner.png",
    flow: "/assets/page-gestao-flow.png",
    layout: "control",
  },
};

export const solutions: Solution[] = [
  {
    slug: "antecipacao-de-recebiveis",
    title: "Antecipação de Recebíveis",
    headline: "Transforme vendas a prazo em caixa hoje.",
    summary: "Antecipe duplicatas, boletos e contratos com análise justa e liberação rápida — sem esperar o vencimento para operar.",
    detail: "Compra de recebíveis comerciais com análise objetiva, condições transparentes e liberação ágil para manter sua operação girando.",
    icon: HandCoins,
    bullets: ["Taxas competitivas e sem surpresas", "Análise de duplicatas, boletos e contratos", "Caixa disponível em até 24 horas"],
    image: cardAntecipacao.url,
    metric: "Caixa em D+1",
    accent: "#ddbd70",
  },
  {
    slug: "boleto-garantido",
    title: "Boleto Garantido",
    headline: "Venda por boleto com a segurança de receber.",
    summary: "Reduza a inadimplência, planeje o caixa e mantenha o crédito comercial sem carregar o risco sozinho.",
    detail: "Uma camada de proteção que blinda seu recebimento, organiza a cobrança e devolve previsibilidade ao contas a receber.",
    icon: FileText,
    bullets: ["Proteção contra inadimplência", "Cobrança acompanhada de ponta a ponta", "Previsibilidade real no contas a receber"],
    image: cardBoleto.url,
    metric: "Recebimento protegido",
    accent: "#c9a84c",
  },
  {
    slug: "consultoria",
    title: "Consultoria",
    headline: "Estrutura financeira sob medida para crescer.",
    summary: "Especialistas ao seu lado para desenhar a estrutura de capital ideal para o momento real do seu negócio.",
    detail: "Analisamos contratos, recebíveis, prazos, garantias e rotina financeira para montar um plano executável e aderente ao seu fluxo.",
    icon: LineChart,
    bullets: ["Diagnóstico completo do fluxo de caixa", "Plano de capital de giro com dados", "Reestruturação clara e mensurável"],
    image: cardConsultoria.url,
    metric: "Decisão com clareza",
    accent: "#1e3a5f",
  },
  {
    slug: "crediario",
    title: "Crediário",
    headline: "Ofereça parcelamento e venda mais.",
    summary: "Parcele direto para o cliente final e aumente sua conversão, sem depender de uma jornada bancária pesada.",
    detail: "Conectamos sua venda ao financiamento do cliente com análise, documentação e acompanhamento da carteira do início ao fim.",
    icon: CircleDollarSign,
    bullets: ["Mais conversão no ponto de venda", "Jornada simples para o comprador", "Carteira acompanhada e organizada"],
    image: cardCrediario.url,
    metric: "Mais conversão",
    accent: "#2d4a6e",
  },
  {
    slug: "gestao-de-contas",
    title: "Gestão de Contas",
    headline: "Controle total do seu fluxo financeiro.",
    summary: "Acompanhe contas a receber, contas a pagar e conciliação em uma rotina clara, sem depender de planilhas soltas.",
    detail: "Apoio operacional para consolidar contas, conciliar movimentações e prever o caixa antes das decisões críticas.",
    icon: Workflow,
    bullets: ["Rotina financeira organizada", "Conciliação sem retrabalho", "Visão 360° de entradas e saídas"],
    image: "/assets/solution-gestao-blue.png",
    metric: "Fluxo sob controle",
    accent: "#3b6fa0",
  },
];

const trustProfiles = ["Varejo B2B", "Serviços", "Distribuição", "Indústria", "Operações recorrentes"];

const testimonials = [
  {
    quote: "A Credmais nos ajudou a enxergar onde antecipar, onde proteger e como planejar o caixa sem improviso. Ganhamos tempo e previsibilidade.",
    author: "Diretoria financeira",
    company: "Empresa de distribuição",
  },
  {
    quote: "O atendimento simplificou nossa operação: recebíveis, boletos e prazos ficaram claros antes de qualquer decisão. Recomendo.",
    author: "Gestão comercial",
    company: "Rede de serviços",
  },
  {
    quote: "Passamos a oferecer prazo ao cliente com total visibilidade sobre risco, cobrança e recebimento. Vendemos mais com menos dor de cabeça.",
    author: "Operação financeira",
    company: "Varejo B2B",
  },
];

const homeFaq = [
  {
    q: "Por onde devo começar?",
    a: "Comece pela sua prioridade: caixa imediato, proteção do boleto, crediário para vender mais, consultoria estratégica ou gestão de contas. Nós indicamos o melhor caminho.",
  },
  {
    q: "Como funciona a análise antes da proposta?",
    a: "Avaliamos recebíveis, prazos, documentos, risco e a real necessidade de capital do seu negócio. Só apresentamos condições depois de entender sua operação.",
  },
  {
    q: "Preciso contratar todas as soluções?",
    a: "Não. Você começa por onde faz mais sentido agora e amplia conforme a rotina financeira da empresa evolui.",
  },
];


const solutionThemes: Record<string, SolutionTheme> = {
  "antecipacao-de-recebiveis": {
    proof: [
      { value: "D+1", label: "caixa nas operações elegíveis" },
      { value: "Prazo", label: "convertido em fôlego imediato" },
      { value: "Carteira", label: "analisada antes de cada oferta" },
    ],
    audience: "Para empresas que vendem a prazo e não podem parar de comprar, pagar folha, repor estoque ou expandir enquanto esperam o vencimento.",
    promise: "Transforme duplicatas, boletos e contratos em capital de giro com condições transparentes e leitura clara de risco.",
    operatingTitle: "Liquidez imediata sem comprometer sua política comercial.",
    operatingText: "Mostramos o caminho do recebível até o caixa com foco em velocidade, margem preservada e previsibilidade a cada operação.",
    operating: [
      { title: "Escolha do lote", text: "Você decide quais recebíveis antecipar e preserva os demais para o fluxo futuro." },
      { title: "Custo transparente", text: "Taxa, prazo e valor líquido aparecem antes de qualquer assinatura." },
      { title: "Caixa direcionado", text: "Use o capital para estoque, folha, fornecedor ou campanha sem perder controle do ciclo." },
    ],
    cases: [
      { title: "Estoque e compras", text: "Aproveite oportunidades comerciais com capital dos recebíveis futuros, sem travar o giro." },
      { title: "Folha e fornecedores", text: "Antecipe entradas previstas para honrar compromissos sem recorrer a crédito caro." },
      { title: "Expansão comercial", text: "Continue vendendo a prazo mantendo capital para financiar o crescimento." },
    ],
    flow: [
      { title: "Análise", text: "Recebíveis, cedentes, sacados e prazos entram na primeira leitura da carteira." },
      { title: "Proposta", text: "Taxa, prazo, documentos e valor líquido ficam claros antes da assinatura." },
      { title: "Liberação", text: "Com tudo validado, o caixa é liberado com acompanhamento da operação." },
    ],
    faq: [
      { q: "Preciso antecipar toda a carteira?", a: "Não. A operação pode ser montada por lote, prazo ou necessidade específica de caixa." },
      { q: "A taxa é apresentada antes?", a: "Sim. A proposta mostra custo, valor líquido e condições completas antes da decisão." },
      { q: "Funciona para vendas recorrentes?", a: "Sim. Acompanhamos ciclos recorrentes para dar mais previsibilidade ao seu fluxo." },
    ],
  },
  "boleto-garantido": {
    proof: [
      { value: "Proteção", label: "contra inadimplência" },
      { value: "Cobrança", label: "acompanhada pela operação" },
      { value: "Previsão", label: "mais confiável no recebimento" },
    ],
    audience: "Para empresas que vendem por boleto e querem receber com segurança, sem travar a venda para os clientes.",
    promise: "Blindamos seu fluxo de caixa, melhoramos a previsibilidade e reduzimos a pressão da inadimplência do dia a dia.",
    operatingTitle: "Uma camada de proteção para vender por boleto com muito menos risco.",
    operatingText: "Emissão, análise de risco e acompanhamento em um só processo — para você saber exatamente onde reduzimos sua incerteza.",
    operating: [
      { title: "Política de risco clara", text: "Avaliamos cliente, valor, prazo e histórico antes de garantir cada boleto." },
      { title: "Cobrança acompanhada", text: "O status do boleto deixa de ficar solto na rotina e ganha ritmo profissional." },
      { title: "Previsibilidade real", text: "Você planeja entradas com muito menos surpresa e menor exposição à inadimplência." },
    ],
    cases: [
      { title: "Venda B2B", text: "Mantenha prazo comercial para seus clientes sem carregar todo o risco sozinho." },
      { title: "Carteira pulverizada", text: "Organize cobrança e recebimento quando há muitos boletos em aberto." },
      { title: "Fluxo previsível", text: "Planeje o caixa com muito mais clareza sobre riscos e datas." },
    ],
    flow: [
      { title: "Emissão", text: "Consideramos dados do boleto, do cliente e do histórico de recebimento." },
      { title: "Proteção", text: "O risco é avaliado e a operação acompanha para reduzir atrasos." },
      { title: "Recebimento", text: "O fluxo fica previsível e pronto para embasar decisões financeiras." },
    ],
    faq: [
      { q: "Substitui minha cobrança interna?", a: "Não. Complementamos sua rotina com acompanhamento e leitura financeira apurada." },
      { q: "Funciona para clientes novos?", a: "Sim, desde que a operação tenha dados suficientes para uma análise de risco consistente." },
      { q: "Melhora o meu caixa?", a: "Melhora a previsibilidade e pode ser combinada com outras soluções de capital para amplificar o efeito." },
    ],
  },
  consultoria: {
    proof: [
      { value: "Diagnóstico", label: "do fluxo e da carteira" },
      { value: "Plano", label: "sob medida para capital" },
      { value: "Dados", label: "para decidir com confiança" },
    ],
    audience: "Para empresas que precisam entender qual estrutura financeira faz sentido antes de contratar qualquer capital.",
    promise: "Traduzimos recebíveis, contratos, prazos e garantias em uma estratégia financeira clara e pronta para executar.",
    operatingTitle: "Diagnóstico financeiro para decidir antes de contratar capital.",
    operatingText: "Uma leitura estratégica com cenários, prioridades e um plano de execução — não apenas um relatório com recomendações genéricas.",
    operating: [
      { title: "Mapa do fluxo", text: "Entradas, saídas, contratos e gargalos aparecem em uma única leitura integrada." },
      { title: "Cenários comparados", text: "Você entende o impacto de cada prazo, taxa, garantia e da real necessidade de capital." },
      { title: "Plano de ação", text: "A recomendação vira uma sequência prática para ajustar rotina, crédito e resultado." },
    ],
    cases: [
      { title: "Reestruturação", text: "Organize compromissos, vencimentos e fontes de capital com muito menos improviso." },
      { title: "Crescimento", text: "Planeje a expansão sem comprometer margem, caixa e relação com clientes." },
      { title: "Decisão de crédito", text: "Compare alternativas com custo, prazo e impacto operacional lado a lado." },
    ],
    flow: [
      { title: "Raio-X", text: "Mapeamento do fluxo, contratos, recebíveis e gargalos de caixa." },
      { title: "Cenários", text: "Simulações de estrutura, custo, prazo e impacto financeiro em cada rota." },
      { title: "Execução", text: "Acompanhamento para transformar o plano em rotina financeira estável." },
    ],
    faq: [
      { q: "É apenas para grandes empresas?", a: "Não. Atendemos empresas de portes diferentes que precisam estruturar melhor o fluxo financeiro." },
      { q: "Inclui operações de crédito?", a: "Pode incluir, sempre que fizer sentido dentro do diagnóstico e do momento da empresa." },
      { q: "Qual é a entrega final?", a: "Clareza sobre estrutura, prioridades e um caminho financeiro pronto para ser executado." },
    ],
  },
  crediario: {
    proof: [
      { value: "+", label: "conversão no ponto de venda" },
      { value: "Prazo", label: "acessível para o cliente final" },
      { value: "Carteira", label: "acompanhada de perto" },
    ],
    audience: "Para empresas que querem vender mais oferecendo parcelamento direto ao cliente final, sem fricção e sem burocracia bancária.",
    promise: "Amplie o ticket médio, aumente a conversão e mantenha o controle total sobre a carteira de crediário gerada.",
    operatingTitle: "Parcelamento como ferramenta comercial — nunca como improviso.",
    operatingText: "Uma jornada clara de venda, aprovação e acompanhamento para você faturar mais sem perder de vista a carteira.",
    operating: [
      { title: "Oferta no momento certo", text: "O parcelamento entra em cena quando o preço à vista trava a decisão do cliente." },
      { title: "Aprovação simples", text: "Dados e documentos tratados em uma jornada rápida para o comprador dizer sim." },
      { title: "Carteira sob controle", text: "Você vende mais mantendo visibilidade total sobre parcelas e recebimentos." },
    ],
    cases: [
      { title: "Varejo e serviços", text: "Ofereça prazo ao comprador sem depender de uma jornada bancária longa e desgastante." },
      { title: "Ticket maior", text: "Converta compras maiores em parcelas acessíveis e feche mais vendas." },
      { title: "Venda assistida", text: "Sua equipe comercial ganha uma opção clara para fechar oportunidades no balcão." },
    ],
    flow: [
      { title: "Proposta", text: "O cliente escolhe o parcelamento dentro de regras comerciais e financeiras definidas por você." },
      { title: "Análise", text: "A operação valida dados, documentos e as condições de aprovação em minutos." },
      { title: "Venda", text: "Você fatura com previsibilidade e acompanha a carteira parcela a parcela." },
    ],
    faq: [
      { q: "Serve para loja física e online?", a: "Sim. A estrutura apoia venda presencial, assistida e digital com a mesma consistência." },
      { q: "O cliente precisa ir ao banco?", a: "Não. A proposta é simplificar a jornada e eliminar fricção para o comprador." },
      { q: "Realmente ajuda a vender mais?", a: "Sim, principalmente quando o preço à vista limita a decisão de compra do cliente." },
    ],
  },
  "gestao-de-contas": {
    proof: [
      { value: "360°", label: "de visão sobre o fluxo financeiro" },
      { value: "Rotina", label: "organizada e sem retrabalho" },
      { value: "Conciliação", label: "de entradas, saídas e previsões" },
    ],
    audience: "Para empresas que precisam enxergar contas a receber, contas a pagar e conciliação em uma rotina simples e confiável.",
    promise: "Menos ruído operacional, mais clareza sobre o caixa antes de qualquer decisão importante.",
    operatingTitle: "Rotina financeira visível para agir antes de o problema aparecer.",
    operatingText: "Entradas, saídas, previsão e decisão conectadas em um único painel de controle — sem planilhas soltas.",
    operating: [
      { title: "Consolidação", text: "Contas, prazos e pendências saem de leituras dispersas e entram em uma base única." },
      { title: "Conciliação", text: "Reduzimos divergências entre o que foi vendido, recebido e pago no dia a dia." },
      { title: "Decisão diária", text: "A visão do fluxo mostra quando antecipar, proteger, renegociar ou segurar o caixa." },
    ],
    cases: [
      { title: "Rotina diária", text: "Acompanhe entradas, saídas e pendências sem depender de planilhas frágeis." },
      { title: "Previsão de caixa", text: "Tenha visão clara do que entra, do que vence e do que exige ação." },
      { title: "Operação integrada", text: "Conecte recebíveis, boletos, contas e oportunidades de capital em um mesmo lugar." },
    ],
    flow: [
      { title: "Organização", text: "Mapeamento de contas, categorias, prazos e responsáveis." },
      { title: "Conciliação", text: "Entradas e saídas acompanhadas para reduzir divergências e retrabalho." },
      { title: "Decisão", text: "O fluxo vira base para antecipar, proteger ou ajustar capital com segurança." },
    ],
    faq: [
      { q: "Substitui meu financeiro?", a: "Não. Apoiamos a rotina do seu time e melhoramos a visão para cada decisão." },
      { q: "Ajuda com conciliação?", a: "Sim. Esse é um dos focos principais para reduzir erros e retrabalho no dia a dia." },
      { q: "Conecta com outras soluções?", a: "Sim. A leitura do fluxo indica quando antecipar, proteger com boleto garantido ou acionar consultoria." },
    ],
  },
};


export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname }) || "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navGlass = scrolled
    ? "border border-[#142946]/10 bg-white/90 text-[#142946] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.2)]"
    : "border border-white/20 bg-[#142946]/25 text-white shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)]";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 px-3 transition-all ${scrolled ? "py-2" : "py-4"}`}>
      <nav className={`mx-auto flex max-w-[1200px] items-center justify-between rounded-full px-3 py-2 backdrop-blur-2xl transition-all md:px-5 md:py-2.5 ${navGlass}`}>
        <a href="/" className="flex shrink-0 items-center">
          <span className={`brand-logo-shell ${scrolled ? "is-scrolled" : ""}`}>
            <img src={LOGO_IMAGE} alt="Credmais Securitizadora" />
          </span>
        </a>

        <div className="hidden items-center gap-4 text-[11px] font-black uppercase tracking-[0.18em] md:flex lg:gap-8 lg:tracking-[0.2em]">
          <NavLink href="/" active={pathname === "/"} scrolled={scrolled}>Início</NavLink>
          <SolutionsDropdown pathname={pathname} scrolled={scrolled} />
          <NavLink href="/sobre" active={pathname === "/sobre"} scrolled={scrolled}>Sobre</NavLink>
          <NavLink href="/contato" active={pathname === "/contato"} scrolled={scrolled}>Contato</NavLink>
        </div>

        <a
          href={CONTACT_WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden shrink-0 items-center justify-center rounded-full bg-white px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.14em] !text-[#142946] shadow-[0_10px_28px_-12px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-white/90 active:scale-[0.98] md:inline-flex lg:px-6 lg:text-[11px] lg:tracking-[0.18em]"
        >
          Simular agora
        </a>

        <button
          className={`grid h-10 w-10 place-items-center rounded-full border md:hidden ${scrolled ? "border-[#142946]/10 bg-[#f6f7fb] text-[#142946]" : "border-white/20 bg-white/12 text-white"}`}
          onClick={() => setOpen((value) => !value)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-3 mt-2 grid gap-1 overflow-hidden rounded-[24px] border border-[#142946]/10 bg-white p-3 text-[#142946] shadow-2xl md:hidden">
          <MobileLink href="/" onClick={() => setOpen(false)}>Início</MobileLink>
          <span className="px-4 pt-3 text-[10px] font-black uppercase tracking-[0.24em] text-[#ddbd70]">Soluções</span>
          {solutions.map((solution) => <MobileLink key={solution.slug} href={`/${solution.slug}`} onClick={() => setOpen(false)}>{solution.title}</MobileLink>)}
          <MobileLink href="/sobre" onClick={() => setOpen(false)}>Sobre</MobileLink>
          <MobileLink href="/contato" onClick={() => setOpen(false)}>Contato</MobileLink>
          <a
            href={CONTACT_WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-flex items-center justify-center rounded-full bg-[#142946] px-5 py-3 text-sm font-black uppercase tracking-[0.16em] !text-white"
          >
            Simular agora
          </a>
        </div>
      )}
    </header>
  );
}

function SolutionsDropdown({ pathname, scrolled }: { pathname: string; scrolled: boolean }) {
  const active = solutions.some((item) => pathname === `/${item.slug}`);
  return (
    <div className="group relative">
      <a href="/#solucoes" className={`inline-flex items-center gap-1.5 py-2 transition ${active ? "text-[#ddbd70]" : scrolled ? "text-[#142946]/70" : "text-white/80"}`}>
        Soluções
        <span className="grid h-5 w-5 place-items-center rounded-full border border-current/25 transition group-hover:rotate-180">
          <ChevronDown className="h-3 w-3" />
        </span>
      </a>
      <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[340px] -translate-x-1/2 translate-y-3 pt-3 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
        <div className="solutions-menu solutions-menu-compact overflow-hidden rounded-[24px] border border-white/40 bg-white/98 p-2 text-[#142946] shadow-[0_24px_70px_rgba(0,0,0,0.25)] backdrop-blur-2xl">
          <div className="px-3 pb-2 pt-2">
            <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#ddbd70]">Soluções</span>
            <p className="mt-1 text-xs font-bold leading-5 text-[#142946]/60">Escolha a melhor frente para seu fluxo.</p>
          </div>
          <div className="grid gap-1">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              const itemActive = pathname === `/${solution.slug}`;
              return (
                <a key={solution.slug} href={`/${solution.slug}`} className={`solutions-menu-item ${itemActive ? "is-active" : ""}`} style={{ "--accent": solution.accent } as CSSProperties}>
                  <span className="solutions-menu-icon"><Icon className="h-4 w-4" /></span>
                  <span className="min-w-0"><strong>{solution.title}</strong><span>{solution.metric}</span></span>
                  <ArrowUpRight className="solutions-menu-arrow h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function NavLink({ href, active, scrolled, children }: { href: string; active: boolean; scrolled: boolean; children: ReactNode }) {
  return <a href={href} className={`transition hover:text-[#ddbd70] ${active ? "text-[#ddbd70]" : scrolled ? "text-[#142946]/70" : "text-white/80"}`}>{children}</a>;
}

function MobileLink({ href, onClick, children }: { href: string; onClick: () => void; children: ReactNode }) {
  return <a href={href} onClick={onClick} className="rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#142946]/75 hover:bg-[#f6f7fb]">{children}</a>;
}


function useHomeMotion() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((element) => {
        gsap.fromTo(element, { autoAlpha: 0, y: prefersReducedMotion ? 12 : 48 }, {
          autoAlpha: 1,
          y: 0,
          duration: prefersReducedMotion ? 0.35 : 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
          },
        });
      });

      if (!prefersReducedMotion) {
        gsap.to(".hero-bg-image", {
          scale: 1.08,
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: ".campaign-hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".engine-orbit", {
          rotate: 32,
          ease: "none",
          scrollTrigger: {
            trigger: ".webgl-engine",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.utils.toArray<HTMLElement>(".float-layer").forEach((layer, index) => {
          gsap.to(layer, {
            yPercent: index % 2 ? -10 : 12,
            xPercent: index % 2 ? 3 : -3,
            ease: "none",
            scrollTrigger: {
              trigger: layer.closest("section") ?? layer,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      }

      const media = gsap.matchMedia();
      media.add("(min-width: 1024px)", () => {
        const railSection = document.querySelector<HTMLElement>(".motion-rail-section");
        const railViewport = document.querySelector<HTMLElement>(".motion-rail-viewport");
        const railTrack = document.querySelector<HTMLElement>(".motion-rail-track");
        const railImages = railTrack ? Array.from(railTrack.querySelectorAll("img")) : [];
        const refreshRail = () => ScrollTrigger.refresh();
        let cleanupRail = () => undefined;

        if (railSection && railViewport && railTrack) {
          railSection.classList.add("is-gsap-ready");
          railSection.style.setProperty("--rail-progress", "0");

          const getDistance = () => Math.max(0, railTrack.scrollWidth - railViewport.clientWidth);

          gsap.to(railTrack, {
            x: () => -getDistance(),
            ease: "none",
            scrollTrigger: {
              trigger: railSection,
              start: "top top",
              end: () => `+=${Math.max(window.innerHeight, getDistance() + window.innerHeight * 0.35)}`,
              scrub: prefersReducedMotion ? 1.1 : 0.8,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                railSection.style.setProperty("--rail-progress", self.progress.toFixed(3));
              },
            },
          });

          railImages.forEach((image) => {
            if (!image.complete) image.addEventListener("load", refreshRail, { once: true });
          });

          const resizeObserver = new ResizeObserver(refreshRail);
          resizeObserver.observe(railTrack);
          resizeObserver.observe(railViewport);

          gsap.delayedCall(0.15, refreshRail);
          gsap.delayedCall(0.75, refreshRail);

          cleanupRail = () => {
            railSection.classList.remove("is-gsap-ready");
            railSection.style.removeProperty("--rail-progress");
            railImages.forEach((image) => image.removeEventListener("load", refreshRail));
            resizeObserver.disconnect();
            gsap.set(railTrack, { clearProps: "transform,opacity,visibility" });
          };
        }

        gsap.utils.toArray<HTMLElement>(".home-pin-card").forEach((card, index) => {
          gsap.fromTo(card, { y: 80 + index * 18, rotate: index % 2 ? 2 : -2, autoAlpha: 0.35 }, {
            y: index * -16,
            rotate: 0,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".home-pin-section",
              start: "top 70%",
              end: "bottom 45%",
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        });

        return () => {
          cleanupRail();
          gsap.set(".home-pin-card", { clearProps: "transform,opacity,visibility" });
        };
      });

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh, { once: true });
      document.fonts?.ready.then(refresh).catch(() => undefined);
      gsap.delayedCall(0.35, refresh);

      return () => {
        window.removeEventListener("load", refresh);
        media.revert();
      };
    });

    return () => {
      ctx.revert();
    };
  }, []);
}

function WebGLFinanceField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl", { alpha: true, antialias: true });
    if (!canvas || !gl) return;

    const vertexSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;
    const fragmentSource = `
      precision mediump float;
      uniform vec2 u_resolution;
      uniform float u_time;

      float circle(vec2 uv, vec2 p, float r) {
        return smoothstep(r, r - 0.006, length(uv - p));
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        uv.x *= u_resolution.x / u_resolution.y;
        float t = u_time * 0.22;
        vec3 color = vec3(0.025, 0.008, 0.055);
        float grid = 0.0;
        vec2 gv = fract((uv + vec2(t * 0.08, -t * 0.04)) * 9.0) - 0.5;
        grid += smoothstep(0.012, 0.0, abs(gv.x)) * 0.08;
        grid += smoothstep(0.012, 0.0, abs(gv.y)) * 0.05;
        float glow = 0.0;
        for (int i = 0; i < 7; i++) {
          float fi = float(i);
          vec2 p = vec2(0.18 + fi * 0.18, 0.52 + sin(t + fi * 0.9) * 0.16);
          p.x *= u_resolution.x / u_resolution.y;
          glow += circle(uv, p, 0.026 + sin(t + fi) * 0.006);
          glow += 0.022 / max(0.02, length(uv - p));
        }
        float wave = sin((uv.x * 5.5 + uv.y * 2.0 + t * 2.8) * 3.14159) * 0.5 + 0.5;
        color += vec3(0.85, 0.20, 1.0) * glow * 0.18;
        color += vec3(1.0, 0.34, 0.02) * wave * 0.08;
        color += vec3(0.15, 0.50, 1.0) * grid;
        float vignette = smoothstep(1.35, 0.25, distance(uv, vec2(0.7, 0.52)));
        gl_FragColor = vec4(color * vignette, 1.0);
      }
    `;

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const vertexShader = compile(gl.VERTEX_SHADER, vertexSource);
    const fragmentShader = compile(gl.FRAGMENT_SHADER, fragmentSource);
    const program = gl.createProgram();
    if (!vertexShader || !fragmentShader || !program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);

    const position = gl.getAttribLocation(program, "a_position");
    const resolution = gl.getUniformLocation(program, "u_resolution");
    const time = gl.getUniformLocation(program, "u_time");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    let frame = 0;
    const render = (now: number) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.floor(canvas.clientWidth * dpr));
      const height = Math.max(1, Math.floor(canvas.clientHeight * dpr));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
      gl.uniform2f(resolution, width, height);
      gl.uniform1f(time, now * 0.001);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      frame = window.requestAnimationFrame(render);
    };
    frame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(frame);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, []);

  return <canvas ref={canvasRef} className="webgl-canvas" aria-hidden="true" />;
}

export function HomePage() {
  useHomeMotion();
  return (
    <>
      <CampaignHero image={HERO_IMAGE} eyebrow="Credmais Securitizadora" titleStart="Venda a prazo." titleBridge="Receba com" words={["liquidez.", "segurança.", "previsibilidade."]} description="Capital para sua empresa crescer sem depender do vencimento dos recebíveis nem da burocracia dos bancos." ctaText="Antecipe recebíveis, proteja boletos, organize contas e venda mais com crédito estruturado — sem depender de banco próprio." buttonText="Quero meu diagnóstico gratuito" buttonHref={CONTACT_WHATSAPP_URL} />
      <HomeProofSection />
      <WebGLEngineSection />
      <PinnedJourneySection />
      <section id="solucoes" className="solutions-showcase relative px-5 py-24 text-[#0b1628] md:px-[8%] md:py-32">
        <div className="solutions-showcase-bg" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="solutions-scroll-layout">
            <div className="solutions-scroll-copy gsap-reveal">
              <p className="solutions-eyebrow">Soluções Credmais</p>
              <h2>Soluções que giram o seu caixa.</h2>
              <p>
                Uma esteira financeira completa para vender a prazo com segurança, antecipar recebíveis, proteger boletos e organizar contas com previsibilidade real.
              </p>

              <div className="solutions-metrics" aria-label="Indicadores das soluções">
                <span><strong>5</strong> frentes financeiras integradas</span>
                <span><strong>D+1</strong> nas operações elegíveis</span>
                <span><strong>360°</strong> de visão sobre o contas a receber</span>
              </div>

              <div className="solutions-scroll-rail" aria-hidden="true">
                <span />
              </div>
            </div>

            <div className="solution-scroll-list">
              {solutions.map((solution, index) => <SolutionCard key={solution.slug} solution={solution} index={index} />)}
            </div>
          </div>
        </div>
      </section>
      <MotionRailSection />
      <HomeTrustSection />
      <HomeFAQSection />
      <ContactSection />
    </>
  );
}

function HomeProofSection() {
  const stats = [
    { value: "D+1", label: "liberação em até 24 horas" },
    { value: "5", label: "soluções de crédito para o seu caixa" },
    { value: "360°", label: "de visão sobre o contas a receber" },
    { value: "100%", label: "das operações analisadas antes da decisão" },
  ];

  return (
    <section className="home-proof-section">
      <div className="home-proof-shell">
        <div className="home-proof-copy gsap-reveal">
          <span>Base operacional</span>
          <h2>Números que traduzem o resultado no seu dia a dia.</h2>
          <p>Cada indicador nasce de operações reais: análise de carteira, liberação rápida e acompanhamento próximo para você decidir com segurança.</p>
        </div>
        <div className="home-proof-media float-layer">
          <img src={baseOperacional.url} alt="" loading="lazy" decoding="async" />
          <div className="home-proof-badge">operação acompanhada</div>
        </div>
        <div className="home-proof-grid">
          {stats.map((item) => (
            <article key={item.value} className="home-proof-card gsap-reveal">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


function WebGLEngineSection() {
  const stats = [
    { label: "Carteira analisada", value: "94%", note: "leitura minuciosa de recebíveis" },
    { label: "Risco protegido", value: "baixo", note: "decisão acompanhada de perto" },
    { label: "Pagamento", value: "D+1", note: "nas operações elegíveis" },
  ];

  return (
    <section className="webgl-engine">
      <WebGLFinanceField />
      <div className="engine-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="webgl-engine-copy gsap-reveal">
        <span>Motor financeiro</span>
        <h2>Análise, proteção e capital em um único fluxo claro.</h2>
        <p>
          Enxergue a operação inteira em um só lugar: carteira validada, risco monitorado e capital liberado com a previsibilidade que a sua empresa precisa para crescer.
        </p>
        <div className="engine-actions">
          <a href={CONTACT_WHATSAPP_URL} target="_blank" rel="noreferrer">
            Diagnosticar minha operação
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <div className="engine-mini-proof">
            <strong>3 etapas</strong>
            <span>análise, estrutura e caixa</span>
          </div>
        </div>
      </div>

      <div className="engine-visual-stack gsap-reveal">
        <div className="engine-human-card float-layer">
          <img src="/assets/credmais-comerciante.jpg" alt="" loading="lazy" decoding="async" />
          <div className="engine-human-caption">
            <span>análise humana + tecnologia</span>
            <strong>Operação acompanhada</strong>
          </div>
        </div>
        <div className="engine-flow-line" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="engine-dashboard">
          {stats.map((item) => (
            <div key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <small>{item.note}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PinnedJourneySection() {
  const steps = [
    { title: "Diagnóstico", text: "Fazemos a leitura da carteira, prazos, boletos, contratos e da real urgência de capital.", image: "/assets/credmais-pessoal.jpg" },
    { title: "Estrutura", text: "Desenhamos a melhor solução, com taxa, garantia e documentos definidos com transparência.", image: "/assets/home-journey-estrutura.png" },
    { title: "Liberação", text: "O caixa entra na sua conta com acompanhamento próximo para você vender e operar sem pausa.", image: "/assets/home-journey-liberacao.png" },
  ];

  return (
    <section className="home-pin-section">
      <div className="home-pin-copy gsap-reveal">
        <span>Jornada Credmais</span>
        <h2>Do diagnóstico ao caixa em três passos simples.</h2>
        <p>Uma jornada leve na tela, robusta por trás da operação: cada etapa é conduzida por especialistas com o foco no crescimento da sua empresa.</p>
      </div>
      <div className="home-pin-stack">
        {steps.map((step, index) => (
          <article key={step.title} className="home-pin-card">
            <div className="home-pin-card-body">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
            <div className="home-pin-card-media">
              <img src={step.image} alt="" loading="lazy" decoding="async" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


function MotionRailSection() {
  const items = [
    { image: railCapital.url, title: "Capital para vender sem esperar", text: "Antecipe recebíveis e transforme prazo em caixa planejado." },
    { image: railBoleto.url, title: "Proteção para receber melhor", text: "Boleto, risco e cobrança em uma rotina totalmente previsível." },
    { image: railCrediario.url, title: "Venda parcelada com apoio", text: "Crediário para aumentar a conversão junto ao cliente final." },
    { image: railGestao.url, title: "Gestão que aparece no dia a dia", text: "Contas, conciliação e fluxo financeiro com leitura simples e prática." },
  ];

  return (
    <section className="motion-rail-section">
      <div className="motion-rail-heading gsap-reveal">
        <span>Soluções em movimento</span>
        <h2>Escolha a solução ideal para o momento da sua empresa.</h2>
      </div>
      <div className="motion-rail-viewport">
        <div className="motion-rail-track">
          {items.map((item) => (
            <article key={item.title} className="motion-rail-card">
              <img src={item.image} alt="" loading="lazy" decoding="async" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="motion-rail-cta gsap-reveal">
        <div>
          <span>Pronto para o próximo passo?</span>
          <h3>Monte a sua jornada financeira com a Credmais.</h3>
          <p>Fale com um especialista e descubra qual combinação de soluções encaixa melhor no ritmo da sua operação.</p>
        </div>
        <div className="motion-rail-cta-actions">
          <a href={CONTACT_WHATSAPP_URL} target="_blank" rel="noreferrer" className="motion-rail-cta-primary">
            Falar com especialista
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href="/#solucoes" className="motion-rail-cta-ghost">
            Ver todas as soluções
          </a>
        </div>
      </div>
    </section>
  );
}

function HomeTrustSection() {
  return (
    <section className="home-trust-section">
      <div className="home-trust-heading gsap-reveal">
        <span>Confiança para decidir</span>
        <h2>Empresas que crescem sem improviso escolhem a Credmais.</h2>
        <p>Antes de qualquer estrutura financeira, você precisa de clareza, acompanhamento próximo e uma operação totalmente visível.</p>
      </div>
      <div className="trust-profile-row" aria-label="Perfis de empresas atendidas">
        {trustProfiles.map((profile) => (
          <span key={profile}>{profile}</span>
        ))}
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article key={item.author} className="testimonial-card gsap-reveal">
            <p>{item.quote}</p>
            <div>
              <strong>{item.author}</strong>
              <span>{item.company}</span>
            </div>
          </article>
        ))}
      </div>
      <a href={CONTACT_WHATSAPP_URL} target="_blank" rel="noreferrer" className="trust-cta">
        Quero avaliar minha operação
        <ArrowUpRight className="h-4 w-4" />
      </a>
      <p className="cta-microcopy">Não somos banco digital. A Credmais estrutura capital, risco e contas para a sua empresa crescer com segurança.</p>
    </section>
  );
}

function HomeFAQSection() {
  return (
    <section className="home-faq-section">
      <div className="home-faq-heading gsap-reveal">
        <span>Perguntas frequentes</span>
        <h2>Tire suas dúvidas antes de falar com a Credmais.</h2>
      </div>
      <div className="home-faq-list">
        {homeFaq.map((item) => (
          <article key={item.q} className="home-faq-item gsap-reveal">
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SolutionCard({ solution, index }: { solution: Solution; index: number }) {
  const Icon = solution.icon;
  return (
    <a href={`/${solution.slug}`} className="solution-showcase-card group" style={{ "--accent": solution.accent } as CSSProperties}>
      <div className="solution-card-media">
        <img src={solution.image} alt={solution.title} loading="lazy" decoding="async" />
        <span>{String(index + 1).padStart(2, "0")} / {solution.metric}</span>
      </div>
      <div className="solution-card-body">
        <div className="solution-card-topline">
          <span className="solution-card-icon"><Icon className="h-5 w-5" /></span>
          <span className="solution-card-kicker">Credmais</span>
        </div>
        <h3>{solution.title}</h3>
        <p>{solution.summary}</p>
        <div className="solution-card-points">
          {solution.bullets.slice(0, 2).map((bullet) => (
            <span key={bullet}>
              <CheckCircle2 className="h-4 w-4" />
              {bullet}
            </span>
          ))}
        </div>
        <span className="solution-card-link">
          Ver detalhes
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </a>
  );
}

export function SolutionPage({ solution }: { solution: Solution }) {
  const theme = solutionThemes[solution.slug];
  const visualSet = getSolutionVisualSet(solution);
  const heroCopy: Record<string, { titleStart: string; titleBridge: string; words: string[] }> = {
    "antecipacao-de-recebiveis": {
      titleStart: "Antecipe vendas.",
      titleBridge: "Receba com",
      words: ["liquidez.", "fôlego.", "controle."],
    },
    "boleto-garantido": {
      titleStart: "Boleto protegido.",
      titleBridge: "Venda com",
      words: ["segurança.", "garantia.", "controle."],
    },
    consultoria: {
      titleStart: "Decida melhor.",
      titleBridge: "Cresça com",
      words: ["estratégia.", "clareza.", "dados."],
    },
    crediario: {
      titleStart: "Parcele mais.",
      titleBridge: "Venda com",
      words: ["crediário.", "conversão.", "controle."],
    },
    "gestao-de-contas": {
      titleStart: "Organize contas.",
      titleBridge: "Tenha",
      words: ["visão clara.", "fluxo.", "controle."],
    },
  };
  const copy = heroCopy[solution.slug] ?? {
    titleStart: solution.title,
    titleBridge: "com",
    words: ["controle.", "clareza.", "capital."],
  };

  return (
    <>
      <CampaignHero image={visualSet.hero} eyebrow={solution.metric} titleStart={copy.titleStart} titleBridge={copy.titleBridge} words={copy.words} description={solution.summary} ctaText={`${solution.headline} Avaliamos documentos, risco, prazo e a melhor estrutura para sua operação — sem burocracia bancária.`} buttonText={`Quero contratar ${solution.title}`} buttonHref={CONTACT_WHATSAPP_URL} />
      <SolutionProofStrip solution={solution} theme={theme} />
      <section className={`solution-detail-intro solution-detail-${visualSet.layout}`} style={{ "--accent": solution.accent } as CSSProperties}>
        <div className="solution-detail-shell">
          <div className="solution-detail-copy solution-animated">
            <p>{solution.metric}</p>
            <h2>{solution.title}</h2>
            <span>{theme.audience}</span>
          </div>
          <div className="solution-bullet-grid">
            {solution.bullets.map((bullet, index) => (
              <div key={bullet} className="solution-bullet-card solution-animated">
                <CheckCircle2 className="h-6 w-6" />
                <small>{String(index + 1).padStart(2, "0")}</small>
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SolutionThemeMosaic solution={solution} theme={theme} visualSet={visualSet} />
      <SolutionOperatingPanel solution={solution} theme={theme} visualSet={visualSet} />
      <SolutionExperience solution={solution} theme={theme} visualSet={visualSet} />
      <SolutionFaqSection solution={solution} theme={theme} />
      <ContactSection compact />
    </>
  );
}

function getSolutionVisualSet(solution: Solution): SolutionVisualSet {
  return solutionVisualSets[solution.slug] ?? {
    hero: solution.image,
    banner: solution.image,
    flow: CONTACT_IMAGE,
    layout: "capital",
  };
}

function SolutionProofStrip({ solution, theme }: { solution: Solution; theme: SolutionTheme }) {
  return (
    <section className="solution-proof-strip" style={{ "--accent": solution.accent } as CSSProperties}>
      {theme.proof.map((item) => (
        <article key={item.value}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </article>
      ))}
    </section>
  );
}

function SolutionThemeMosaic({ solution, theme, visualSet }: { solution: Solution; theme: SolutionTheme; visualSet: SolutionVisualSet }) {
  return (
    <section className={`solution-theme-mosaic solution-theme-${visualSet.layout}`} style={{ "--accent": solution.accent } as CSSProperties}>
      <div className="solution-theme-copy solution-animated">
        <div className="solution-theme-signal float-layer" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span>{solution.title}</span>
        <h2>{theme.promise}</h2>
        <div className="solution-theme-badge">{solution.metric}</div>
      </div>
      <div className="solution-theme-cases">
        {theme.cases.map((item, index) => (
          <article key={item.title} className="solution-theme-case solution-animated">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SolutionOperatingPanel({ solution, theme, visualSet }: { solution: Solution; theme: SolutionTheme; visualSet: SolutionVisualSet }) {
  const Icon = solution.icon;
  return (
    <section className={`solution-operating-panel solution-operating-${visualSet.layout}`} style={{ "--accent": solution.accent } as CSSProperties}>
      <div className="solution-operating-copy solution-animated">
        <span>Plano operacional</span>
        <h2>{theme.operatingTitle}</h2>
        <p>{theme.operatingText}</p>
        <a href={CONTACT_WHATSAPP_URL} target="_blank" rel="noreferrer">
          Quero estruturar {solution.title}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <div className="solution-operating-stack" aria-label={`Plano operacional de ${solution.title}`}>
        {theme.operating.map((item, index) => (
          <article key={item.title} className="solution-operating-card solution-animated">
            <div>
              <Icon className="h-5 w-5" />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SolutionExperience({ solution, theme, visualSet }: { solution: Solution; theme: SolutionTheme; visualSet: SolutionVisualSet }) {
  const Icon = solution.icon;
  const visuals = [
    { title: solution.metric, text: solution.headline },
    { title: "Atendimento humano", text: "Consultores acompanham sua empresa em cada etapa, com clareza e sem enrolação." },
    { title: "Operação organizada", text: "Visão integrada de recebíveis, risco, contas e oportunidades comerciais em um só lugar." },
  ];

  return (
    <div className={`solution-experience solution-layout-${visualSet.layout}`} style={{ "--accent": solution.accent } as CSSProperties}>
      <section className="solution-page-banner">
        <div className="solution-banner-copy solution-animated">
          <span>{solution.title}</span>
          <h2>Estruture o financeiro antes do caixa apertar.</h2>
          <p>
            Falta de liquidez, inadimplência, venda a prazo ou controle financeiro: qualquer que seja a dor, a Credmais organiza a alternativa certa e acompanha a operação até o resultado.
          </p>
          <a href={CONTACT_WHATSAPP_URL} target="_blank" rel="noreferrer">
            Falar com um especialista
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="solution-banner-media solution-animated">
          <img src={visualSet.banner} alt={solution.title} loading="lazy" decoding="async" />
          <div className="solution-floating-card solution-floating-card-a">
            <Icon className="h-5 w-5" />
            <strong>{solution.metric}</strong>
          </div>
          <div className="solution-floating-card solution-floating-card-b">
            <span>D+1</span>
            <small>agenda acompanhada</small>
          </div>
        </div>
      </section>

      <section className="solution-flow-section">
        <div className="solution-flow-sticky solution-animated">
          <span>Como funciona</span>
          <h2>Do pedido ao caixa, sem perder visibilidade.</h2>
          <p>{solution.detail}</p>
          <div className="solution-flow-image">
            <img src={visualSet.flow} alt="" loading="lazy" decoding="async" />
          </div>
        </div>
        <div className="solution-flow-steps">
          {theme.flow.map((item, index) => (
            <article key={item.title} className="solution-flow-step solution-animated">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="solution-visual-grid">
        {visuals.map((item, index) => (
          <article key={item.title} className="solution-visual-card solution-animated">
            <div className="solution-visual-orb" aria-hidden="true">
              <Icon className="h-6 w-6" />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div>
              <span>Credmais</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

function SolutionFaqSection({ solution, theme }: { solution: Solution; theme: SolutionTheme }) {
  return (
    <section className="solution-faq-section" style={{ "--accent": solution.accent } as CSSProperties}>
      <div className="solution-faq-heading solution-animated">
        <span>Perguntas frequentes</span>
        <h2>O que você precisa saber antes de contratar {solution.title.toLowerCase()}.</h2>
      </div>
      <div className="solution-faq-list">
        {theme.faq.map((item) => (
          <article key={item.q} className="solution-faq-item solution-animated">
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </article>
        ))}
      </div>
      <a href={CONTACT_WHATSAPP_URL} target="_blank" rel="noreferrer" className="solution-faq-cta">
        Tirar dúvidas no WhatsApp
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </section>
  );
}

export function AboutPage() {
  return (
    <>
      <CampaignHero image={ABOUT_IMAGE} eyebrow="Sobre a Credmais" titleStart="Crédito humano." titleBridge="Crescimento com" words={["confiança.", "clareza.", "parceria."]} description="Uma securitizadora criada para simplificar o capital, proteger operações e caminhar junto com sua empresa em cada fase do crescimento." ctaText="Fomento, recebíveis, boletos, crediário, consultoria e gestão de contas para empresas que buscam previsibilidade financeira." buttonText="Falar com a Credmais" buttonHref={CONTACT_WHATSAPP_URL} />
      <AboutIntroSection />
      <ContactSection compact />
    </>
  );
}

function AboutIntroSection() {
  const principles = [
    { value: "01", title: "Leitura humana", text: "Antes de qualquer proposta, entendemos a sua rotina, os seus prazos e a real pressão sobre o caixa." },
    { value: "02", title: "Estrutura clara", text: "Cada alternativa mostra custo, prazo, risco e impacto operacional — sem letras miúdas nem surpresas." },
    { value: "03", title: "Acompanhamento", text: "A sua empresa nunca fica sozinha depois da liberação. Estamos ao lado, do primeiro passo à revisão da estratégia." },
  ];

  return (
    <section className="about-intro-section">
      <div className="about-intro-copy">
        <span>Como trabalhamos</span>
        <h2>Mais do que uma securitizadora, um parceiro de crescimento.</h2>
        <p>Humanizamos o crédito e desenhamos estruturas financeiras para empresas evoluírem com previsibilidade. Operação, cobrança e capital deixam de ser blocos separados e passam a trabalhar juntos pelo seu resultado.</p>
      </div>
      <div className="about-intro-media">
        <img src="/assets/credmais-refer.jpg" alt="" loading="lazy" decoding="async" />
      </div>
      <div className="about-principles">
        {principles.map((item) => (
          <article key={item.value}>
            <strong>{item.value}</strong>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ContactPage() {
  return (
    <>
      <CampaignHero image={CONTACT_IMAGE} eyebrow="Fale com a Credmais" titleStart="Vamos conversar." titleBridge="Sua empresa com" words={["capital.", "apoio.", "direção."]} description="Conte para nós o que sua empresa precisa. Avaliamos o cenário e apresentamos a melhor estrutura para o seu fluxo financeiro." ctaText="Envie o seu desafio: caixa imediato, boleto protegido, crédito para vender mais, consultoria ou organização de contas." buttonText="Chamar no WhatsApp" buttonHref={CONTACT_WHATSAPP_URL} />
      <ContactSection compact />
    </>
  );
}

function CampaignHero({ image, eyebrow, titleStart, titleBridge, words, description, ctaText, buttonText, buttonHref }: { image: string; eyebrow: string; titleStart: string; titleBridge: string; words: string[]; description: string; ctaText: string; buttonText: string; buttonHref: string }) {
  return (
    <section className="campaign-hero relative isolate min-h-screen overflow-hidden bg-[#0b1628]">
      <div className="hero-bg-image absolute inset-0 -z-10" aria-hidden="true">
        <img src={image} alt="" className="hero-full-image" />
      </div>
      <div className="hero-animated-copy">
        <span>{eyebrow}</span>
        <h1>
          {titleStart}
          <br />
          {titleBridge}
          <span className="hero-word-rotator" aria-hidden="true">
            {words.map((word) => <i key={word}>{word}</i>)}
          </span>
        </h1>
        <p>{description}</p>
      </div>
      <div className="hero-cta">
        <div className="hero-cta-panel">
          <div className="hero-cta-copy">
            <span>Operacao Credmais</span>
            <p>{ctaText}</p>
          </div>
          <div className="hero-service-links" aria-label="Servicos Credmais">
            {solutions.map((solution) => (
              <a key={solution.slug} href={`/${solution.slug}`} style={{ "--accent": solution.accent } as CSSProperties}>
                {solution.title}
              </a>
            ))}
          </div>
          <div className="hero-cta-action">
            <a href={buttonHref} className="hero-cta-button" target={buttonHref.startsWith("http") ? "_blank" : undefined} rel={buttonHref.startsWith("http") ? "noreferrer" : undefined}>
              {buttonText}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <small>Resposta pelo canal oficial da Credmais.</small>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ compact = false }: { compact?: boolean }) {
  return (
    <section id="contato" className={`bg-[#142946] px-5 text-white md:px-[10%] ${compact ? "py-24" : "py-32"}`}>
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-6 text-xs font-black uppercase tracking-[0.36em] text-[#ddbd70]">Contato</p>
        <h2 className="text-5xl font-black leading-none tracking-[-0.06em] md:text-8xl">O que sua empresa precisa resolver?</h2>
        <p className="mx-auto mt-6 max-w-3xl text-base font-bold leading-relaxed text-white/58 md:text-lg">
          Fale com a Credmais sobre falta de caixa, venda a prazo, inadimplencia, dificuldade de credito, boleto garantido, crediario ou gestao de contas.
        </p>
        <div className="contact-service-grid" aria-label="Servicos para contato">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <a key={solution.slug} href={`/${solution.slug}`} style={{ "--accent": solution.accent } as CSSProperties}>
                <span className="contact-service-icon"><Icon className="h-5 w-5" /></span>
                <strong>{solution.title}</strong>
                <small>{solution.metric}</small>
              </a>
            );
          })}
        </div>
        <form className="mt-16 grid gap-10 text-left">
          <div className="grid gap-10 md:grid-cols-2"><ContactInput placeholder="Seu nome" /><ContactInput placeholder="Seu e-mail" type="email" /></div>
          <ContactInput placeholder="Sua empresa" />
          <textarea className="contact-input min-h-36 resize-none" placeholder="Conte sua necessidade: antecipar recebiveis, proteger boleto, organizar contas, vender no crediario ou estruturar capital." />
          <div className="grid gap-8 pt-4 md:grid-cols-[1fr_auto] md:items-center">
            <div className="grid gap-3 text-sm text-white/55 md:text-left">
              <ContactLine icon={Phone} value={`WhatsApp ${CONTACT_WHATSAPP_DISPLAY}`} href={CONTACT_WHATSAPP_URL} />
              <ContactLine icon={Mail} value={CONTACT_EMAIL} href={`mailto:${CONTACT_EMAIL}`} />
              <ContactLine icon={FileText} value={`CNPJ ${CONTACT_CNPJ}`} />
            </div>
            <div className="contact-submit-wrap">
              <a href={CONTACT_WHATSAPP_URL} className="contact-submit" target="_blank" rel="noreferrer">
                Falar pelo WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <small>Ou envie email para {CONTACT_EMAIL}.</small>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

function ContactInput({ placeholder, type = "text" }: { placeholder: string; type?: string }) {
  return <input type={type} placeholder={placeholder} className="contact-input" />;
}

function ContactLine({ icon: Icon, value, href }: { icon: IconComponent; value: string; href?: string }) {
  const content = (
    <>
      <Icon className="h-4 w-4 text-[#ddbd70]" />
      {value}
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex items-center gap-3 transition hover:text-white" target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
        {content}
      </a>
    );
  }

  return <span className="flex items-center gap-3">{content}</span>;
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0b1628] px-5 py-10 text-white md:px-[10%]">
      <span className="brand-logo-shell">
        <img src={LOGO_IMAGE} alt="Credmais Securitizadora" />
      </span>
    </footer>
  );
}

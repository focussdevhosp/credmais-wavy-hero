import React, { ComponentType, CSSProperties, FormEvent, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

import heroExecutivos from "@/assets/hero-credmais-rooftop.webp.asset.json";
import heroWomanNew from "@/assets/hero-woman-v3.webp.asset.json";
import heroAntecipacao from "@/assets/hero-antecipacao.webp.asset.json";
import heroBoletoGarantido from "@/assets/hero-boleto-garantido.webp.asset.json";
import heroConsultoria from "@/assets/hero-consultoria.webp.asset.json";
import heroCrediario from "@/assets/hero-crediario.webp.asset.json";
import logoNew from "@/assets/logo-credmais-premium.png.asset.json";


import baseOperacional from "@/assets/base-operacional.webp.asset.json";
import cardAntecipacao from "@/assets/card-antecipacao.webp.asset.json";
import cardBoleto from "@/assets/boleto-garantido-card.webp.asset.json";
import cardConsultoria from "@/assets/consultoria-card.webp.asset.json";
import cardCrediario from "@/assets/crediario-card.webp.asset.json";
import railCapital from "@/assets/rail-capital.webp.asset.json";
import railBoleto from "@/assets/rail-boleto.webp.asset.json";
import railCrediario from "@/assets/rail-crediario.webp.asset.json";
import railGestao from "@/assets/rail-gestao.webp.asset.json";
import brandRecepcao from "@/assets/brand-1.webp.asset.json";
import brandAssinatura from "@/assets/brand-2.webp.asset.json";
import brandRooftop from "@/assets/brand-3.webp.asset.json";
import brandAtendimento from "@/assets/brand-4.webp.asset.json";
import brandIndustria from "@/assets/brand-5.webp.asset.json";
import brandVarejo from "@/assets/brand-6.webp.asset.json";
import brandRestaurante from "@/assets/brand-7.webp.asset.json";
import brandAgro from "@/assets/brand-8.webp.asset.json";
import brandPredio from "@/assets/brand-9.webp.asset.json";
import brandConcessionaria from "@/assets/brand-10.webp.asset.json";
import wide1 from "@/assets/wide-1.webp.asset.json";
import wide2 from "@/assets/wide-2.webp.asset.json";
import wide3 from "@/assets/wide-3.webp.asset.json";
import wide4 from "@/assets/wide-4.webp.asset.json";
import wide5 from "@/assets/wide-5.webp.asset.json";
import wide6 from "@/assets/wide-6.webp.asset.json";
import wide7 from "@/assets/wide-7.webp.asset.json";
import wide8 from "@/assets/wide-8.webp.asset.json";
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
  operatingTitle: string;
  operatingText: string;
  operating: { title: string; text: string }[];
  flow: { title: string; text: string }[];
  faq: { q: string; a: string }[];
};

const HERO_IMAGE = wide5.url;
const ABOUT_IMAGE = wide3.url;
const CONTACT_IMAGE = wide6.url;
const LOGO_IMAGE = logoNew.url;
const CONTACT_EMAIL = "contato@sejacredmais.com";
const CONTACT_WHATSAPP_DISPLAY = "(11) 94089-3852";
const CONTACT_WHATSAPP_URL = "https://wa.me/5511940893852";
const CONTACT_CNPJ = "67.859.471/0001-20";

const solutionVisualSets: Partial<Record<string, SolutionVisualSet>> = {
  "antecipacao-de-recebiveis": {
    hero: wide8.url,
    banner: brandIndustria.url,
    flow: wide8.url,
    layout: "capital",
  },
  "boleto-garantido": {
    hero: wide1.url,
    banner: brandConcessionaria.url,
    flow: wide1.url,
    layout: "protection",
  },
  consultoria: {
    hero: wide2.url,
    banner: brandAtendimento.url,
    flow: wide2.url,
    layout: "advisory",
  },
  crediario: {
    hero: wide7.url,
    banner: brandRooftop.url,
    flow: wide7.url,
    layout: "retail",
  },
  "gestao-de-contas": {
    hero: wide4.url,
    banner: brandPredio.url,
    flow: wide4.url,
    layout: "control",
  },
};


export const solutions: Solution[] = [
  {
    slug: "antecipacao-de-recebiveis",
    title: "Antecipação de Recebíveis",
    headline: "Potencialize seu caixa.",
    summary: "Liquidez imediata para sua empresa. Converta vendas a prazo em capital de giro hoje mesmo.",
    detail: "Uma estrutura de securitização desenhada para empresas que buscam agilidade. Com a Credmais, o valor das suas vendas futuras é liberado em D+1, eliminando a espera e a burocracia bancária.",
    icon: HandCoins,
    bullets: ["Liquidez em até 24 horas", "Taxas competitivas e transparentes", "Análise técnica personalizada"],
    image: brandAgro.url,
    metric: "Liquidez Imediata",
    accent: "#C7A96B",
  },
  {
    slug: "boleto-garantido",
    title: "Boleto Garantido",
    headline: "Boleto protegido.",
    summary: "Mais proteção e previsibilidade. Elimine o risco de inadimplência em suas vendas por boleto.",
    detail: "Uma solução completa que engloba análise de risco, emissão e garantia de recebimento. Reduza incertezas e planeje seu crescimento com a certeza de que o capital entrará no caixa.",
    icon: FileText,
    bullets: ["Proteção contra inadimplência", "Previsibilidade total de caixa", "Gestão de cobrança profissional"],
    image: brandRestaurante.url,
    metric: "Mais Segurança",
    accent: "#C7A96B",
  },
  {
    slug: "consultoria",
    title: "Consultoria Estratégica",
    headline: "Decida melhor.",
    summary: "Alta performance financeira. Desenvolvemos a estrutura de capital ideal para o seu momento.",
    detail: "Mapeamos gargalos, analisamos contratos e desenhamos planos de ação executáveis. Tenha ao seu lado especialistas que entendem o mercado de securitização e crédito estruturado.",
    icon: LineChart,
    bullets: ["Diagnóstico 360º do fluxo", "Planejamento de capital sob medida", "Visão de longo prazo"],
    image: brandAssinatura.url,
    metric: "Alta Performance",
    accent: "#C7A96B",
  },
  {
    slug: "crediario",
    title: "Crediário Próprio",
    headline: "Parcele mais.",
    summary: "Expansão de vendas. Potencialize suas vendas oferecendo crédito direto ao seu cliente.",
    detail: "Estruturamos toda a jornada de crédito da sua empresa: da análise do comprador ao acompanhamento da carteira. Venda mais com a segurança de uma operação profissional.",
    icon: CircleDollarSign,
    bullets: ["Maior conversão de vendas", "Jornada sem burocracia", "Controle total da carteira"],
    image: brandVarejo.url,
    metric: "Expansão de Vendas",
    accent: "#C7A96B",
  },
  {
    slug: "gestao-de-contas",
    title: "Gestão de Recebíveis",
    headline: "Recupere seus recebíveis.",
    summary: "Recuperação ágil e especializada. Mais fôlego, resultado e controle para sua operação.",
    detail: "Assumimos a gestão ativa da sua cobrança. Com processos estruturados e relatórios transparentes, transformamos dívidas paradas em capital produtivo para o seu negócio.",
    icon: Workflow,
    bullets: ["Recuperação ativa e ética", "Relatórios de performance", "Preservação de parcerias"],
    image: brandRecepcao.url,
    metric: "Recuperação Ágil",
    accent: "#C7A96B",
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
    a: "Comece pela sua prioridade: caixa imediato, proteção do boleto, crediário para vender mais, consultoria estratégica, gestão de contas ou recebimento de dívidas. Nós indicamos o melhor caminho.",
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
    operatingTitle: "Liquidez imediata sem comprometer sua política comercial.",
    operatingText: "Mostramos o caminho do recebível até o caixa com foco em velocidade, margem preservada e previsibilidade a cada operação.",
    operating: [
      { title: "Escolha do lote", text: "Você decide quais recebíveis antecipar e preserva os demais para o fluxo futuro." },
      { title: "Custo transparente", text: "Taxa, prazo e valor líquido aparecem antes de qualquer assinatura." },
      { title: "Caixa direcionado", text: "Use o capital para estoque, folha, fornecedor ou campanha sem perder controle do ciclo." },
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
    operatingTitle: "Uma camada de proteção para vender por boleto com muito menos risco.",
    operatingText: "Emissão, análise de risco e acompanhamento em um só processo — para você saber exatamente onde reduzimos sua incerteza.",
    operating: [
      { title: "Política de risco clara", text: "Avaliamos cliente, valor, prazo e histórico antes de garantir cada boleto." },
      { title: "Cobrança acompanhada", text: "O status do boleto deixa de ficar solto na rotina e ganha ritmo profissional." },
      { title: "Previsibilidade real", text: "Você planeja entradas com muito menos surpresa e menor exposição à inadimplência." },
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
    operatingTitle: "Diagnóstico financeiro para decidir antes de contratar capital.",
    operatingText: "Uma leitura estratégica com cenários, prioridades e um plano de execução — não apenas um relatório com recomendações genéricas.",
    operating: [
      { title: "Mapa do fluxo", text: "Entradas, saídas, contratos e gargalos aparecem em uma única leitura integrada." },
      { title: "Cenários comparados", text: "Você entende o impacto de cada prazo, taxa, garantia e da real necessidade de capital." },
      { title: "Plano de ação", text: "A recomendação vira uma sequência prática para ajustar rotina, crédito e resultado." },
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
    operatingTitle: "Parcelamento como ferramenta comercial — nunca como improviso.",
    operatingText: "Uma jornada clara de venda, aprovação e acompanhamento para você faturar mais sem perder de vista a carteira.",
    operating: [
      { title: "Oferta no momento certo", text: "O parcelamento entra em cena quando o preço à vista trava a decisão do cliente." },
      { title: "Aprovação simples", text: "Dados e documentos tratados em uma jornada rápida para o comprador dizer sim." },
      { title: "Carteira sob controle", text: "Você vende mais mantendo visibilidade total sobre parcelas e recebimentos." },
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
      { value: "Cobrança", label: "especializada e ativa" },
      { value: "Recuperação", label: "com foco em resultado" },
      { value: "Relatórios", label: "claros e mensais" },
    ],
    audience: "Para empresas que têm recebíveis em atraso e precisam de uma operação especializada para recuperar valores sem desgaste interno.",
    operatingTitle: "Recebemos suas dívidas e cuidamos de toda a recuperação.",
    operatingText: "Assumimos o contato, a negociação e o acompanhamento das dívidas, com relatórios claros e uma abordagem que preserva a relação com seu cliente.",
    operating: [
      { title: "Análise da carteira", text: "Mapeamos valores, prazos, perfil dos devedores e histórico para montar a melhor estratégia de recuperação." },
      { title: "Cobrança estruturada", text: "Atuamos com ritmo, canais definidos e comunicação profissional, sem expor a marca de forma negativa." },
      { title: "Recuperação com acompanhamento", text: "Você acompanha resultados, acordos e valores recebidos em relatórios simples e transparentes." },
    ],
    flow: [
      { title: "Entrega da carteira", text: "Você encaminha os recebíveis em atraso e definimos juntos a estratégia de atuação." },
      { title: "Cobrança ativa", text: "Contatos, negociações e acordos conduzidos pela nossa equipe com respeito e consistência." },
      { title: "Recuperação e repasse", text: "Valores recebidos são repassados com previsibilidade e o status fica sempre atualizado." },
    ],
    faq: [
      { q: "A CredMais compra os recebíveis em atraso?", a: "Podemos assumir a gestão e recuperação da carteira. A melhor estrutura — gestão, aquisição ou antecipação — é definida após a análise dos títulos." },
      { q: "Como acompanho os resultados?", a: "Você recebe relatórios claros com status dos títulos, acordos firmados e valores recuperados." },
      { q: "A cobrança prejudica a relação com meu cliente?", a: "Não. Nosso approach é profissional e respeitoso, com foco em recuperar o valor sem desgastar o relacionamento." },
    ],
  },
};


export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname }) || "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav className={`nav-container ${scrolled ? "is-scrolled" : ""}`}>
        <a href="/" className="brand-logo-shell">
          <img src={LOGO_IMAGE} alt="CredMais" />
        </a>

        <div className="nav-links">
          <NavLink href="/" active={pathname === "/"} scrolled={scrolled}>
            Início
          </NavLink>
          <SolutionsDropdown pathname={pathname} scrolled={scrolled} />
          <NavLink href="/#sobre" active={pathname === "/sobre"} scrolled={scrolled}>
            Sobre
          </NavLink>
          <NavLink href="/#form-contato" active={pathname === "/contato"} scrolled={scrolled}>
            Contato
          </NavLink>
        </div>

        <div className="nav-cta">
          <a
            href={CONTACT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta-button group"
          >
            Simular agora
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          className={`nav-mobile-toggle ${scrolled ? "is-scrolled" : ""}`}
          onClick={() => setOpen((value) => !value)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="mx-3 mt-3 overflow-hidden rounded-[32px] border border-white/10 bg-[#142946]/95 p-4 text-white shadow-2xl backdrop-blur-2xl md:hidden">
          <div className="grid gap-2">
            <MobileLink href="/" onClick={() => setOpen(false)}>Início</MobileLink>
            <div className="my-2 border-t border-white/5 pt-2">
              <span className="px-4 text-[10px] font-black uppercase tracking-[0.24em] text-white/40">Soluções</span>
              <div className="mt-2 grid gap-1">
                {solutions.map((solution) => (
                  <MobileLink key={solution.slug} href={`/${solution.slug}`} onClick={() => setOpen(false)}>
                    {solution.title}
                  </MobileLink>
                ))}
              </div>
            </div>
            <MobileLink href="/#sobre" onClick={() => setOpen(false)}>Sobre</MobileLink>
            <MobileLink href="/#form-contato" onClick={() => setOpen(false)}>Contato</MobileLink>
            <a
              href={CONTACT_WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#142946]"
            >
              Simular agora
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


function SolutionsDropdown({ pathname, scrolled }: { pathname: string; scrolled: boolean }) {
  const active = solutions.some((item) => pathname === `/${item.slug}`);
  return (
    <div className="group relative">
      <a href="/#solucoes" className={`nav-link inline-flex items-center gap-1.5 transition ${active ? "is-active" : ""} ${scrolled ? "is-scrolled" : ""}`}>
        Soluções
        <span className="grid h-5 w-5 place-items-center rounded-full border border-current/25 transition group-hover:rotate-180">
          <ChevronDown className="h-3 w-3" />
        </span>
      </a>
      <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[clamp(300px,80vw,640px)] -translate-x-1/2 translate-y-3 pt-3 opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
        <div className="solutions-menu solutions-menu-premium overflow-hidden rounded-[32px] border border-white/20 bg-[#142946]/98 p-6 text-white shadow-[0_40px_100px_rgba(0,0,0,0.6)] backdrop-blur-3xl">
          <div className="mb-6 border-b border-white/10 pb-4">
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-white/40">Nossas Soluções</span>
            <p className="mt-1.5 text-sm font-light text-white/60">Estruturas financeiras desenhadas para o seu crescimento.</p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

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
  return <a href={href} className={`nav-link ${active ? "is-active" : ""} ${scrolled ? "is-scrolled" : ""}`} style={{ color: "inherit" }}>{children}</a>;
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


export function HomePage() {
  useHomeMotion();
  return (
    <>
      <CampaignHero className="home-hero" image={HERO_IMAGE} eyebrow="Soluções Financeiras de Elite" titleStart="Potencialize seu caixa." titleBridge="Cresça com" words={["inteligência.", "velocidade.", "estratégia."]} description="A securitizadora que transforma seus recebíveis em uma poderosa ferramenta de expansão estratégica para o seu sucesso." />
      <section id="solucoes" className="solutions-showcase px-5 py-32 text-[#0b1628] md:px-[8%]">
        <div className="mx-auto max-w-[1600px]">
          <div className="solutions-scroll-layout">
            <div className="solutions-scroll-copy sticky top-32">
              <span className="mb-6 block text-[11px] font-black uppercase tracking-[0.4em] text-[#C7A96B]">Engenharia Financeira</span>
              <h2 className="gsap-reveal text-[clamp(4rem,8vw,9rem)] font-thin leading-[0.8] tracking-[-0.08em] text-[#071A33]">Soluções que redefinem o seu fluxo.</h2>
              <p className="mt-8 max-w-md text-lg font-light leading-relaxed text-[#142946]/70">
                Desenvolvemos arquiteturas de capital sob medida para empresas que não aceitam o comum. Securitização com propósito, agilidade e escala.
              </p>
            </div>

            <div className="solution-scroll-list">
              {solutions.map((solution, index) => <SolutionCard key={solution.slug} solution={solution} index={index} />)}
            </div>
          </div>
        </div>
      </section>
      
      <HomeTrustSection />
      <HomeFAQSection />
      <ContactSection />
    </>
  );
}


function HomeTrustSection() {
  return (
    <section className="home-trust-section bg-[#F6F8FA] py-32 px-5 md:px-[8%]">
      <div className="mx-auto max-w-7xl text-center mb-24">
        <div className="home-trust-heading max-w-4xl mx-auto">
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#C7A96B] mb-6 block">Parceria de Alto Nível</span>
          <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-thin leading-[0.85] tracking-[-0.06em] text-[#071A33] mb-8">A potência que sua empresa precisa para decidir com clareza.</h2>
          <p className="text-lg text-[#52606D] font-light leading-relaxed">Unimos tecnologia de ponta e análise humana para estruturar operações que impulsionam o seu faturamento com total visibilidade.</p>
        </div>
        
        <div className="trust-profile-row flex flex-wrap justify-center gap-8 mt-16 opacity-40">
          {trustProfiles.map((profile) => (
            <span key={profile} className="text-xs font-black uppercase tracking-widest text-[#071A33]">{profile}</span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="testimonial-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <article key={item.author} className="bg-white p-12 rounded-[24px] shadow-sm hover:shadow-xl transition-all border border-[#E8EDF2] group">
              <p className="text-lg italic text-[#52606D] mb-8 font-light leading-relaxed">"{item.quote}"</p>
              <div className="flex flex-col gap-1 border-t border-[#E8EDF2] pt-6">
                <strong className="text-[#071A33] font-bold text-sm uppercase tracking-wider">{item.author}</strong>
                <span className="text-[#C7A96B] text-xs font-black uppercase tracking-widest">{item.company}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-24 text-center">
        <a href={CONTACT_WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 bg-[#071A33] text-[#e9f0fa] px-10 py-6 rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#C7A96B] hover:text-[#071A33] transition-all">
          Quero avaliar minha operação
          <ArrowUpRight className="h-4 w-4" />
        </a>
        <p className="mt-8 text-[11px] font-black uppercase tracking-[0.24em] text-[#52606D]/40">A Credmais estrutura capital, risco e contas para a sua empresa crescer com segurança.</p>
      </div>
    </section>
  );
}

function HomeFAQSection() {
  return (
    <section className="home-faq-section py-32 px-5 md:px-[15%] bg-white">
      <div className="mx-auto max-w-4xl">
        <div className="home-faq-heading mb-20 text-center">
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#C7A96B] mb-6 block">Perguntas frequentes</span>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-thin leading-[0.9] tracking-[-0.06em] text-[#071A33]">Tire suas dúvidas antes de falar conosco.</h2>
        </div>
        <div className="home-faq-list grid gap-8">
          {homeFaq.map((item) => (
            <article key={item.q} className="group border-b border-[#E8EDF2] pb-8 last:border-0">
              <h3 className="text-xl font-bold text-[#071A33] mb-4 flex items-start gap-4">
                <span className="text-[#C7A96B] font-thin">?</span>
                {item.q}
              </h3>
              <p className="text-[#52606D] font-light leading-relaxed pl-8">{item.a}</p>
            </article>
          ))}
        </div>
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
      titleStart: "Dívidas recebidas.",
      titleBridge: "Você com",
      words: ["fôlego.", "resultado.", "controle."],
    },
  };
  const copy = heroCopy[solution.slug] ?? {
    titleStart: solution.title,
    titleBridge: "com",
    words: ["controle.", "clareza.", "capital."],
  };

  return (
    <>
      <CampaignHero image={visualSet.hero} eyebrow={solution.metric} titleStart={copy.titleStart} titleBridge={copy.titleBridge} words={copy.words} description={solution.summary} />
      <SolutionOperatingPanel solution={solution} theme={theme} visualSet={visualSet} />
      <SolutionExperience solution={solution} visualSet={visualSet} />
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



function SolutionOperatingPanel({ solution, theme, visualSet }: { solution: Solution; theme: SolutionTheme; visualSet: SolutionVisualSet }) {
  const Icon = solution.icon;
  return (
    <section className={`solution-operating-panel py-32 px-5 md:px-[8%] bg-[#F6F8FA]`} style={{ "--accent": solution.accent } as CSSProperties}>
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="solution-operating-copy">
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#C7A96B] mb-6 block">Plano operacional</span>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-thin leading-[0.9] tracking-[-0.06em] text-[#071A33] mb-8">{theme.operatingTitle}</h2>
          <p className="text-lg text-[#52606D] font-light leading-relaxed mb-10">{theme.operatingText}</p>
          
          <ul className="flex flex-col gap-6 mb-12">
            {solution.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-4 text-[#071A33] font-medium uppercase tracking-widest text-xs">
                <CheckCircle2 className="h-5 w-5 text-[#C7A96B]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          
          <a href={CONTACT_WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 bg-[#071A33] text-white px-8 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-[#C7A96B] hover:text-[#071A33] transition-all shadow-lg">
            Quero estruturar {solution.title}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        
        <div className="grid gap-6">
          {theme.operating.map((item, index) => (
            <article key={item.title} className="bg-white p-8 rounded-[24px] border border-[#E8EDF2] shadow-sm hover:shadow-xl transition-all group">
              <div className="flex items-center gap-6 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#F6F8FA] flex items-center justify-center text-[#C7A96B] group-hover:bg-[#071A33] transition-colors">
                  <Icon size={20} />
                </div>
                <span className="text-3xl font-thin text-[#C7A96B]/20">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="text-xl font-bold text-[#071A33] mb-2">{item.title}</h3>
              <p className="text-[#52606D] font-light leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionExperience({ solution, visualSet }: { solution: Solution; visualSet: SolutionVisualSet }) {
  const Icon = solution.icon;

  return (
    <div className={`solution-experience solution-layout-${visualSet.layout}`} style={{ "--accent": solution.accent } as CSSProperties}>
      <section className="solution-page-banner py-32 px-5 md:px-[8%] bg-white">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="solution-banner-copy">
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#C7A96B] mb-6 block">{solution.title}</span>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-thin leading-[0.9] tracking-[-0.06em] text-[#071A33] mb-8">Estruture o financeiro antes do caixa apertar.</h2>
            <p className="text-lg text-[#52606D] font-light leading-relaxed mb-10">
              Falta de liquidez, inadimplência, venda a prazo ou controle financeiro: qualquer que seja a dor, a Credmais organiza a alternativa certa e acompanha a operação até o resultado.
            </p>
            <a href={CONTACT_WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 bg-[#071A33] text-white px-8 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-[#C7A96B] hover:text-[#071A33] transition-all shadow-lg">
              Falar com um especialista
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="solution-banner-media relative rounded-[24px] overflow-hidden shadow-2xl">
            <img src={visualSet.banner} alt={solution.title} className="w-full h-full object-cover aspect-video" loading="lazy" decoding="async" />
            <div className="absolute top-8 right-8 bg-[#071A33] text-white p-6 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-4 mb-2">
                <Icon size={18} className="text-[#C7A96B]" />
                <strong className="text-xs uppercase tracking-widest">{solution.metric}</strong>
              </div>
              <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">Proteção ativa Credmais</p>
            </div>
          </div>
        </div>
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
      <CampaignHero image={ABOUT_IMAGE} eyebrow="Sobre a Credmais" titleStart="Crédito humano." titleBridge="Crescimento com" words={["confiança.", "clareza.", "parceria."]} description="Uma securitizadora criada para simplificar o capital, proteger operações e caminhar junto com sua empresa em cada fase do crescimento." />
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
    <section className="about-intro-section bg-[#F6F8FA] py-32 px-5 md:px-[8%]">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="about-intro-copy">
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#C7A96B] mb-6 block">Como trabalhamos</span>
          <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-thin leading-[0.85] tracking-[-0.06em] text-[#071A33] mb-8">Mais do que uma securitizadora, um parceiro de crescimento.</h2>
          <p className="text-lg text-[#52606D] font-light leading-relaxed mb-12">Humanizamos o crédito e desenhamos estruturas financeiras para empresas evoluírem com previsibilidade. Operação, cobrança e capital deixam de ser blocos separados e passam a trabalhar juntos pelo seu resultado.</p>
          
          <div className="about-principles grid gap-10">
            {principles.map((item) => (
              <article key={item.value} className="flex gap-8 group">
                <strong className="text-4xl font-thin text-[#C7A96B]/30 group-hover:text-[#C7A96B] transition-colors">{item.value}</strong>
                <div>
                  <h3 className="text-xl font-bold text-[#071A33] mb-2">{item.title}</h3>
                  <p className="text-[#52606D] font-light leading-relaxed">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="about-intro-media relative rounded-[24px] overflow-hidden shadow-2xl">
          <img src={baseOperacional.url} alt="Ambiente corporativo Credmais" className="w-full h-full object-cover aspect-[4/5]" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}

export function ContactPage() {
  return (
    <>
      <CampaignHero image={CONTACT_IMAGE} eyebrow="Fale com a Credmais" titleStart="Vamos conversar." titleBridge="Sua empresa com" words={["capital.", "apoio.", "direção."]} description="Conte para nós o que sua empresa precisa. Avaliamos o cenário e apresentamos a melhor estrutura para o seu fluxo financeiro." />
      <ContactSection compact />
    </>
  );
}

function CampaignHero({ className, image, eyebrow, titleStart, titleBridge, words, description }: { className?: string; image: string; eyebrow: string; titleStart: string; titleBridge: string; words: string[]; description: string }) {
  return (
    <section className={`campaign-hero relative isolate min-h-screen overflow-hidden bg-[#0b1628] ${className || ""}`}>
      <div className="hero-bg-image absolute inset-0 -z-10" aria-hidden="true">
        <img src={image} alt="" className="hero-full-image" fetchPriority="high" decoding="async" />
      </div>
      <div className="hero-animated-copy">
        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#C7A96B] mb-6 block">{eyebrow}</span>
        <h1 className="text-[clamp(4rem,10vw,9rem)] font-thin leading-[0.8] tracking-[-0.08em] text-white">
          {titleStart}
          <br />
          {titleBridge}
          <span className="hero-word-rotator text-[#C7A96B]" aria-hidden="true">
            {words.map((word) => <i key={word}>{word}</i>)}
          </span>
        </h1>
        <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-white/80">{description}</p>
      </div>
    </section>
  );
}

function ContactSection({ compact = false }: { compact?: boolean }) {
  return (
    <section id="contato" className={`bg-[#071A33] px-5 text-white md:px-[8%] ${compact ? "py-24" : "py-32"}`}>
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="contact-info-panel">
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#C7A96B] mb-6 block">Contato e Conversão</span>
          <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-thin leading-[0.85] tracking-[-0.06em] text-white mb-12">O que sua empresa precisa resolver?</h2>
          <p className="text-lg text-white/60 font-light leading-relaxed mb-12 max-w-xl">
            Fale com a Credmais sobre falta de caixa, venda a prazo, inadimplência, dificuldade de crédito, boleto garantido, crediário, gestão de contas ou recebimento de dívidas — respondemos rápido e com clareza.
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#C7A96B] group-hover:bg-[#C7A96B] group-hover:text-[#071A33] transition-all">
                <Phone size={18} />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/30 block mb-1">WhatsApp</span>
                <a href={CONTACT_WHATSAPP_URL} className="text-lg font-medium hover:text-[#C7A96B] transition-colors">{CONTACT_WHATSAPP_DISPLAY}</a>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#C7A96B] group-hover:bg-[#C7A96B] group-hover:text-[#071A33] transition-all">
                <Mail size={18} />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/30 block mb-1">E-mail corporativo</span>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-lg font-medium hover:text-[#C7A96B] transition-colors">{CONTACT_EMAIL}</a>
              </div>
            </div>
          </div>
        </div>

        <div id="form-contato" className="bg-white p-12 rounded-[24px] shadow-2xl border border-white/10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

const contactSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome completo.").max(100, "Nome muito longo."),
  email: z.string().trim().email("Informe um e-mail válido.").max(255, "E-mail muito longo."),
  phone: z
    .string()
    .trim()
    .min(10, "Informe um telefone com DDD.")
    .max(20, "Telefone muito longo.")
    .regex(/^[0-9()+\-\s]+$/, "Use apenas números, espaços, parênteses e traços."),
  company: z.string().trim().min(2, "Informe o nome da empresa.").max(120, "Nome muito longo."),
  interest: z.string().trim().min(1, "Escolha uma solução."),
  message: z.string().trim().min(10, "Conte um pouco mais sobre a necessidade.").max(1000, "Mensagem muito longa."),
});

type ContactFormValues = z.infer<typeof contactSchema>;
type ContactErrors = Partial<Record<keyof ContactFormValues, string>>;

const emptyContact: ContactFormValues = { name: "", email: "", phone: "", company: "", interest: "", message: "" };

function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(emptyContact);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [sending, setSending] = useState(false);

  const update = (field: keyof ContactFormValues) => (value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = contactSchema.safeParse(values);

    if (!result.success) {
      const fieldErrors: ContactErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof ContactFormValues;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Revise os campos destacados antes de enviar.");
      return;
    }

    const data = result.data;
    setSending(true);
    const text = [
      "Olá, Credmais! Vim pelo site.",
      `Nome: ${data.name}`,
      `Empresa: ${data.company}`,
      `E-mail: ${data.email}`,
      `Telefone: ${data.phone}`,
      `Solução de interesse: ${data.interest}`,
      `Necessidade: ${data.message}`,
    ].join("\n");

    window.open(`${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    toast.success("Tudo certo! Abrimos o WhatsApp com sua mensagem pronta.");
    setValues(emptyContact);
    setSending(false);
  };

  return (
    <form className="contact-form grid gap-8" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-grid grid grid-cols-1 md:grid-cols-2 gap-6">
        <ContactField id="contact-name" label="Nome completo" placeholder="Como podemos te chamar?" value={values.name} onChange={update("name")} error={errors.name} autoComplete="name" />
        <ContactField id="contact-email" label="E-mail corporativo" type="email" placeholder="voce@suaempresa.com.br" value={values.email} onChange={update("email")} error={errors.email} autoComplete="email" />
        <ContactField id="contact-phone" label="WhatsApp / Telefone" type="tel" placeholder="(11) 90000-0000" value={values.phone} onChange={update("phone")} error={errors.phone} autoComplete="tel" />
        <ContactField id="contact-company" label="Empresa" placeholder="Razão social ou nome fantasia" value={values.company} onChange={update("company")} error={errors.company} autoComplete="organization" />
      </div>

      <div className="contact-field flex flex-col gap-2">
        <label htmlFor="contact-interest" className="text-xs font-bold uppercase tracking-widest text-[#52606D]">Solução de interesse</label>
        <select
          id="contact-interest"
          className={`contact-input p-4 rounded-xl border transition-all ${errors.interest ? "border-red-500" : "border-[#E8EDF2] focus:border-[#C7A96B]"} bg-[#F6F8FA] text-[#071A33] font-medium appearance-none`}
          value={values.interest}
          onChange={(event) => update("interest")(event.target.value)}
          aria-invalid={Boolean(errors.interest)}
        >
          <option value="">Selecione uma solução</option>
          {solutions.map((solution) => (
            <option key={solution.slug} value={solution.title}>
              {solution.title}
            </option>
          ))}
          <option value="Ainda não sei">Ainda não sei / quero orientação</option>
        </select>
        {errors.interest ? <span className="text-xs text-red-500 font-medium">{errors.interest}</span> : null}
      </div>

      <div className="contact-field flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-widest text-[#52606D]">Sua necessidade</label>
        <textarea
          id="contact-message"
          className={`contact-input p-4 rounded-xl border transition-all ${errors.message ? "border-red-500" : "border-[#E8EDF2] focus:border-[#C7A96B]"} bg-[#F6F8FA] text-[#071A33] font-medium min-h-[120px]`}
          placeholder="Conte o cenário atual: valores, prazos e o que precisa resolver."
          maxLength={1000}
          value={values.message}
          onChange={(event) => update("message")(event.target.value)}
          aria-invalid={Boolean(errors.message)}
        />
        <div className="contact-field-foot flex justify-between items-center mt-2">
          {errors.message ? <span className="text-xs text-red-500 font-medium">{errors.message}</span> : <span className="text-[10px] font-black uppercase tracking-widest text-[#52606D]/50">Respondemos em até 1 dia útil.</span>}
          <span className="text-[10px] font-black text-[#52606D]/30">{values.message.length}/1000</span>
        </div>
      </div>

      <div className="pt-4">
        <button type="submit" className="w-full flex items-center justify-center gap-4 bg-[#071A33] text-white p-6 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-[#C7A96B] hover:text-[#071A33] transition-all disabled:opacity-50" disabled={sending}>
          {sending ? "Enviando..." : "Enviar e falar no WhatsApp"}
          <ArrowUpRight className="h-4 w-4" />
        </button>
        <p className="text-center mt-6 text-[10px] font-black uppercase tracking-widest text-[#52606D]/40">
          Seus dados são usados apenas para este atendimento conforme nossa política de privacidade.
        </p>
      </div>
    </form>
  );
}

function ContactField({
  id,
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div className="contact-field flex flex-col gap-2">
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-widest text-[#52606D]">{label}</label>
      <input
        id={id}
        type={type}
        className={`contact-input p-4 rounded-xl border transition-all ${error ? "border-red-500" : "border-[#E8EDF2] focus:border-[#C7A96B]"} bg-white/50 text-[#071A33]`}
        placeholder={placeholder}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? <span className="text-xs text-red-500 font-medium">{error}</span> : null}
    </div>
  );
}


function ContactLine({ icon: Icon, value, href }: { icon: IconComponent; value: string; href?: string }) {
  const content = (
    <>
      <Icon className="h-4 w-4 text-[#e9f0fa]" />
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
    <footer className="border-t border-white/5 bg-[#0b1628] px-5 py-20 text-white md:px-[8%]">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-6">
          <a href="/" className="brand-logo-shell block h-10 w-fit">
            <img src={LOGO_IMAGE} alt="Credmais" className="h-full w-auto object-contain" />
          </a>
          <p className="max-w-xs text-sm leading-relaxed text-white/50">
            Soluções financeiras estruturadas para transformar o fluxo de caixa da sua empresa com inteligência e segurança.
          </p>
        </div>

        <div>
          <h4 className="mb-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Soluções</h4>
          <ul className="space-y-4">
            {solutions.map(s => (
              <li key={s.slug}>
                <a href={`/${s.slug}`} className="text-sm font-medium text-white/60 transition-colors hover:text-white">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Institucional</h4>
          <ul className="space-y-4">
            <li><a href="/#sobre" className="text-sm font-medium text-white/60 transition-colors hover:text-white">Sobre nós</a></li>
            <li><a href="/#form-contato" className="text-sm font-medium text-white/60 transition-colors hover:text-white">Contato</a></li>
            <li><a href={CONTACT_WHATSAPP_URL} className="text-sm font-medium text-white/60 transition-colors hover:text-white">Simulação</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Contato</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-sm text-white/60">
              <Mail size={16} className="text-white/30" />
              {CONTACT_EMAIL}
            </li>
            <li className="flex items-center gap-3 text-sm text-white/60">
              <Phone size={16} className="text-white/30" />
              {CONTACT_WHATSAPP_DISPLAY}
            </li>
            <li className="mt-8 pt-4 text-[10px] text-white/20">
              CNPJ: {CONTACT_CNPJ}
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-20 border-t border-white/5 pt-8 text-center">
        <p className="text-[10px] font-medium tracking-[0.1em] text-white/20">
          © {new Date().getFullYear()} CredMais Securitizadora. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

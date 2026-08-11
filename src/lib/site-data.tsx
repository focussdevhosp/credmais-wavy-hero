import type { ComponentType } from "react";
import {
  CircleDollarSign,
  FileText,
  HandCoins,
  LineChart,
  Workflow,
} from "lucide-react";

import heroRooftop from "@/assets/hero-credmais-rooftop.webp.asset.json";
import heroExecutiveDesk from "@/assets/hero-executive-desk.png.asset.json";
import heroAntecipacao from "@/assets/hero-antecipacao.png.asset.json";
import logoPremium from "@/assets/logo-credmais-premium.png.asset.json";
import baseOperacional from "@/assets/base-operacional.webp.asset.json";
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
import wide6 from "@/assets/wide-6.webp.asset.json";
import wide7 from "@/assets/wide-7.webp.asset.json";
import wide8 from "@/assets/wide-8.webp.asset.json";

export type IconComponent = ComponentType<{
  className?: string;
  strokeWidth?: number;
  size?: number | string;
}>;

/* ---------------------------------------------------------------- marca */

export const SITE_NAME = "Credmais Securitizadora";
export const SITE_URL = "https://credmais-wavy-hero.lovable.app";
export const LOGO_IMAGE = logoPremium.url;

export const CONTACT_EMAIL = "contato@sejacredmais.com";
export const CONTACT_WHATSAPP_DISPLAY = "(11) 94089-3852";
export const CONTACT_WHATSAPP_URL = "https://wa.me/5511940893852";
export const CONTACT_CNPJ = "67.859.471/0001-20";
export const CONTACT_HOURS = "Segunda a sexta, das 9h às 18h";

export function whatsappLink(message: string) {
  return `${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

/* ------------------------------------------------------------ imagens */

export const IMAGES = {
  homeHero: heroExecutiveDesk.url,
  aboutHero: wide3.url,
  contactHero: wide6.url,
  aboutTeam: baseOperacional.url,
  legalHero: brandPredio.url,
  segments: [
    { image: brandIndustria.url, label: "Indústria" },
    { image: brandVarejo.url, label: "Varejo e atacado" },
    { image: brandAgro.url, label: "Agronegócio" },
    { image: brandRestaurante.url, label: "Alimentação e serviços" },
    { image: brandConcessionaria.url, label: "Concessionárias" },
    { image: brandAtendimento.url, label: "Prestadores de serviço" },
  ],
  editorial: [brandRecepcao.url, brandAssinatura.url, brandRooftop.url],
};

/* ---------------------------------------------------------- soluções */

export type Solution = {
  slug: string;
  title: string;
  shortTitle: string;
  headline: string;
  summary: string;
  detail: string;
  icon: IconComponent;
  benefits: string[];
  audience: string;
  heroImage: string;
  cardImage: string;
  bannerImage: string;
  steps: { title: string; text: string }[];
  differentials: { title: string; text: string }[];
  faq: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const solutions: Solution[] = [
  {
    slug: "antecipacao-de-recebiveis",
    title: "Antecipação de Recebíveis",
    shortTitle: "Antecipação",
    headline: "Transforme vendas a prazo em capital de giro disponível hoje.",
    summary:
      "Liquidez imediata para sua empresa operar sem depender do prazo do cliente.",
    detail:
      "Estruturamos a antecipação dos seus recebíveis com análise técnica da carteira, condições apresentadas antes da assinatura e liberação acompanhada de ponta a ponta. Você decide quais títulos antecipar e mantém o controle total sobre o fluxo futuro.",
    icon: HandCoins,
    audience:
      "Para empresas que vendem a prazo e não podem parar de comprar, pagar folha, repor estoque ou expandir enquanto esperam o vencimento.",
    benefits: [
      "Liquidez rápida para as operações elegíveis",
      "Taxa, prazo e valor líquido claros antes de assinar",
      "Antecipação por lote, sem comprometer toda a carteira",
      "Análise técnica feita por especialistas, não por robô",
    ],
    heroImage: heroAntecipacao.url,
    cardImage: brandAgro.url,
    bannerImage: brandIndustria.url,
    steps: [
      { title: "Análise da carteira", text: "Recebíveis, sacados, prazos e documentos passam por uma primeira leitura técnica." },
      { title: "Proposta transparente", text: "Você recebe taxa, prazo, valor líquido e condições completas antes de qualquer decisão." },
      { title: "Formalização", text: "Documentação validada com acompanhamento do nosso time, sem burocracia desnecessária." },
      { title: "Liberação do capital", text: "O recurso é liberado e a operação segue acompanhada até a liquidação dos títulos." },
    ],
    differentials: [
      { title: "Você escolhe o lote", text: "Antecipe apenas o necessário e preserve os demais recebíveis para o fluxo futuro." },
      { title: "Custo sem surpresa", text: "Nenhuma condição aparece depois da assinatura. Tudo é apresentado antes." },
      { title: "Capital direcionado", text: "Use para estoque, folha, fornecedor ou expansão mantendo o controle do ciclo." },
    ],
    faq: [
      { q: "Preciso antecipar toda a carteira?", a: "Não. A operação pode ser montada por lote, prazo ou necessidade específica de caixa." },
      { q: "A taxa é apresentada antes da assinatura?", a: "Sim. A proposta mostra custo, valor líquido e condições completas antes da decisão." },
      { q: "Funciona para vendas recorrentes?", a: "Sim. Acompanhamos ciclos recorrentes para dar mais previsibilidade ao seu fluxo de caixa." },
      { q: "Quais documentos são necessários?", a: "Documentos societários da empresa e os títulos que serão analisados. Indicamos a lista completa no primeiro contato." },
    ],
    metaTitle: "Antecipação de Recebíveis para Empresas | Credmais",
    metaDescription:
      "Converta vendas a prazo em capital de giro com análise técnica, condições transparentes e liberação acompanhada. Fale com a Credmais.",
  },
  {
    slug: "boleto-garantido",
    title: "Boleto Garantido",
    shortTitle: "Boleto Garantido",
    headline: "Venda por boleto com muito menos exposição à inadimplência.",
    summary:
      "Proteção e previsibilidade para o recebimento das suas vendas por boleto.",
    detail:
      "Emissão, análise de risco e acompanhamento da cobrança em um único processo. Sua empresa continua vendendo a prazo, mas com uma camada de proteção que reduz a incerteza sobre o que realmente entra no caixa.",
    icon: FileText,
    audience:
      "Para empresas que vendem por boleto e precisam receber com segurança, sem travar a venda para os bons clientes.",
    benefits: [
      "Redução da exposição à inadimplência",
      "Política de risco definida antes de cada emissão",
      "Cobrança acompanhada com ritmo profissional",
      "Previsibilidade real para planejar o caixa",
    ],
    heroImage: wide1.url,
    cardImage: brandRestaurante.url,
    bannerImage: brandConcessionaria.url,
    steps: [
      { title: "Definição da política", text: "Cliente, valor, prazo e histórico entram na régua de risco combinada com sua empresa." },
      { title: "Emissão do boleto", text: "Os títulos são emitidos dentro dos critérios validados na política." },
      { title: "Acompanhamento", text: "O status de cada boleto é monitorado, com atuação nos primeiros sinais de atraso." },
      { title: "Recebimento", text: "O fluxo fica previsível e pronto para embasar decisões financeiras." },
    ],
    differentials: [
      { title: "Risco avaliado antes", text: "Nada é garantido no escuro: cada operação passa por análise prévia." },
      { title: "Cobrança com método", text: "O acompanhamento deixa de depender da rotina interna da sua equipe." },
      { title: "Marca preservada", text: "Comunicação profissional e respeitosa com o seu cliente em todas as etapas." },
    ],
    faq: [
      { q: "Substitui minha cobrança interna?", a: "Não. Complementamos sua rotina com acompanhamento estruturado e leitura financeira apurada." },
      { q: "Funciona para clientes novos?", a: "Sim, desde que a operação tenha dados suficientes para uma análise de risco consistente." },
      { q: "Melhora o meu caixa?", a: "Melhora a previsibilidade e pode ser combinada com antecipação para ampliar o efeito no caixa." },
      { q: "Posso escolher quais vendas proteger?", a: "Sim. A política é definida junto com a sua empresa e pode considerar valor, prazo ou perfil de cliente." },
    ],
    metaTitle: "Boleto Garantido para Empresas | Credmais",
    metaDescription:
      "Reduza a inadimplência nas vendas por boleto com análise de risco, emissão e cobrança acompanhada pela Credmais.",
  },
  {
    slug: "consultoria",
    title: "Consultoria Estratégica",
    shortTitle: "Consultoria",
    headline: "Entenda a estrutura financeira certa antes de contratar capital.",
    summary:
      "Diagnóstico do fluxo de caixa, cenários comparados e um plano de execução claro.",
    detail:
      "Mapeamos entradas, saídas, contratos e gargalos da sua operação. Comparamos cenários de custo, prazo e garantia e entregamos um plano prático — não um relatório genérico que fica na gaveta.",
    icon: LineChart,
    audience:
      "Para empresas que precisam organizar o financeiro e decidir com dados antes de assumir qualquer compromisso de crédito.",
    benefits: [
      "Diagnóstico completo do fluxo de caixa",
      "Cenários comparados de custo, prazo e garantia",
      "Prioridades definidas por impacto no resultado",
      "Acompanhamento da execução do plano",
    ],
    heroImage: wide2.url,
    cardImage: brandAssinatura.url,
    bannerImage: brandAtendimento.url,
    steps: [
      { title: "Raio-X financeiro", text: "Mapeamento de fluxo, contratos, recebíveis e gargalos de caixa." },
      { title: "Cenários", text: "Simulações de estrutura, custo, prazo e impacto financeiro em cada rota possível." },
      { title: "Plano de ação", text: "Recomendações organizadas em uma sequência prática e executável." },
      { title: "Acompanhamento", text: "Suporte para transformar o plano em rotina financeira estável." },
    ],
    differentials: [
      { title: "Leitura integrada", text: "Operação, cobrança e capital analisados juntos, não em blocos separados." },
      { title: "Decisão com dados", text: "Cada alternativa mostra custo, risco e impacto operacional." },
      { title: "Execução assistida", text: "Ficamos ao lado da empresa durante a implementação do plano." },
    ],
    faq: [
      { q: "É apenas para grandes empresas?", a: "Não. Atendemos empresas de portes diferentes que precisam estruturar melhor o fluxo financeiro." },
      { q: "Inclui operações de crédito?", a: "Pode incluir, sempre que fizer sentido dentro do diagnóstico e do momento da empresa." },
      { q: "Qual é a entrega final?", a: "Clareza sobre estrutura, prioridades e um caminho financeiro pronto para ser executado." },
      { q: "Quanto tempo leva?", a: "Depende do porte e da complexidade da operação. O escopo e o prazo são definidos após a primeira conversa." },
    ],
    metaTitle: "Consultoria Financeira Estratégica | Credmais",
    metaDescription:
      "Diagnóstico de fluxo de caixa, cenários comparados e plano de ação para estruturar o financeiro da sua empresa.",
  },
  {
    slug: "crediario",
    title: "Crediário Próprio",
    shortTitle: "Crediário",
    headline: "Ofereça parcelamento direto ao cliente e venda mais.",
    summary:
      "Estruturamos a jornada de crédito da sua empresa, da análise ao acompanhamento da carteira.",
    detail:
      "Do momento da oferta até o acompanhamento das parcelas, montamos uma operação de crediário profissional: regras comerciais definidas por você, análise ágil do comprador e visibilidade total da carteira.",
    icon: CircleDollarSign,
    audience:
      "Para empresas que perdem vendas quando o preço à vista trava a decisão do cliente final.",
    benefits: [
      "Mais conversão no ponto de venda",
      "Jornada de aprovação simples para o comprador",
      "Regras comerciais definidas pela sua empresa",
      "Carteira acompanhada parcela a parcela",
    ],
    heroImage: wide7.url,
    cardImage: brandVarejo.url,
    bannerImage: brandRooftop.url,
    steps: [
      { title: "Desenho das regras", text: "Prazos, limites e condições comerciais definidos junto com a sua empresa." },
      { title: "Oferta ao cliente", text: "O parcelamento aparece no momento em que o preço à vista trava a decisão." },
      { title: "Análise ágil", text: "Dados e documentos validados em uma jornada rápida, sem fricção bancária." },
      { title: "Gestão da carteira", text: "Você fatura e acompanha recebimentos com visibilidade total." },
    ],
    differentials: [
      { title: "Venda sem fricção", text: "O cliente não precisa ir ao banco nem enfrentar processos longos." },
      { title: "Presencial e digital", text: "A mesma consistência na loja física, na venda assistida e no digital." },
      { title: "Controle real", text: "Parcelas, acordos e recebimentos sempre visíveis para a sua gestão." },
    ],
    faq: [
      { q: "Serve para loja física e online?", a: "Sim. A estrutura apoia venda presencial, assistida e digital com a mesma consistência." },
      { q: "O cliente precisa ir ao banco?", a: "Não. A proposta é simplificar a jornada e eliminar fricção para o comprador." },
      { q: "Realmente ajuda a vender mais?", a: "Sim, principalmente quando o preço à vista limita a decisão de compra do cliente." },
      { q: "Quem define as condições?", a: "As regras comerciais são definidas junto com a sua empresa, respeitando a sua margem." },
    ],
    metaTitle: "Crediário Próprio para Empresas | Credmais",
    metaDescription:
      "Ofereça parcelamento direto ao cliente final com análise ágil, regras sob medida e carteira acompanhada de perto.",
  },
  {
    slug: "gestao-de-contas",
    title: "Gestão de Recebíveis",
    shortTitle: "Gestão de Contas",
    headline: "Recebemos suas dívidas e cuidamos de toda a recuperação.",
    summary:
      "Cobrança especializada para transformar recebíveis em atraso em capital produtivo.",
    detail:
      "Assumimos o contato, a negociação e o acompanhamento das dívidas da sua empresa. Você recebe relatórios claros de performance e mantém a relação com o cliente preservada.",
    icon: Workflow,
    audience:
      "Para empresas com recebíveis em atraso que precisam de uma operação especializada, sem desgastar a equipe interna.",
    benefits: [
      "Recuperação ativa conduzida por especialistas",
      "Relatórios claros de status e valores recuperados",
      "Abordagem profissional que preserva o relacionamento",
      "Menos desgaste para a equipe interna",
    ],
    heroImage: wide4.url,
    cardImage: brandRecepcao.url,
    bannerImage: brandPredio.url,
    steps: [
      { title: "Entrega da carteira", text: "Você encaminha os recebíveis em atraso e definimos juntos a estratégia." },
      { title: "Análise e estratégia", text: "Valores, prazos, perfil dos devedores e histórico orientam a régua de cobrança." },
      { title: "Cobrança ativa", text: "Contatos, negociações e acordos conduzidos pela nossa equipe com consistência." },
      { title: "Recuperação e repasse", text: "Valores recebidos são repassados com previsibilidade e status atualizado." },
    ],
    differentials: [
      { title: "Operação assumida", text: "Sua equipe volta a focar no que gera receita enquanto cuidamos da recuperação." },
      { title: "Transparência total", text: "Relatórios simples com acordos firmados e valores recuperados." },
      { title: "Relação preservada", text: "Cobrança firme e respeitosa, sem expor negativamente a sua marca." },
    ],
    faq: [
      { q: "A Credmais compra os recebíveis em atraso?", a: "Podemos assumir a gestão e a recuperação da carteira. A melhor estrutura é definida após a análise dos títulos." },
      { q: "Como acompanho os resultados?", a: "Você recebe relatórios claros com status dos títulos, acordos firmados e valores recuperados." },
      { q: "A cobrança prejudica a relação com meu cliente?", a: "Não. A abordagem é profissional e respeitosa, com foco em recuperar sem desgastar o relacionamento." },
      { q: "Existe volume mínimo?", a: "Avaliamos cada carteira individualmente e indicamos o melhor formato de atuação." },
    ],
    metaTitle: "Gestão e Recuperação de Recebíveis | Credmais",
    metaDescription:
      "Cobrança especializada para recuperar recebíveis em atraso com relatórios transparentes e relacionamento preservado.",
  },
];

export function getSolution(slug: string): Solution {
  const found = solutions.find((item) => item.slug === slug);
  if (!found) throw new Error(`Solução não encontrada: ${slug}`);
  return found;
}

/* ------------------------------------------------------- institucional */

export const differentials = [
  {
    title: "Análise humana",
    text: "Cada operação é lida por especialistas que entendem o seu setor, o seu ciclo e a sua realidade de caixa.",
  },
  {
    title: "Condições transparentes",
    text: "Custo, prazo, garantias e impacto operacional aparecem antes de qualquer assinatura. Sem letras miúdas.",
  },
  {
    title: "Estrutura sob medida",
    text: "Antecipação, garantia, crediário ou recuperação: montamos a combinação certa para o momento da empresa.",
  },
  {
    title: "Acompanhamento contínuo",
    text: "A relação não termina na liberação. Seguimos ao lado da operação, revisando estratégia e resultados.",
  },
];

export const processSteps = [
  { title: "Diagnóstico", text: "Entendemos a operação, o ciclo de vendas e a real pressão sobre o caixa." },
  { title: "Estrutura", text: "Desenhamos a solução ideal e apresentamos condições completas antes da decisão." },
  { title: "Formalização", text: "Documentação e validações conduzidas com agilidade pelo nosso time." },
  { title: "Execução e acompanhamento", text: "A operação roda com suporte contínuo e revisões periódicas de estratégia." },
];

export const homeFaq = [
  {
    q: "Por onde devo começar?",
    a: "Comece pela sua prioridade: caixa imediato, proteção do boleto, crediário para vender mais, consultoria estratégica ou recuperação de dívidas. Na primeira conversa indicamos o melhor caminho.",
  },
  {
    q: "Como funciona a análise antes da proposta?",
    a: "Avaliamos recebíveis, prazos, documentos, risco e a real necessidade de capital do negócio. Só apresentamos condições depois de entender a sua operação.",
  },
  {
    q: "Preciso contratar todas as soluções?",
    a: "Não. Você começa por onde faz mais sentido agora e amplia conforme a rotina financeira da empresa evolui.",
  },
  {
    q: "Quais empresas a Credmais atende?",
    a: "Atendemos empresas de diferentes portes e setores que vendem a prazo, precisam de capital de giro ou querem estruturar cobrança e crédito.",
  },
  {
    q: "Quanto tempo leva para receber uma proposta?",
    a: "Depois do envio das informações e documentos necessários, retornamos com uma proposta no menor prazo possível — normalmente em poucos dias úteis.",
  },
];

export const aboutValues = [
  { title: "Clareza", text: "Nenhuma condição escondida. Tudo é explicado em linguagem simples antes da decisão." },
  { title: "Proximidade", text: "Atendimento consultivo, com pessoas acessíveis e responsáveis pela sua operação." },
  { title: "Responsabilidade", text: "Estruturas dimensionadas para a capacidade real da empresa, sem sobrecarregar o caixa." },
  { title: "Consistência", text: "Processos definidos, acompanhamento contínuo e relatórios que sustentam decisões." },
];

/* ------------------------------------------------------------- rotas */

export type AppPath =
  | "/"
  | "/antecipacao-de-recebiveis"
  | "/boleto-garantido"
  | "/consultoria"
  | "/contato"
  | "/crediario"
  | "/gestao-de-contas"
  | "/sobre"
  | "/politica-de-privacidade"
  | "/termos-de-uso";

export function solutionPath(slug: string): AppPath {
  return `/${slug}` as AppPath;
}

import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/site/credmais";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre | Credmais Securitizadora" },
      { name: "description", content: "Uma securitizadora feita para simplificar capital, proteger operacoes e acompanhar empresas." },
      { property: "og:title", content: "Sobre a Credmais" },
      { property: "og:description", content: "Credito humano. Crescimento com confianca, clareza e parceria." },
    ],
  }),
  component: AboutPage,
});

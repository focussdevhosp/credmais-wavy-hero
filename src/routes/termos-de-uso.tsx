import { createFileRoute } from "@tanstack/react-router";
import { TermsPage } from "@/site/credmais";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | Credmais Securitizadora" },
      { name: "description", content: "Condições de uso do site institucional da Credmais Securitizadora e dos seus canais de atendimento." },
      { property: "og:title", content: "Termos de Uso | Credmais" },
      { property: "og:description", content: "Condições de uso do site institucional da Credmais." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://credmais-wavy-hero.lovable.app/termos-de-uso" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "https://credmais-wavy-hero.lovable.app/termos-de-uso" }],
  }),
  component: TermsPage,
});

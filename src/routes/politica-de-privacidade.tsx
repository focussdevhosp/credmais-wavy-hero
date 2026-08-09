import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/site/credmais";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Credmais Securitizadora" },
      { name: "description", content: "Saiba como a Credmais coleta, utiliza e protege os dados pessoais informados no site e nos canais de atendimento." },
      { property: "og:title", content: "Política de Privacidade | Credmais" },
      { property: "og:description", content: "Como a Credmais trata e protege os seus dados pessoais." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://credmais-wavy-hero.lovable.app/politica-de-privacidade" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "https://credmais-wavy-hero.lovable.app/politica-de-privacidade" }],
  }),
  component: PrivacyPage,
});

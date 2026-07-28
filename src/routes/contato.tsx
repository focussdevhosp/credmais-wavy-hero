import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/site/credmais";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Credmais Securitizadora" },
      { name: "description", content: "Fale com a Credmais sobre caixa, boleto garantido, crediario ou gestao de contas." },
      { property: "og:title", content: "Contato Credmais" },
      { property: "og:description", content: "Vamos conversar. Sua empresa com capital, apoio e direcao." },
    ],
  }),
  component: ContactPage,
});

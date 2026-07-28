import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/site/credmais";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Credmais Securitizadora | Capital, boleto e crediario" },
      { name: "description", content: "Antecipe recebiveis, proteja boletos, organize contas e venda mais com credito estruturado." },
      { property: "og:title", content: "Credmais Securitizadora | Capital, boleto e crediario" },
      { property: "og:description", content: "Antecipe recebiveis, proteja boletos, organize contas e venda mais com credito estruturado." },
    ],
  }),
  component: HomePage,
});

import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage, solutions } from "@/site/credmais";

const solution = solutions.find((s) => s.slug === "gestao-de-contas")!;

export const Route = createFileRoute("/gestao-de-contas")({
  head: () => ({
    meta: [
      { title: "Gestao de Contas | Credmais Securitizadora" },
      { name: "description", content: solution.summary },
      { property: "og:title", content: "Gestao de Contas | Credmais" },
      { property: "og:description", content: solution.headline },
    ],
  }),
  component: () => <SolutionPage solution={solution} />,
});

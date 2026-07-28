import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage, solutions } from "@/site/credmais";

const solution = solutions.find((s) => s.slug === "antecipacao-de-recebiveis")!;

export const Route = createFileRoute("/antecipacao-de-recebiveis")({
  head: () => ({
    meta: [
      { title: "Antecipacao de Recebiveis | Credmais Securitizadora" },
      { name: "description", content: solution.summary },
      { property: "og:title", content: "Antecipacao de Recebiveis | Credmais" },
      { property: "og:description", content: solution.headline },
    ],
  }),
  component: () => <SolutionPage solution={solution} />,
});

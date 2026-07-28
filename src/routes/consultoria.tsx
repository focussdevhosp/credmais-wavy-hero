import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage, solutions } from "@/site/credmais";

const solution = solutions.find((s) => s.slug === "consultoria")!;

export const Route = createFileRoute("/consultoria")({
  head: () => ({
    meta: [
      { title: "Consultoria | Credmais Securitizadora" },
      { name: "description", content: solution.summary },
      { property: "og:title", content: "Consultoria | Credmais" },
      { property: "og:description", content: solution.headline },
    ],
  }),
  component: () => <SolutionPage solution={solution} />,
});

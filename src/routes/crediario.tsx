import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage, solutions } from "@/site/credmais";

const solution = solutions.find((s) => s.slug === "crediario")!;

export const Route = createFileRoute("/crediario")({
  head: () => ({
    meta: [
      { title: "Crediario | Credmais Securitizadora" },
      { name: "description", content: solution.summary },
      { property: "og:title", content: "Crediario | Credmais" },
      { property: "og:description", content: solution.headline },
    ],
  }),
  component: () => <SolutionPage solution={solution} />,
});

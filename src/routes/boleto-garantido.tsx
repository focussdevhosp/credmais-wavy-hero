import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage, solutions } from "@/site/credmais";

const solution = solutions.find((s) => s.slug === "boleto-garantido")!;

export const Route = createFileRoute("/boleto-garantido")({
  head: () => ({
    meta: [
      { title: "Boleto Garantido | Credmais Securitizadora" },
      { name: "description", content: solution.summary },
      { property: "og:title", content: "Boleto Garantido | Credmais" },
      { property: "og:description", content: solution.headline },
    ],
  }),
  component: () => <SolutionPage solution={solution} />,
});

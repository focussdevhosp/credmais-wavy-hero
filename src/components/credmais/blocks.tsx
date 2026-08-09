import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { CtaLink, OptimizedImage, Reveal } from "./primitives";
import { solutionPath, type Solution } from "@/lib/site-data";

/* ------------------------------------------------------- SolutionCard */

export function SolutionCard({ solution, index = 0 }: { solution: Solution; index?: number }) {
  const Icon = solution.icon;

  return (
    <Reveal delay={index * 80} className="h-full">
      <Link
        to={solutionPath(solution.slug)}
        className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#C7A96B]/60 hover:shadow-[0_30px_70px_-40px_rgba(7,26,51,0.45)]"
      >
        <OptimizedImage
          src={solution.cardImage}
          alt={`${solution.title} — Credmais`}
          ratio="aspect-[16/10]"
          wrapperClassName="rounded-none"
          className="transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="flex flex-1 flex-col p-7 md:p-8">
          <span className="grid size-11 place-items-center rounded-2xl bg-[#F6F8FA] text-[#C7A96B] transition-colors group-hover:bg-[#071A33]">
            <Icon className="h-5 w-5" />
          </span>
          <h3 className="mt-5 text-xl font-semibold text-[#071A33]">{solution.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#52606D]">{solution.summary}</p>

          <ul className="mt-6 space-y-2.5">
            {solution.benefits.slice(0, 3).map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-sm text-[#52606D]">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#C7A96B]" />
                {benefit}
              </li>
            ))}
          </ul>

          <span className="mt-7 inline-flex items-center gap-2 pt-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#071A33] transition-colors group-hover:text-[#C7A96B]">
            Conhecer solução
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

/* ----------------------------------------------------- ProcessTimeline */

export function ProcessTimeline({
  steps,
  invert = false,
}: {
  steps: { title: string; text: string }[];
  invert?: boolean;
}) {
  return (
    <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <Reveal key={step.title} as="li" delay={index * 90}>
          <div
            className={`flex h-full flex-col rounded-[24px] border p-7 ${
              invert ? "border-white/10 bg-white/5" : "border-[#E2E8F0] bg-white"
            }`}
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C7A96B]">
              Etapa {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className={`mt-4 text-lg font-semibold ${invert ? "text-white" : "text-[#071A33]"}`}>
              {step.title}
            </h3>
            <p className={`mt-3 text-sm leading-relaxed ${invert ? "text-white/65" : "text-[#52606D]"}`}>
              {step.text}
            </p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

/* -------------------------------------------------------- FAQAccordion */

export function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-[#E2E8F0] overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white">
      {items.map((item, index) => (
        <details key={item.q} className="group" {...(index === 0 ? { open: true } : {})}>
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-6 py-6 md:px-8">
            <h3 className="text-base font-semibold text-[#071A33] md:text-lg">{item.q}</h3>
            <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border border-[#E2E8F0] text-[#C7A96B] transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="px-6 pb-7 text-sm leading-relaxed text-[#52606D] md:px-8 md:text-base">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------- CTABand */

export function CTABand({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description: string;
  primary: { href: string; label: string; external?: boolean };
  secondary?: { href: string; label: string; external?: boolean };
}) {
  return (
    <section className="bg-[#071A33] py-16 md:py-20">
      <div className="container-page">
        <Reveal className="grid items-center gap-8 rounded-[32px] border border-white/10 bg-white/5 p-8 md:grid-cols-[minmax(0,1fr)_auto] md:p-12">
          <div className="min-w-0">
            <h2 className="title-lg text-white">{title}</h2>
            <p className="lead mt-4 max-w-2xl text-white/70">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CtaLink href={primary.href} external={primary.external} variant="gold">
              {primary.label}
            </CtaLink>
            {secondary ? (
              <CtaLink href={secondary.href} external={secondary.external} variant="ghost-light">
                {secondary.label}
              </CtaLink>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

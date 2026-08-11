import type { ReactNode } from "react";
import { CtaLink, Reveal } from "./primitives";

export function PageHero({
  image,
  eyebrow,
  title,
  description,
  primary,
  secondary,
  align = "left",
  size = "default",
  hideContent = false,
  children,
}: {
  image: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  primary?: { href: string; label: string; external?: boolean };
  secondary?: { href: string; label: string; external?: boolean };
  align?: "left" | "center";
  size?: "default" | "tall";
  hideContent?: boolean;
  children?: ReactNode;
}) {
  return (
    <section
      className={`relative isolate flex items-end overflow-hidden bg-[#071A33] ${
        size === "tall" ? "min-h-[88svh]" : "min-h-[62svh]"
      }`}
    >
      <img
        src={image}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-20 size-full object-contain object-center bg-white"
      />
      {!hideContent && (
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-r from-[#071A33]/95 via-[#071A33]/75 to-[#071A33]/25"
        />
      )}

      {!hideContent && (
        <div className="container-page relative w-full pb-16 pt-32 md:pb-24 md:pt-40">
          <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
            <Reveal>
              <span className="eyebrow">{eyebrow}</span>
              <h1 className="title-xl mt-5 text-white">{title}</h1>
              <p className="lead mt-6 max-w-2xl text-white/75">{description}</p>
            </Reveal>

            {primary || secondary ? (
              <Reveal delay={120} className="mt-9 flex flex-wrap gap-3">
                {primary ? (
                  <CtaLink href={primary.href} external={primary.external} variant="gold">
                    {primary.label}
                  </CtaLink>
                ) : null}
                {secondary ? (
                  <CtaLink href={secondary.href} external={secondary.external} variant="ghost-light">
                    {secondary.label}
                  </CtaLink>
                ) : null}
              </Reveal>
            ) : null}

            {children}
          </div>
        </div>
      )}
    </section>
  );
}

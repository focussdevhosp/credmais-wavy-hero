import type { ReactNode } from "react";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-surface-alt pt-32 pb-16">
        <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="container-page relative">
          <p className="eyebrow-chip">{eyebrow}</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-ink md:text-5xl">
            {title}
          </h1>
          {intro && <p className="mt-5 max-w-2xl text-lg body-text">{intro}</p>}
        </div>
        <svg
          aria-hidden
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 h-16 w-full text-background md:h-20"
        >
          <path fill="currentColor" d="M0,50 C300,100 700,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
      </section>
      <section className="container-page py-16">{children}</section>
    </>
  );
}

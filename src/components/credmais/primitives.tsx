import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------- Reveal */

export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn("cm-reveal", visible && "is-visible", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------ Section */

export function Section({
  id,
  tone = "ice",
  className,
  children,
}: {
  id?: string;
  tone?: "ice" | "white" | "navy";
  className?: string;
  children: ReactNode;
}) {
  const tones = {
    ice: "bg-[#F6F8FA] text-[#52606D]",
    white: "bg-white text-[#52606D]",
    navy: "bg-[#071A33] text-white/70 backdrop-blur-3xl",
  } as const;

  return (
    <section id={id} className={cn("py-20 md:py-28", tones[tone], className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}

/* ------------------------------------------------------ SectionHeading */

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <Tag className={cn("title-lg mt-4", invert && "text-white")}>{title}</Tag>
      {description ? (
        <p className={cn("lead mt-5", invert && "text-white/70")}>{description}</p>
      ) : null}
    </Reveal>
  );
}

/* --------------------------------------------------------- CTA button */

type CtaProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "gold" | "outline" | "ghost-light";
  external?: boolean;
  className?: string;
};

export function CtaLink({ href, children, variant = "primary", external, className }: CtaProps) {
  const variants = {
    primary: "bg-[#071A33] text-white hover:bg-[#C7A96B] hover:text-[#071A33]",
    gold: "bg-[#C7A96B] text-[#071A33] hover:bg-white",
    outline:
      "border border-[#071A33]/15 bg-transparent text-[#071A33] hover:border-[#C7A96B] hover:text-[#C7A96B]",
    "ghost-light":
      "border border-white/25 bg-transparent text-white hover:border-[#C7A96B] hover:text-[#C7A96B]",
  } as const;

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex min-h-11 items-center justify-center gap-3 rounded-full px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-400 ease-premium hover:scale-[1.02]",
        variants[variant],
        className,
      )}
    >
      {children}
      <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

/* ------------------------------------------------------ OptimizedImage */

export function OptimizedImage({
  src,
  alt,
  className,
  wrapperClassName,
  priority = false,
  ratio = "aspect-[4/3]",
}: {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  priority?: boolean;
  ratio?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-[32px] bg-[#E2E8F0] shadow-soft transition-all duration-700 hover:shadow-premium hover:border-gold-soft border border-transparent", ratio, wrapperClassName)}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : {})}
        className={cn("size-full object-cover", className)}
      />
    </div>
  );
}

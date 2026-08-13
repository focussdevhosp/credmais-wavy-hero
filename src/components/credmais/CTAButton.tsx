import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type CTAButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: 'gold' | 'navy' | 'outline';
  className?: string;
};

const variants = {
  gold: 'bg-gold text-white hover:bg-gold/90 shadow-lg shadow-gold/25',
  navy: 'bg-gold text-white hover:bg-gold/90 shadow-lg shadow-gold/25',
  outline: 'border border-gold/20 text-gold hover:border-gold hover:text-white hover:bg-gold bg-transparent',
};

export function CTAButton({ children, href = '#contato', variant = 'gold', className }: CTAButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full',
        'px-7 sm:px-10 py-4 sm:py-5 min-h-[52px]',
        'font-heading font-semibold tracking-wide',
        'text-[0.95rem] sm:text-base md:text-lg text-center leading-none',
        'transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:brightness-110 active:scale-95 active:translate-y-0',
        variants[variant],
        className,
      )}
    >
      <span>{children}</span>
      <ArrowRight
        size={18}
        className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
      />
    </a>
  );
}

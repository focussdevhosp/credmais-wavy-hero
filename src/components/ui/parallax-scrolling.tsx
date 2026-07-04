'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wraps content in a parallax scrolling container with layered background
 * elements that move at different speeds as the user scrolls.
 */
export function ParallaxSection({ children, className = '' }: ParallaxSectionProps) {
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = parallaxRef.current;
    const triggerElement = root?.querySelector('[data-parallax-layers]') as HTMLElement | null;

    let tl: gsap.core.Timeline | null = null;

    if (triggerElement) {
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: '0% 100%',
          end: '100% 0%',
          scrub: 0.5,
        },
      });

      const layers = [
        { layer: '1', yPercent: 70 },
        { layer: '2', yPercent: 55 },
        { layer: '3', yPercent: 40 },
        { layer: '4', yPercent: 10 },
      ];

      layers.forEach((layerObj, idx) => {
        tl!.to(
          triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
          { yPercent: layerObj.yPercent, ease: 'none' },
          idx === 0 ? undefined : '<'
        );
      });
    }

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    const rafCb = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(rafCb);
    gsap.ticker.lagSmoothing(0);

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      if (tl) tl.kill();
      gsap.ticker.remove(rafCb);
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={parallaxRef} className={`relative overflow-hidden ${className}`}>
      <div data-parallax-layers className="relative">
        {/* Background layers */}
        <div
          data-parallax-layer="1"
          aria-hidden
          className="pointer-events-none absolute -left-24 -top-32 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl"
        />
        <div
          data-parallax-layer="2"
          aria-hidden
          className="pointer-events-none absolute right-[-6rem] top-40 h-[360px] w-[360px] rounded-full bg-emerald-300/25 blur-3xl"
        />
        <div
          data-parallax-layer="3"
          aria-hidden
          className="pointer-events-none absolute left-1/3 bottom-10 h-[280px] w-[280px] rounded-full bg-lime-300/20 blur-3xl"
        />
        <div
          data-parallax-layer="4"
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.06),transparent_60%),radial-gradient(circle_at_80%_60%,rgba(34,197,94,0.05),transparent_55%)]"
        />

        {/* Foreground content */}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}

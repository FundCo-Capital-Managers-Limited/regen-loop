"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Step = { number: string; title: string; text: string };

export default function ProcessFlow({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const line = lineRef.current;
    if (!el || !line) return;

    const nodes = el.querySelectorAll<HTMLDivElement>("[data-node]");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          once: true,
        },
      });

      tl.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 1.2, ease: "power2.inOut" }, 0);

      nodes.forEach((node, i) => {
        tl.fromTo(
          node,
          { opacity: 0, y: 24, scale: 0.85 },
          { opacity: 1, y: 0, scale: 1, ease: "power2.out", duration: 0.4 },
          0.15 + i * 0.15
        );
      });
    }, ref);

    return () => ctx.revert();
  }, [steps.length]);

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-0 right-0 top-6 h-0.5 bg-border hidden sm:block">
        <div
          ref={lineRef}
          className="h-full origin-left bg-gradient-to-r from-brand to-accent"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
      <div className="grid gap-8 sm:grid-cols-5">
        {steps.map((s) => (
          <div key={s.number} data-node className="text-center sm:text-left">
            <div className="mx-auto sm:mx-0 flex h-12 w-12 items-center justify-center rounded-full bg-navy text-accent font-bold text-sm mb-4 relative z-10">
              {s.number}
            </div>
            <h3 className="font-semibold text-navy mb-2">{s.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

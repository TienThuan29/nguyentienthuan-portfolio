"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const ids = navItems.map((item) => item.href.slice(1));

/* Margin outline for wide screens: hidden over the hero, then marks the last section whose top has passed 45% of the viewport.
   Position-based (not IntersectionObserver edges) so instant jumps — e.g. Contact → top — always land on the right state. */
const OutlineNav = () => {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = ids.flatMap((id) => document.getElementById(id) ?? []);
    const update = () => {
      const line = window.innerHeight * 0.45;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current: string | null = null;
      for (const el of sections) if (el.getBoundingClientRect().top <= line) current = el.id;
      setActive(atBottom ? sections.at(-1)?.id ?? current : current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav
      aria-label="Outline"
      className={cn(
        // Sits in the left margin, its right edge ~2rem before the content's section labels.
        "fixed left-[max(1.5rem,calc(50vw-44rem))] top-1/2 z-40 hidden w-32 -translate-y-1/2 transition-[opacity,visibility] duration-300 min-[90rem]:block",
        active ? "visible opacity-100" : "invisible opacity-0",
      )}
    >
      <p className="label mb-4">Outline</p>
      <ol className="space-y-2.5 border-l border-border">
        {navItems.map((item, i) => {
          const current = ids[i] === active;
          return (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={current ? "location" : undefined}
                className={cn(
                  "-ml-px flex items-baseline gap-2.5 border-l-2 pl-3 text-[13px] leading-5 transition-colors",
                  current ? "border-accent text-accent" : "border-transparent text-muted-foreground hover:text-foreground",
                )}
              >
                <span className="font-mono text-[11px]">{String(i + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default OutlineNav;

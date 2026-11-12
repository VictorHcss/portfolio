"use client";

import { useRef } from "react";

type SpotlightCardProps = React.HTMLAttributes<HTMLDivElement>;

/** Card com luz violeta que acompanha o cursor (sem re-render: só variáveis CSS). */
export const SpotlightCard = ({ children, className = "", ...rest }: SpotlightCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div ref={ref} onPointerMove={handleMove} className={`spotlight ${className}`} {...rest}>
      {children}
    </div>
  );
};

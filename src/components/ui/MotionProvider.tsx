"use client";

import { MotionConfig } from "motion/react";

/** Respeita prefers-reduced-motion em todas as animações do Motion. */
export const MotionProvider = ({ children }: { children: React.ReactNode }) => (
  <MotionConfig reducedMotion="user" transition={{ ease: [0.16, 1, 0.3, 1] }}>
    {children}
  </MotionConfig>
);

import React from "react";
import { motion } from "motion/react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  inline?: boolean;
}

export default function Reveal({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 30,
  className = "",
  inline = false,
}: RevealProps) {
  const Component = inline ? motion.span : motion.div;

  return (
    <Component
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.215, 0.61, 0.355, 1] }} // Ultra smooth cubic-bezier
      className={className}
    >
      {children}
    </Component>
  );
}

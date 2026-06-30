import React from "react";
import { motion } from "motion/react";
import { Sparkle } from "lucide-react";

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export default function Logo({ className = "", showSubtitle = true }: LogoProps) {
  return (
    <div className={`flex items-center space-x-2.5 select-none ${className}`}>
      {/* Visual Icon: Two stylized stars in offset layout */}
      <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-apple-black dark:bg-zinc-900 border border-apple-border/10 dark:border-zinc-800 shadow-sm overflow-hidden group-hover:scale-105 transition-transform duration-300">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-apple-accent/20 via-transparent to-indigo-500/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Star 1: Primary Gold Star */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.9, 1, 0.9],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-0.5 -left-0.5 p-1.5"
        >
          <Sparkle className="w-3.5 h-3.5 text-[#C5A059]" fill="#C5A059" />
        </motion.div>

        {/* Star 2: Secondary Indigo/Coral Star */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
            rotate: [0, -20, 0],
          }}
          transition={{
            duration: 2.5,
            delay: 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-0.5 -right-0.5 p-1.5"
        >
          <Sparkle className="w-3.5 h-3.5 text-[#E28B5B]" fill="#E28B5B" />
        </motion.div>
      </div>

      {/* Typography with multi-color & premium gradients */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline space-x-1">
          {/* GRF in elegant luxury gradient */}
          <span className="font-logo font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#C5A059] via-[#E28B5B] to-[#6366F1] dark:from-[#D4B26F] dark:via-[#F09F70] dark:to-[#818CF8]">
            GRF
          </span>
          {showSubtitle && (
            <span className="font-sans text-[10px] font-bold tracking-widest text-apple-gray dark:text-zinc-500 uppercase ml-1">
              Corp
            </span>
          )}
        </div>
        
        {showSubtitle && (
          <span className="font-sans text-[8px] font-medium tracking-[0.22em] text-apple-gray/80 dark:text-zinc-400 uppercase mt-0.5">
            Corporation
          </span>
        )}
      </div>
    </div>
  );
}

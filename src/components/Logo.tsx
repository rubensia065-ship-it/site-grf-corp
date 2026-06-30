import React from "react";
import { motion } from "motion/react";

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export default function Logo({ className = "", showSubtitle = true }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3.5 select-none group ${className}`}>
      {/* Visual Icon: Premium Official GRF Corporation Monogram */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800/80 shadow-md overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:border-sky-400/40 dark:group-hover:border-sky-400/30 group-hover:shadow-sky-500/10 dark:group-hover:shadow-sky-400/5 group-hover:shadow-lg">
        {/* Ambient background gradients and interactive light ray */}
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/15 via-transparent to-indigo-500/10 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Monogram SVG with a gorgeous high-fidelity sapphire gradient */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-7 h-7 z-10"
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            style={{ shapeRendering: "geometricPrecision" }}
          >
            <defs>
              <linearGradient id="grfMonogramGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" /> {/* Sky-500 */}
                <stop offset="50%" stopColor="#0284c7" /> {/* Sky-600 */}
                <stop offset="100%" stopColor="#1d4ed8" /> {/* Blue-700 */}
              </linearGradient>
              <linearGradient id="grfMonogramGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e0f2fe" /> {/* Sky-100 */}
                <stop offset="50%" stopColor="#38bdf8" /> {/* Sky-400 */}
                <stop offset="100%" stopColor="#6366f1" /> {/* Indigo-500 */}
              </linearGradient>
            </defs>
            
            {/* Outer loop */}
            <path 
              d="M84,22 L78.5,27.5 H43.5 C30,27.5 21,36.5 21,50 C21,63.5 30,72.5 43.5,72.5 H56.5 L52,78 H43.5 C26.5,78 15,66.5 15,50 C15,33.5 26.5,22 43.5,22 H84 Z" 
              className="fill-[url(#grfMonogramGrad)] dark:fill-[url(#grfMonogramGradDark)] transition-all duration-300"
            />
            {/* Middle bar of F */}
            <path 
              d="M63,46.5 H78 L74,52 H63 Z" 
              className="fill-[url(#grfMonogramGrad)] dark:fill-[url(#grfMonogramGradDark)] transition-all duration-300"
            />
            {/* Inner R bowl with evenodd winding rule */}
            <path 
              fillRule="evenodd" 
              d="M36.5,32.5 H43.5 C51,32.5 56.5,38 56.5,45.5 C56.5,53 51,58.5 43.5,58.5 H36.5 Z M42.5,38 H36.5 V53 H42.5 C46.5,53 49.5,50.5 49.5,45.5 C49.5,40.5 46.5,38 42.5,38 Z" 
              className="fill-[url(#grfMonogramGrad)] dark:fill-[url(#grfMonogramGradDark)] transition-all duration-300"
            />
            {/* Diagonal R leg */}
            <path 
              d="M50.5,55 L66,78 H58.5 L44,57 Z" 
              className="fill-[url(#grfMonogramGrad)] dark:fill-[url(#grfMonogramGradDark)] transition-all duration-300"
            />
          </svg>
        </motion.div>
      </div>

      {/* Typography: Extremely polished typography with fine adjustments */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center space-x-1.5">
          {/* GRF - Sleek display typography with premium dark/light adaptive styling */}
          <span className="font-sans font-black text-[23px] tracking-[0.06em] bg-clip-text text-transparent bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-900 dark:from-white dark:via-zinc-200 dark:to-zinc-100 transition-all duration-300 group-hover:text-sky-500 dark:group-hover:text-sky-400">
            GRF
          </span>
          {showSubtitle && (
            <span className="font-sans text-[7.5px] font-extrabold tracking-widest text-sky-700 bg-sky-50 dark:text-sky-300 dark:bg-sky-500/10 uppercase px-1.5 py-0.5 rounded-sm border border-sky-200/50 dark:border-sky-400/15">
              OFFICIEL
            </span>
          )}
        </div>
        
        {showSubtitle && (
          <span className="font-sans text-[8px] font-bold tracking-[0.38em] text-zinc-500 dark:text-zinc-400 uppercase mt-1.5 transition-colors duration-300 group-hover:text-sky-600/80 dark:group-hover:text-sky-400/80">
            CORPORATION
          </span>
        )}
      </div>
    </div>
  );
}

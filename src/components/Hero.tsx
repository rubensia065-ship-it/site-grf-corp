import React from "react";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { CREATOR_PROFILE } from "../data";

interface HeroProps {
  whatsappNumber: string;
}

export default function Hero({ whatsappNumber }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-[#F5F5F7] via-[#FCFCFD] to-white dark:from-[#0B0B0C] dark:via-[#111113] dark:to-black"
    >
      {/* Soft champagne glow in the top-right corner - minimal & elegant */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-apple-accent/[0.04] dark:bg-apple-accent/[0.02] blur-[120px] rounded-full pointer-events-none" />

      {/* Ambient light blue glowing sphere with decreased intensity */}
      <div className="absolute top-1/4 left-1/4 w-[320px] h-[320px] bg-sky-400/15 dark:bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="block mb-8"
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut"
            }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-zinc-900/80 border border-apple-border dark:border-zinc-800/80 backdrop-blur-xs shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)]"
          >
            <MapPin className="w-3.5 h-3.5 text-apple-accent animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-apple-black dark:text-zinc-300">
              {CREATOR_PROFILE.subtitle}
            </span>
          </motion.div>
        </motion.div>

        {/* Breathtaking serif title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light tracking-tight text-apple-black dark:text-white leading-[1.1] mb-6 overflow-hidden">
          <motion.span
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block"
          >
            Créateur de sites&nbsp;
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="font-serif italic font-normal text-sky-600 dark:text-sky-400 inline-block"
          >
            web premium
          </motion.span>
        </h1>

        {/* Clean, high-readability catchphrase */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl font-sans font-normal text-apple-gray dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Des expériences digitales d'exception, alliant vitesse extrême, design haute couture et ergonomie parfaite pour propulser votre entreprise à l'international.
        </motion.p>

        {/* Clean Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-apple-black dark:bg-white text-white dark:text-apple-black hover:opacity-95 transition-all duration-300 font-bold tracking-wide text-sm shadow-md cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Discuter de votre projet</span>
          </motion.a>

          <motion.a
            href="#projets"
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)" 
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-white dark:bg-zinc-900 text-apple-black dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-all duration-300 font-bold tracking-wide text-sm border border-apple-border dark:border-zinc-800 shadow-xs cursor-pointer"
          >
            <span>Voir les réalisations</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>

        {/* Minimal Highlight Specs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto pt-8 border-t border-apple-border dark:border-zinc-800"
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-serif font-light text-apple-black dark:text-white">
              100%
            </span>
            <span className="text-[10px] text-apple-gray dark:text-zinc-500 mt-1 uppercase tracking-widest font-bold">
              Sur-Mesure
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-serif font-light text-apple-black dark:text-white">
              &lt; 1s
            </span>
            <span className="text-[10px] text-apple-gray dark:text-zinc-500 mt-1 uppercase tracking-widest font-bold">
              Temps de charge
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-serif font-light text-apple-black dark:text-white">
              {CREATOR_PROFILE.experience.split(" ")[0]}
            </span>
            <span className="text-[10px] text-apple-gray dark:text-zinc-500 mt-1 uppercase tracking-widest font-bold">
              Expérience
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-serif font-light text-apple-black dark:text-white">
              {CREATOR_PROFILE.completedProjects.split(" ")[0]}
            </span>
            <span className="text-[10px] text-apple-gray dark:text-zinc-500 mt-1 uppercase tracking-widest font-bold">
              Clients Satisfaits
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

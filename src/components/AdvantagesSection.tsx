import React from "react";
import { Sparkles, Zap, Smartphone, Search, HelpCircle, Shield, CreditCard, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export default function AdvantagesSection() {
  const advantages = [
    {
      icon: <Zap className="w-5 h-5 text-apple-accent" />,
      title: "Vitesse de chargement < 1s",
      description: "Optimisation de pointe et code ultra-léger pour un affichage instantané, même avec une connexion mobile 3G instable."
    },
    {
      icon: <CreditCard className="w-5 h-5 text-apple-accent" />,
      title: "Paiements Mobiles Intégrés",
      description: "Intégration fluide d'Orange Money, Moov Money et Coris Pay pour encaisser vos clients locaux instantanément."
    },
    {
      icon: <Smartphone className="w-5 h-5 text-apple-accent" />,
      title: "Conception Mobile-First",
      description: "Plus de 85% du trafic au Burkina se fait sur smartphone. Nos interfaces sont ciselées en priorité pour les mobiles."
    },
    {
      icon: <Search className="w-5 h-5 text-apple-accent" />,
      title: "SEO & Visibilité Locale",
      description: "Une structure technique pensée pour vous propulser au sommet des résultats de recherche Google à Ouagadougou."
    }
  ];

  return (
    <section id="avantages" className="py-16 bg-apple-bg dark:bg-black border-t border-apple-border dark:border-zinc-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-apple-accent mb-2">
            L'Excellence Technique
          </h2>
          <p className="text-2xl sm:text-3xl font-serif font-light tracking-tight text-apple-black dark:text-white mb-3">
            Pourquoi choisir GRF Corporation ?
          </p>
          <p className="text-xs sm:text-sm text-apple-gray dark:text-zinc-400">
            Une synergie de haute performance technique et d'esthétique minimaliste au service de votre croissance.
          </p>
        </div>

        {/* Advantages Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {advantages.map((adv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-950/40 border border-apple-border dark:border-zinc-900/60 hover:bg-white dark:hover:bg-zinc-950 hover:border-apple-accent dark:hover:border-zinc-800 transition-all duration-300 group flex items-start space-x-4"
            >
              <div className="p-2.5 bg-apple-bg dark:bg-zinc-900 border border-apple-border dark:border-zinc-800 rounded-xl w-10 h-10 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-300">
                {adv.icon}
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-sans font-bold text-apple-black dark:text-white mb-1.5">
                  {adv.title}
                </h3>
                <p className="text-xs sm:text-sm text-apple-gray dark:text-zinc-400 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Localized Callout banner */}
        <div className="mt-16 bg-apple-black border border-apple-border dark:bg-zinc-900/40 text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-md">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full pointer-events-none" />
          <div className="space-y-3 text-center lg:text-left max-w-xl">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-apple-accent text-white px-2.5 py-1 rounded-full">
              Fierté Burkinabè
            </span>
            <h3 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white">
              Soutenons la digitalisation du Faso.
            </h3>
            <p className="text-sm font-medium text-apple-gray leading-relaxed">
              Basé à Ouagadougou, je travaille avec les commerçants, les artisans, les cabinets et les PME de notre pays pour montrer la force du savoir-faire burkinabè en ligne.
            </p>
          </div>
          <a
            href="#contact"
            className="px-8 py-4 bg-apple-accent text-white rounded-full font-bold text-sm tracking-wide hover:opacity-90 transition-all shadow-lg shrink-0 cursor-pointer"
          >
            Lancer mon site web
          </a>
        </div>

      </div>
    </section>
  );
}

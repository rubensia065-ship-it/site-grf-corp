import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "./Reveal";

interface FAQItemProps {
  key?: React.Key;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-apple-border/50 dark:border-zinc-900 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group transition-all duration-200 cursor-pointer"
      >
        <span className="font-sans font-semibold text-sm sm:text-base text-apple-black dark:text-zinc-100 group-hover:text-apple-accent dark:group-hover:text-[#F09F70] transition-colors duration-200">
          {question}
        </span>
        <div className={`p-1.5 rounded-full bg-apple-bg dark:bg-zinc-900 border border-apple-border/50 dark:border-zinc-800 shrink-0 ml-4 transition-transform duration-300 ${isOpen ? "rotate-180 bg-apple-accent/5 dark:bg-zinc-800 text-apple-accent" : "text-apple-gray"}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-xs sm:text-sm text-apple-gray dark:text-zinc-400 leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Combien coûte réellement la création d'un site internet ?",
      answer: "Nos prix sont transparents et payés en une seule fois (pas de frais mensuels cachés). L'offre Vitrine commence à 149 000 FCFA. Vous restez propriétaire de votre nom de domaine et de votre hébergement à 100%."
    },
    {
      question: "Quels sont les délais de livraison pour mon projet ?",
      answer: "Pour une formule One-Page ou Standard, le site est livré, testé et mis en ligne sous 7 à 14 jours après réception de vos textes et images. Un site Premium sur-mesure demande entre 15 et 30 jours."
    },
    {
      question: "Les paiements mobiles (Orange Money, Moov Money) seront-ils intégrés ?",
      answer: "Oui, tout à fait. Nous pouvons configurer des boutons de paiement direct ou l'intégration complète d'API de paiement locales pour que vos clients burkinabè puissent régler instantanément via leur téléphone."
    },
    {
      question: "Puis-je modifier le site moi-même après la livraison ?",
      answer: "Pour garantir une sécurité maximale, une vitesse de chargement optimale et préserver la perfection esthétique du site (sans risque de dérégler le design), nous ne laissons pas les clients modifier le code ou les bases de données eux-mêmes. Notre équipe s'occupe de tout pour vous : avec notre Offre Avec Suivi ou nos contrats de maintenance réactifs, envoyez-nous vos textes ou photos par e-mail ou WhatsApp, et nous les mettons à jour sous 24h avec une précision pixel-perfect."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-apple-bg/50 dark:bg-zinc-950/20 border-t border-apple-border dark:border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Reveal delay={0.1}>
            <div className="inline-flex items-center space-x-1.5 bg-apple-accent/5 dark:bg-zinc-900 border border-apple-accent/10 dark:border-zinc-800 px-3 py-1 rounded-full mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-apple-accent" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-apple-accent">
                Des réponses claires
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <h2 className="text-2xl sm:text-3xl font-serif font-light tracking-tight text-apple-black dark:text-white mb-3">
              Questions Fréquentes
            </h2>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-xs sm:text-sm text-apple-gray dark:text-zinc-400 max-w-xl mx-auto">
              Tout ce que vous devez savoir pour lancer votre projet web en toute sérénité à Ouagadougou.
            </p>
          </Reveal>
        </div>

        {/* Minimalist Accordion Container */}
        <div className="bg-white dark:bg-zinc-950/40 border border-apple-border dark:border-zinc-900/80 rounded-3xl px-6 sm:px-8 shadow-xs">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

import React from "react";
import { SERVICES } from "../data";
import { Service } from "../types";
import { Layout, RefreshCw, Zap, Check, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import { motion } from "motion/react";
import Reveal from "./Reveal";

interface ServicesSectionProps {
  whatsappNumber: string;
}

export default function ServicesSection({ whatsappNumber }: ServicesSectionProps) {
  
  // Icon helper to map string names to Lucide icons
  const renderIcon = (name: string, className: string) => {
    switch (name) {
      case "Layout":
        return <Layout className={className} />;
      case "RefreshCw":
        return <RefreshCw className={className} />;
      case "Zap":
        return <Zap className={className} />;
      default:
        return <Layout className={className} />;
    }
  };

  const getWhatsAppLink = (service: Service) => {
    const formatted = whatsappNumber.replace(/\D/g, "");
    const featuresList = service.features.map(f => `• ${f}`).join("\n");
    const textMessage = `Bonjour GRF Corporation, je souhaite commander l'offre suivante :

📌 Service : ${service.title}
💰 Tarif : ${service.price}
⏱️ Délai estimé : ${service.deliveryTime}

📋 Éléments inclus :
${featuresList}

Pouvez-vous me recontacter pour lancer mon projet ? Merci !`;

    return `https://wa.me/${formatted}?text=${encodeURIComponent(textMessage)}`;
  };

  return (
    <section id="services" className="py-24 bg-apple-bg dark:bg-zinc-900/20 border-t border-apple-border dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal delay={0.1}>
            <h2 className="text-xs font-bold uppercase tracking-widest text-apple-accent mb-3">
              Services & Tarifs
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-3xl sm:text-4xl font-serif font-light tracking-tight text-apple-black dark:text-white mb-4">
              Des offres transparentes. Des résultats garantis.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-base text-apple-gray dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Pas de frais cachés. Nous proposons des forfaits clairs et adaptés aux besoins des entrepreneurs, PME et commerces au Burkina Faso.
            </p>
          </Reveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {SERVICES.map((service, idx) => {
            const isFlagship = service.id === "standard";

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex flex-col justify-between p-8 rounded-3xl transition-all duration-300 border ${
                  isFlagship
                    ? "bg-white dark:bg-zinc-950 border-apple-accent shadow-xl scale-102 z-10"
                    : "bg-white dark:bg-zinc-950/60 border-apple-border dark:border-zinc-800/60 shadow-xs hover:border-apple-accent"
                }`}
              >
                {/* Popularity Badge */}
                {isFlagship && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-apple-accent text-white text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    Recommandé
                  </span>
                )}

                <div>
                  {/* Service Icon */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                    isFlagship 
                      ? "bg-apple-accent/10 text-apple-accent" 
                      : "bg-apple-bg dark:bg-zinc-900 text-apple-black dark:text-zinc-300 border border-apple-border dark:border-zinc-800"
                  }`}>
                    {renderIcon(service.iconName, "w-6 h-6")}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-sans font-bold text-apple-black dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-apple-gray dark:text-zinc-400 leading-relaxed mb-6 h-12 overflow-hidden">
                    {service.description}
                  </p>

                  {/* Pricing / Meta */}
                  <div className="py-6 border-y border-apple-border dark:border-zinc-900 mb-6">
                    <span className="text-xs text-apple-gray dark:text-zinc-500 uppercase font-bold tracking-wider block">Tarif</span>
                    <span className="text-2xl font-sans font-bold text-apple-black dark:text-white mt-1 block">
                      {service.price}
                    </span>
                    <span className="text-[11px] text-apple-accent font-semibold tracking-wide block mt-2">
                      Livraison estimée : {service.deliveryTime}
                    </span>
                  </div>

                  {/* Features List */}
                  <h4 className="text-[10px] font-bold uppercase text-apple-gray dark:text-zinc-500 tracking-wider mb-4">
                    Ce qui est inclus :
                  </h4>
                  <ul className="space-y-3.5 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2.5 text-xs text-apple-gray dark:text-zinc-300 leading-snug">
                        <span className="p-0.5 rounded-full bg-green-500/10 text-green-500 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a
                  href={getWhatsAppLink(service)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 px-4 rounded-xl font-bold text-xs tracking-wide transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer ${
                    isFlagship
                      ? "bg-apple-accent hover:opacity-90 text-white shadow-md"
                      : "bg-apple-bg hover:bg-gray-100 text-apple-black dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-white border border-apple-border dark:border-zinc-800"
                  }`}
                >
                  <span>Commander cette offre</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Trust Seal */}
        <div className="mt-16 p-6 sm:p-8 bg-white dark:bg-zinc-950 border border-apple-border dark:border-zinc-900 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-apple-accent/10 text-apple-accent rounded-2xl shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-base font-sans font-bold text-apple-black dark:text-white">
                Garantie de Satisfaction Totale
              </h4>
              <p className="text-xs text-apple-gray dark:text-zinc-400 mt-1 max-w-xl">
                Je travaille de manière transparente. Aucun site n'est mis en ligne sans votre validation complète. Le code est propre, performant, et vous appartient à 100%.
              </p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <span className="text-[10px] uppercase font-bold text-apple-gray block tracking-widest">Une question ?</span>
            <a
              href="#contact"
              className="text-xs font-bold text-apple-accent hover:text-opacity-80 mt-1 inline-flex items-center space-x-1"
            >
              <span>Consulter ma FAQ ou me contacter</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

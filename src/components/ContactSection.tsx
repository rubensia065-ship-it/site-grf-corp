import React from "react";
import { MessageSquare, MapPin, Mail, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { CREATOR_PROFILE } from "../data";
import Reveal from "./Reveal";

export default function ContactSection() {
  const whatsappUrl = "https://wa.me/22677080042?text=Bonjour%20GRF%20Corporation%2C%20je%20souhaite%20discuter%20d%27un%20projet%20de%20site%20internet%20pour%20mon%20activit%C3%A9.";

  return (
    <section id="contact" className="py-24 bg-apple-bg dark:bg-black border-t border-apple-border dark:border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal delay={0.1}>
            <h2 className="text-xs font-bold uppercase tracking-widest text-apple-accent mb-3">
              Contact
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="text-3xl sm:text-4xl font-serif font-light tracking-tight text-apple-black dark:text-white mb-4">
              Donnez vie à vos projets numériques.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-base text-apple-gray dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Discutez en direct avec GRF Corporation pour obtenir un devis personnalisé ou des conseils pour votre projet web.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Left card: Contact Coordinates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-white dark:bg-zinc-950/60 border border-apple-border dark:border-zinc-900 rounded-3xl space-y-6 flex flex-col justify-between shadow-xs"
          >
            <div>
              <h3 className="text-lg font-bold font-sans text-apple-black dark:text-white mb-6">
                Coordonnées de l'Agence
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-apple-accent/10 text-apple-accent rounded-xl shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-apple-gray block font-semibold uppercase tracking-wider">Localisation</span>
                    <span className="text-sm text-apple-black dark:text-zinc-200 font-medium">
                      Ouaga 2000, Ouagadougou, Burkina Faso
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-apple-accent/10 text-apple-accent rounded-xl shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-apple-gray block font-semibold uppercase tracking-wider">E-mail Professionnel</span>
                    <a href={`mailto:${CREATOR_PROFILE.email}`} className="text-sm text-apple-black dark:text-zinc-200 font-medium hover:text-apple-accent transition-colors">
                      {CREATOR_PROFILE.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-apple-accent/10 text-apple-accent rounded-xl shrink-0 mt-0.5">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-apple-gray block font-semibold uppercase tracking-wider">WhatsApp direct</span>
                    <span className="text-sm text-apple-black dark:text-zinc-200 font-medium">
                      +226 77 08 00 42
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-apple-border dark:border-zinc-900/60 text-xs text-apple-gray">
              Disponible du lundi au samedi pour échanger sur vos projets.
            </div>
          </motion.div>

          {/* Right card: Main WhatsApp action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 bg-white dark:bg-zinc-950/60 border border-apple-border dark:border-zinc-900 rounded-3xl flex flex-col justify-between shadow-md relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-apple-accent/5 blur-2xl rounded-full pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-apple-accent" />
                <span className="text-xs font-bold uppercase tracking-wider text-apple-accent">Démarrer un projet</span>
              </div>
              <h3 className="text-xl font-sans font-bold text-apple-black dark:text-white">
                Discutons de votre besoin
              </h3>
              <p className="text-sm text-apple-gray dark:text-zinc-400 leading-relaxed">
                Cliquez sur le bouton ci-dessous pour ouvrir une discussion directe sur WhatsApp avec GRF Corporation. Le message sera pré-rempli pour faciliter votre demande.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-4 rounded-xl font-bold text-xs tracking-wide transition-all duration-200 flex items-center justify-center space-x-2 bg-apple-accent hover:opacity-95 text-white shadow-md hover:scale-[1.02] transform cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discuter sur WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <p className="text-[10px] text-center text-apple-gray leading-normal">
                Redirection sécurisée et gratuite vers l'application WhatsApp.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

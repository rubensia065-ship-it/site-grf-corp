import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Sun, Moon, Sparkles, Monitor, Users, ExternalLink } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { TESTIMONIALS, CREATOR_PROFILE } from "./data";
import Reveal from "./components/Reveal";

// Lazy loaded heavy sections for peak performance and faster TTI (Time to Interactive)
const ProjectsSection = lazy(() => import("./components/ProjectsSection"));
const ServicesSection = lazy(() => import("./components/ServicesSection"));
const AdvantagesSection = lazy(() => import("./components/AdvantagesSection"));
const FAQSection = lazy(() => import("./components/FAQSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));

// Elegant minimalist loader fallback for lazy loading
function SectionLoader() {
  return (
    <div className="py-24 flex items-center justify-center bg-apple-bg dark:bg-black w-full">
      <div className="flex flex-col items-center space-y-3">
        <div className="relative w-7 h-7">
          <div className="absolute inset-0 rounded-full border-2 border-apple-accent/20"></div>
          <div className="absolute inset-0 rounded-full border-2 border-t-apple-accent animate-spin"></div>
        </div>
        <span className="text-[10px] font-semibold text-apple-gray dark:text-zinc-500 uppercase tracking-widest animate-pulse">
          Chargement...
        </span>
      </div>
    </div>
  );
}

export default function App() {
  const whatsappNumber = CREATOR_PROFILE.whatsappDefault;
  const presentationRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: presentationRef as any,
    offset: ["start end", "end start"]
  });
  const avatarY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Dark mode status state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("portfolio_dark_mode");
    return saved !== null ? saved === "true" : true;
  });

  // Persist Dark mode status & update document element class
  useEffect(() => {
    localStorage.setItem("portfolio_dark_mode", String(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-500 bg-apple-bg text-apple-black dark:bg-black dark:text-zinc-100 ${darkMode ? "dark" : ""}`}>
      
      {/* Elegant Floated Light/Dark theme controller */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center space-x-2">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3.5 bg-white dark:bg-zinc-900 hover:bg-gray-100 dark:hover:bg-zinc-800 text-apple-black dark:text-zinc-200 rounded-full shadow-lg border border-apple-border dark:border-zinc-800/80 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center"
          title={darkMode ? "Passer en mode clair" : "Passer en mode sombre"}
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-apple-accent animate-spin-slow" />
          ) : (
            <Moon className="w-5 h-5 text-blue-500" />
          )}
        </button>
      </div>

      {/* Mounting Header Component */}
      <Header whatsappNumber={whatsappNumber} />

      {/* Hero Section */}
      <Hero whatsappNumber={whatsappNumber} />

      {/* Introducing Section: Presentation of GRF Corporation */}
      <section
        ref={presentationRef as any}
        className="py-20 bg-apple-bg dark:bg-black relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Premium Black & White Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group max-w-sm w-full"
              >
                {/* Decorative gold backdrop border */}
                <div className="absolute -inset-1 bg-apple-accent/20 dark:bg-apple-accent/10 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-500" />
                
                <div className="relative rounded-3xl overflow-hidden aspect-square border-4 border-white dark:border-zinc-950 bg-gray-50 shadow-xl">
                  {/* Parallax Image Wrapper */}
                  <motion.div 
                    style={{ y: avatarY }}
                    className="absolute -inset-y-10 left-0 right-0 w-full h-[calc(100%+5rem)]"
                  >
                    <img
                      src={CREATOR_PROFILE.avatar}
                      alt={CREATOR_PROFILE.name}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Decorative badge inside the image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-apple-border dark:border-zinc-900/60 flex items-center justify-between z-10">
                    <div>
                      <span className="text-[10px] text-apple-gray block uppercase font-bold tracking-wider">Agence Web</span>
                      <span className="text-xs font-bold text-apple-black dark:text-white">{CREATOR_PROFILE.name}</span>
                    </div>
                    <span className="px-2.5 py-1 bg-apple-accent/10 text-apple-accent font-bold text-[10px] uppercase rounded-full">
                      Ouagadougou, BF
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Bio Details */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal delay={0.1}>
                <span className="text-xs font-bold uppercase tracking-widest text-apple-accent">
                  L'Artisan du Web
                </span>
              </Reveal>
              
              <Reveal delay={0.25}>
                <h2 className="text-3xl sm:text-4xl font-serif font-light tracking-tight text-apple-black dark:text-white leading-tight">
                  Créer l'exceptionnel. Simplifier le complexe.
                </h2>
              </Reveal>
              
              <Reveal delay={0.4}>
                <p className="text-base text-apple-gray dark:text-zinc-400 leading-relaxed">
                  {CREATOR_PROFILE.bio}
                </p>
              </Reveal>

              {/* Stats highlights */}
              <Reveal delay={0.55}>
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-apple-border dark:border-zinc-900">
                  <div className="space-y-1">
                    <span className="text-xs text-apple-gray block uppercase font-bold tracking-wider">Expertise</span>
                    <p className="text-sm font-semibold text-apple-black dark:text-zinc-200">
                      Développement web de pointe, SEO, Paiement Mobile
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-apple-gray block uppercase font-bold tracking-wider">Secteurs</span>
                    <p className="text-sm font-semibold text-apple-black dark:text-zinc-200">
                      Artisanat d'art, Cabinets juridiques, Hôtels, Restauration
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <Suspense fallback={<SectionLoader />}>
        <ProjectsSection />
      </Suspense>

      {/* Services Section */}
      <Suspense fallback={<SectionLoader />}>
        <ServicesSection whatsappNumber={whatsappNumber} />
      </Suspense>

      {/* Testimonials section */}
      <section className="py-24 bg-apple-bg dark:bg-black border-t border-apple-border dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-apple-accent mb-3">
              Témoignages
            </h2>
            <p className="text-3xl sm:text-4xl font-serif font-light tracking-tight text-apple-black dark:text-white mb-4">
              Ils nous ont fait confiance.
            </p>
            <p className="text-base text-apple-gray dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Découvrez les retours d'expérience des entrepreneurs et cabinets de Ouagadougou que nous avons accompagnés dans leur croissance digitale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-8 rounded-3xl bg-white dark:bg-zinc-950/60 border border-apple-border dark:border-zinc-900 relative flex flex-col justify-between shadow-xs"
              >
                <div>
                  {/* Testimonial Quote symbol */}
                  <span className="text-6xl text-apple-accent/20 font-serif absolute top-4 left-4 select-none">“</span>
                  <p className="text-sm text-apple-gray dark:text-zinc-300 leading-relaxed italic relative z-10 mb-6">
                    {t.content}
                  </p>
                </div>
                
                <div className="flex items-center space-x-3.5 pt-4 border-t border-apple-border dark:border-zinc-900">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-apple-black dark:text-white">{t.name}</h4>
                    <span className="text-[10px] text-apple-gray block mt-0.5">{t.role}, {t.company}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Advantages Section */}
      <Suspense fallback={<SectionLoader />}>
        <AdvantagesSection />
      </Suspense>

      {/* FAQ Section */}
      <Suspense fallback={<SectionLoader />}>
        <FAQSection />
      </Suspense>

      {/* Contact Section */}
      <Suspense fallback={<SectionLoader />}>
        <ContactSection />
      </Suspense>

      {/* Footer Section */}
      <Footer />

    </div>
  );
}

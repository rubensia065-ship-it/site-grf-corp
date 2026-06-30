import React, { useState } from "react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { ExternalLink, Check, Laptop, Smartphone, Info, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "./Reveal";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { label: "Tous", value: "all" },
    { label: "E-Commerce", value: "Boutique E-commerce" },
    { label: "Corporate", value: "Site Corporate" },
    { label: "Réservations", value: "Site de Réservation" },
    { label: "Landing Pages", value: "Landing Page & Web App" },
  ];

  const filteredProjects = filter === "all"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projets" className="py-24 bg-apple-bg dark:bg-black border-t border-apple-border dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal delay={0.1}>
            <h2 className="text-xs font-bold uppercase tracking-widest text-apple-accent mb-3">
              Portfolio
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-3xl sm:text-4xl font-serif font-light tracking-tight text-apple-black dark:text-white mb-4">
              Des designs primés, construits pour durer.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-base text-apple-gray dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Découvrez nos dernières réalisations pensées à Ouagadougou. Chaque site est conçu avec un soin méticuleux pour offrir les meilleures performances du marché.
            </p>
          </Reveal>
        </div>

        {/* Dynamic categories filter tabs (Apple styled) */}
        <Reveal delay={0.4}>
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  filter === cat.value
                    ? "bg-apple-black text-white dark:bg-white dark:text-apple-black shadow-md"
                    : "bg-white border border-apple-border text-apple-gray hover:bg-[#F5F5F7] dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Safari-like browser wrapper */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 border border-apple-border dark:border-zinc-800 shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-1">
                
                {/* Browser top-bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-white/90 dark:bg-zinc-950/90 border-b border-apple-border dark:border-zinc-800/80">
                  <div className="flex space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-400 block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400 block"></span>
                    <span className="w-3 h-3 rounded-full bg-green-400 block"></span>
                  </div>
                  <div className="px-6 py-1 rounded bg-apple-bg dark:bg-zinc-900 text-[10px] text-apple-gray dark:text-zinc-500 font-mono w-48 text-center truncate">
                    {project.id}.sia.design
                  </div>
                  <div className="w-12"></div>
                </div>

                {/* Project Image */}
                <div className="aspect-4/3 relative overflow-hidden bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Hover visual overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-5 py-2.5 rounded-full bg-white text-apple-black font-semibold text-xs tracking-wide shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center space-x-1">
                      <Info className="w-3.5 h-3.5" />
                      <span>Explorer les détails</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Project info card */}
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-apple-accent">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-apple-gray dark:text-zinc-500 border border-apple-border dark:border-zinc-800 rounded-md px-2 py-0.5">
                    {project.difficulty}
                  </span>
                </div>
                <h3 className="text-xl font-sans font-bold text-apple-black dark:text-white mt-2 group-hover:text-apple-accent transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-apple-gray dark:text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-apple-accent bg-apple-accent/5 border border-apple-accent/20 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              />

              {/* Modal Body */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative bg-white dark:bg-zinc-950 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-apple-border dark:border-zinc-900 z-10 flex flex-col md:flex-row"
              >
                {/* Left side image */}
                <div className="md:w-1/2 bg-gray-900 relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover aspect-video md:aspect-auto md:h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                  <div className="absolute bottom-4 left-4 text-white md:hidden">
                    <span className="text-xs font-bold uppercase tracking-wider text-apple-accent">
                      {selectedProject.category}
                    </span>
                    <h4 className="text-2xl font-bold mt-1">{selectedProject.title}</h4>
                  </div>
                </div>

                {/* Right side content */}
                <div className="p-6 sm:p-8 md:w-1/2 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
                  
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-apple-bg hover:bg-gray-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-apple-gray dark:text-zinc-400"
                    aria-label="Fermer"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div>
                    <span className="hidden md:inline-block text-xs font-bold uppercase tracking-wider text-apple-accent">
                      {selectedProject.category}
                    </span>
                    <h4 className="hidden md:block text-3xl font-sans font-bold text-apple-black dark:text-white mt-1 mb-4">
                      {selectedProject.title}
                    </h4>

                    <p className="text-sm text-apple-gray dark:text-zinc-300 leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>

                    {/* Features included */}
                    <div className="mb-6">
                      <h5 className="text-xs font-bold uppercase text-apple-gray dark:text-zinc-500 tracking-wider mb-3">
                        Fonctionnalités Premium :
                      </h5>
                      <ul className="space-y-2.5">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex items-start space-x-2 text-sm text-apple-gray dark:text-zinc-300">
                            <span className="p-0.5 rounded-full bg-apple-accent/10 text-apple-accent mt-0.5">
                              <Check className="w-3.5 h-3.5" />
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech used */}
                    <div>
                      <h5 className="text-xs font-bold uppercase text-apple-gray dark:text-zinc-500 tracking-wider mb-2">
                        Technologies :
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-semibold text-apple-accent bg-apple-accent/5 border border-apple-accent/20 px-3 py-1 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Call to action within modal */}
                  <div className="mt-8 pt-6 border-t border-apple-border dark:border-zinc-900 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-apple-gray block uppercase font-bold tracking-wider">Type</span>
                      <span className="text-sm font-semibold text-apple-black dark:text-zinc-200">Sur-Mesure</span>
                    </div>
                    <a
                      href="#contact"
                      onClick={() => setSelectedProject(null)}
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-apple-black text-white dark:bg-white dark:text-apple-black text-xs font-bold tracking-wide cursor-pointer"
                    >
                      <span>Obtenir un devis similaire</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

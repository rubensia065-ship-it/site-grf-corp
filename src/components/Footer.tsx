import React from "react";
import { CREATOR_PROFILE } from "../data";
import { ArrowUp, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-apple-bg dark:bg-black border-t border-apple-border dark:border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left section: Copyright & Name */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <Logo />
            <p className="text-xs text-apple-gray">
              &copy; {currentYear} {CREATOR_PROFILE.name}. Tous droits réservés.
            </p>
          </div>

          {/* Center section: Location */}
          <div className="flex items-center space-x-2 text-xs text-apple-gray dark:text-zinc-400">
            <MapPin className="w-3.5 h-3.5 text-apple-accent" />
            <span>Conçu à Ouagadougou, Burkina Faso.</span>
          </div>

          {/* Right section: Back to top button */}
          <button
            onClick={handleScrollTop}
            className="p-3 bg-white hover:bg-gray-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-apple-gray dark:text-zinc-400 rounded-full shadow-xs border border-apple-border dark:border-zinc-800 transition-colors cursor-pointer"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        {/* Apple styled simple subtext line */}
        <div className="mt-8 pt-8 border-t border-apple-border dark:border-zinc-900/60 flex flex-col sm:flex-row justify-between text-[11px] text-apple-gray text-center sm:text-left gap-4">
          <p>
            Créateur de sites web premium — Donnez une dimension internationale à votre projet.
          </p>
          <div className="flex justify-center sm:justify-end space-x-4">
            <span className="hover:text-apple-black dark:hover:text-white transition-colors cursor-pointer">Mention Légales</span>
            <span>&middot;</span>
            <span className="hover:text-apple-black dark:hover:text-white transition-colors cursor-pointer">Conditions d'utilisation</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

import React, { useState, useEffect } from "react";
import { Menu, X, MessageSquare, Phone } from "lucide-react";
import { CREATOR_PROFILE } from "../data";
import Logo from "./Logo";

interface HeaderProps {
  whatsappNumber: string;
}

export default function Header({ whatsappNumber }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Handle background scroll state
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Calculate reading scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formattedWhatsapp = whatsappNumber.replace(/\D/g, "");
  const whatsappUrl = formattedWhatsapp === "22677080042"
    ? "https://wa.me/22677080042?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20la%20cr%C3%A9ation%20d%27un%20site%20web"
    : `https://wa.me/${formattedWhatsapp}?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20la%20cr%C3%A9ation%20d%27un%20site%20web`;

  const navLinks = [
    { name: "Projets", href: "#projets" },
    { name: "Services", href: "#services" },
    { name: "Pourquoi Moi", href: "#avantages" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-apple-bg/80 dark:bg-black/80 backdrop-blur-md border-b border-apple-border dark:border-zinc-800 py-3 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      {/* Dynamic Scroll Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-apple-border/5 dark:bg-zinc-900/20 overflow-hidden pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#C5A059] via-[#E28B5B] to-[#6366F1] dark:from-[#D4B26F] dark:via-[#F09F70] dark:to-[#818CF8] shadow-[0_1px_6px_rgba(226,139,91,0.4)] transition-all duration-100 ease-out origin-left fluid-gpu"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium text-apple-gray hover:text-apple-black dark:text-zinc-400 dark:hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-full bg-apple-black text-white dark:bg-white dark:text-apple-black hover:bg-black dark:hover:bg-zinc-100 transition-all duration-200 text-xs font-semibold tracking-wide border border-transparent dark:border-white shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-apple-gray hover:text-apple-black dark:text-zinc-400 dark:hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-apple-bg/95 dark:bg-black/95 backdrop-blur-lg border-b border-apple-border dark:border-zinc-800 absolute top-full left-0 right-0 shadow-lg py-4 px-6 space-y-4 transition-all duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans text-base font-medium text-apple-black hover:text-black dark:text-zinc-200 dark:hover:text-white py-2 border-b border-gray-50 dark:border-zinc-900"
              >
                {link.name}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center space-x-2 w-full px-4 py-3 rounded-xl bg-green-500 text-white hover:bg-green-600 font-semibold text-sm transition-all duration-200 shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuter sur WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

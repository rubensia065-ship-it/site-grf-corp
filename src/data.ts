import { Project, Service, Testimonial } from "./types";
import grfAvatar from "./assets/images/grf_corp_avatar_1782826683564.jpg";
import fasoChic from "./assets/images/faso_chic_web_1782823055135.jpg";
import kadiAssociates from "./assets/images/kadi_associates_web_1782823069048.jpg";
import saharaLodge from "./assets/images/sahara_lodge_web_1782823081733.jpg";
import zamaFood from "./assets/images/zama_food_web_1782823109158.jpg";

export const CREATOR_PROFILE = {
  name: "GRF Corporation",
  title: "Créateur de sites internet pour entreprises",
  subtitle: "Basé à Ouagadougou, Burkina Faso",
  bio: "Nous concevons et développons des sites internet modernes, rapides et épurés. Notre objectif est de donner à votre activité burkinabè une présence digitale professionnelle, soignée et efficace pour attirer de nouveaux clients.",
  avatar: grfAvatar,
  whatsappDefault: "22677080042",
  email: "rubensia065@gmail.com",
  experience: "5+ ans d'expérience",
  completedProjects: "45+ sites livrés"
};

export const PROJECTS: Project[] = [
  {
    id: "faso-chic",
    title: "Faso Chic",
    category: "Boutique E-commerce",
    description: "Une boutique en ligne haut de gamme pour du pagne tissé traditionnel 'Faso Dan Fani' réinventé pour le marché moderne.",
    image: fasoChic,
    tags: ["React", "Tailwind", "E-commerce"],
    features: ["Paiement mobile money intégré (Orange, Moov)", "Catalogue fluide en 3D", "Panier ultra-rapide"],
    difficulty: "Premium"
  },
  {
    id: "kadi-associates",
    title: "Kadi & Associés",
    category: "Site Corporate",
    description: "Site internet institutionnel épuré et sérieux pour un cabinet d'avocats de premier plan basé à Ouaga 2000.",
    image: kadiAssociates,
    tags: ["Next.js", "SEO", "Multi-langues"],
    features: ["Prise de rendez-vous en ligne", "Espace client sécurisé", "Indexation Google optimisée"],
    difficulty: "Institutionnel"
  },
  {
    id: "sahara-lodge",
    title: "Sahara Lodge",
    category: "Site de Réservation",
    description: "Plateforme immersive de réservation haut de gamme pour un éco-lodge d'exception situé aux portes du Sahel.",
    image: saharaLodge,
    tags: ["React", "Framer Motion", "Booking"],
    features: ["Galerie photo immersive", "Calendrier de réservation synchronisé", "Expérience client haut de gamme"],
    difficulty: "Immersif"
  },
  {
    id: "zama-food",
    title: "Zama Food",
    category: "Landing Page & Web App",
    description: "Une interface web moderne et dynamique pour un service de livraison de mets gastronomiques locaux et sains à Ouagadougou.",
    image: zamaFood,
    tags: ["Tailwind", "Responsive", "Interactive"],
    features: ["Menu interactif dynamique", "Géolocalisation des livreurs", "Suivi de commande par SMS"],
    difficulty: "Moderne"
  }
];

export const SERVICES: Service[] = [
  {
    id: "essentiel",
    title: "Offre Essentiel",
    price: "20 000 FCFA",
    deliveryTime: "2 à 3 jours",
    description: "Une présence web simple et efficace, idéale pour lancer votre activité à moindre coût.",
    features: [
      "Site d'une seule page (One-page)",
      "Présentation de votre entreprise",
      "Bouton d'appel & contact WhatsApp direct",
      "Livraison ultra-rapide"
    ],
    iconName: "Zap"
  },
  {
    id: "standard",
    title: "Offre Standard",
    price: "35 000 FCFA",
    deliveryTime: "3 à 5 jours",
    description: "La solution complète pour exposer vos produits et booster votre visibilité sur Internet.",
    features: [
      "Site d'une seule page (One-page)",
      "Galerie de photos & produits interactive",
      "Section « À propos » détaillée",
      "Boutons de contact WhatsApp + réseaux sociaux",
      "Référencement naturel de base (SEO)"
    ],
    iconName: "Layout"
  },
  {
    id: "suivi",
    title: "Offre Avec Suivi",
    price: "35 000 FCFA + 5 000 FCFA/mois",
    deliveryTime: "3 à 5 jours",
    description: "Gardez votre site toujours à jour sans vous soucier des aspects techniques.",
    features: [
      "Tout le contenu du plan Standard inclus",
      "1 mise à jour mensuelle de contenu incluse",
      "Ajouts de nouvelles photos, produits ou infos",
      "Suivi de performance technique continu"
    ],
    iconName: "RefreshCw"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Mariam Diallo",
    role: "Fondatrice",
    company: "Faso Chic Couture",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    content: "GRF Corporation a parfaitement compris notre vision. Notre nouveau site e-commerce a complètement transformé notre image de marque. Les clients adorent la fluidité sur mobile !"
  },
  {
    id: "t2",
    name: "Maître Aboubacar Sanon",
    role: "Associé Principal",
    company: "Sanon & Kadi Avocats",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    content: "Une rigueur rare. Le site web de notre cabinet inspire confiance et sérieux. Le service de prise de rendez-vous fonctionne à merveille depuis le premier jour."
  }
];

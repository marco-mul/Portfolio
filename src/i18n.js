import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      projects: "Projects",
      contact: "Contact",
      greeting: "Hello! I'm",
      description:
        "After 10+ years in the digital marketing industry, I transitioned to software development " +
        "driven by my passion for technology and problem-solving. I specialize in building responsive " +
        "full-stack web applications. I'm eager to contribute my skills and grow as a developer in a " +
        "dynamic team environment.",
      buttonWork: "View my work",
      buttonContact: "Contact me",
      projectTitle: "My Projects",
      noteoriousDescription:
        "An easy-to-use full-stack note-taking app built with Next.js, Supabase and OpenAI integration.",
      jobTrackerDescription:
        "A full-stack job-tracking app that helps you organize your job research. Built with Next.js, MongoDB and betterAuth.",
      travelPlannerDescription:
        "A full-stack app to organize your travels and plan stop-by-stop itineraries with drag-and-drop functionality. " +
        "Built with Next.js, Neon, OAuth and Google Maps API integration.",
      contactTitle: "Let's get in touch!",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message...",
      sendButton: "Send Message",
      sending: "Sending...",
    },
  },
  fr: {
    translation: {
      home: "Accueil",
      projects: "Projets",
      contact: "Contact",
      greeting: "Bonjour! Je suis",
      description:
        "Après plus de 10 ans dans le secteur du marketing digital, j'ai effectué une transition vers le " +
        "développement web, motivé par ma passion pour les technologies. " +
        "Je me spécialise dans la création d'applications full-stack, et je suis impatient d'" +
        "apporter mes compétences et de progresser en tant que développeur au sein d'une équipe dynamique.",
      buttonWork: "Voir mon travail",
      buttonContact: "Contactez-moi",
      projectTitle: "Mes Projets",
      noteoriousDescription:
        "Une application de prise de notes full-stack facile à utiliser, développée avec Next.js, Supabase et avec une intégration OpenAI.",
      jobTrackerDescription:
        "Une application full-stack pour vous aider à organiser votre recherche d'emploi. Développée avec Next.js, MongoDB et betterAuth.",
      travelPlannerDescription:
        "Une application full-stack pour organiser vos voyages et planifier des itinéraires étape par étape avec une fonctionnalité de drag-and-drop. " +
        "Développée avec Next.js, Neon, OAuth et intégration de l'API Google Maps.",
      contactTitle: "Contactez-moi!",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "Votre email",
      messagePlaceholder: "Votre message...",
      sendButton: "Envoyer le message",
      sending: "Envoi en cours...",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

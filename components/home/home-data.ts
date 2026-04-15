export const homeCards = [
  { title: "Loue une voiture", description: "Crée un parcours de réservation avec dates, lieu, catégorie, client et confirmation.", href: "/rent", bullets: ["Choix des dates", "Client + contact", "Réservation Odoo", "Email + check-in"] },
  { title: "Choisis ta voiture", description: "Affiche les véhicules disponibles depuis Odoo et guide l’utilisateur vers la réservation.", href: "/choose-car", bullets: ["Liste des véhicules", "Filtres", "Fiches voiture", "Disponibilité"] },
  { title: "Besoin d’un transport", description: "Collecte une demande de transport et envoie le dossier dans votre ERP.", href: "/transport", bullets: ["Adresses", "Date et heure", "Nombre de passagers", "Suivi de demande"] },
  { title: "Gestion de ton sinistre", description: "Déclare un sinistre, joins des photos et ouvre un dossier de suivi.", href: "/claim", bullets: ["Déclaration", "Photos et pièces", "Statut du dossier", "Lien par email"] }
] as const;

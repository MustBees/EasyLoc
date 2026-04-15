import { ModulePage } from "@/components/home/module-page";
export default function RentPage() {
  return <ModulePage title="Loue une voiture" description="Ce module servira à construire le parcours de réservation complet, depuis la saisie du besoin jusqu’à la confirmation et au check-in." nextAction="Définir le workflow réservation" nextHref="/" workflow={[{ title:"Saisir la demande", description:"Dates, agence, catégorie ou type de véhicule." }, { title:"Identifier le client", description:"Créer ou retrouver le client dans Odoo." }, { title:"Valider la disponibilité", description:"Contrôler les véhicules disponibles dans Odoo." }, { title:"Confirmer", description:"Créer la réservation et envoyer un email avec lien de check-in." }]} />;
}

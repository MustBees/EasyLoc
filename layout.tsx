import { ModulePage } from "@/components/home/module-page";
export default function ChooseCarPage() {
  return <ModulePage title="Choisis ta voiture" description="Ce module présentera la flotte, les filtres, les fiches détaillées et la connexion à Odoo pour la disponibilité." nextAction="Définir le catalogue véhicule" nextHref="/" workflow={[{ title:"Lister les véhicules", description:"Lire les produits ou véhicules depuis Odoo." }, { title:"Filtrer", description:"Trier par catégorie, prix, boîte de vitesse, carburant, agence." }, { title:"Afficher la fiche", description:"Photos, conditions, tarif et disponibilité." }, { title:"Réserver", description:"Basculer vers le workflow de réservation." }]} />;
}

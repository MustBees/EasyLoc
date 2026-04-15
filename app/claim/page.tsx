import { ModulePage } from "@/components/home/module-page";
export default function ClaimPage() {
  return <ModulePage title="Gestion de ton sinistre" description="Ce module servira à déclarer un sinistre, transmettre les pièces et suivre l’avancement du dossier." nextAction="Définir le workflow sinistre" nextHref="/" workflow={[{ title:"Identifier le dossier", description:"Numéro de réservation, véhicule, conducteur." }, { title:"Décrire l’incident", description:"Date, lieu, circonstances, parties impliquées." }, { title:"Joindre des éléments", description:"Photos, constat, documents d’assurance." }, { title:"Créer et suivre", description:"Créer le dossier dans Odoo et donner un lien de suivi." }]} />;
}

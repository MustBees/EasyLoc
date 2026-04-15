import { ModulePage } from "@/components/home/module-page";
export default function TransportPage() {
  return <ModulePage title="Besoin d’un transport" description="Ce module prendra les demandes de transport, transferts ou convoyage, puis les enregistrera dans Odoo." nextAction="Définir le workflow transport" nextHref="/" workflow={[{ title:"Saisir le trajet", description:"Adresse de départ, destination, date, heure." }, { title:"Qualifier le besoin", description:"Nombre de personnes, bagages, remarques." }, { title:"Créer la demande", description:"Enregistrer le dossier dans Odoo." }, { title:"Notifier le client", description:"Envoyer un email de confirmation et de suivi." }]} />;
}

import Link from "next/link";
import { ModuleCards } from "@/components/ModuleCards";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="kicker">EasyLoc</div>
          <h1>Réservez, gérez et suivez vos services de mobilité.</h1>
          <p>
            Une plateforme simple avec 4 modules : location de véhicule, choix de la voiture,
            demande de transport et gestion de sinistre.
          </p>
          <div className="hero-actions">
            <Link href="/rent" className="button button-primary">
              Loue une voiture
            </Link>
            <Link href="#modules" className="button button-secondary">
              Voir les modules
            </Link>
          </div>
        </div>
      </section>

      <section id="modules" className="container section">
        <ModuleCards />
      </section>

      <footer className="container footer">Version démo EasyLoc.</footer>
    </main>
  );
}

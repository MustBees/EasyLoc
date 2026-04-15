import Link from "next/link";
import { ModuleCards } from "@/components/ModuleCards";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="kicker">EasyLoc • mobilité premium</div>
            <h1>
              Réservez votre véhicule avec une expérience <span className="hero-highlight">rapide, claire et moderne</span>.
            </h1>
            <p>
              Une plateforme pensée pour aller vite : location, choix du véhicule, transport et gestion de sinistre,
              dans une interface plus premium et plus rassurante pour le client.
            </p>
            <div className="hero-actions">
              <Link href="/rent" className="button button-primary">
                Découvrir la location
              </Link>
              <Link href="#modules" className="button button-secondary">
                Voir les 4 modules
              </Link>
            </div>
          </div>

          <aside className="hero-panel">
            <h2>Une démo qui fait plus “vrai produit”</h2>
            <p>
              Design plus impactant, contraste plus fort, couleurs orange inspirées d’EasyJet et effets au survol pour donner plus de vie aux actions.
            </p>
            <ul>
              <li>4 modules visibles immédiatement</li>
              <li>Boutons avec effet lumineux au hover</li>
              <li>Cartes avec relief et mouvement</li>
              <li>Univers orange, blanc et noir plus premium</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="modules" className="container section">
        <ModuleCards />
      </section>

      <footer className="container footer">EasyLoc • version démo visuelle</footer>
    </main>
  );
}

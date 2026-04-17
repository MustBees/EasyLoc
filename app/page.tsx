import { ModuleCards } from "@/components/ModuleCards";
import { ScrollHero } from "@/components/ScrollHero";

export default function HomePage() {
  return (
    <>
      <ScrollHero />
      <main className="home-after-hero">
        <section id="modules" className="container section modules-entry">
          <div className="modules-headline">
            <span className="kicker">Services</span>
            <h2>Choisissez votre parcours.</h2>
          </div>
          <ModuleCards />
        </section>
      </main>
    </>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ModuleCards } from "@/components/ModuleCards";
import { IntroScreen } from "@/components/IntroScreen";

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);
  const [revealMain, setRevealMain] = useState(false);

  useEffect(() => {
    const introTimer = window.setTimeout(() => {
      setShowIntro(false);
      window.setTimeout(() => setRevealMain(true), 140);
    }, 2800);

    return () => window.clearTimeout(introTimer);
  }, []);

  return (
    <>
      {showIntro && <IntroScreen />}

      <main className={revealMain || !showIntro ? "main-reveal visible" : "main-reveal"}>
        <section className="hero hero-home">
          <div className="container hero-home-inner">
            <div className="hero-home-panel">
              <div className="kicker">EasyLoc</div>
              <h1>Choisissez votre service.</h1>
              <p>Location, choix du véhicule, transport et gestion de sinistre.</p>
              <div className="hero-actions">
                <Link href="#modules" className="button button-primary">
                  Entrer
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="modules" className="container section">
          <ModuleCards />
        </section>
      </main>
    </>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export function ScrollHero() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 1.2;
      const nextProgress = Math.min(window.scrollY / heroHeight, 1);
      setProgress(nextProgress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const styles = useMemo(() => {
    const scale = 1 + progress * 0.28;
    const imageY = progress * -70;
    const overlayOpacity = Math.max(1 - progress * 1.45, 0);
    const overlayY = progress * -80;
    const vignetteOpacity = 0.5 + progress * 0.25;

    return {
      media: {
        transform: `scale(${scale}) translateY(${imageY}px)`,
      },
      overlay: {
        opacity: overlayOpacity,
        transform: `translateY(${overlayY}px) scale(${1 - progress * 0.04})`,
      },
      glow: {
        opacity: Math.max(0.55 - progress * 0.4, 0.12),
      },
      vignette: {
        opacity: vignetteOpacity,
      },
      scroll: {
        opacity: Math.max(1 - progress * 2.2, 0),
      },
    };
  }, [progress]);

  return (
    <section className="scroll-hero-shell">
      <div className="scroll-hero-sticky">
        <div className="scroll-hero-media" style={styles.media}>
          <Image
            src="/race-hero.svg"
            alt="Voiture de course"
            fill
            priority
            className="scroll-hero-image"
          />
        </div>

        <div className="scroll-hero-vignette" style={styles.vignette} />
        <div className="scroll-hero-glow" style={styles.glow} />

        <div className="scroll-hero-overlay" style={styles.overlay}>
          <div className="scroll-hero-logo">
            <Image src="/logo.jpg" alt="EasyLoc" width={900} height={237} priority />
          </div>
          <div className="scroll-hero-copy">
            <span className="scroll-hero-kicker">EasyLoc</span>
            <h1>La mobilité entre en scène.</h1>
            <p>Défilez pour entrer.</p>
          </div>
        </div>

        <div className="scroll-indicator" style={styles.scroll}>
          <span />
        </div>
      </div>
    </section>
  );
}

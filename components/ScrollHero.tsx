"use client";

import { useEffect, useMemo, useState } from "react";

export function ScrollHero() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 1.18;
      const nextProgress = Math.min(window.scrollY / heroHeight, 1);
      setProgress(nextProgress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const styles = useMemo(() => {
    const scale = 1 + progress * 0.18;
    const imageY = progress * -48;
    const overlayOpacity = Math.max(1 - progress * 1.22, 0);
    const overlayY = progress * -54;
    const overlayScale = 1 - progress * 0.02;

    return {
      media: {
        transform: `scale(${scale}) translateY(${imageY}px)`,
      },
      overlay: {
        opacity: overlayOpacity,
        transform: `translateY(${overlayY}px) scale(${overlayScale})`,
      },
      line: {
        width: `${160 + progress * 120}px`,
        opacity: Math.max(1 - progress * 1.1, 0.15),
      },
      vignette: {
        opacity: 0.62 + progress * 0.16,
      },
      glow: {
        opacity: Math.max(0.5 - progress * 0.32, 0.16),
      },
      scroll: {
        opacity: Math.max(1 - progress * 2, 0),
        transform: `translateY(${progress * 16}px)`,
      },
    };
  }, [progress]);

  return (
    <section className="scroll-hero-shell luxe-hero-shell">
      <div className="scroll-hero-sticky luxe-hero-sticky">
        <div className="scroll-hero-media scroll-hero-video-wrap luxe-hero-media" style={styles.media}>
          <video
            className="scroll-hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/race-poster.jpg"
          >
            <source src="/race-hero.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="scroll-hero-vignette luxe-vignette" style={styles.vignette} />
        <div className="scroll-hero-glow luxe-glow" style={styles.glow} />
        <div className="luxe-grain" />
        <div className="luxe-frame" />

        <div className="scroll-hero-overlay luxe-overlay" style={styles.overlay}>
          <div className="luxe-line" style={styles.line} />
          <div className="scroll-hero-copy luxe-copy">
            <span className="scroll-hero-kicker luxe-kicker">EASYLOC EXPERIENCE</span>
            <h1>Entrez dans une expérience de mobilité plus rare.</h1>
            <p>Défilez. Choisissez. Réservez. Prenez la route.</p>
          </div>
        </div>

        <div className="scroll-indicator luxe-scroll-indicator" style={styles.scroll}>
          <span />
        </div>
      </div>
    </section>
  );
}

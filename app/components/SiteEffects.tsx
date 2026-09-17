"use client";

import { useEffect } from "react";

/**
 * Client-side behaviors for the homepage:
 * scroll reveals and the hero art parallax on fine pointers.
 */
export default function SiteEffects() {
  useEffect(() => {
    /* =======================================================
       SCROLL REVEALS
       ======================================================= */
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".reveal")
      .forEach((element) => revealObserver.observe(element));

    /* =======================================================
       REDUCED MOTION
       ======================================================= */
    const reduceMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reduceMotionQuery.matches) {
      document.querySelectorAll(".reveal").forEach((element) => {
        element.classList.add("visible");
      });
    }

    /* =======================================================
       HERO ART PARALLAX
       ======================================================= */
    const heroArt = document.querySelector<HTMLElement>(".hero-art-frame");

    const finePointer = window.matchMedia("(pointer:fine)");

    const onMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 10;
      const y = (event.clientY / window.innerHeight - 0.5) * 10;

      if (heroArt) {
        heroArt.style.transform = `rotate(1.2deg) translate(${x}px, ${y}px)`;
      }
    };

    if (finePointer.matches && !reduceMotionQuery.matches) {
      window.addEventListener("mousemove", onMouseMove, { passive: true });
    }

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return null;
}

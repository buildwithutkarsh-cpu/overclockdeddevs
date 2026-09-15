"use client";

import { useEffect } from "react";

/**
 * Ports the vanilla-JS behaviors from the original static site:
 * scroll reveals, hero/sun/orbit parallax and offset smooth scrolling
 * for internal anchor links.
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
      { threshold: 0.12 }
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
       HERO / SUN / ORBIT PARALLAX
       ======================================================= */
    const heroWord = document.querySelector<HTMLElement>(".hero-bg-word");
    const sun = document.querySelector<HTMLElement>(".sun");
    const orbit = document.querySelector<HTMLElement>(".collab-orbit");

    const finePointer = window.matchMedia("(pointer:fine)");

    const onMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      /* Hero background */
      if (heroWord) {
        heroWord.style.transform = `translateY(
          calc(-50% + ${y * 25}px)
        )
        translateX(${x * 25}px)
        rotate(-90deg)`;
      }

      /* Falling Sun */
      if (sun) {
        sun.style.marginLeft = `${x * 14}px`;
        sun.style.marginTop = `${y * 14}px`;
      }

      /* Collaboration orbit */
      if (orbit) {
        orbit.style.transform = `translate(
          ${x * 20}px,
          ${y * 20}px
        )`;
      }
    };

    if (finePointer.matches && !reduceMotionQuery.matches) {
      window.addEventListener("mousemove", onMouseMove, { passive: true });
    }

    /* =======================================================
       INTERNAL LINKS
       ======================================================= */
    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest("a");

      if (!link) return;

      const targetID = link.getAttribute("href");

      if (!targetID || targetID === "#" || targetID.length < 2) return;

      if (!targetID.startsWith("#")) return;

      const target = document.querySelector(targetID);

      if (!target) return;

      event.preventDefault();

      const offset = 78;

      const position =
        target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: position,
        behavior: reduceMotionQuery.matches ? "auto" : "smooth",
      });
    };

    document.addEventListener("click", onClick);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}

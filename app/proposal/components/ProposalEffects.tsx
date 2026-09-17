"use client";

import { useEffect } from "react";

/**
 * Lightweight client-side effects for the proposal page:
 * - IntersectionObserver scroll reveals
 * - number counters for [data-count] elements
 * - pointer parallax on [data-parallax] elements
 * - offset smooth scrolling for internal anchors
 * All respect prefers-reduced-motion.
 */
export default function ProposalEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    /* ---------------------------------------------------------
       SCROLL REVEALS
       --------------------------------------------------------- */
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
      .querySelectorAll(".p-reveal")
      .forEach((el) => revealObserver.observe(el));

    if (reduceMotion) {
      document
        .querySelectorAll(".p-reveal")
        .forEach((el) => el.classList.add("visible"));
    }

    /* ---------------------------------------------------------
       NUMBER COUNTERS
       --------------------------------------------------------- */
    const counters = new Map<HTMLElement, number>();

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target as HTMLElement;
          const target = Number(el.dataset.count || "0");
          const suffix = el.dataset.suffix || "";

          counterObserver.unobserve(el);

          if (reduceMotion) {
            el.textContent = `${target}${suffix}`;
            return;
          }

          const duration = 1400;
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.round(target * eased);

            el.textContent = `${value}${suffix}`;

            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );

    document
      .querySelectorAll<HTMLElement>("[data-count]")
      .forEach((el) => {
        counters.set(el, 0);
        counterObserver.observe(el);
      });

    /* ---------------------------------------------------------
       POINTER PARALLAX
       --------------------------------------------------------- */
    const parallaxLayers = document.querySelectorAll<HTMLElement>(
      "[data-parallax]"
    );

    const finePointer = window.matchMedia("(pointer:fine)").matches;

    const onMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      parallaxLayers.forEach((layer) => {
        const depth = Number(layer.dataset.parallax || "0");

        layer.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      });
    };

    if (finePointer && !reduceMotion && parallaxLayers.length > 0) {
      window.addEventListener("mousemove", onMouseMove, { passive: true });
    }

    /* ---------------------------------------------------------
       OFFSET SMOOTH SCROLLING FOR INTERNAL ANCHORS
       --------------------------------------------------------- */
    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest("a");

      if (!link) return;

      const href = link.getAttribute("href");

      if (!href || !href.startsWith("#") || href.length < 2) return;

      const target = document.querySelector(href);

      if (!target) return;

      event.preventDefault();

      const offset = 70;

      const top =
        target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    };

    document.addEventListener("click", onClick);

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
      counters.clear();
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}

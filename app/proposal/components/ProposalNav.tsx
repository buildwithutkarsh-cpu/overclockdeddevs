"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/OCd-logo.png";

const LINKS = [
  { href: "#the-idea", label: "THE IDEA" },
  { href: "#the-reach", label: "REACH" },
  { href: "#the-events", label: "EVENTS" },
  { href: "#partner", label: "PARTNER" },
];

export default function ProposalNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
  }, [open]);

  return (
    <>
      <header
        className={`p-nav${scrolled ? " scrolled" : " on-yellow"}`}
        id="p-nav"
      >
        <div className="p-nav-inner">
          <a href="#p-top" className="p-nav-brand" aria-label="OCd home">
            <Image
              src={logo}
              alt="OCd — OverclockedDevs logo"
              className="p-nav-logo"
              priority
            />
            <div className="p-nav-word">
              OCd
              <span>PROPOSAL / 2026</span>
            </div>
          </a>

          <nav className="p-nav-links" aria-label="Proposal navigation">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href="#p-partner" className="p-nav-cta">
              PARTNER WITH OCd →
            </a>
          </nav>

          <button
            className="p-nav-menu-btn"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </header>

      <div className={`p-mobile-menu${open ? " open" : ""}`}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#p-partner" onClick={() => setOpen(false)}>
          PARTNER WITH OCd
        </a>
      </div>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/OCd-logo.png";

const NAV_LINKS = [
  { href: "#system", label: "SYSTEM" },
  { href: "#events", label: "EVENTS" },
  { href: "#archive", label: "ARCHIVE" },
  { href: "#impact", label: "IMPACT" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const updateNav = () => setScrolled(window.scrollY > 40);

    updateNav();

    window.addEventListener("scroll", updateNav, { passive: true });

    return () => window.removeEventListener("scroll", updateNav);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <div className="nav-inner">
          <a href="#top" className="nav-brand" aria-label="OCd home">
            <Image src={logo} alt="OCd" className="nav-logo" priority />
            <div className="nav-wordmark">
              <span>OVER</span>
              <span>CLOCKED</span>
            </div>
          </a>

          <nav className="nav-links">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href="#collaborate" className="nav-cta">
              WORK WITH OCd →
            </a>
          </nav>

          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </header>

      <div className={`mobile-menu${open ? " open" : ""}`} id="mobileMenu">
        <a href="#system" onClick={closeMenu}>
          SYSTEM
        </a>
        <a href="#events" onClick={closeMenu}>
          EVENTS
        </a>
        <a href="#archive" onClick={closeMenu}>
          ARCHIVE
        </a>
        <a href="#impact" onClick={closeMenu}>
          IMPACT
        </a>
        <a href="#collaborate" onClick={closeMenu}>
          COLLAB
        </a>
      </div>
    </>
  );
}

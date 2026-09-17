import Image from "next/image";
import logo from "../../../public/OCd-logo.png";

export default function ProposalHero() {
  return (
    <section className="p-hero" id="p-top">
      {/* Top metadata strip */}
      <div className="p-hero-top">
        <div className="p-hero-meta">
          <span>OCd / PARTNER PROPOSAL</span>
          <span className="p-hero-coords">SYS.01 — SPONSORSHIP DECK</span>
        </div>

        <div className="p-hero-tagline">BUILD. BREAK. FORK. FIX.</div>

        <div className="p-hero-coords">DELHI NCR · INDIA · EST. 2026</div>
      </div>

      {/* Main composition: logo + statement */}
      <div className="p-hero-main">
        <div
          className="p-hero-logo"
          data-parallax="14"
          aria-hidden="false"
        >
          <span className="p-hero-logo-tag">FIG. 00 — THE MARK</span>
          <span className="p-hero-logo-frame" aria-hidden="true" />
          <Image
            src={logo}
            alt="OCd — OverclockedDevs logo"
            priority
            sizes="(max-width: 700px) 40vw, 24vw"
          />
        </div>

        <div>
          <h1 className="p-hero-title">
            <span className="p-reveal">BUILD</span>
            <br />
            <span className="p-reveal p-delay-1">THE</span>
            <br />
            <span className="p-reveal p-delay-2">NEXT</span>
            <br />
            <span className="p-reveal p-delay-3">
              <span className="stroke">GENERATION.</span>
            </span>
          </h1>

          <p className="p-hero-sub p-reveal p-delay-3">
            <strong>OCd</strong> creates spaces for young builders to
            experiment, collaborate and ship.
          </p>

          <div className="p-hero-actions p-reveal p-delay-4">
            <a href="#p-partner" className="p-btn primary">
              <span>PARTNER WITH OCd →</span>
            </a>
            <a href="#the-idea" className="p-btn">
              <span>EXPLORE OCd ↓</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="p-hero-scroll">
        <span>SCROLL ↓</span>
        <span>28.6139° N / 77.2090° E</span>
      </div>
    </section>
  );
}

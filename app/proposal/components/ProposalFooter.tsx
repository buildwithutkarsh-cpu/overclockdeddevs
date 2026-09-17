import Image from "next/image";
import logo from "../../../public/OCd-logo.png";

export default function ProposalFooter() {
  return (
    <footer className="p-footer">
      <div className="p-container">
        <div className="p-footer-top">
          {/* BRAND */}
          <div>
            <div className="p-footer-brand">
              <Image
                src={logo}
                alt="OCd — OverclockedDevs logo"
                className="p-footer-logo"
              />

              <div className="p-footer-name">
                OCd
                <span>OVERCLOCKEDDEVS</span>
              </div>
            </div>

            <div className="p-footer-tagline">BUILD. BREAK. FORK. FIX.</div>

            <div className="p-footer-meta">
              Delhi NCR, India · EST. 2026
            </div>
          </div>

          {/* LINKS */}
          <div>
            <div className="p-footer-column-title">SITE</div>

            <div className="p-footer-links">
              <a href="/">OCd HOME</a>
              <a href="/#events">EVENTS</a>
              <a
                href="https://sprintandspawn.xyz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SPRINT &amp; SPAWN ↗
              </a>
            </div>
          </div>

          {/* PROPOSAL NAV */}
          <div>
            <div className="p-footer-column-title">PROPOSAL</div>

            <div className="p-footer-links">
              <a href="#the-idea">THE IDEA</a>
              <a href="#the-reach">REACH</a>
              <a href="#the-events">EVENTS</a>
              <a href="#p-partner">PARTNER</a>
            </div>
          </div>
        </div>

        <div className="p-footer-bottom">
          <span>© 2026 OverclockedDevs</span>
          <span className="tagline">BUILD. BREAK. FORK. FIX.</span>
        </div>
      </div>
    </footer>
  );
}

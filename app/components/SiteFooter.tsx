import Image from "next/image";
import logo from "../../public/OCd-logo.png";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* BRAND */}
          <div>
            <div className="footer-brand">
              <Image src={logo} alt="OCd" className="footer-logo" />

              <div className="footer-name">
                OVER
                <br />
                CLOCKED
                <br />
                <span className="red">DEVS</span>
              </div>
            </div>

            <p className="footer-description">
              OverclockedDevs is a Delhi NCR hackathon organization creating
              high-energy spaces for students to build, experiment and ship.
            </p>
          </div>

          {/* EXPLORE */}
          <div>
            <div className="footer-column-title">EXPLORE</div>

            <div className="footer-links">
              <a href="#system">System</a>
              <a href="#events">Events</a>
              <a href="#archive">Archive</a>
              <a href="#impact">Impact</a>
              <a href="/proposal">Partner Proposal</a>
            </div>
          </div>

          {/* CONNECT */}
          <div>
            <div className="footer-column-title">CONNECT</div>

            <div className="footer-links">
              {/* Replace # with real links */}
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">Discord</a>
              <a href="mailto:hello@overclockeddevs.com">Email</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>OVERCLOCKEDDEVS · OCd</span>
          <span>DELHI NCR · INDIA · 2026</span>
          <span className="footer-tagline">BUILD. BREAK. FORK. FIX.</span>
        </div>
      </div>
    </footer>
  );
}

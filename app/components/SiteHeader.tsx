import Image from "next/image";
import logo from "../../public/OCd-logo.png";

const NAV_LINKS = [
  { href: "#about", label: "ABOUT" },
  { href: "#events", label: "EVENTS" },
  { href: "#archive", label: "ARCHIVE" },
  { href: "#contact", label: "CONTACT" },
];

export default function SiteHeader() {
  return (
    <nav className="site-nav">
      <a href="/" className="brand" aria-label="OCd home">
        <Image src={logo} alt="OCd" className="brand-logo" priority />

        <span className="brand-text">OVERCLOCKEDDEVS</span>
      </a>

      <div className="nav-links">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}

        <a href="/proposal" className="nav-button">
          WORK WITH OCd →
        </a>
      </div>
    </nav>
  );
}

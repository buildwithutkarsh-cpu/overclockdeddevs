import Image from "next/image";
import spsLogo from "../../../public/sps.png";

const PARTNERS = ["Fueler", "Coding Mafia", "gen.xyz", "CodeCrafters"];

const NUMBERS = [
  { value: "270", label: "APPLICATIONS", cls: "" },
  { value: "150", label: "SELECTED / ATTENDED VENUE", cls: "yellow" },
  { value: "12", label: "HOURS", cls: "red" },
  { value: "300+", label: "STUDENT REACH", cls: "yellow" },
];

export default function TrackRecordSection() {
  return (
    <section className="p-section p-proof" id="proof">
      <div className="p-container">
        <div className="p-label p-reveal">08 / PROOF</div>

        <div className="p-proof-head">
          <h2 className="p-proof-title p-reveal p-delay-1">
            WE&apos;VE ALREADY
            <br />
            STARTED.
          </h2>

          <p className="p-proof-note p-reveal p-delay-2">
            Sprint &amp; Spawn was OCd&apos;s first hackathon — planned, filled
            and run with partners. Here&apos;s how it went.
          </p>
        </div>

        <article className="p-proof-card p-reveal">
          <div className="p-proof-visual">
            <Image
              src={spsLogo}
              alt="Sprint & Spawn event logo"
              className="p-proof-logo"
              sizes="(max-width: 1050px) 100vw, 50vw"
            />
          </div>

          <div className="p-proof-copy">
            <div>
              <div className="p-proof-label">PAST EVENT / 001</div>

              <h3 className="p-proof-event-name">
                SPRINT
                <br />
                &amp;
                <br />
                SPAWN.
              </h3>

              <p className="p-proof-desc">
                A <strong>12-hour high-octane hackathon</strong> focused on
                Game Dev and Web Dev. Free to participate — built for people
                who wanted to stop thinking and start shipping.
              </p>

              <p className="p-proof-desc">
                6 September 2026 · PW NSP Pitampura · Delhi NCR
              </p>
            </div>

            <div>
              <div className="p-proof-partners-label">
                SPRINT &amp; SPAWN PARTNERS
              </div>

              <div className="p-proof-partners">
                {PARTNERS.map((partner) => (
                  <span className="p-proof-partner" key={partner}>
                    {partner}
                  </span>
                ))}
              </div>

              <div className="p-proof-cta">
                <a
                  href="https://sprintandspawn.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-btn yellow"
                >
                  <span>VISIT SPRINT &amp; SPAWN ↗</span>
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Proof numbers */}
        <div className="p-proof-numbers">
          {NUMBERS.map((item) => (
            <div
              className={`p-proof-number ${item.cls ? `num-${item.cls}` : ""}`}
              key={item.label}
            >
              <div className="num">{item.value}</div>
              <span className="label">{item.label}</span>
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: 22,
            fontSize: 11,
            letterSpacing: ".05em",
            color: "var(--gray)",
            textTransform: "uppercase",
          }}
        >
          Sprint &amp; Spawn partners listed above are partners of that event.
          OCd partnerships are discussed per event.
        </p>
      </div>
    </section>
  );
}

const MARQUEE_WORDS = [
  "BUILDERS",
  "DEVELOPERS",
  "DESIGNERS",
  "MAKERS",
  "CREATORS",
  "EXPERIMENTERS",
];

const ROLES = [
  "STUDENTS",
  "DEVELOPERS",
  "DESIGNERS",
  "GAME DEVELOPERS",
  "HARDWARE BUILDERS",
  "AI ENTHUSIASTS",
  "CREATIVE TECHNOLOGISTS",
  "YOUNG MAKERS",
  "HACKATHON PARTICIPANTS",
];

export default function AudienceSection() {
  return (
    <section className="p-section p-audience" id="the-audience">
      <div className="p-container">
        <div className="p-label p-reveal">04 / THE AUDIENCE</div>

        <div className="p-audience-head">
          <h2 className="p-audience-title p-reveal p-delay-1">
            THE PEOPLE
            <br />
            WHO BUILD
            <br />
            <span className="outline">TOMORROW.</span>
          </h2>

          <p className="p-audience-copy p-reveal p-delay-2">
            OCd events put you in the same room as the students who stay up
            late shipping side projects — the ones who test, tinker and try
            everything first.
          </p>
        </div>
      </div>

      {/* Giant typographic marquee */}
      <div className="p-audience-marquee" aria-hidden="true">
        <div className="p-audience-track">
          {[0, 1].map((copy) => (
            <div className="p-audience-group" key={copy} style={{ display: "flex" }}>
              {MARQUEE_WORDS.map((word) => (
                <div className="p-audience-chip" key={`${copy}-${word}`}>
                  {word} <span>✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="p-container">
        <div className="p-audience-roles p-reveal">
          {ROLES.map((role) => (
            <span className="p-audience-role" key={role}>
              {role}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

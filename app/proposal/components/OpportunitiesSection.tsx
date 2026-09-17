const OPPORTUNITIES = [
  {
    name: "EVENT PARTNER",
    desc: "Support an OCd hackathon and become part of the event experience.",
  },
  {
    name: "TECH PARTNER",
    desc: "Put your tools, APIs or developer products directly into builders' hands.",
  },
  {
    name: "PRIZE PARTNER",
    desc: "Power prizes that motivate participants to ship ambitious projects.",
  },
  {
    name: "WORKSHOP PARTNER",
    desc: "Bring technical knowledge directly to student builders.",
  },
  {
    name: "MENTORSHIP PARTNER",
    desc: "Connect industry professionals with participants.",
  },
  {
    name: "COMMUNITY PARTNER",
    desc: "Help expand access to student builders across Delhi NCR.",
  },
  {
    name: "CUSTOM ACTIVATION",
    desc: "Have something else in mind? Create something unique together.",
  },
];

export default function OpportunitiesSection() {
  return (
    <section className="p-section p-opps" id="opportunities">
      <div className="p-container">
        <div className="p-label p-reveal">06 / OPPORTUNITIES</div>

        <div className="p-opps-head">
          <h2 className="p-opps-title p-reveal p-delay-1">
            YOUR BRAND.
            <br />
            <span>OUR BUILDERS.</span>
          </h2>

          <p className="p-opps-note p-reveal p-delay-2">
            No fixed tiers. No menu pricing. Every partnership is shaped with
            you, depending on the event, the scope and what your brand wants
            to achieve.
          </p>
        </div>

        <div className="p-opps-list">
          {OPPORTUNITIES.map((opp, index) => (
            <article
              className={`p-opp p-reveal p-delay-${index % 3}`}
              key={opp.name}
            >
              <div className="p-opp-top">
                <h3 className="p-opp-name">{opp.name}</h3>
                <span className="p-opp-num">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="p-opp-desc">{opp.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

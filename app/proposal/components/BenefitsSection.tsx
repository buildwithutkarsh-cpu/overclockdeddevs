const BENEFITS = [
  {
    name: "LOGO PLACEMENT",
    desc: "Brand presence across relevant event materials, depending on partnership scope.",
  },
  {
    name: "SOCIAL VISIBILITY",
    desc: "Promotion through relevant OCd event communications.",
  },
  {
    name: "ON-GROUND BRANDING",
    desc: "Physical presence at participating events where applicable.",
  },
  {
    name: "WORKSHOPS",
    desc: "Opportunities to educate and engage builders directly.",
  },
  {
    name: "MENTORSHIP",
    desc: "Connect your team with participants during events.",
  },
  {
    name: "PRIZES",
    desc: "Recognition associated with supporting project outcomes.",
  },
  {
    name: "PRODUCT / API INTEGRATION",
    desc: "Opportunities for developers to experience your technology.",
  },
  {
    name: "TALENT DISCOVERY",
    desc: "Meet promising young builders through OCd events.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="p-section p-benefits" id="the-exchange">
      <div className="p-container">
        <div className="p-label p-reveal">07 / THE EXCHANGE</div>

        <div className="p-benefits-head">
          <h2 className="p-benefits-title p-reveal p-delay-1">
            YOU BRING
            <br />
            SUPPORT.
            <br />
            <span className="outline">WE BUILD THE EXPERIENCE.</span>
          </h2>

          <p className="p-benefits-copy p-reveal p-delay-2">
            Depending on the partnership scope, brands can access a mix of the
            below — nothing here is automatic, everything is discussable.
          </p>
        </div>

        <div className="p-benefits-grid">
          {BENEFITS.map((benefit, index) => (
            <article
              className={`p-benefit p-reveal p-delay-${index % 4}`}
              key={benefit.name}
            >
              <h3 className="p-benefit-name">{benefit.name}</h3>
              <p className="p-benefit-desc">{benefit.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

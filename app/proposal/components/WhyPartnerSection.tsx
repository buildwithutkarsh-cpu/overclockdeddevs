const CARDS = [
  {
    num: "01",
    word: "VISIBILITY",
    desc: "Put your brand inside high-energy rooms full of students who build.",
  },
  {
    num: "02",
    word: "ENGAGEMENT",
    desc: "Run challenges, workshops and activations — not just banner ads.",
  },
  {
    num: "03",
    word: "EXPERIENCE",
    desc: "Give builders hands-on time with your product, tools or APIs.",
  },
  {
    num: "04",
    word: "TALENT",
    desc: "Meet the students who ship before they graduate.",
  },
];

export default function WhyPartnerSection() {
  return (
    <section className="p-section p-why" id="why-partner">
      <div className="p-container">
        <div className="p-label p-reveal">05 / WHY PARTNER</div>

        <div className="p-why-head">
          <h2 className="p-why-title p-reveal p-delay-1">
            DON&apos;T JUST REACH
            <br />
            STUDENTS.
            <br />
            <span className="outline">BUILD WITH THEM.</span>
          </h2>

          <p className="p-why-note p-reveal p-delay-2">
            Possibilities vary with partnership scope — the formats below show
            where a brand can plug into the OCd system.
          </p>
        </div>

        <div className="p-why-grid">
          {CARDS.map((card, index) => (
            <article
              className={`p-why-card p-reveal p-delay-${index + 1}`}
              key={card.num}
            >
              <span className="p-why-num">{card.num}</span>

              <div>
                <div className="p-why-word">{card.word}</div>
                <p className="p-why-desc">{card.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

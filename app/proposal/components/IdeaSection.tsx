const CELLS = [
  {
    num: "01",
    word: "BUILD",
    desc: "Create something from nothing.",
  },
  {
    num: "02",
    word: "BREAK",
    desc: "Experiment. Challenge assumptions.",
  },
  {
    num: "03",
    word: "FORK",
    desc: "Take ideas somewhere unexpected.",
  },
  {
    num: "04",
    word: "FIX",
    desc: "Learn, iterate and ship.",
  },
];

export default function IdeaSection() {
  return (
    <section className="p-section p-idea" id="the-idea">
      <div className="p-container">
        <div className="p-label p-reveal">01 / THE IDEA</div>

        <div className="p-idea-head">
          <h2 className="p-idea-title p-reveal p-delay-1">
            NOT JUST
            <br />
            <span className="outline">EVENTS.</span>
            <br />
            A REASON
            <br />
            TO BUILD.
          </h2>

          <p className="p-idea-copy p-reveal p-delay-2">
            <strong>OverclockedDevs</strong> is a Delhi NCR student-led
            hackathon organization creating spaces where young builders can
            turn ideas into working projects. No gatekeeping. No boring
            seminars. Just the tools, the people and the room to make things
            happen.
          </p>
        </div>

        <div className="p-idea-grid">
          {CELLS.map((cell, index) => (
            <article
              className={`p-idea-cell p-reveal p-delay-${index + 1}`}
              key={cell.num}
            >
              <span className="p-idea-num">{cell.num}</span>
              <p className="p-idea-desc">{cell.desc}</p>
              <div className="p-idea-word">{cell.word}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

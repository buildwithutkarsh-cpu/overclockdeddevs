export default function StatementSection() {
  return (
    <section className="p-statement" id="statement">
      <div className="p-container">
        <div className="p-statement-small p-reveal">THAT&apos;S THE POINT.</div>

        <h2 className="p-statement-title p-reveal p-delay-1">
          GIVE PEOPLE
          <br />
          A REASON
          <br />
          <span className="outline">TO BUILD.</span>
        </h2>

        <p className="p-statement-copy p-reveal p-delay-2">
          Partner with OCd to create experiences that put young builders at
          the center.
        </p>

        <div className="p-statement-cta p-reveal p-delay-3">
          <a href="#p-partner" className="p-btn yellow">
            <span>LET&apos;S BUILD TOGETHER →</span>
          </a>
        </div>
      </div>

      <div className="p-statement-decoration" aria-hidden="true">
        OCd
      </div>
    </section>
  );
}

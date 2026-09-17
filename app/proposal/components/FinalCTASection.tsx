export default function FinalCTASection() {
  return (
    <section className="p-final" id="p-partner">
      <div className="p-container">
        <div className="p-label p-reveal">09 / LET&apos;S TALK</div>

        <h2 className="p-final-title">
          <span className="p-reveal p-delay-1">BUILD</span>
          <br />
          <span className="p-reveal p-delay-2">WITH</span>
          <br />
          <span className="p-reveal p-delay-3 stroke">OCd.</span>
        </h2>

        <p className="p-final-copy p-reveal p-delay-3">
          Have a product, platform, idea or opportunity for student builders?
          Let&apos;s create something meaningful together.
        </p>

        <div className="p-final-actions p-reveal p-delay-4">
          <a
            href="mailto:hello@overclockeddevs.com"
            className="p-btn primary"
          >
            <span>PARTNER WITH OCd →</span>
          </a>

          <a href="/" className="p-btn yellow">
            <span>BACK TO OCd →</span>
          </a>
        </div>

        <p className="p-final-note p-reveal p-delay-4">
          hello@overclockeddevs.com
        </p>
      </div>

      <div className="p-final-orbit" aria-hidden="true" />
    </section>
  );
}

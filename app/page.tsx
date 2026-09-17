import Image from "next/image";
import SiteEffects from "./components/SiteEffects";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* =======================================================
          HERO
          ======================================================= */}
      <header className="hero">
        <div className="hero-layout">
          {/* LEFT */}
          <div className="hero-left">
            <div className="hero-kicker">
              DELHI NCR · STUDENT BUILDERS · EST. 2026
            </div>

            <h1 className="hero-title">
              <span>BUILD.</span>
              <span className="blue">BREAK.</span>
              <span>FORK.</span>
              <span className="outline">FIX.</span>
            </h1>

            <div className="hero-bottom">
              <p className="hero-description">
                <strong>OCd — OverclockedDevs</strong> creates spaces where
                young builders experiment, collaborate and ship.
              </p>

              <a href="#events" className="hero-cta">
                EXPLORE EVENTS →
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-art-frame" id="heroArt">
            <div className="art-paper" />
            <div className="art-pink" />
            <div className="art-green" />
            <div className="art-yellow" />
            <div className="art-orange" />
            <div className="art-black" />
            <div className="art-star" />
            <div className="art-small-star" />
            <div className="art-scribble" />
            <div className="art-label">BUILD / BREAK / FORK / FIX</div>
          </div>
        </div>
      </header>

      {/* =======================================================
          MARQUEE
          ======================================================= */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 10 }, (_, i) => (
            <span key={i}>{["OCd", "BUILD", "BREAK", "FORK", "FIX"][i % 5]}</span>
          ))}
        </div>
      </div>

      {/* =======================================================
          ABOUT
          ======================================================= */}
      <section className="about reveal" id="about">
        <div className="container">
          <div className="section-label">01 · ABOUT OCd</div>

          <h2 className="about-title">
            WE MAKE <span className="blue">ROOM</span> FOR PEOPLE WHO WANT TO{" "}
            <span className="orange">MAKE.</span>
          </h2>

          <p className="about-copy">
            OCd is a Delhi NCR student-led hackathon organization creating
            spaces where young builders can experiment, collaborate and turn
            ideas into working projects.
          </p>
        </div>

        <div className="about-dot-field" aria-hidden="true" />
      </section>

      {/* =======================================================
          PILLARS
          ======================================================= */}
      <section className="pillars-wrap reveal">
        <div className="pillars">
          <article className="pillar">
            <div className="pillar-number">01 · BUILD</div>
            <h3>BUILD</h3>
            <p>
              Hackathons, experiments and projects that turn ideas into
              something real.
            </p>
            <div className="pillar-shape" aria-hidden="true" />
          </article>

          <article className="pillar">
            <div className="pillar-number">02 · BREAK</div>
            <h3>BREAK</h3>
            <p>
              Try weird ideas. Make mistakes. Learn by doing instead of
              waiting.
            </p>
            <div className="pillar-shape" aria-hidden="true" />
          </article>

          <article className="pillar">
            <div className="pillar-number">03 · FORK</div>
            <h3>FORK</h3>
            <p>
              Remix ideas, collaborate with people and take projects somewhere
              unexpected.
            </p>
            <div className="pillar-shape" aria-hidden="true" />
          </article>

          <article className="pillar">
            <div className="pillar-number">04 · FIX</div>
            <h3>FIX</h3>
            <p>
              Iterate, improve and ship again. Every project gets another
              version.
            </p>
            <div className="pillar-shape" aria-hidden="true" />
          </article>
        </div>
      </section>

      {/* =======================================================
          EVENTS
          ======================================================= */}
      <section className="events reveal" id="events">
        <div className="container">
          <div className="section-label">02 · EVENTS</div>

          <h2 className="events-title">
            PLACES TO <span>BUILD.</span>
          </h2>

          {/* FEATURED EVENT */}
          <article className="featured-event">
            <div className="featured-main">
              <div className="featured-date">
                OCTOBER 2026 · DELHI NCR
              </div>

              <div className="featured-name">
                FALLING
                <br />
                SUN
              </div>

              <div className="featured-description">
                India&apos;s under-19 retro-tech hackathon.
                <br />
                <br />
                Web Dev · Game Dev · Hardware
              </div>

              <div className="featured-orange" aria-hidden="true" />
            </div>

            <div className="featured-side">
              <div>
                <div className="side-label">UPCOMING HACKATHON</div>

                <p className="side-copy">
                  A student hackathon spanning Web Dev, Game Dev and Hardware.
                </p>
              </div>

              <div>
                <div className="side-meta">
                  <div>
                    <span>CAPACITY</span>
                    <strong>200</strong>
                  </div>

                  <div>
                    <span>REGISTRATION</span>
                    <strong>ONLINE</strong>
                  </div>

                  <div>
                    <span>FORMAT</span>
                    <strong>HACKATHON</strong>
                  </div>
                </div>

                {/* Replace # with the Falling Sun registration URL */}
                <a href="#" className="side-button">
                  EXPLORE FALLING SUN →
                </a>
              </div>
            </div>
          </article>

          {/* SECONDARY EVENTS */}
          <div className="secondary-events">
            <article className="secondary-event compile">
              <div>
                <div className="secondary-date">NOVEMBER 2026</div>

                <h3 className="secondary-name">
                  COMPILE
                  <br />
                  DELHI
                </h3>
              </div>

              <div className="secondary-meta">
                AGENTIC AI · CAPACITY 100
              </div>
            </article>

            <article className="secondary-event blueprint">
              <div>
                <div className="secondary-date">NOVEMBER 2026</div>

                <h3 className="secondary-name">
                  BLUEPRINT
                  <br />
                  DELHI
                </h3>
              </div>

              <div className="secondary-meta">
                CREATIVE WEB · CAPACITY 150
              </div>
            </article>
          </div>

          <p className="events-note">
            Online registrations are not capped. Attendees are selected based
            on venue capacity.
          </p>
        </div>
      </section>

      {/* =======================================================
          REACH
          ======================================================= */}
      <section className="reach reveal">
        <div className="container">
          <div className="section-label">03 · REACH</div>

          <div className="reach-grid">
            <article className="reach-item">
              <div className="reach-number">300+</div>
              <div className="reach-label">STUDENTS REACHED</div>
            </article>

            <article className="reach-item">
              <div className="reach-number">03</div>
              <div className="reach-label">UPCOMING EVENTS</div>
            </article>

            <article className="reach-item">
              <div className="reach-number">01</div>
              <div className="reach-label">GROWING ECOSYSTEM</div>
            </article>
          </div>
        </div>
      </section>

      {/* =======================================================
          ARCHIVE
          ======================================================= */}
      <section className="archive reveal" id="archive">
        <div className="container">
          <div className="archive-layout">
            <div>
              <div className="section-label">04 · ARCHIVE</div>

              <h2 className="archive-title">
                WE&apos;VE
                <br />
                ALREADY
                <br />
                <span>STARTED.</span>
              </h2>

              <p className="archive-copy">
                Sprint &amp; Spawn was a 12-hour high-octane hackathon built
                around Game Dev and Web Dev.
              </p>

              <a
                href="https://sprintandspawn.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="archive-button"
              >
                VISIT SPRINT &amp; SPAWN →
              </a>
            </div>

            <div className="archive-art" aria-hidden="true">
              <div className="archive-label">SPRINT &amp; SPAWN · 06.09.26</div>
              <div className="archive-blue" />
              <div className="archive-green" />
              <div className="archive-pink" />
              <div className="archive-star" />
            </div>
          </div>
        </div>
      </section>

      {/* =======================================================
          CTA
          ======================================================= */}
      <section className="cta reveal" id="contact">
        <div className="container cta-inner">
          <div className="section-label">05 · COLLABORATE</div>

          <h2 className="cta-title">
            HAVE AN <span>IDEA?</span> LET&apos;S <span>BUILD.</span>
          </h2>

          <p className="cta-copy">
            Have a product, platform, idea or opportunity for student builders?
            Let&apos;s create something meaningful together.
          </p>

          <a href="/proposal" className="cta-button">
            WORK WITH OCd →
          </a>
        </div>

        <div className="cta-art" aria-hidden="true" />
      </section>

      <SiteFooter />

      <SiteEffects />
    </>
  );
}

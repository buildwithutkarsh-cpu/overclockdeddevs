import SiteEffects from "./components/SiteEffects";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

export default function Home() {
  return (
    <>
      {/* =======================================================
          GLOBAL EFFECTS
          ======================================================= */}
      <div className="page-grid" />
      <div className="noise" />
      <div className="scanlines" />

      <SiteHeader />

      {/* =======================================================
          MAIN
          ======================================================= */}
      <main id="top">
        {/* =====================================================
            HERO
            ===================================================== */}
        <section className="hero">
          <div className="container hero-content">
            <div className="hero-meta reveal">
              <span className="hero-meta-dot" />
              DELHI NCR · EST. 2026
            </div>

            <h1 className="hero-title">
              <span className="hero-line reveal">BUILD.</span>
              <span className="hero-line reveal delay-1">BREAK.</span>
              <span className="hero-line reveal delay-2">FORK.</span>
              <span className="hero-line reveal delay-3">FIX.</span>
            </h1>

            <div className="hero-bottom">
              <p className="hero-description reveal delay-2">
                <strong>OverclockedDevs</strong> creates high-energy spaces for
                students to experiment, collaborate and actually make things.
                Hackathons, games, websites, hardware, AI and whatever comes
                next.
              </p>

              <div className="hero-actions reveal delay-3">
                <a href="#events" className="button primary">
                  <span>EXPLORE EVENTS →</span>
                </a>
                <a href="#system" className="button">
                  <span>ENTER OCd</span>
                </a>
              </div>
            </div>
          </div>

          <div className="hero-bg-word" aria-hidden="true">
            OCd
          </div>

          <div className="hero-cross" aria-hidden="true" />

          <div className="scroll-label">
            SCROLL
            <span className="scroll-line" />
          </div>
        </section>

        {/* =====================================================
            TAGLINE TICKER
            ===================================================== */}
        <div className="ticker">
          <div className="ticker-track">
            {[0, 1, 2].map((i) => (
              <div className="ticker-item" key={i}>
                BUILD <span>✦</span> BREAK <span>✦</span> FORK <span>✦</span> FIX{" "}
                <span>✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            INTRO
            ===================================================== */}
        <section className="section intro">
          <div className="container">
            <div className="intro-layout">
              <div className="intro-number reveal" aria-hidden="true">
                00
              </div>

              <div>
                <div className="intro-kicker reveal">THE OCd IDEA</div>

                <h2 className="intro-title reveal delay-1">
                  NOT JUST <span className="outline">EVENTS.</span>
                  <br />
                  A REASON TO BUILD.
                </h2>

                <p className="intro-text reveal delay-2">
                  OCd is a student-focused hackathon organization built around
                  one simple idea: give builders a reason to build. We create
                  spaces where ideas can get weird, projects can fail, people
                  can experiment and everyone can learn by actually making
                  things.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            OCd SYSTEM
            ===================================================== */}
        <section className="section system" id="system">
          <div className="container">
            <div className="system-header">
              <div>
                <div className="section-label reveal">01 / THE SYSTEM</div>
                <h2 className="system-title reveal delay-1">
                  BUILD. BREAK. FORK. FIX.
                </h2>
              </div>

              <p className="system-note reveal delay-2">
                Four states. One mindset. Start messy. Learn fast. Ship
                something real.
              </p>
            </div>

            <div className="system-grid">
              {/* BUILD */}
              <article className="system-card reveal">
                <span className="system-number">01</span>
                <p className="system-description">
                  Start with an idea. Turn it into something people can actually
                  use.
                </p>
                <div className="system-word">BUILD.</div>
              </article>

              {/* BREAK */}
              <article className="system-card reveal delay-1">
                <span className="system-number">02</span>
                <p className="system-description">
                  Question the obvious. Test the limits. Find what doesn&apos;t
                  work.
                </p>
                <div className="system-word">BREAK.</div>
              </article>

              {/* FORK */}
              <article className="system-card reveal delay-2">
                <span className="system-number">03</span>
                <p className="system-description">
                  Take an existing idea somewhere unexpected. Remix. Rebuild.
                  Rethink.
                </p>
                <div className="system-word">FORK.</div>
              </article>

              {/* FIX */}
              <article className="system-card reveal delay-3">
                <span className="system-number">04</span>
                <p className="system-description">
                  Learn from the mess. Iterate. Make it better.
                </p>
                <div className="system-word">FIX.</div>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            EVENTS
            ===================================================== */}
        <section className="events" id="events">
          <div className="container">
            <div className="section-label reveal">02 / EVENTS</div>

            <div className="events-header">
              <h2 className="events-title reveal">
                WHAT&apos;S
                <br />
                NEXT.
              </h2>

              <p className="events-intro reveal delay-1">
                Three different formats. Three different challenges. One
                mission: <strong>get people building.</strong>
              </p>
            </div>

            {/* =================================================
                FALLING SUN
                ================================================= */}
            <article className="featured-event reveal">
              <div className="featured-copy">
                <div className="event-topline">
                  <span>OCd / 001</span>
                  <span className="event-status">APPLICATIONS OPEN</span>
                </div>

                <div>
                  <div className="featured-name">
                    FALLING
                    <br />
                    <span>SUN.</span>
                  </div>
                </div>

                <div>
                  <div className="featured-info">
                    <div className="info-block">
                      <span className="info-label">WHEN</span>
                      <span className="info-value">OCTOBER 2026</span>
                    </div>

                    <div className="info-block">
                      <span className="info-label">TRACKS</span>
                      <span className="info-value">WEB · GAME · HARDWARE</span>
                    </div>

                    <div className="info-block">
                      <span className="info-label">CAPACITY</span>
                      <span className="info-value">200 BUILDERS</span>
                    </div>
                  </div>

                  <br />

                  {/* Replace # with actual registration URL */}
                  <a href="#" className="button primary">
                    <span>REGISTER / APPLY →</span>
                  </a>
                </div>
              </div>

              <div className="featured-visual">
                <div className="sun" aria-hidden="true" />
                <div className="sun-label">DELHI NCR · 2026</div>
              </div>
            </article>

            {/* =================================================
                COMPILE + BLUEPRINT
                ================================================= */}
            <div className="secondary-events">
              {/* COMPILE */}
              <article className="event-card compile reveal">
                <div className="event-card-number">OCd / 002</div>

                <div>
                  <div className="event-card-name">
                    COMPILE
                    <br />
                    DELHI.
                  </div>
                </div>

                <div className="event-card-meta">
                  <span>NOVEMBER 2026</span>
                  <span>AGENTIC AI</span>
                  <span className="event-arrow">↗</span>
                </div>
              </article>

              {/* BLUEPRINT */}
              <article className="event-card blueprint reveal delay-1">
                <div className="event-card-number">OCd / 003</div>

                <div>
                  <div className="event-card-name">
                    BLUEPRINT
                    <br />
                    DELHI.
                  </div>
                </div>

                <div className="event-card-meta">
                  <span>NOVEMBER 2026</span>
                  <span>CREATIVE WEB</span>
                  <span className="event-arrow">↗</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            STATEMENT
            ===================================================== */}
        <section className="statement">
          <div className="container">
            <div className="statement-inner">
              <div className="statement-small reveal">THAT&apos;S THE POINT.</div>

              <h2 className="statement-title reveal delay-1">
                GIVE PEOPLE
                <br />
                A REASON
                <br />
                <span className="outline">TO BUILD.</span>
              </h2>

              <div className="statement-decoration" aria-hidden="true">
                OCd
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ARCHIVE
            ===================================================== */}
        <section className="section archive" id="archive">
          <div className="container">
            <div className="section-label reveal">03 / ARCHIVE</div>

            <div className="archive-header">
              <h2 className="archive-title reveal">
                RECENTLY
                <br />
                SHIPPED.
              </h2>

              <p className="archive-note reveal delay-1">
                Before the next build, there was the last one. 12 hours. 270
                applications. 150 builders.
              </p>
            </div>

            <a
              href="https://sprintandspawn.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="archive-card reveal"
            >
              <div className="archive-visual">
                <img
                  src="/sps.png"
                  alt="Sprint & Spawn"
                  className="sps-logo"
                />
              </div>

              <div className="archive-copy">
                <div>
                  <div className="archive-label">PAST EVENT / 001</div>

                  <h3 className="archive-event-title">
                    SPRINT
                    <br />&<br />
                    SPAWN.
                  </h3>

                  <p className="archive-description">
                    A 12-hour high-octane hackathon focused on Web Dev and Game
                    Dev. Free to participate. Built for people who wanted to
                    stop thinking and start shipping.
                  </p>
                </div>

                <div>
                  <div className="archive-stats">
                    <div className="archive-stat">
                      <div className="archive-stat-number">270</div>
                      <span className="archive-stat-label">APPLICATIONS</span>
                    </div>

                    <div className="archive-stat">
                      <div className="archive-stat-number">150</div>
                      <span className="archive-stat-label">BUILDERS</span>
                    </div>

                    <div className="archive-stat">
                      <div className="archive-stat-number">12H</div>
                      <span className="archive-stat-label">DURATION</span>
                    </div>
                  </div>

                  <br />

                  <span className="button">
                    <span>VISIT EVENT →</span>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* =====================================================
            IMPACT
            ===================================================== */}
        <section className="impact" id="impact">
          <div className="container">
            <div className="impact-top reveal">
              <div className="impact-label">04 / IMPACT</div>

              <div className="impact-title">
                SMALL TEAM.
                <br />
                BIGGER BUILDS.
              </div>
            </div>

            <div className="impact-grid">
              <article className="impact-item reveal">
                <div className="impact-number">300+</div>

                <div>
                  <div className="impact-name">STUDENTS REACHED</div>
                  <p className="impact-copy">
                    Through partners, events and collaborations.
                  </p>
                </div>
              </article>

              <article className="impact-item reveal delay-1">
                <div className="impact-number">3</div>

                <div>
                  <div className="impact-name">UPCOMING HACKATHONS</div>
                  <p className="impact-copy">
                    Falling Sun, Compile Delhi and Blueprint Delhi.
                  </p>
                </div>
              </article>

              <article className="impact-item reveal delay-2">
                <div className="impact-number">∞</div>

                <div>
                  <div className="impact-name">THINGS LEFT TO BUILD</div>
                  <p className="impact-copy">And we&apos;re just getting started.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            COLLABORATE
            ===================================================== */}
        <section className="section collab" id="collaborate">
          <div className="container">
            <div className="collab-inner">
              <div className="collab-label reveal">
                05 / COLLABORATE WITH OCd
              </div>

              <h2 className="collab-title reveal delay-1">
                YOUR IDEA.
                <br />
                OUR <span>BUILDERS.</span>
              </h2>

              <div className="collab-bottom">
                <p className="collab-copy reveal delay-2">
                  Want to partner with OCd, support an event, bring a challenge
                  to students, or build something completely new? Let&apos;s make
                  it happen.
                </p>

                <a
                  href="mailto:hello@overclockeddevs.com"
                  className="button primary reveal delay-3"
                >
                  <span>GET IN TOUCH →</span>
                </a>
              </div>
            </div>

            <div className="collab-orbit" aria-hidden="true" />
          </div>
        </section>
      </main>

      <SiteFooter />

      {/* =======================================================
          CLIENT EFFECTS (reveals, parallax, smooth scroll)
          ======================================================= */}
      <SiteEffects />
    </>
  );
}

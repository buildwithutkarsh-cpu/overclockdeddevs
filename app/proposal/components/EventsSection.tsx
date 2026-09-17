const EVENTS = [
  {
    id: "falling-sun",
    index: "001",
    name: (
      <>
        FALLING
        <br />
        <span className="accent">SUN.</span>
      </>
    ),
    when: "OCTOBER 2026",
    focus: "WEB · GAME · HARDWARE",
    capacity: "CAPACITY / 200",
    status: "APPLICATIONS OPEN",
  },
  {
    id: "compile",
    index: "002",
    name: (
      <>
        COMPILE
        <br />
        <span className="accent-yellow">DELHI.</span>
      </>
    ),
    when: "NOVEMBER 2026",
    focus: "AGENTIC AI",
    capacity: "CAPACITY / 100",
    status: null,
  },
  {
    id: "blueprint",
    index: "003",
    name: (
      <>
        BLUEPRINT
        <br />
        <span className="accent">DELHI.</span>
      </>
    ),
    when: "NOVEMBER 2026",
    focus: "CREATIVE WEB",
    capacity: "CAPACITY / 150",
    status: null,
  },
];

export default function EventsSection() {
  return (
    <section className="p-section p-events" id="the-events">
      <div className="p-container">
        <div className="p-label p-reveal">03 / THE EVENTS</div>

        <div className="p-events-head">
          <h2 className="p-events-title p-reveal p-delay-1">
            THREE ROOMS.
            <br />
            THREE WAYS
            <br />
            TO BUILD.
          </h2>

          <p className="p-events-note p-reveal p-delay-2">
            Three formats. Three challenges. One mission:{" "}
            <strong>get people building.</strong> All events use online
            registration — participants are selected based on venue capacity.
          </p>
        </div>

        <div className="p-events-list">
          {EVENTS.map((event, index) => (
            <article
              className={`p-event ${event.id} p-reveal p-delay-${index % 3}`}
              key={event.id}
            >
              <div className="p-event-copy">
                <div className="p-event-topline">
                  <span>OCd / {event.index}</span>
                  {event.status && (
                    <span className="p-event-status">{event.status}</span>
                  )}
                </div>

                <h3 className="p-event-name">{event.name}</h3>

                <div className="p-event-meta">
                  <div className="p-event-meta-block">
                    <span className="p-event-meta-label">WHEN</span>
                    <span className="p-event-meta-value">{event.when}</span>
                  </div>

                  <div className="p-event-meta-block">
                    <span className="p-event-meta-label">FOCUS</span>
                    <span className="p-event-meta-value">{event.focus}</span>
                  </div>

                  <div className="p-event-meta-block">
                    <span className="p-event-meta-label">FORMAT</span>
                    <span className="p-event-meta-value">
                      STUDENT HACKATHON
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-event-side" aria-hidden="true">
                <span className="p-event-big-index">{event.index}</span>
                <span className="p-event-capacity">{event.capacity}</span>
              </div>
            </article>
          ))}
        </div>

        <p className="p-events-disclaimer p-reveal">
          Online registration is uncapped. Venue attendance is selected based
          on venue capacity. Sponsorship details are discussed individually
          per event.
        </p>
      </div>
    </section>
  );
}

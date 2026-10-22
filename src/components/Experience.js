import { EXPERIENCE } from "../data";

export const Experience = () => (
  <section className="section" id="experience">
    <div className="container">
      <h2 className="section-title">Experience</h2>
      <ol className="timeline">
        {EXPERIENCE.map(({ role, company, product, dates, place, points }) => (
          <li key={`${role}-${dates}`} className="timeline-item">
            <div className="timeline-meta">
              <span>{dates}</span>
              <span>{place}</span>
            </div>
            <div>
              <h3>{role} <span className="at">· {company}{product ? ` (${product})` : ""}</span></h3>
              <ul className="points">
                {points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

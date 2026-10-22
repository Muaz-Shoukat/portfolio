import { STEPS } from "../data";

export const About = () => (
  <section className="section" id="about">
    <div className="container about-grid">
      <div>
        <p className="eyebrow">About</p>
        <h2 className="section-title">Hi, I'm Muaz.</h2>
        <p>
          I'm a full-stack AI engineer based in Lahore, Pakistan, working remotely with international
          teams. Over nearly four years I've built digital identity and wallet credentials,
          energy and IoT integrations, AI prospecting tools and streaming apps.
        </p>
        <p>
          I enjoy owning a feature from the first sketch to production, and I'm happiest on small,
          fast teams where clear writing and quick feedback matter as much as the code.
        </p>
      </div>

      <div>
        <h3 className="process-title">How I work</h3>
        <ol className="steps">
          {STEPS.map(({ title, text }, i) => (
            <li key={title}>
              <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

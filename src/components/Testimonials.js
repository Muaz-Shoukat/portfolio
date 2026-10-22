import { TESTIMONIALS } from "../data";

export const Testimonials = () => (
  <section className="section">
    <div className="container">
      <p className="eyebrow">Kind words</p>
      <h2 className="section-title">What clients say</h2>
      <div className="testimonials">
        {TESTIMONIALS.map(({ quote, name, role, link }) => (
          <figure key={name} className="testimonial">
            <blockquote>“{quote}”</blockquote>
            <figcaption>
              <strong>{name}</strong><span>{role}</span>
              {link && <a href={link} target="_blank" rel="noopener noreferrer" className="quote-link">Read the full recommendation on LinkedIn ↗</a>}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

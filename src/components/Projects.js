import { ArrowUpRight } from "lucide-react";
import { PROJECTS, MORE_WORK } from "../data";

export const Projects = () => (
  <section className="section" id="work">
    <div className="container">
      <p className="eyebrow">Work</p>
      <h2 className="section-title">Selected projects</h2>

      <div className="projects">
        {PROJECTS.map(({ title, kind, summary, did, tech, img, url }) => (
          <article key={title} className="project">
            <a href={url} target="_blank" rel="noopener noreferrer" className="project-img" aria-label={`${title} website`}>
              <img src={img} alt={`${title} home page`} loading="lazy" />
            </a>
            <div className="project-body">
              <p className="project-kind">{kind}</p>
              <h3>
                <a href={url} target="_blank" rel="noopener noreferrer">{title} <ArrowUpRight size={18} /></a>
              </h3>
              <p>{summary}</p>
              <p className="project-did">{did}</p>
              <ul className="tags">
                {tech.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <h3 className="subhead">More work</h3>
      <ul className="more-work">
        {MORE_WORK.map(({ title, desc, url }) => (
          <li key={title}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <span className="more-title">{title} <ArrowUpRight size={14} /></span>
              <span className="more-desc">{desc}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

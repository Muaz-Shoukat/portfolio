import { SKILLS } from "../data";

export const Skills = () => (
  <section className="section" id="skills">
    <div className="container">
      <h2 className="section-title">Skills</h2>
      <div className="skills">
        {SKILLS.map(({ group, items }) => (
          <div key={group} className="skill-row">
            <h3>{group}</h3>
            <ul className="tags">
              {items.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

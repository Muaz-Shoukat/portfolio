import { Bot, Server, ShieldCheck, LayoutDashboard } from "lucide-react";
import { SERVICES } from "../data";

const ICONS = { bot: Bot, server: Server, shield: ShieldCheck, layout: LayoutDashboard };

export const Services = () => (
  <section className="section" id="services">
    <div className="container">
      <p className="eyebrow">Services</p>
      <h2 className="section-title">What I build</h2>
      <div className="services">
        {SERVICES.map(({ icon, title, text, tags }) => {
          const Icon = ICONS[icon];
          return (
            <article key={title} className="service">
              <span className="service-icon"><Icon size={22} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
              <ul className="tags">
                {tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

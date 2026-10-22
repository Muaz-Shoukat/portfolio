import { ArrowRight, Download, Mail } from "lucide-react";
import { LINKS } from "../data";
import { GithubIcon, LinkedinIcon } from "./Icons";

export const Hero = () => (
  <section className="hero" id="top">
    <div className="container">
      <p className="eyebrow">Full-Stack AI Engineer · Lahore, Pakistan · Remote</p>
      <h1>I build AI products end to end.</h1>
      <p className="hero-lead">
        Python backends, LLM agents and React front ends, shipped to production.
        Currently building digital identity and wallet credentials at KeyShare.
      </p>

      <div className="hero-actions">
        <a href="#projects" className="btn">View my work <ArrowRight size={16} /></a>
        <a href={LINKS.resume} className="btn btn-ghost" target="_blank" rel="noopener noreferrer"><Download size={16} /> Download resume</a>
      </div>

      <div className="hero-social">
        <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon /> GitHub</a>
        <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /> LinkedIn</a>
        <a href={`mailto:${LINKS.email}`} aria-label="Email"><Mail size={18} /> {LINKS.email}</a>
      </div>

      <dl className="hero-facts">
        <div><dt>Nearly 4 years</dt><dd>building production software</dd></div>
        <div><dt>Top Rated</dt><dd>on Upwork, 100% Job Success</dd></div>
        <div><dt>AI + identity</dt><dd>LLM agents, RAG, passkeys, wallets</dd></div>
      </dl>
    </div>
  </section>
);

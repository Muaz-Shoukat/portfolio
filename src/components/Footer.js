import { LINKS } from "../data";

export const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <p>© {new Date().getFullYear()} Muaz Shoukat</p>
      <p>
        <a href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={LINKS.resume} target="_blank" rel="noopener noreferrer">Resume</a>
      </p>
    </div>
  </footer>
);

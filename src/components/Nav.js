import { useState } from "react";
import { LINKS } from "../data";

const ITEMS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-brand">Muaz Shoukat</a>
        <button className="nav-toggle" aria-expanded={open} aria-controls="nav-menu" onClick={() => setOpen(!open)}>
          Menu
        </button>
        <nav id="nav-menu" className={`nav-links${open ? " open" : ""}`}>
          {ITEMS.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href={LINKS.resume} className="btn btn-small" target="_blank" rel="noopener noreferrer">Resume</a>
        </nav>
      </div>
    </header>
  );
};

import { useState } from "react";
import { LINKS } from "../data";

const ITEMS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: LINKS.resume, label: "Resume", external: true },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-brand"><span className="brand-mark">MS</span> Muaz Shoukat</a>
        <button className="nav-toggle" aria-expanded={open} aria-controls="nav-menu" onClick={() => setOpen(!open)}>
          Menu
        </button>
        <nav id="nav-menu" className={`nav-links${open ? " open" : ""}`}>
          {ITEMS.map(({ href, label, external }) => (
            <a key={label} href={href} onClick={() => setOpen(false)}
               {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{label}</a>
          ))}
          <a href="#contact" className="btn btn-small" onClick={() => setOpen(false)}>Let's talk</a>
        </nav>
      </div>
    </header>
  );
};

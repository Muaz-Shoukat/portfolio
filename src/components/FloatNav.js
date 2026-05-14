import { useState, useEffect } from "react";

const SECTIONS = [
  { id: "home",     label: "01 Home" },
  { id: "about",    label: "02 About" },
  { id: "skills",   label: "03 Skills" },
  { id: "project",  label: "04 Work" },
  { id: "contacts", label: "05 Contact" },
];

export const FloatNav = () => {
  const [active, setActive]   = useState("home");
  const [menuOpen, setMenu]   = useState(false);

  useEffect(() => {
    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <>
      {/* Desktop side dots */}
      <nav className="float-nav">
        {SECTIONS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`float-dot${active === id ? " active" : ""}`}
            title={label}
          >
            <span className="dot-label">{label}</span>
            <span className="dot-ball" />
          </a>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <button
        className={`mobile-menu-btn${menuOpen ? " open" : ""}`}
        onClick={() => setMenu((v) => !v)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="mobile-menu" onClick={() => setMenu(false)}>
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

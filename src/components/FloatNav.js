import { useState, useEffect } from "react";
import logo from "../assets/img/Muaz.png";

const SECTIONS = [
  { id: "home",     label: "Home" },
  { id: "about",    label: "About" },
  { id: "skills",   label: "Skills" },
  { id: "project",  label: "Work" },
  { id: "contacts", label: "Contact" },
];

export const FloatNav = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenu] = useState(false);

  useEffect(() => {
    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenu(false);

  return (
    <>
      {/* ── Desktop side dots ── */}
      <nav className="float-nav" aria-label="Section navigation">
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

      {/* ── Mobile top bar ── */}
      <header className="mobile-header">
        <a href="#home" onClick={close}>
          <img src={logo} alt="Muaz" className="mobile-header-logo" />
        </a>
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenu((v) => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </header>

      {/* ── Mobile full-screen overlay menu ── */}
      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true">
          <button className="mobile-menu-close" onClick={close} aria-label="Close menu">
            <span /><span />
          </button>
          <nav className="mobile-menu-nav">
            {SECTIONS.map(({ id, label }, i) => (
              <a
                key={id}
                href={`#${id}`}
                className={`mobile-nav-link${active === id ? " active" : ""}`}
                onClick={close}
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <span className="mobile-nav-num">0{i + 1}</span>
                {label}
              </a>
            ))}
          </nav>
          <div className="mobile-menu-footer">
            <span>Muaz Shoukat</span>
            <span className="mobile-menu-footer-dot">·</span>
            <span style={{ color: "var(--cyan)" }}>Available for hire</span>
          </div>
        </div>
      )}
    </>
  );
};

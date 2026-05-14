import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Cpu, Sparkles } from "lucide-react";

const ROLES = [
  "Full Stack AI Engineer",
  "React / Next.js Developer",
  "Python & AI Builder",
  "Node.js & FastAPI Developer",
];

const Particles = () =>
  Array.from({ length: 30 }).map((_, i) => (
    <motion.div
      key={i}
      style={{
        position: "absolute",
        width: 3, height: 3,
        borderRadius: "50%",
        background: "#fff",
        left: `${Math.random() * 100}%`,
        top:  `${Math.random() * 100}%`,
      }}
      animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], y: [0, -100] }}
      transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 5, ease: "easeOut" }}
    />
  ));

const FloatingIcons = () => (
  <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
    <motion.div style={{ position: "absolute", top: "22%", left: "10%" }}
      animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
      <Code2 style={{ width: 40, height: 40, color: "#00f5ff", opacity: 0.2 }} />
    </motion.div>
    <motion.div style={{ position: "absolute", top: "35%", right: "12%" }}
      animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
      <Cpu style={{ width: 52, height: 52, color: "#d946ef", opacity: 0.18 }} />
    </motion.div>
    <motion.div style={{ position: "absolute", bottom: "30%", left: "20%" }}
      animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
      <Sparkles style={{ width: 36, height: 36, color: "#4d2db7", opacity: 0.22 }} />
    </motion.div>
  </div>
);

export const Banner = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale   = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const y       = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const [loopNum, setLoopNum]       = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText]             = useState("");
  const [delta, setDelta]           = useState(110);
  const PERIOD = 2600;

  useEffect(() => {
    const ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delta]);

  const tick = () => {
    const i       = loopNum % ROLES.length;
    const full    = ROLES[i];
    const updated = isDeleting ? full.substring(0, text.length - 1) : full.substring(0, text.length + 1);
    setText(updated);
    if (isDeleting) setDelta(55);
    if (!isDeleting && updated === full) { setIsDeleting(true); setDelta(PERIOD); }
    else if (isDeleting && updated === "") { setIsDeleting(false); setLoopNum(n => n + 1); setDelta(110); }
  };

  return (
    <section className="banner" id="home" ref={ref} style={{ minHeight:"100svh" }}>
      {/* Animated background orbs */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #0a0a0f, #1a0b2e, #0a0a0f)", overflow: "hidden" }}>
        <motion.div animate={{ scale: [1, 1.2, 1], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: "25%", left: "15%", width: 320, height: 320, background: "#4d2db7", borderRadius: "50%", filter: "blur(120px)", opacity: 0.28 }} />
        <motion.div animate={{ scale: [1, 1.3, 1], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", bottom: "25%", right: "15%", width: 260, height: 260, background: "#d946ef", borderRadius: "50%", filter: "blur(100px)", opacity: 0.18 }} />
        <motion.div animate={{ scale: [1, 1.1, 1], y: [0, -50, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: "50%", right: "20%", width: 240, height: 240, background: "#00f5ff", borderRadius: "50%", filter: "blur(90px)", opacity: 0.2 }} />

        {/* Grid overlay */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(77,45,183,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(77,45,183,0.1) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
          maskImage: "radial-gradient(ellipse 80% 50% at 50% 50%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 50% at 50% 50%, black, transparent)",
        }} />

        <Particles />
      </div>

      <FloatingIcons />

      {/* Wireframe cube */}
      <div className="hero-scene">
        <div className="cube3d">
          {["front","back","right","left","top","bottom"].map(f => (
            <div key={f} className={`cube-face face-${f}`} />
          ))}
        </div>
      </div>
      <div className="hero-ring"><div className="hero-ring-dot" /></div>

      {/* Main content */}
      <motion.div className="banner-content" style={{ opacity, scale, y }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
          <div className="cyber-badge">
            <Sparkles style={{ width: 14, height: 14 }} />
            Full Stack AI Engineer
          </div>
        </motion.div>

        <motion.span className="hero-name-top" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
          MUAZ
        </motion.span>

        <motion.span className="hero-role-row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
          <span className="txt-rotate"><span className="wrap">{text}</span></span>
        </motion.span>

        <motion.span className="hero-name-bot" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.65 }}>
          SHOUKAT
        </motion.span>

        <motion.p className="hero-desc" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.1 }}>
          Building intelligent, production-ready web experiences powered by AI.
        </motion.p>

        <motion.div className="hero-ctas" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 1.4 }}>
          <a href="#project" className="btn-primary-grad">Explore My Work</a>
          <a href="#contacts" className="btn-ghost-cyan">Get In Touch</a>
        </motion.div>
      </motion.div>

      {/* Bottom elements */}
      <motion.div className="hero-avail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }}>
        <span className="pulse-dot" /> Available for projects
      </motion.div>

      <motion.div className="hero-scroll" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2.2 }}>
        <div className="hero-scroll-mouse"><div className="hero-scroll-dot" /></div>
      </motion.div>

      <motion.div className="hero-stats" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }}>
        {[{ num: "4+", lbl: "Years Exp." }, { num: "10+", lbl: "Projects" }, { num: "5+", lbl: "Stacks" }].map(({ num, lbl }) => (
          <div className="hero-stat-item" key={lbl}>
            <div className="num">{num.replace("+", "")}<em>+</em></div>
            <div className="lbl">{lbl}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import { Brain, Zap, Globe, Terminal } from "lucide-react";

const CARDS = [
  {
    icon: Brain,
    title: "AI Visionary",
    desc: "Integrating Large Language Models, intelligent agents, and data pipelines into production-grade web applications.",
    gradient: "linear-gradient(135deg,#00f5ff,#4d2db7)",
    glow: "rgba(0,245,255,0.2)",
  },
  {
    icon: Zap,
    title: "Full Stack Mastery",
    desc: "Seamlessly building end-to-end solutions — from React interfaces to scalable Django/Node backends and cloud infrastructure.",
    gradient: "linear-gradient(135deg,#d946ef,#4d2db7)",
    glow: "rgba(217,70,239,0.2)",
  },
  {
    icon: Globe,
    title: "Innovation Driver",
    desc: "Transforming complex business challenges into elegant, automated solutions that scale globally and delight users.",
    gradient: "linear-gradient(135deg,#4d2db7,#00f5ff)",
    glow: "rgba(77,45,183,0.25)",
  },
  {
    icon: Terminal,
    title: "Code Craftsman",
    desc: "Writing clean, maintainable code that stands the test of time — performance-first, test-covered, production-ready.",
    gradient: "linear-gradient(135deg,#00f5ff,#d946ef)",
    glow: "rgba(0,245,255,0.2)",
  },
];

const CODE_LINES = [
  { keyword: "const", varName: "mission",  value: '"Transform ideas into intelligent reality"' },
  { keyword: "const", varName: "approach", value: '"Blend creativity with cutting-edge technology"' },
  { keyword: "const", varName: "impact",   value: '"Build systems that empower and inspire"' },
];

/* viewport helper — fires when 10% of element is visible */
const vp = { once: true, amount: 0.1 };

export const About = () => (
  <section className="about" id="about">
    {/* bg */}
    <div style={{ position:"absolute",inset:0,pointerEvents:"none",overflow:"hidden",
      background:"linear-gradient(to bottom,#0a0a0f,#1a0b2e,#0a0a0f)" }}>
      <div style={{ position:"absolute",top:"30%",right:"20%",width:380,height:380,
        background:"#4d2db7",borderRadius:"50%",filter:"blur(120px)",opacity:.2 }} />
    </div>

    <Container style={{ position:"relative",zIndex:2 }}>
      {/* Header */}
      <motion.div
        initial={{ opacity:0, y:40 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.7 }}
        viewport={vp}
        style={{ textAlign:"center", marginBottom:80 }}
      >
        <div className="cyber-badge" style={{ justifyContent:"center" }}>
          <Brain style={{ width:14,height:14 }} />
          THE ENGINEER
        </div>
        <h2 className="section-heading gt-3">Architect of the Future</h2>
        <p className="section-sub">
          Bridging human creativity and artificial intelligence to build products that matter.
        </p>
      </motion.div>

      {/* 4 cards */}
      <div className="eng-cards-grid">
        {CARDS.map(({ icon: Icon, title, desc, gradient, glow }, i) => (
          <motion.div
            key={title}
            className="eng-card"
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.7, delay: i * 0.1 }}
            viewport={vp}
            whileHover={{ scale:1.02, y:-5 }}
          >
            <div className="eng-card-glow" style={{ background: glow }} />
            <div className="eng-card-icon" style={{ background: gradient }}>
              <Icon />
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <motion.div
              style={{ position:"absolute",top:16,right:16,opacity:.15,fontSize:12,
                fontFamily:"monospace",color:"#00f5ff" }}
              animate={{ y:[0,-8,0] }}
              transition={{ duration:3, repeat:Infinity, ease:"easeInOut" }}
            >
              {"</>"}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Terminal philosophy */}
      <motion.div
        className="terminal-block"
        initial={{ opacity:0, y:40 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.7 }}
        viewport={vp}
        style={{ marginTop:24 }}
      >
        <div className="terminal-grid-overlay" />
        <div className="terminal-dots">
          <div className="t-dot" style={{ background:"#ef4444" }} />
          <div className="t-dot" style={{ background:"#f59e0b" }} />
          <div className="t-dot" style={{ background:"#10b981" }} />
          <span style={{ marginLeft:16,fontSize:13,color:"var(--text-2)",fontFamily:"monospace" }}>
            engineer.philosophy
          </span>
        </div>
        <div className="terminal-body">
          {CODE_LINES.map(({ keyword, varName, value }, i) => (
            <motion.div
              key={varName}
              initial={{ opacity:0, x:-20 }}
              whileInView={{ opacity:1, x:0 }}
              transition={{ duration:0.5, delay: 0.15 + i * 0.18 }}
              viewport={vp}
            >
              <span className="code-keyword">{keyword}</span>{" "}
              <span className="code-var">{varName}</span>{" "}
              <span className="code-eq">=</span>{" "}
              <span className="code-str">{value}</span>
              <span className="code-semi">;</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats */}
      <div className="about-stats-grid" style={{ marginTop:48 }}>
        {[
          { big:"4+",   small:"Years of experience" },
          { big:"10+",  small:"Projects shipped" },
          { big:"100%", small:"Client satisfaction" },
          { big:"5+",   small:"Tech stacks mastered" },
        ].map(({ big, small }, i) => (
          <motion.div
            key={small}
            className="about-stat-card"
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.6, delay: i * 0.1 }}
            viewport={vp}
            whileHover={{ scale:1.03 }}
          >
            <span className="stat-big">{big}</span>
            <span className="stat-small">{small}</span>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);

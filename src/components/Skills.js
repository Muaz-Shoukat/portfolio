import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "react-bootstrap";
import { Cpu, Code, Database, Cloud, Network, Sparkles } from "lucide-react";

const SKILLS = [
  {
    icon: Cpu,
    category: "AI & Machine Learning",
    gradient: "linear-gradient(135deg,#00f5ff,#4d2db7)",
    glow: "#00f5ff",
    techs: [
      { name:"Python & LangChain", pct:93 },
      { name:"OpenAI / LLM Integration", pct:90 },
      { name:"AI Automation & Agents", pct:88 },
      { name:"Data Scraping & NLP", pct:85 },
    ],
  },
  {
    icon: Code,
    category: "Frontend Development",
    gradient: "linear-gradient(135deg,#d946ef,#4d2db7)",
    glow: "#d946ef",
    techs: [
      { name:"React & Next.js", pct:95 },
      { name:"TypeScript", pct:88 },
      { name:"Vue.js", pct:82 },
      { name:"CSS / Tailwind / Bootstrap", pct:92 },
    ],
  },
  {
    icon: Database,
    category: "Backend & APIs",
    gradient: "linear-gradient(135deg,#4d2db7,#00f5ff)",
    glow: "#4d2db7",
    techs: [
      { name:"Node.js & Express", pct:92 },
      { name:"Django / FastAPI / Flask", pct:90 },
      { name:"REST APIs & GraphQL", pct:88 },
      { name:"PostgreSQL & MongoDB", pct:85 },
    ],
  },
  {
    icon: Cloud,
    category: "Cloud & DevOps",
    gradient: "linear-gradient(135deg,#00f5ff,#d946ef)",
    glow: "#00f5ff",
    techs: [
      { name:"AWS & Azure", pct:82 },
      { name:"Docker & CI/CD", pct:85 },
      { name:"MongoDB & Redis", pct:87 },
      { name:"Web3 & Blockchain", pct:78 },
    ],
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <section className="skill" id="skills" ref={ref}
      style={{ background:"linear-gradient(to bottom,#0a0a0f,#050510,#0a0a0f)" }}>

      {/* bg orbs */}
      <div style={{ position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none" }}>
        <motion.div style={{ position:"absolute",top:"25%",left:"28%",width:380,height:380,background:"#d946ef",borderRadius:"50%",filter:"blur(150px)",opacity:useTransform(scrollYProgress,[0,.2,.8,1],[0,.18,.18,0]) }} />
        <motion.div style={{ position:"absolute",bottom:"28%",right:"22%",width:300,height:300,background:"#00f5ff",borderRadius:"50%",filter:"blur(120px)",opacity:useTransform(scrollYProgress,[0,.2,.8,1],[0,.13,.13,0]) }} />
      </div>

      {/* Neural network SVG */}
      <div style={{ position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:1,opacity:.08 }}>
        <svg style={{ position:"absolute",inset:0,width:"100%",height:"100%" }}>
          <defs>
            <linearGradient id="svgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00f5ff" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
          </defs>
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.line key={i}
              x1={`${(i * 17) % 100}%`} y1={`${(i * 13) % 100}%`}
              x2={`${(i * 23 + 40) % 100}%`} y2={`${(i * 19 + 30) % 100}%`}
              stroke="url(#svgGrad)" strokeWidth="1"
              initial={{ pathLength:0,opacity:0 }}
              animate={{ pathLength:1,opacity:.6 }}
              transition={{ duration:2,delay:i*.1,repeat:Infinity,repeatType:"reverse" }}
            />
          ))}
        </svg>
      </div>

      <motion.div style={{ opacity, position:"relative",zIndex:2 }}>
        <Container>
          <motion.div initial={{ opacity:0,y:50 }} whileInView={{ opacity:1,y:0 }} transition={{ duration:0.8 }} viewport={{ once:true }} style={{ textAlign:"center",marginBottom:80 }}>
            <div className="cyber-badge" style={{ justifyContent:"center" }}>
              <Sparkles style={{ width:14,height:14 }} />
              TECHNOLOGY ECOSYSTEM
            </div>
            <h2 className="section-heading" style={{ marginBottom:16 }}>
              <span className="gt-1">Powers &amp; Capabilities</span>
            </h2>
            <p className="section-sub">An interconnected universe of technologies working in harmony.</p>
          </motion.div>

          <div className="skills-grid-2col">
            {SKILLS.map(({ icon: Icon, category, gradient, glow, techs }, i) => (
              <motion.div key={category}
                className="skill-card-new"
                initial={{ opacity:0,y:50 }}
                whileInView={{ opacity:1,y:0 }}
                transition={{ duration:0.8,delay:i*0.15 }}
                viewport={{ once:true }}
                whileHover={{ scale:1.01 }}
              >
                {/* animated dot bg */}
                <motion.div style={{
                  position:"absolute",inset:0,
                  backgroundImage:"radial-gradient(circle, rgba(255,255,255,.25) 1px, transparent 1px)",
                  backgroundSize:"20px 20px",opacity:.04,
                }}
                  animate={{ backgroundPosition:["0px 0px","20px 20px"] }}
                  transition={{ duration:4,repeat:Infinity,ease:"linear" }} />

                {/* glow orb on hover via whileHover */}
                <div style={{ position:"absolute",top:-4,right:-4,width:100,height:100,borderRadius:"50%",
                  background:glow,filter:"blur(30px)",opacity:.1,pointerEvents:"none" }} />

                <div className="skill-card-icon" style={{ background:gradient }}>
                  <Icon />
                  <motion.div style={{ position:"absolute",inset:0,borderRadius:"var(--r-sm)",boxShadow:`0 0 20px ${glow}60` }}
                    animate={{ opacity:[.5,1,.5] }}
                    transition={{ duration:2,repeat:Infinity,ease:"easeInOut" }} />
                </div>
                <h3>{category}</h3>

                <div>
                  {techs.map(({ name, pct }, j) => (
                    <div key={name} className="skill-item">
                      <div className="skill-item-top">
                        <span className="skill-item-name">{name}</span>
                        <span className="skill-item-pct">{pct}%</span>
                      </div>
                      <div className="skill-bar-track">
                        <motion.div className="skill-bar-fill"
                          style={{ background:`linear-gradient(to right,${gradient.includes("00f5ff,#4d2db7") ? "#00f5ff,#4d2db7" : gradient.includes("d946ef") ? "#d946ef,#4d2db7" : "#4d2db7,#00f5ff"})` }}
                          initial={{ width:0 }}
                          whileInView={{ width:`${pct}%` }}
                          transition={{ duration:1.5,delay:i*.1+j*.1,ease:"easeOut" }}
                          viewport={{ once:true }} />
                        <motion.div style={{ position:"absolute",inset:0,width:`${pct}%`,borderRadius:4,boxShadow:`0 0 10px ${glow}80` }}
                          animate={{ opacity:[.4,1,.4] }}
                          transition={{ duration:2,repeat:Infinity,ease:"easeInOut",delay:j*.2 }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* rotating bg icon */}
                <motion.div style={{ position:"absolute",top:-8,right:-8,opacity:.08 }}
                  animate={{ rotate:[0,360],scale:[1,1.1,1] }}
                  transition={{ duration:10,repeat:Infinity,ease:"linear" }}>
                  <Network style={{ width:90,height:90,color:glow }} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </Container>
      </motion.div>
    </section>
  );
};

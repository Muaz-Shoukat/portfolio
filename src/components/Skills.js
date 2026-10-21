import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "react-bootstrap";
import { Cpu, Code, Database, ShieldCheck, Network, Sparkles } from "lucide-react";

const SKILLS = [
  {
    icon: Cpu,
    category: "AI & LLM Engineering",
    gradient: "linear-gradient(135deg,#00f5ff,#4d2db7)",
    glow: "#00f5ff",
    techs: ["LLM integrations (OpenAI, Claude)", "RAG & vector databases", "AI agents & MCP", "LangChain / LangGraph", "Prompt engineering", "Claude Code workflows"],
    proof: "AI prospecting platform · AI-assisted engineering at KeyShare",
  },
  {
    icon: Database,
    category: "Backend & Cloud",
    gradient: "linear-gradient(135deg,#4d2db7,#00f5ff)",
    glow: "#4d2db7",
    techs: ["Python", "FastAPI", "Flask", "Django / DRF", "AWS Lambda & serverless", "REST & GraphQL", "PostgreSQL", "Supabase", "Docker & CI/CD"],
    proof: "Production services at KeyShare and OhmConnect",
  },
  {
    icon: ShieldCheck,
    category: "Identity, Auth & Payments",
    gradient: "linear-gradient(135deg,#00f5ff,#d946ef)",
    glow: "#00f5ff",
    techs: ["Passkeys / FIDO", "Apple Wallet", "Google Wallet", "NFC credentials", "Amazon Cognito", "OAuth & JWT", "Stripe"],
    proof: "Wallet room keys and digital IDs at KeyShare",
  },
  {
    icon: Code,
    category: "Frontend",
    gradient: "linear-gradient(135deg,#d946ef,#4d2db7)",
    glow: "#d946ef",
    techs: ["React", "Next.js", "TypeScript", "Node.js", "Vue.js", "React Native", "Tailwind CSS"],
    proof: "DJPOOL, e-commerce platforms and admin dashboards",
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
            <p className="section-sub">What I use in production, and where I've used it.</p>
          </motion.div>

          <div className="skills-grid-2col">
            {SKILLS.map(({ icon: Icon, category, gradient, glow, techs, proof }, i) => (
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

                <div className="skill-chips">
                  {techs.map((name, j) => (
                    <motion.span key={name} className="skill-chip"
                      style={{ borderColor:`${glow}55` }}
                      initial={{ opacity:0,y:10 }}
                      whileInView={{ opacity:1,y:0 }}
                      transition={{ duration:0.4,delay:i*.1+j*.05 }}
                      viewport={{ once:true }}>
                      {name}
                    </motion.span>
                  ))}
                </div>
                <p className="skill-proof">{proof}</p>

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

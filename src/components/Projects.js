import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "react-bootstrap";
import { ExternalLink, Sparkles } from "lucide-react";
import ohmconnect   from "../assets/img/ohmconnect.png";
import almumtaz     from "../assets/img/almumtaz.png";
import azonic       from "../assets/img/Azonic.png";
import realestate   from "../assets/img/RealEstateSpain.png";
import frozenflakes from "../assets/img/frozenflakes.png";
import projImg2     from "../assets/img/project-img2.png";
import bizmik       from "../assets/img/Bizmik.png";
import shopBay      from "../assets/img/shopBay.png";
import projImg1     from "../assets/img/project-img1.png";


const FEATURED = [
  {
    title: "OhmConnect",
    category: "AI-Powered Platform",
    desc: "Energy-saving platform connecting households to the smart grid. Intelligent load-balancing with real-time AI recommendations that rewards users for smarter consumption.",
    img: ohmconnect,
    url: "https://www.ohmconnect.com/",
    tech: ["React","Python","REST API","Real-time Data"],
    gradient: "linear-gradient(135deg,#00f5ff,#4d2db7)",
    glow: "#00f5ff",
  },
  {
    title: "Al-Mumtaz",
    category: "Full-Stack E-Commerce",
    desc: "Complete e-commerce solution for a Pakistani retail brand — product management, cart, secure checkout, admin dashboard, and order tracking with custom authentication.",
    img: almumtaz,
    url: "https://almumtaz.com.pk/#/",
    tech: ["Vue.js","Node.js","MongoDB","Stripe"],
    gradient: "linear-gradient(135deg,#d946ef,#4d2db7)",
    glow: "#d946ef",
  },
  {
    title: "Real Estate Spain",
    category: "AI / Web Scraping",
    desc: "AI-assisted web scraping app aggregating Spanish property listings. Smart deduplication, advanced filters, and CSV export — built with Puppeteer and Python automation.",
    img: realestate,
    url: "https://realestatespain.netlify.app/",
    tech: ["React","Python","Puppeteer","FastAPI"],
    gradient: "linear-gradient(135deg,#4d2db7,#00f5ff)",
    glow: "#4d2db7",
  },
];

const MORE = [
  { title:"Azonic",      desc:"MERN e-commerce with Stripe & admin dashboard.",    img:azonic,      url:"https://main--azonic-ecommerce.netlify.app/",   cat:"E-Commerce" },
  { title:"FrozenFlakes",desc:"Ice-cream brand storefront with product catalog.",   img:frozenflakes,url:"https://frozenflakes.com/",                      cat:"Frontend"   },
  { title:"ItisMakeup",  desc:"Beauty e-commerce with custom product configurator.",img:projImg2,   url:"https://itismakeup.com/",                         cat:"Full Stack" },
  { title:"Bizmik",      desc:"Multi-vendor platform with role-based access.",      img:bizmik,      url:"https://bizmik.netlify.app/",                     cat:"E-Commerce" },
  { title:"shopBay",     desc:"React Native cross-platform shopping mobile app.",   img:shopBay,     url:"https://github.com/Muaz-Shoukat/shopBay-MobileApp",cat:"Mobile"    },
  { title:"OmniFoods",   desc:"Responsive food-delivery landing page.",             img:projImg1,    url:"https://omnifood.dev/",                           cat:"Frontend"   },
];

export const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end","end start"] });
  const opacity = useTransform(scrollYProgress, [0,.1,.9,1], [0,1,1,0]);

  return (
    <section className="project" id="project" ref={ref}
      style={{ background:"linear-gradient(to bottom,#0a0a0f,#1a0b2e,#0a0a0f)" }}>
      <div style={{ position:"absolute",top:"50%",left:"50%",width:600,height:600,background:"#00f5ff",borderRadius:"50%",filter:"blur(200px)",opacity:.07,transform:"translate(-50%,-50%)",pointerEvents:"none" }} />

      <motion.div style={{ opacity }}>
        <Container>
          {/* Header */}
          <motion.div initial={{ opacity:0,y:50 }} whileInView={{ opacity:1,y:0 }} transition={{ duration:0.8 }} viewport={{ once:true }} style={{ textAlign:"center",marginBottom:80 }}>
            <div className="cyber-badge" style={{ justifyContent:"center" }}>
              <Sparkles style={{ width:14,height:14 }} />
              FEATURED WORK
            </div>
            <h2 className="section-heading gt-1">Transformative Projects</h2>
            <p className="section-sub">Pushing boundaries and creating impact through innovative technology.</p>
          </motion.div>

          {/* Alternating featured projects */}
          <div className="featured-projects">
            {FEATURED.map((p, i) => (
              <motion.div key={p.title}
                className="feat-proj"
                style={{ direction: i % 2 === 1 ? "rtl" : "ltr" }}
                initial={{ opacity:0,y:100 }}
                whileInView={{ opacity:1,y:0 }}
                transition={{ duration:0.8,delay:0.2 }}
                viewport={{ once:true }}>

                {/* Image side */}
                <motion.div className="feat-proj-img-wrap" style={{ direction:"ltr" }}
                  whileHover={{ scale:1.02 }} transition={{ duration:0.3 }}>
                  {/* corner glow */}
                  <motion.div className="feat-proj-corner"
                    style={{ background:p.gradient }}
                    animate={{ scale:[1,1.2,1],opacity:[.5,.8,.5] }}
                    transition={{ duration:3,repeat:Infinity,ease:"easeInOut" }} />

                  <div className="feat-proj-img-inner">
                    <motion.img src={p.img} alt={p.title}
                      whileHover={{ scale:1.08 }} transition={{ duration:0.6 }} />
                    <div className="feat-proj-img-overlay" style={{ background:`linear-gradient(to top,${p.gradient})` }} />
                    <div className="feat-proj-tech">
                      {p.tech.map((t,j) => (
                        <motion.div key={t} className="feat-proj-tech-badge"
                          initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }}
                          transition={{ delay:j*.1 }} viewport={{ once:true }}>
                          {t}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Content side */}
                <motion.div style={{ direction:"ltr" }}
                  initial={{ opacity:0,x:i%2===0?-50:50 }}
                  whileInView={{ opacity:1,x:0 }}
                  transition={{ duration:0.8,delay:0.3 }}
                  viewport={{ once:true }}>
                  <div className="feat-proj-cat-badge" style={{ background:p.gradient }}>{p.category}</div>
                  <h3 className="feat-proj-content">{p.title}</h3>
                  <p style={{ fontSize:16,color:"var(--text-2)",lineHeight:1.8,marginBottom:28 }}>{p.desc}</p>
                  <div className="feat-proj-btns">
                    <motion.a href={p.url} target="_blank" rel="noopener noreferrer"
                      whileHover={{ scale:1.05,y:-2 }} whileTap={{ scale:.97 }}
                      style={{ background:p.gradient,boxShadow:`0 0 20px ${p.glow}40`,padding:"12px 28px",fontSize:14,fontWeight:700,borderRadius:100,color:"#fff",display:"inline-flex",alignItems:"center",gap:8 }}>
                      <ExternalLink style={{ width:16,height:16 }} />
                      View Project
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* More projects grid */}
          <motion.h3 className="more-projects-title gt-3"
            initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} transition={{ duration:0.8 }} viewport={{ once:true }}>
            More Projects
          </motion.h3>

          <div className="more-projects-grid">
            {MORE.map((p, i) => (
              <motion.a key={p.title} href={p.url} target="_blank" rel="noopener noreferrer"
                className="mini-proj-card"
                initial={{ opacity:0,y:40 }}
                whileInView={{ opacity:1,y:0 }}
                transition={{ duration:0.6,delay:i*.08 }}
                viewport={{ once:true }}
                whileHover={{ y:-6 }}>
                <div className="mini-proj-img">
                  <img src={p.img} alt={p.title} />
                  <div className="mini-proj-overlay" />
                </div>
                <div className="mini-proj-body">
                  <span style={{ fontSize:11,fontWeight:700,letterSpacing:1,textTransform:"uppercase",color:"var(--cyan)",marginBottom:8,display:"block" }}>{p.cat}</span>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                  <span className="mini-proj-link">View Project <ExternalLink style={{ width:12,height:12 }} /></span>
                </div>
              </motion.a>
            ))}
          </div>
        </Container>
      </motion.div>
    </section>
  );
};

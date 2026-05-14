import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { Mail, ArrowRight, Sparkles } from "lucide-react";
import emailjs from "emailjs-com";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const Particles = () =>
  Array.from({ length: 40 }).map((_, i) => (
    <motion.div key={i}
      style={{ position:"absolute",width:2,height:2,borderRadius:"50%",background:"#fff",
        left:`${Math.random()*100}%`,top:`${Math.random()*100}%` }}
      animate={{ opacity:[0,1,0],scale:[0,1.5,0],y:[0,-120] }}
      transition={{ duration:4+Math.random()*3,repeat:Infinity,delay:Math.random()*5,ease:"easeOut" }} />
  ));

export const Contact = () => {
  const [buttonText, setButtonText] = useState("Send Message");
  const [status, setStatus]         = useState({});
  const form = useRef();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end","end start"] });
  const opacity = useTransform(scrollYProgress, [0,.2,.8,1], [0,1,1,1]);
  const scale   = useTransform(scrollYProgress, [0,.2], [0.88,1]);

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending…");
    emailjs.sendForm("service_xrsbahp","template_o63vs8m",form.current,"8Oq_aR7E4IJwuFUGL")
      .then(() => { setStatus({ success:true, message:"Message sent! I'll reply within 24h." }); setButtonText("Send Message"); e.target.reset(); },
            () => { setStatus({ success:false,message:"Something went wrong. Please try again." }); setButtonText("Send Message"); });
  };

  const SOCIALS = [
    { icon:Mail,         label:"Email",    href:"mailto:muazshoukat35@gmail.com", color:"#00f5ff" },
    { icon:LinkedinIcon, label:"LinkedIn", href:"https://www.linkedin.com/in/muaz-shoukat-08197a265", color:"#d946ef" },
    { icon:GithubIcon,   label:"GitHub",   href:"https://github.com/Muaz-Shoukat/", color:"#4d2db7" },
  ];

  return (
    <section className="contact" id="contacts" ref={sectionRef}
      style={{ background:"linear-gradient(to bottom,#0a0a0f,#1a0b2e,#050510)" }}>

      {/* Background epic orbs */}
      <div style={{ position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none" }}>
        <motion.div animate={{ scale:[1,1.3,1],y:[0,-50,0] }}
          transition={{ duration:10,repeat:Infinity,ease:"easeInOut" }}
          style={{ position:"absolute",top:"25%",left:"10%",width:400,height:400,background:"#00f5ff",borderRadius:"50%",filter:"blur(180px)",opacity:.14 }} />
        <motion.div animate={{ scale:[1,1.4,1],y:[0,60,0] }}
          transition={{ duration:12,repeat:Infinity,ease:"easeInOut" }}
          style={{ position:"absolute",bottom:"20%",right:"10%",width:400,height:400,background:"#d946ef",borderRadius:"50%",filter:"blur(180px)",opacity:.1 }} />
        <motion.div animate={{ scale:[1,1.2,1],rotate:[0,180,360] }}
          transition={{ duration:15,repeat:Infinity,ease:"linear" }}
          style={{ position:"absolute",top:"50%",left:"50%",width:400,height:400,background:"#4d2db7",borderRadius:"50%",filter:"blur(150px)",opacity:.18,transform:"translate(-50%,-50%)" }} />

        {/* radial grid */}
        <div style={{ position:"absolute",inset:0,opacity:.07,
          background:"radial-gradient(circle at center, rgba(77,45,183,.3) 1px, transparent 1px)",
          backgroundSize:"50px 50px" }} />
        <Particles />
      </div>

      <motion.div className="contact-inner" style={{ opacity, scale }}>
        <Container>
          {/* Header */}
          <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} transition={{ duration:0.8 }} viewport={{ once:true }}
            style={{ marginBottom:16 }}>
            <div className="cyber-badge" style={{ justifyContent:"center" }}>
              <Sparkles style={{ width:14,height:14 }} />
              LET'S CREATE SOMETHING EXTRAORDINARY
            </div>
          </motion.div>

          <motion.h2 className="contact-heading"
            initial={{ opacity:0,y:50 }} whileInView={{ opacity:1,y:0 }}
            transition={{ duration:1,delay:0.2 }} viewport={{ once:true }}>
            <span className="gt-1">Ready to Build</span><br/>
            <span className="gt-2">The Future Together?</span>
          </motion.h2>

          <motion.p className="contact-sub"
            initial={{ opacity:0 }} whileInView={{ opacity:1 }}
            transition={{ duration:1,delay:0.5 }} viewport={{ once:true }}>
            Whether you have a groundbreaking idea, a complex challenge, or just want to explore what's
            possible with AI and modern tech — I'm here to turn vision into reality.
          </motion.p>

          {/* Social icons */}
          <motion.div className="contact-socials-row"
            initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }}
            transition={{ duration:0.8,delay:0.7 }} viewport={{ once:true }}>
            {SOCIALS.map(({ icon: Icon, label, href, color }, i) => (
              <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="contact-social-btn"
                title={label}
                initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }}
                transition={{ delay:.9+i*.1 }} viewport={{ once:true }}
                whileHover={{ scale:1.1,y:-5 }} whileTap={{ scale:.95 }}>
                <div style={{ position:"absolute",inset:0,borderRadius:"var(--r-sm)",opacity:0,transition:"opacity .5s",
                  background:`radial-gradient(circle,${color}40,transparent)`,pointerEvents:"none" }}
                  className="social-glow" />
                <Icon style={{ width:22,height:22,color:"var(--text-2)",display:"block",position:"relative",zIndex:1 }} />
                {/* tooltip */}
                <div style={{ position:"absolute",top:-36,left:"50%",transform:"translateX(-50%)",
                  padding:"5px 10px",background:"#1a0b2e",border:"1px solid var(--bdr)",borderRadius:8,
                  fontSize:11,color:"#fff",whiteSpace:"nowrap",opacity:0,transition:"opacity .3s",pointerEvents:"none" }}
                  className="social-tooltip">{label}</div>
              </motion.a>
            ))}
          </motion.div>

          <div style={{ fontSize:12,letterSpacing:2,color:"var(--text-2)",marginBottom:40 }}>
            OR SEND ME A MESSAGE
          </div>

          {/* Form */}
          <motion.div initial={{ opacity:0,scale:.95 }} whileInView={{ opacity:1,scale:1 }}
            transition={{ duration:0.8,delay:1 }} viewport={{ once:true }}>
            <div className="contact-form-wrap">
              <form ref={form} onSubmit={sendEmail}>
                <Row>
                  <Col xs={12} sm={6}><input type="text"  name="firstName" required placeholder="First Name" /></Col>
                  <Col xs={12} sm={6}><input type="text"  name="lastName"  required placeholder="Last Name" /></Col>
                  <Col xs={12} sm={6}><input type="email" name="email"     required placeholder="Email Address" /></Col>
                  <Col xs={12} sm={6}><input type="tel"   name="phone"              placeholder="Phone (optional)" /></Col>
                  <Col xs={12}>
                    <textarea name="message" rows="6" required placeholder="Tell me about your project…" />
                    <button type="submit">
                      {buttonText} <ArrowRight style={{ width:16,height:16,display:"inline",marginLeft:6 }} />
                    </button>
                  </Col>
                  {status.message && (
                    <Col xs={12}>
                      <p className={status.success ? "success" : "danger"}>{status.message}</p>
                    </Col>
                  )}
                </Row>
              </form>
            </div>
          </motion.div>

        </Container>
      </motion.div>
    </section>
  );
};

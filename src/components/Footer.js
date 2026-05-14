import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import logo from "../assets/img/Muaz.png";

export const Footer = () => (
  <footer className="footer">
    <Container>
      <div className="footer-inner">
        <a href="#home">
          <img src={logo} alt="Muaz" className="footer-logo" />
        </a>

        <div style={{ textAlign:"center" }}>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} <span className="highlight">Muaz Shoukat</span>. Crafted with passion.
          </p>
          <motion.p className="footer-bottom-mono"
            animate={{ opacity:[.5,1,.5] }} transition={{ duration:3,repeat:Infinity,ease:"easeInOut" }}>
            {"<"} Building the impossible, one line at a time {"/>"}
          </motion.p>
        </div>

        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/muaz-shoukat-08197a265" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <i className="fa-brands fa-linkedin" />
          </a>
          <a href="https://github.com/Muaz-Shoukat/" target="_blank" rel="noopener noreferrer" title="GitHub">
            <i className="fa-brands fa-github" />
          </a>
          <a href="https://www.instagram.com/muaz__shoukat/" target="_blank" rel="noopener noreferrer" title="Instagram">
            <i className="fa-brands fa-instagram" />
          </a>
        </div>
      </div>
    </Container>
  </footer>
);

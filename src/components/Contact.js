import { useState, useRef } from "react";
import { Mail } from "lucide-react";
import emailjs from "emailjs-com";
import { LINKS } from "../data";
import { GithubIcon, LinkedinIcon } from "./Icons";

export const Contact = () => {
  const [buttonText, setButtonText] = useState("Send message");
  const [status, setStatus] = useState({});
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending…");
    emailjs.sendForm("service_xrsbahp", "template_o63vs8m", form.current, "8Oq_aR7E4IJwuFUGL")
      .then(() => { setStatus({ success: true, message: "Thanks, your message is on its way. I'll reply within a day." }); setButtonText("Send message"); e.target.reset(); },
            () => { setStatus({ success: false, message: "Something went wrong. Please email me directly instead." }); setButtonText("Send message"); });
  };

  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <div>
          <h2 className="section-title">Contact</h2>
          <p>Have a role, a project or a question? Send a message or reach me directly.</p>
          <ul className="contact-links">
            <li><a href={`mailto:${LINKS.email}`}><Mail size={18} /> {LINKS.email}</a></li>
            <li><a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon /> linkedin.com/in/muaz-shoukat</a></li>
            <li><a href={LINKS.github} target="_blank" rel="noopener noreferrer"><GithubIcon /> github.com/Muaz-Shoukat</a></li>
          </ul>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-row">
            <label>First name<input type="text" name="firstName" required autoComplete="given-name" /></label>
            <label>Last name<input type="text" name="lastName" required autoComplete="family-name" /></label>
          </div>
          <div className="form-row">
            <label>Email<input type="email" name="email" required autoComplete="email" /></label>
            <label>Phone (optional)<input type="tel" name="phone" autoComplete="tel" /></label>
          </div>
          <label>Message<textarea name="message" rows="5" required /></label>
          <button type="submit" className="btn">{buttonText}</button>
          {status.message && (
            <p className={`form-status ${status.success ? "ok" : "err"}`} role="status">{status.message}</p>
          )}
        </form>
      </div>
    </section>
  );
};

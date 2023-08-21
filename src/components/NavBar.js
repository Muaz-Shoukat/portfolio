import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import newlogo from "../assets/img/Muaz.png";
const logo = process.env.PUBLIC_URL + "/logo.png";
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo" src={newlogo} alt="logo Heber Gomez" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activeLink === "project" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("project")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/muaz-shoukat-08197a265"
                rel="noopener"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/muaz__shoukat/"
                rel="noopener"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://github.com/Muaz-Shoukat/"
                rel="noopener"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <Nav.Link
              href="#contacts"
              className={
                activeLink === "contacts" ? "active navbar-link" : "navbar-link"
              }
            >
              <button onClick={() => onUpdateActiveLink("contacts")}>
                <span>Let’s Connect</span>{" "}
              </button>
            </Nav.Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import logo from "../assets/img/Muaz.png";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/muaz-shoukat-08197a265"
                // target="_blank"
              >
                <img src={navIcon1} alt="Icon-linkedin" />
              </a>
              <a
                href="https://www.instagram.com/muaz__shoukat/"
                // target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://github.com/Muaz-Shoukat/"
                // target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

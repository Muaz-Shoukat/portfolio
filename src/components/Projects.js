import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import shopBay from "../assets/img/shopBay.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg1 from "../assets/img/project-img1.png";
import realestatespain from "../assets/img/RealEstateSpain.png";
import azonic from "../assets/img/Azonic.png";
import ohmconnect from "../assets/img/ohmconnect.png";
import almumtaz from "../assets/img/almumtaz.png";
import bizmik from "../assets/img/Bizmik.png";
import frozenflakes from "../assets/img/frozenflakes.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
     {
      title: "Al-Mumtaz",
      description: "Full Stack Ecommerce App",
      imgUrl: almumtaz,
      url: "https://almumtaz.com.pk/#/",
    },
    {
      title: "FozenFlakes",
      description: "Icecream Store",
      url: "https://frozenflakes.com/",
      imgUrl: frozenflakes,
    },
    {
      title: "OhmConnect",
      description: "Energy saving platform",
      imgUrl: ohmconnect,
      url: "https://www.ohmconnect.com/",
    },
    {
      title: "Azonic",
      description: "Full Stack Ecommerce App",
      imgUrl: azonic,
      url: "https://main--azonic-ecommerce.netlify.app/",
    },
    {
      title: "Real Estate Spain",
      description: " The Ultimate Web Scraping App",
      imgUrl: realestatespain,
      url: "https://realestatespain.netlify.app/",
    },
    {
      title: "ItisMakeup",
      description: "Full Stack WebApp",
      url: "https://itismakeup.com/",
      imgUrl: projImg2,
    },
    {
      title: "shopBay",
      description: "Mobile App",
      url: "https://github.com/Muaz-Shoukat/shopBay-MobileApp",
      imgUrl: shopBay,
    },
    {
      title: "Bizmik",
      description: "Full Stack Ecommerce App",
      url: "https://bizmik.netlify.app/",
      imgUrl: bizmik,
    },
    {
      title: "OmniFoods",
      description: "Full Stack WebApp",
      url: "https://omnifood.dev/",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Most recent projects</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__fadeIn" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Coming soon...</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Coming soon...</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from "react-on-screen";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible
                    ? "animate__animated animate__pulse animate__slower"
                    : ""
                }
              >
                <Col>
                  <div className="skill-bx">
                    <h2>Skills</h2>
                    <p>
                      I am a web app developer having 2+ years of
                      professional experience. My expertise lies in creating
                      user-friendly, responsive and efficient applications using
                      cutting-edge technology. I am confident in my ability to
                      deliver high-quality work and meet your project needs.
                    </p>
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      className="skill-slider"
                    >
                      <div className="item">
                        <img src={meter1} alt="image" />
                        <h5>Python (django/flask)</h5>
                      </div>
                      <div className="item">
                        <img src={meter1} alt="image" />
                        <h5>React/Next</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="image" />
                        <h5>Data Scraping (python)</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="image" />
                        <h5>Vue.js</h5>
                      </div>
                      <div className="item">
                        <img src={meter1} alt="image" />
                        <h5>MERN</h5>
                      </div>
                    </Carousel>
                  </div>
                </Col>
              </div>
            )}
          </TrackVisibility>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="image-background"
      />
    </section>
  );
};

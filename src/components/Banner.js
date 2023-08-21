import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle, Download } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Full Stack Engineer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDetla) => prevDetla / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <TrackVisibility partialVisibility>
          {({ isVisible }) => (
            <div
              className={isVisible ? "animate__animated animate__fadeIn" : ""}
            >
              <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi, i'm Muaz, `}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    As a Full Stack Web Engineer with over 4 years of
                    experience, I have gained a deep understanding of various
                    programming languages, frameworks and technologies required
                    to develop highly scalable and robust web applications. My
                    expertise lies in e-commerce, web3, cloud computing and data
                    structures, and I have successfully delivered numerous
                    projects in these domains.
                  </p>
                  <a href="https://muaz-shoukat.github.io/Resume.github.io/">
                    <button>
                      Here's My CV
                      <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </Col>
                <Col xs={12} md={6} xl={5}>
                  <img
                    style={{ marginTop: "5px" }}
                    src={headerImg}
                    alt={"Header Img"}
                  />
                </Col>
              </Row>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};

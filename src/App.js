import "./App.css";

import { Nav }         from "./components/Nav";
import { Hero }        from "./components/Hero";
import { About }       from "./components/About";
import { Experience }  from "./components/Experience";
import { Projects }    from "./components/Projects";
import { Testimonial } from "./components/Testimonial";
import { Skills }      from "./components/Skills";
import { Contact }     from "./components/Contact";
import { Footer }      from "./components/Footer";

function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Testimonial />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

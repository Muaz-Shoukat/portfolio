import "./App.css";

import { Nav }          from "./components/Nav";
import { Hero }         from "./components/Hero";
import { Services }     from "./components/Services";
import { Projects }     from "./components/Projects";
import { Testimonials } from "./components/Testimonials";
import { About }        from "./components/About";
import { Contact }      from "./components/Contact";
import { Footer }       from "./components/Footer";

function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

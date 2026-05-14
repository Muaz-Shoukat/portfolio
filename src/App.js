import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Loader }      from "./components/Loader";
import { FloatNav }    from "./components/FloatNav";
import { Banner }      from "./components/Banner";
import { TechMarquee } from "./components/TechMarquee";
import { About }       from "./components/About";
import { Skills }      from "./components/Skills";
import { Projects }    from "./components/Projects";
import { Contact }     from "./components/Contact";
import { Footer }      from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      {loading && <Loader onDone={() => setLoading(false)} />}

      {!loading && (
        <>
          <FloatNav />
          <Banner />
          <TechMarquee />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

import { ArrowRight, Mail } from "lucide-react";
import { LINKS } from "../data";
import { GithubIcon, LinkedinIcon } from "./Icons";

const CodeCard = () => (
  <div className="code-card" aria-hidden="true">
    <div className="code-bar">
      <span /><span /><span />
      <em>agent.py</em>
    </div>
    <pre>
<span className="k">from</span> fastapi <span className="k">import</span> FastAPI{"\n"}
<span className="k">from</span> agents <span className="k">import</span> Agent, tools{"\n"}
{"\n"}
app = FastAPI(){"\n"}
agent = Agent({"\n"}
{"    "}model=<span className="s">"claude"</span>,{"\n"}
{"    "}tools=[tools.search_docs, tools.crm],{"\n"}
){"\n"}
{"\n"}
<span className="d">@app.post</span>(<span className="s">"/ask"</span>){"\n"}
<span className="k">async def</span> <span className="f">ask</span>(question: str):{"\n"}
{"    "}<span className="k">return await</span> agent.run(question)
    </pre>
    <div className="code-out">
      <span className="ok">●</span> 200 OK · answered from 3 sources in 1.2s
    </div>
  </div>
);

export const Hero = () => (
  <section className="hero" id="top">
    <div className="hero-glow" aria-hidden="true" />
    <div className="container hero-grid">
      <div>
        <p className="badge"><span className="pulse" /> Available for new projects and roles</p>
        <h1>I build <span className="accent">AI products</span> end to end.</h1>
        <p className="hero-lead">
          Python backends, LLM agents and React front ends, shipped to production
          for startups and product teams around the world.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn">Start a project <ArrowRight size={16} /></a>
          <a href="#work" className="btn btn-ghost">See my work</a>
        </div>

        <div className="hero-social">
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer"><GithubIcon /> GitHub</a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon /> LinkedIn</a>
          <a href={`mailto:${LINKS.email}`}><Mail size={18} /> Email</a>
        </div>
      </div>
      <CodeCard />
    </div>

    <div className="container">
      <dl className="hero-facts">
        <div><dt>4 years</dt><dd>shipping production software</dd></div>
        <div><dt>Top Rated</dt><dd>on Upwork, 100% Job Success</dd></div>
        <div><dt>1,400+ hours</dt><dd>with remote product teams</dd></div>
      </dl>
    </div>
  </section>
);

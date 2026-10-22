const FOCUS = [
  { title: "AI & LLM engineering", text: "LLM features with OpenAI and Claude, RAG search and chatbots, and agents that use real tools through MCP." },
  { title: "Python backends", text: "FastAPI, Flask and Django services, REST and GraphQL APIs, billing and orchestration on AWS." },
  { title: "Identity & wallets", text: "Passkeys and FIDO, biometric login, and Apple Wallet and Google Wallet credentials." },
  { title: "Full stack", text: "React, Next.js and TypeScript front ends, from admin dashboards to streaming apps." },
];

export const About = () => (
  <section className="section" id="about">
    <div className="container about-grid">
      <div>
        <h2 className="section-title">About</h2>
        <p>
          I'm a software engineer in Lahore, Pakistan, working remotely with Passivebolt on KeyShare,
          an NFC identity platform that puts hotel room keys, building passes and digital IDs into a
          phone's native wallet.
        </p>
        <p>
          Before that I worked on OhmConnect at Codefulcrum and shipped projects for clients on Upwork,
          where I'm Top Rated with a 100% Job Success Score. I like owning features end to end, writing
          clear updates, and working with distributed teams.
        </p>
      </div>
      <ul className="focus-list">
        {FOCUS.map(({ title, text }) => (
          <li key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

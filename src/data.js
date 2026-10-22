import keyshare from "./assets/img/keyshare.png";
import successai from "./assets/img/successai.jpg";
import ohmconnect from "./assets/img/ohmconnect.png";
import djpool from "./assets/img/djpool.png";

export const LINKS = {
  email: "muazdev01@gmail.com",
  linkedin: "https://www.linkedin.com/in/muaz-shoukat",
  github: "https://github.com/Muaz-Shoukat",
  resume: "/Muaz_Shoukat_Resume.pdf",
};

export const SERVICES = [
  {
    icon: "bot",
    title: "AI agents & LLM apps",
    text: "Chatbots, copilots and agents that answer from your data and take real actions through tools and MCP.",
    tags: ["OpenAI", "Claude", "RAG", "LangChain", "LangGraph", "MCP"],
  },
  {
    icon: "server",
    title: "Python backends & APIs",
    text: "Fast, well-tested services and integrations that your product and partners can rely on.",
    tags: ["FastAPI", "Flask", "Django", "REST & GraphQL", "AWS", "PostgreSQL"],
  },
  {
    icon: "shield",
    title: "Identity, auth & payments",
    text: "Passwordless login, digital wallet credentials and billing that are secure and easy for users.",
    tags: ["Passkeys / FIDO", "Apple Wallet", "Google Wallet", "Cognito", "Stripe"],
  },
  {
    icon: "layout",
    title: "Full-stack web apps",
    text: "From first prototype to production: dashboards, marketplaces and streaming apps people enjoy using.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "Supabase", "React Native"],
  },
];

export const PROJECTS = [
  {
    title: "KeyShare",
    kind: "Digital identity platform",
    summary: "One NFC tap verifies a person and delivers the right credential to their phone's native wallet: a hotel room key, a building pass or a digital ID, with no app to install.",
    did: "Built backend services for wallet key provisioning, passkey authentication and hotel system integrations.",
    tech: ["Python", "FastAPI", "Flask", "Apple Wallet", "Google Wallet", "Passkeys"],
    img: keyshare,
    url: "https://www.keyshare.id/",
  },
  {
    title: "Success.ai",
    kind: "AI B2B prospecting platform",
    summary: "Lead generation and sales outreach platform that finds, qualifies and contacts the right decision-makers.",
    did: "Built GPT-based lead qualification, personalized outreach messages and retrieval-augmented generation (RAG) over company data.",
    tech: ["Next.js", "Node.js", "OpenAI API", "LangChain", "RAG"],
    img: successai,
    url: "https://www.success.ai/",
  },
  {
    title: "OhmConnect",
    kind: "Energy & IoT platform",
    summary: "US energy platform that pays households to cut electricity use during peak demand.",
    did: "Built device connectors for Tesla Powerwall, Google Nest, ecobee, Sensi and Wemo, fixed the core savings and rewards algorithm, and sped up APIs and database queries.",
    tech: ["Python", "Flask", "PostgreSQL", "AWS", "IoT"],
    img: ohmconnect,
    url: "https://www.ohmconnect.com/",
  },
  {
    title: "DJPOOL",
    kind: "Music streaming platform",
    summary: "Streaming and download platform for DJs and artists, with paid subscriptions.",
    did: "Built the front end: adaptive HLS audio streaming, uploads, playlists and Stripe checkout.",
    tech: ["React", "Tailwind CSS", "Supabase", "Stripe", "Auth0"],
    img: djpool,
    url: "https://djpool.club/",
  },
];

export const MORE_WORK = [
  { title: "Real Estate Spain", desc: "Aggregates property listings scraped from Idealista and Pisos.", url: "https://realestatespain.netlify.app/" },
  { title: "Al-Mumtaz Electronics", desc: "E-commerce store with catalog, checkout and admin dashboard.", url: "https://almumtaz.com.pk/#/" },
  { title: "Bizmik", desc: "Multi-vendor marketplace with role-based access and Stripe.", url: "https://bizmik.netlify.app/" },
  { title: "Azonic", desc: "MERN e-commerce store with Stripe and an admin dashboard.", url: "https://main--azonic-ecommerce.netlify.app/" },
  { title: "shopBay", desc: "Cross-platform shopping app in React Native.", url: "https://github.com/Muaz-Shoukat/shopBay-MobileApp" },
];

export const TESTIMONIALS = [
  {
    quote: "He is a responsible, talented, and honest engineer, that is capable of whatever we ask of him. I'm impressed with Muaz.",
    name: "Derek DeJonghe",
    role: "Founder, Expansive Labs · O'Reilly author",
  },
  {
    quote: "Had a great experience working with Muaz. He's professional and accountable. He successfully completed various technically challenging projects for us.",
    name: "Client review",
    role: "API development project on Upwork · 5.0 rating",
  },
];

export const STEPS = [
  { title: "Understand", text: "A short call to learn the goal, then a written plan with scope, milestones and risks." },
  { title: "Build in small steps", text: "Working demos every few days and clear async updates, so you always know where things stand." },
  { title: "Ship & support", text: "Tested, documented and deployed, with a handover your team can run with." },
];

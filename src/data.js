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

export const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "Passivebolt",
    product: "KeyShare",
    dates: "Jul 2025 – Present",
    place: "Remote",
    points: [
      "Build Python services with FastAPI and Flask for KeyShare's hotel, government and physical-access products.",
      "Implement Apple Wallet and Google Wallet key provisioning, including Easy Provisioning, so guests get room keys without installing an app.",
      "Work on passkey/FIDO and biometric authentication, Stripe billing, the org-agent orchestration service and hotel system integrations.",
      "Created Claude Code and Antigravity skills, rules and workflows that speed up coding, debugging and code review.",
    ],
  },
  {
    role: "Python Developer (Part-time)",
    company: "Passivebolt",
    dates: "Feb 2025 – Jul 2025",
    place: "Remote",
    points: [
      "Hired as a backend Python API developer; built Apple and Google Wallet pass provisioning test suites and worked on smart-lock integrations.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Codefulcrum",
    dates: "Apr 2024 – Jul 2025",
    place: "Lahore, Pakistan",
    points: [
      "Main project: OhmConnect. Built device connectors, fixed the savings and rewards algorithm, and sped up APIs and database queries.",
      "Built change-data-capture pipelines with database triggers and scheduled workers, and migrated production data to Supabase.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Bright-line Solutions",
    dates: "Dec 2023 – Mar 2024",
    place: "Lahore, Pakistan",
    points: [
      "Built a property management system and features for the Al-Mumtaz Electronics e-commerce store.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "KeyShare",
    kind: "Digital identity platform",
    summary: "One NFC tap verifies a person and delivers the right credential to their phone's native wallet: a hotel room key, a building pass or a digital ID, with no app to install.",
    did: "I build backend services for wallet key provisioning, passkey authentication and hotel system integrations.",
    tech: ["Python", "FastAPI", "Flask", "Apple Wallet", "Google Wallet", "Passkeys"],
    img: keyshare,
    url: "https://www.keyshare.id/",
  },
  {
    title: "Success.ai",
    kind: "AI B2B prospecting platform",
    summary: "Lead generation and sales outreach platform that finds, qualifies and contacts the right decision-makers.",
    did: "I built GPT-based lead qualification, personalized outreach messages and retrieval-augmented generation (RAG) over company data.",
    tech: ["Next.js", "Node.js", "OpenAI API", "LangChain", "RAG"],
    img: successai,
    url: "https://www.success.ai/",
  },
  {
    title: "OhmConnect",
    kind: "Energy & IoT platform",
    summary: "US energy platform that pays households to cut electricity use during peak demand.",
    did: "I built device connectors for Tesla Powerwall, Google Nest, ecobee, Sensi and Wemo, fixed bugs in the core savings and rewards algorithm, and optimized database queries and API response times.",
    tech: ["Python", "Flask", "PostgreSQL", "AWS", "IoT"],
    img: ohmconnect,
    url: "https://www.ohmconnect.com/",
  },
  {
    title: "DJPOOL",
    kind: "Music streaming platform",
    summary: "Streaming and download platform for DJs and artists, with paid subscriptions.",
    did: "I built the front end: adaptive HLS audio streaming, uploads, playlists and Stripe checkout.",
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

export const SKILLS = [
  { group: "AI & LLM", items: ["LLM integration (OpenAI, Claude)", "RAG", "AI agents", "MCP", "LangChain", "LangGraph", "Vector databases", "Claude Code"] },
  { group: "Backend & Cloud", items: ["Python", "FastAPI", "Flask", "Django REST Framework", "Node.js", "REST & GraphQL", "AWS", "Docker", "CI/CD"] },
  { group: "Identity & Payments", items: ["Passkeys / FIDO", "Apple Wallet", "Google Wallet", "NFC credentials", "Amazon Cognito", "OAuth & JWT", "Stripe"] },
  { group: "Data", items: ["PostgreSQL", "MongoDB", "Supabase", "MySQL", "Change data capture", "Web scraping"] },
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Vue.js", "React Native", "Tailwind CSS"] },
];

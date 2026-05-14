const ITEMS = [
  { label:"REACT",      hi:true  },
  { label:"NEXT.JS",    hi:false },
  { label:"PYTHON",     hi:true  },
  { label:"AI / LLMs",  hi:false },
  { label:"DJANGO",     hi:true  },
  { label:"NODE.JS",    hi:false },
  { label:"LANGCHAIN",  hi:true  },
  { label:"VUE",        hi:false },
  { label:"DOCKER",     hi:true  },
  { label:"AWS",        hi:false },
  { label:"TYPESCRIPT", hi:true  },
  { label:"MONGODB",    hi:false },
  { label:"FASTAPI",    hi:true  },
  { label:"WEB3",       hi:false },
  { label:"OPENAI API", hi:true  },
];

const Track = () => (
  <>
    {[...ITEMS, ...ITEMS].map((item, i) => (
      <span key={i} className={`marquee-item${item.hi ? " hi" : ""}`}>
        {item.label}<span className="marquee-dot">·</span>
      </span>
    ))}
  </>
);

export const TechMarquee = () => (
  <div className="marquee-strip" aria-hidden="true">
    <div className="marquee-track"><Track /></div>
  </div>
);

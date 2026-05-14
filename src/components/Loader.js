import { useState, useEffect } from "react";

const BOOT_LINES = [
  "Initializing portfolio v3.0...",
  "Loading AI stack components...",
  "Connecting to the neural grid...",
  "Boot sequence complete.",
];

export const Loader = ({ onDone }) => {
  const [lines, setLines]       = useState([]);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting]   = useState(false);

  useEffect(() => {
    let lineIdx = 0;
    const lineTimer = setInterval(() => {
      if (lineIdx < BOOT_LINES.length) {
        setLines((prev) => [...prev, BOOT_LINES[lineIdx]]);
        lineIdx++;
      } else clearInterval(lineTimer);
    }, 520);

    const progTimer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progTimer);
          setTimeout(() => { setExiting(true); setTimeout(onDone, 620); }, 280);
          return 100;
        }
        return p + 2.5;
      });
    }, 55);

    return () => { clearInterval(lineTimer); clearInterval(progTimer); };
  }, [onDone]);

  return (
    <div className={`loader${exiting ? " loader-exit" : ""}`}>
      <div className="loader-inner">
        <div className="loader-brand">
          MUAZ<span style={{ color: "var(--cyan)" }}>.</span>SHOUKAT
        </div>
        <div className="loader-terminal">
          {lines.map((line, i) => (
            <div key={i} className="loader-line">
              <span className="prompt">›</span> {line}
            </div>
          ))}
        </div>
        <div className="loader-progress-wrap">
          <div className="loader-prog-track">
            <div className="loader-prog-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="loader-pct">{Math.round(progress)}%</div>
        </div>
      </div>
    </div>
  );
};

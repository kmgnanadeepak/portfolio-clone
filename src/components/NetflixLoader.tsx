import { useEffect, useState } from "react";

const TOTAL_DURATION = 2800; // total cinematic duration

const NetflixLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 400);
    }, TOTAL_DURATION);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`netflix-loader transition-opacity duration-400 ${
        !visible ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="netflix-cinematic flex flex-col items-center">
        {/* CINEMATIC NAME */}
        <svg
          viewBox="0 0 1600 220"
          className="w-[92vw] max-w-[72rem]"
          aria-hidden="true"
        >
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="netflix-dual-sweep-text"
          >
            KM GNANA DEEPAK
          </text>
        </svg>

        {/* LOADING PORTFOLIO (RESTORED) */}
        <p className="mt-6 netflix-loading-text">
          LOADING&nbsp;PORTFOLIO
        </p>
      </div>
    </div>
  );
};

export default NetflixLoader;

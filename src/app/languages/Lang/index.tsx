"use client";
import { useEffect, useRef } from "react";
import styles from "./Lang.module.css";

const LangCard = ({
  lang,
  native,
  level,
  scale,
}: {
  lang: string;
  native: string;
  level: string;
  scale: number;
}) => {
  const progress = useRef(null);
  useEffect(() => {
    const prog = progress.current as any;
    prog.style.backgroundPosition = 100 - scale + "%";
  }, [progress]);
  return (
    <div
      ref={progress}
      className={`px-5 py-4 w-full md:w-[40%] lg:w-full xl:w-[40%] ${styles.lang}`}
    >
      <h1 className="text-4xl uppercase mb-1">{lang}</h1>
      <h3 className="text-lg font-bold">{native}</h3>
      <span className="block text-sm font-bold opacity-70">{level}</span>
    </div>
  );
};

export default LangCard;

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.css";

const Header = ({ onClick }: { onClick: any }) => {
  const [icon, setIcon] = useState(faMoon);
  const handleThemeChange = () => {
    setIcon((icon) => {
      if (icon === faMoon) return faSun;
      else return faMoon;
    });
    onClick((curr: boolean) => !curr);
  };
  return (
    <div className="py-11 flex gap-4 items-center justify-between">
      <div className="flex gap-1 items-center">
        <h1 className={styles["first-name"] + " text-2xl "}>Jaydeep</h1>
        <h1 className={styles["last-name"] + " text-2xl text-[#ff9c1a]"}>
          Mithani
        </h1>
      </div>
      <button
        className={
          styles.theme +
          " bg-[#ebf2fa] p-3 rounded-full flex items-center justify-center relative"
        }
        onClick={handleThemeChange}
      >
        <FontAwesomeIcon icon={icon} className="text-2xl w-[25px] h-[25px]" />
        <span className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 bg-orange-500 text-white px-2 py-0.5 rounded-full text-xs">
          beta
        </span>
      </button>
    </div>
  );
};

export default Header;

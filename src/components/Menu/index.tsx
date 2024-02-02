import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { pages } from "@/Content/pages";

import styles from "./Menu.module.css";
import Link from "next/link";

const Menu = () => {
  const path = usePathname();
  const [active, setActive] = useState<{ [page: string]: boolean }>({});

  useEffect(() => {
    let currState: { [page: string]: boolean } = {};
    pages.forEach((page) => {
      if (page.id === "home" && path === "/") currState[page.id] = true;
      else if (page.id === path.split("/")[1]) currState[page.id] = true;
    });
    setActive(currState);
  }, [path]);

  return (
    <div
      className={`z-50 sticky top-0 lg:static px-4 xl:px-8 py-[10px] lg:max-w-fit ml-auto flex items-center gap-3 justify-evenly flex-wrap md:flex-nowrap lg:justify-start lg:gap-5 xl:gap-10 bg-[#f2f7fc] rounded-[20px] mb-5 lg:mb-3 ${styles.shadow}`}
    >
      {pages.map((page) => (
        <Link href={page.path} key={page.id}>
          <div
            className={`text-[#1a100399] w-[60px] sm:w-[70px] md:w-[90px] p-4 rounded-[20px] cursor-pointer bg-[#e1e8ef] flex flex-col items-center justify-center gap-1 ${
              active[page.id] ? `${styles.active} theme-gradient` : ""
            }`}
          >
            <FontAwesomeIcon className="text-lg lg:text-2xl" icon={page.icon} />
            <span className="hidden sm:block">{page.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;

import { ReactNode } from "react";

import styles from "./Title.module.css";

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <h1
      className={`mb-4 text-2xl sm:text-4xl font-medium max-w-fit pr-8 relative ${styles.hr}`}
    >
      {children}
    </h1>
  );
};

export default Title;

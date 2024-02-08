import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-[#ffa20048] z-50 fixed top-0 left-0">
      <div
        className={`max-w-fit p-10 rounded-[20px] shadow-md theme-gradient text-4xl`}
      >
        <FontAwesomeIcon
          className={`text-6xl ${styles.spinner}`}
          icon={faGear}
        />
      </div>
    </div>
  );
};

export default Loader;

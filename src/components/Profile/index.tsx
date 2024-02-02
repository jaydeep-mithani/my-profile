import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Profile.module.css";

const Profile = ({
  title,
  content,
  icon,
}: {
  title: string;
  content: string;
  icon: IconDefinition;
}) => {
  return (
    <div className={`rounded-[20px] ${styles.profilecard}`}>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={icon} />
        <h3 className="text-lg lg:text-2xl font-semibold text-black">
          {title}
        </h3>
      </div>
      <p className="text-gray-700 text-sm text-justify">{content}</p>
    </div>
  );
};

export default Profile;

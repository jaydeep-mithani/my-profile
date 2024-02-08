import styles from "./Project.module.css";

const Project = ({
  thumbnail,
  description,
  title,
  url,
}: {
  thumbnail: string;
  description: string;
  title: string;
  url: string;
}) => {
  const handleProjectClick = () => {
    window.open(url, "_blank");
  };
  return (
    <div
      className={`p-2 rounded-lg even:bg-[#ffe3bf] odd:bg-[#fff4e5] flex flex-col max-w-full md:max-w-[45%] lg:max-w-full xl:max-w-[45%] ${styles.card}`}
      onClick={handleProjectClick}
    >
      <div className="w-full overflow-hidden rounded-lg">
        <img className="block mb-3 w-full" src={thumbnail} alt="" />
      </div>
      <h4 className="text-lg font-bold mb-1">{title}</h4>
      {Boolean(description.length) && (
        <p className="text-xs font-medium text-[#00000088]">{description}</p>
      )}
    </div>
  );
};

export default Project;

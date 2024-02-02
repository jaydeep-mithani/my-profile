import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faFaceSmile, faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface skill {
  id: string;
  icon: IconProp | string;
  text: string;
}

const Skills = ({
  techSkills,
  softSkills,
}: {
  techSkills: Array<skill>;
  softSkills: Array<skill>;
}) => {
  return (
    <div className="bg-[#f8fbfb] p-8 flex flex-col md:flex-row lg:flex-col xl:flex-row gap-5 rounded-[20px]">
      <div className="grow basis-0">
        <div className="flex items-center gap-2 mb-4">
          <FontAwesomeIcon
            className="text-3xl text-[#cb0000]"
            icon={faMicrochip}
          />
          <h4 className="text-3xl font-semibold">Tech Skills</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {techSkills.map((skill) => (
            <div
              key={skill.id}
              className="py-1 px-3 text-sm font-semibold rounded-full theme-gradient flex items-center gap-2"
            >
              {typeof skill.icon !== "string" && (
                <FontAwesomeIcon icon={skill.icon} />
              )}
              <p>{skill.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grow basis-0">
        <div className="flex items-center gap-2 mb-4">
          <FontAwesomeIcon
            className="text-3xl text-[#ff9c1a]"
            icon={faFaceSmile}
          />
          <h4 className="text-3xl font-semibold">Soft Skills</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((skill) => (
            <div
              key={skill.id}
              className="py-1 px-3 text-sm font-semibold rounded-full bg-[#e1e8ef] flex items-center gap-2"
            >
              {typeof skill.icon !== "string" && (
                <FontAwesomeIcon icon={skill.icon} />
              )}
              <p>{skill.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

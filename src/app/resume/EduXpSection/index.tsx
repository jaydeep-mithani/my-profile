interface educationInterface {
  StartYear: number;
  endYear: number;
  startMonth: string;
  endMonth: string;
  id: string;
  degree: string;
  stream: string;
  institute: string;
  university: string;
}
interface experienceInterface {
  id: string;
  companyName: string;
  joinMonth: string;
  joinYear: number;
  seperationMonth: string;
  seperationYear: number;
  jobTitle: string;
  points: Array<string>;
}

const EduXpSection = ({
  education,
  experience,
}: {
  education: Array<educationInterface>;
  experience: Array<experienceInterface>;
}) => {
  return (
    <div className="flex gap-6 flex-col md:flex-row lg:flex-col xl:flex-row mb-8">
      <div className="grow basis-0 flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <img src="./icons/education.png" alt="" />
          <h1 className="text-[28px] font-medium">Education</h1>
        </div>
        {education.map((edu) => (
          <div
            className="px-3 py-6 rounded-[20px] odd:bg-[#ffeed9] even:bg-[#ffe3bf]"
            key={edu.id}
          >
            <span className="text-gray-600 text-md block">{`${edu.startMonth} ${edu.StartYear} - ${edu.endMonth} ${edu.endYear}`}</span>
            <h6 className="font-semibold text-lg">{`${edu.degree} - ${edu.stream}`}</h6>
            <h6 className="text-sm">{`${edu.institute}`}</h6>
            <h6 className="text-sm">{`${edu.university}`}</h6>
          </div>
        ))}
      </div>
      <div className="grow basis-0 flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <img src="./icons/work.png" alt="" />
          <h1 className="text-[28px] font-medium">Experience</h1>
        </div>
        {experience.map((xp) => (
          <div
            className="w-full px-3 py-6 rounded-[20px] odd:bg-[#ffe3bf] even:bg-[#ffeed9]"
            key={xp.id}
          >
            <span className="text-gray-600 text-md block">{`${xp.joinMonth} ${xp.joinYear} - ${xp.seperationMonth} ${xp.seperationYear}`}</span>
            <h6 className="font-semibold text-lg">{`${xp.jobTitle}`}</h6>
            <h6 className="mb-3 text-sm font-semibold text-[#00000044]">{`${xp.companyName}`}</h6>
            <details className="cursor-pointer px-2 py-1 rounded-lg max-w-1/2 bg-[#ffffff55]">
              <summary className="mb-2 text-sm font-bold text-orange-700">
                What I did?
              </summary>
              <ul className="ml-4 text-justify text-sm list-disc">
                {xp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EduXpSection;

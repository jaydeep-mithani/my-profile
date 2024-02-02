import PageContainer from "@/components/PageContainer";
import { education } from "@/Content/education";
import { experience } from "@/Content/experience";
import EduXpSection from "./EduXpSection";
import { softSkills, techSkills } from "@/Content/skills";
import Skills from "./Skills";

const Resume = () => {
  return (
    <PageContainer title="Resume">
      <EduXpSection education={education} experience={experience} />
      <Skills softSkills={softSkills} techSkills={techSkills} />
    </PageContainer>
  );
};

export default Resume;

import PageContainer from "@/components/PageContainer";
import LangCard from "./Lang";
import { languages } from "@/Content/languages";

const Languages = () => {
  return (
    <PageContainer title="Languages">
      <div className="flex items-center justify-evenly gap-5 flex-wrap">
        {languages.map((lang) => (
          <LangCard
            key={lang.id}
            lang={lang.lang}
            native={lang.native}
            level={lang.level}
            scale={lang.scale}
          />
        ))}
      </div>
    </PageContainer>
  );
};

export default Languages;

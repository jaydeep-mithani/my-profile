import PageContainer from "@/components/PageContainer";
import Profile from "@/components/Profile";
import { objective } from "@/Content/objective";
import { profiles } from "@/Content/profiles";

const Home = () => {
  return (
    <PageContainer title="My Objective">
      <p className="text-justify leading-5 text-sm sm:text-md mb-5">
        {objective}
      </p>
      <h2 className="text-3xl font-medium mb-3">What I do!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-7">
        {profiles.map((profile) => (
          <Profile
            title={profile.title}
            icon={profile.icon}
            content={profile.content}
          />
        ))}
      </div>
    </PageContainer>
  );
};

export default Home;

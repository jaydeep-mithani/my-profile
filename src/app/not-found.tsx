import PageContainer from "@/components/PageContainer";
import Link from "next/link";

const NotFound = () => {
  return (
    <PageContainer title="Page Not Found">
      <div className="max-w-[90%] md:max-w-[70%] lg:max-w-[90%] xl:max-w-[60%] mx-auto">
        <img src="./icons/404.svg" alt="" />
      </div>
      <p className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-center font-semibold px-6 py-3 mb-4">
        Uh oh! What have you been up to? You&apos;ve come too far from home.
      </p>
      <Link href={"/"} className="block text-center">
        <button
          className="w-full lg:w-auto border-4 border-[#ff9c1a] py-3 px-8 hover:bg-[#ff9c1a] hover:text-white text-[#ff9c1a] rounded-xl font-bold transition-colors duration-500"
          type="button"
        >
          Lets get back home
        </button>
      </Link>
    </PageContainer>
  );
};

export default NotFound;

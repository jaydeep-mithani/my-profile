import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { socialLinks } from "@/Content/socialLinks";
import { info } from "@/Content/info";

const Overview = () => {
  return (
    <aside className="px-6 pb-7 lg:pb-16 pt-5 lg:pt-28 lg:max-w-[400px] bg-white lg:relative rounded-[20px] flex flex-wrap lg:block items-center gap-5">
      <div className="mx-auto">
        <img
          src="./images/avatar.jpeg"
          alt=""
          className="mb-2 shadow-md max-w-[200px] max-h-[200px] object-cover mx-auto rounded-[20px] lg:absolute lg:top-0 lg:-translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2"
        />
        <h1 className="text-center font-bold text-3xl mb-2">Jaydeep Mithani</h1>
        <h6 className="text-center font-light text-gray-500 text-sm mb-2">
          FullStack Developer
        </h6>
        <div className="flex items-center justify-center gap-3 flex-wrap mb-5">
          {socialLinks.map((link) => (
            <a
              href={link.url}
              key={link.title}
              style={{ color: link.color }}
              target="_blank"
              className="flex items-center justify-center bg-[#f2f7fc] p-4 rounded-lg text-2xl"
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </div>
      <div className="p-4 md:p-9 bg-[#f2f7fc] rounded-[20px] w-full">
        <a
          href="./download/resume.pdf"
          className={`px-8 py-4 rounded-full lg:max-w-fit flex items-center justify-center gap-2 text-white mx-auto mb-4 theme-gradient`}
          download={"./download/resume.pdf"}
        >
          <FontAwesomeIcon icon={faDownload} className="block" />
          <span className="block">Resume</span>
        </a>
        <div className="pb-5">
          {info.map((i) => (
            <div
              className="pr-5 py-3 flex items-center gap-2 border-b-gray-200 border-b-[1px]"
              key={i.id}
            >
              <div className="min-w-8">
                <img
                  className="mx-auto exclude-negative"
                  src={i.iconPath}
                  alt=""
                />
              </div>
              <div>
                <h6 className="text-md sm:text-lg text-gray-400 font-medium">
                  {i.title}
                </h6>
                <a
                  href={i.href}
                  target="_blank"
                  className="text-xs sm:text-md font-semibold break-words"
                >
                  {i.value}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Overview;

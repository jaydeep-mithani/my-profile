import { info } from "@/Content/info";
import PageContainer from "@/components/PageContainer";
import ContactForm from "./Form";

const Contact = () => {
  return (
    <PageContainer title="Contact">
      <div className="flex gap-4 flex-col md:flex-row lg:flex-col xl:flex-row mb-5">
        <div className="p-4 rounded-[20px] bg-[#ffeed9] grow basis-0">
          <div className="flex items-center gap-2">
            <img
              className="block exclude-negative"
              src="./icons/ring.png"
              alt=""
            />
            <h6 className="text-xl font-semibold">Phone</h6>
          </div>
          {info
            .filter((i) => i.id === "phone")
            .map((i) => (
              <a key={i.id} href={i.href} className="px-5 py-1 block">
                {i.value}
              </a>
            ))}
        </div>
        <div className="p-4 rounded-[20px] bg-[#f2f7fc] grow basis-0">
          <div className="flex items-center gap-2">
            <img
              className="block exclude-negative"
              src="./icons/email.png"
              alt=""
            />
            <h6 className="text-xl font-semibold">Email</h6>
          </div>
          {info
            .filter((i) => i.id === "email")
            .map((i) => (
              <a key={i.id} href={i.href}>
                {i.value}
              </a>
            ))}
        </div>
      </div>
      <div className="p-5 rounded-[20px] bg-[#f8fbfb]">
        <p className="mb-5">
          I am always open to discussing <b>new projects, opportunities</b> in
          the word of <b>tech, creativity, innovation and enginuety.</b>
        </p>
        <ContactForm />
      </div>
    </PageContainer>
  );
};

export default Contact;

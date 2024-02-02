import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="px-6 md:px-16 lg:px-[100px] pt-[18px] pb-[50px] bg-[#f2f5f9]">
      {children}
    </div>
  );
};

export default Container;

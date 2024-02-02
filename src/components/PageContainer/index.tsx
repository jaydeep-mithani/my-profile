import { ReactNode } from "react";
import Title from "../Title/Title";

const PageContainer = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <div className="px-6 md:px-12 lg:px-8 xl:px-16 py-5 bg-white rounded-[20px] w-full">
      <Title>{title}</Title>
      {children}
    </div>
  );
};

export default PageContainer;

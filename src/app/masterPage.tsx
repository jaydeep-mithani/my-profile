"use client";
import { ReactNode, useState } from "react";

import Container from "@/components/Container";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Overview from "@/components/Overview";

const MasterPage = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className={`${isDarkMode ? "inverted" : ""}`}>
      <Container>
        <Header onClick={setIsDarkMode} />
        <div className="pb-[10px]">
          <Menu />
          <div className="flex gap-5 flex-col lg:flex-row">
            <Overview />
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MasterPage;

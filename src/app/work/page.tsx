"use client";
import { useState } from "react";
import { projects, tabItems } from "@/Content/tabs";
import PageContainer from "@/components/PageContainer";

import styles from "./Work.module.css";
import Project from "./Project";

const Work = () => {
  const [active, setActive] = useState(tabItems[0].id);
  return (
    <PageContainer title="Portfolio">
      <div className="flex items-center justify-end gap-5 mb-3">
        {tabItems.map((tab) => (
          <div
            className={`py-1 text-sm font-semibold relative cursor-pointer ${
              styles.tabmenu
            } ${tab.id === active && styles.active}`}
            key={tab.id}
            onClick={() => {
              setActive(tab.id);
            }}
          >
            {tab.text}
          </div>
        ))}
      </div>
      <div className="p-4 flex flex-wrap gap-4 justify-evenly items-center max-h-[700px] overflow-auto">
        {active === tabItems[0].id
          ? projects.map((project) => (
              <Project
                key={project.id}
                description={project.description}
                thumbnail={project.thumbnail}
                title={project.title}
                url={project.url}
              />
            ))
          : projects
              .filter((project) => project.category === active)
              .map((project) => (
                <Project
                  key={project.id}
                  description={project.description}
                  thumbnail={project.thumbnail}
                  title={project.title}
                  url={project.url}
                />
              ))}
      </div>
    </PageContainer>
  );
};

export default Work;

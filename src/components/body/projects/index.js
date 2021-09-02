import React from "react";
import Separator from "../../../common/social-content/seperator";
import { ProjectData } from "../../../data/projects";
import ProjectCard from "./project-card";

function Project() {
  const data = ProjectData;
  return (
    
    <div className="projects">
      <Separator />
      <label className="section-title">Projects</label>
      


      {data.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
}

export default Project;

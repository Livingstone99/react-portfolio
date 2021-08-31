import React from "react";
import './project-card.css'

function ProjectCard({ project }) {
  return (
    <div className="project-card">
        
      <div className="project-info">
        <label htmlFor="" className="project-title">
          {project.title}
        </label>
        <div className="project-links">
          {project.demo && (
            <a href={project.demo} className="project-link">
              <div className="link-button">
                <i class="fi-rr-globe"></i>Demo
              </div>
            </a>
          )}
          {project.github && (
            <a href={project.github} className="project-link">
              <div className="link-button">
                <i class="devicon-github-original colored"></i>Github
              </div>
            </a>
          )}
        
        </div>
        <p>{project.description}</p>
        <div className="project-tags">
            {project.tags.map((tag)=>{
                return <label htmlFor="" className="tag">{tag}</label>
            })}
        </div>
      </div>
      <img src={project.image} alt="" className="project-photo" />
    </div>
  );
}

export default ProjectCard;

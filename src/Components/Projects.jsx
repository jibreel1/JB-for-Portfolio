import React from "react";
import Data from "../constants/data";
import { BiLink } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({
   project: { img, title, subtitle, preview, github },
}) => (
   <div className="project_card">
      <img src={img} alt="" />
      <div className="project_card_container">
         <h3 className="project_card_title">{title}</h3>
         <p className="project_card_text">{subtitle}</p>
      </div>
      <div className="project_card_preview">
         <a href={preview} target="_blank" rel="noopener noreferrer">
            <BiLink />
            Live Preview
         </a>
         <a href={github} target="_blank" rel="noopener noreferrer">
            <BsGithub />
            View Code
         </a>
      </div>
   </div>
);

const Projects = () => {
   return (
      <div className="section project" id="projects">
         <h1>My Projects</h1>
         <div className="project_container">
            {Data.projects.map((project, index) => (
               <ProjectCard project={project} key={project.id + index} />
            ))}
         </div>
      </div>
   );
};

export default Projects;

import React from "react";
import Images from "../constants/images";
import { SiTailwindcss } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { FaReact, FaSass } from "react-icons/fa";
import { BsBootstrapFill, BsGoogle } from "react-icons/bs";

const Skills = () => {
   return (
      <div className="section skills">
         <h1>My Skills</h1>
         <div className="skills_card">
            <div className="card">
               <img src={Images.front_dev} alt="dev" />
               <h3>Frontend Development</h3>
               <p>
                  I really enjoy putting one and two things together to make
                  elegant and well structured websites.
               </p>
               <h4>Tools I work with</h4>
               <div>
                  <DiJavascript1 />
                  <FaReact />
                  <SiTailwindcss />
                  <FaSass />
                  <BsBootstrapFill />
                  <BsGoogle />
               </div>
            </div>
            <div className="card">
               <img src={Images.soft_skills} alt="softskills" />
               <h3>Soft Skills</h3>
               <p>Creative Thinking</p>
               <p>Critical Thinking</p>
               <p>Problem Solving Skills</p>
               <p>Decision Making</p>
               <p>Communication</p>
               <p>Project management</p>
               <p>Adaptability</p>
            </div>
         </div>
      </div>
   );
};

export default Skills;

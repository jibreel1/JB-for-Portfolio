import React from "react";
import Images from "../constants/images";
import {
   SiTailwindcss,
   SiMaterialui,
   SiFirebase,
   SiGraphql,
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { FaReact, FaSass } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";

import { Fade } from "react-awesome-reveal";

const Skills = () => {
   return (
      <div className="section skills">
         <h1>My Skills</h1>
         <div className="skills_card">
            <Fade duration="3000">
               <div className="card">
                  <img src={Images.front_dev} alt="dev" />
                  <h3>Frontend Development</h3>
                  <p>
                     I really enjoy putting one and two things together to make
                     elegant and well structured websites.
                  </p>
                  <h4>Tools I work with</h4>
                  <div className="card_skills">
                     <span className="card_skill">
                        <FaReact />
                        React
                     </span>
                     <span className="card_skill">
                        <SiMaterialui />
                        Material UI
                     </span>
                     <span className="card_skill">
                        <DiJavascript1 />
                        JavaScript
                     </span>
                     <span className="card_skill">
                        <SiTailwindcss />
                        Tailwind CSS
                     </span>
                     <span className="card_skill">
                        <BsBootstrapFill /> Bootstrap CSS
                     </span>
                     <span className="card_skill">
                        <SiFirebase />
                        Firebase
                     </span>
                     <span className="card_skill">
                        <SiGraphql />
                        Graphql
                     </span>
                     <span className="card_skill">
                        <FaSass /> SASS
                     </span>

                     {/* <BsGoogle /> */}
                  </div>
               </div>
            </Fade>
            <Fade duration="3000">
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
            </Fade>
         </div>
      </div>
   );
};

export default Skills;

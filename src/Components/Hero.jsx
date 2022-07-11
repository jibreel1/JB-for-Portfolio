import React from "react";
import Images from "../constants/images";
import { HiOutlineCursorClick } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";

import { Slide } from "react-awesome-reveal";

const Hero = () => {
   return (
      <div className="section hero">
         <Slide direction="right">
            <div className="hero_img">
               <img src={Images.hero1} alt="" />
            </div>
         </Slide>
         <Slide direction="left">
            <div className="hero_content">
               <span>Hello!</span>
               <h1>
                  I'm Jibreel... <span>a Frontend Developer</span>
               </h1>

               <p>
                  I develop responsive websites, with a focus on the user
                  interface and layouts. My <b>Creativity</b> and{" "}
                  <b>Problem Solving</b> skills are at it's best.
               </p>
               <a
                  href="https://www.linkedin.com/in/jibreel-osunkoya/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <FaLinkedin fontSize="1.5em" />
                  <p>Hit me up!</p>
                  <HiOutlineCursorClick />
               </a>
            </div>
         </Slide>
      </div>
   );
};

export default Hero;

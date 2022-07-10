import React from "react";
import Images from "../constants/images";
import { HiOutlineCursorClick } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
   return (
      <div className="section hero">
         <div
            className="hero_img"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
         >
            <img src={Images.hero1} alt="" />
         </div>
         <div
            className="hero_content"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
         >
            <span>Hello!</span>
            <h1>
               I'm Jibreel... <span>a Frontend Developer</span>
            </h1>

            <p>
               I develop responsive websites, with a focus on the user interface
               and layouts. My <b>Creativity</b> and <b>Problem Solving</b>{" "}
               skills are at it's best.
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
      </div>
   );
};

export default Hero;

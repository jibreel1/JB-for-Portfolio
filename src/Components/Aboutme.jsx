import React from "react";
import Images from "../constants/images";

const Aboutme = () => {
   return (
      <div className="section aboutme" id="about">
         <div className="aboutme_img">
            <img src={Images.hero2} alt="" />
         </div>
         <div className="aboutme_content">
            <h1>How it all started...</h1>
            <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
               suscipit eaque earum quas repellendus tenetur iure dolor
               blanditiis atque accusantium. Perferendis totam repellendus quia.
               Eaque non voluptatum maiores quas commodi.
            </p>
         </div>
      </div>
   );
};

export default Aboutme;

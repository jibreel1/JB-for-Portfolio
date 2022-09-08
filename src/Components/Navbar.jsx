import React, { useState } from "react";
import Images from "../constants/images";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Sidebar from "./Sidebar";

const Navbar = () => {
   const [showMenubar, setShowMenubar] = useState(false);

   const links = [
      {
         id: "1",
         name: "About",
         path: "#about",
      },
      {
         id: "2",
         name: "Projects",
         path: "#projects",
      },
      {
         id: "3",
         name: "Contacts",
         path: "#contacts",
      },
   ];

   const ToggleSidebar = () => {
      showMenubar === true ? setShowMenubar(false) : setShowMenubar(true);
   };

   return (
      <>
         <nav className="section navbar">
            <img src={Images.logo2} alt="logo" />
            <div
               className="navbar_ham"
               onClick={() => {
                  setShowMenubar(!showMenubar);
               }}
            >
               <HiOutlineMenuAlt2 />
            </div>
            <ul className="navbar_links">
               {links.map(link => (
                  <li key={link.id}>
                     <a href={link.path}>{link.name}</a>
                  </li>
               ))}
               <li>
                  <a
                     href="https://drive.google.com/file/d/14TYyZRVmp2V-MfF8yyepyKneh6Gf_aov/view?usp=sharing"
                     target="_blank"
                     rel="noreferrer"
                  >
                     My Résumé
                  </a>
               </li>
            </ul>

            <Sidebar
               toggle={ToggleSidebar}
               links={links}
               showMenu={showMenubar}
            />
         </nav>
      </>
   );
};

export default Navbar;

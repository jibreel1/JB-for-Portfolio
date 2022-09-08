import React from "react";
import { HiOutlineX } from "react-icons/hi";

const Sidebar = ({ toggle, links, showMenu }) => {
   return (
      <div className={`sidebar ${showMenu === true ? "active" : ""}`}>
         <div className="sidebar_close" onClick={toggle}>
            <HiOutlineX />
         </div>
         <ul className="sidebar_links">
            {links.map(link => (
               <li key={link.id} onClick={toggle}>
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
      </div>
   );
};

export default Sidebar;

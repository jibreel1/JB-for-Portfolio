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
         </ul>
      </div>
   );
};

export default Sidebar;

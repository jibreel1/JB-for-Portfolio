import React from "react";
import { HiOutlineX } from "react-icons/hi";
const Sidebar = ({ close, links }) => {
   return (
      <div className="sidebar">
         <div className="sidebar_close" onClick={close}>
            <HiOutlineX />
         </div>
         <ul className="sidebar_links">
            {links.map(link => (
               <li key={link.id} onClick={close}>
                  <a href={link.path}>{link.name}</a>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Sidebar;

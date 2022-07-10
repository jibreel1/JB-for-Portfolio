import React from "react";
import Images from "../constants/images";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const FooterCard = () => (
   <div
      style={{ transform: "translate(-50%, -50%)" }}
      className="footercard"
      data-aos="zoom-in"
      data-aos-duration="1500"
   >
      <img src={Images.contact_us} alt="contact" />
      <div className="footercard_content">
         <h3>Get In Touch</h3>
         <p>
            Do you have any questions? Feel free to drop me a line. <br /> I'd
            love to hear from you.
         </p>
         <a
            href="https://wa.link/s5y2n2"
            target="_blank"
            rel="noopener noreferrer"
         >
            <FaWhatsapp />
            Hit me up
         </a>
      </div>
   </div>
);

const Footer = () => {
   return (
      <div className="section footer" id="contacts">
         <FooterCard />
         <div className="footer_links">
            <img src={Images.logo2} alt="logo" />
            {/* <p className="footer_copyright">&copy; Osunkoya Jubril 2022</p> */}
            <div className="footer_links_social">
               <a
                  href="mailto:osunkoyajubril6000@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <FaEnvelope />
               </a>
               <a
                  href="https://github.com/jibreel1/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <BsGithub />
               </a>
               <a
                  href="https://twitter.com/jubril1005"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <BsTwitter />
               </a>
               <a
                  href="https://www.linkedin.com/in/jibreel-osunkoya/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <FaLinkedin />
               </a>
            </div>
         </div>
         <div className="line" />
         <p className="footer_copyright">&copy; Osunkoya Jubril 2022</p>
      </div>
   );
};

export default Footer;

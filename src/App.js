import React from "react";
import Aboutme from "./Components/Aboutme";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

import "./styles/styles.scss";

const App = () => {
   return (
      <>
         <Navbar />
         <Hero />
         <Aboutme />
         <Skills />
         <Projects />
         <Footer />
      </>
   );
};

export default App;

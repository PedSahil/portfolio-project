import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Containers/home";
import About from "./Containers/about";
import Resume from "./Containers/resume";
import Portfolio from "./Containers/portfolio";
import Contact from "./Containers/contact";
import Skills from "./Containers/skills";
import Navbar from "./components/navbar/home";
import "./app.scss"
const App = () => {
  return (
    <div className="app">
      {/* navbar */}
      <Navbar />
      {/* main page content */}
      <div className="app_main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

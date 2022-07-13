import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import "./App.css";
import Home from "./Components/pages/Home/Home";
import About from "./Components/pages/About/About";
import Projects from "./Components/pages/Projects/Projects";
import Contact from "./Components/pages/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import particles from "./Utils/Particles.json";

const App = () => {
  const location = useLocation();

  const handelinit = async (main) => {
    await loadFull(main);
  };

  const renderParticalsInHome = location.pathname === "/";

  return (
    <div className="App">
      {renderParticalsInHome && (
        <Particles id="particles" options={particles} init={handelinit} />
      )}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;

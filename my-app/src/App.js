import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact";
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
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;

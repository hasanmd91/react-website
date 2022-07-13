import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handelToggle = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <nav className="Navbar_container">
      <div className="navbar_icon_container">
        <Link to={"/"} className=" navbar_icon">
          {" "}
          <FaReact size={30} />{" "}
        </Link>
      </div>

      <div className={`navbar_menu-container ${toggleIcon ? "active" : ""}`}>
        <NavLink to="/" className="navlink">
          {" "}
          Home
        </NavLink>
        <NavLink to="/about" className="navlink">
          About{" "}
        </NavLink>
        <NavLink to="/projects" className="navlink">
          Projects{" "}
        </NavLink>
        <NavLink to="/contact" className="navlink">
          Contact{" "}
        </NavLink>
      </div>
      <div className="navbar_humburger" onClick={handelToggle}>
        {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
      </div>
    </nav>
  );
};

export default Navbar;

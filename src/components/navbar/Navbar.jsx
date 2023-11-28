import React from "react";
import "./navbar.scss";
import { RiMenu3line, RiCloseLine } from "react-icons";
import logo from "../../assets/logo.svg";
function Navbar() {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

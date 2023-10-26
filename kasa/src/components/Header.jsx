import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../css/Header.css";

function Header() {
  return (
    <header>
      <img src={logo} className="Kasalogo" alt="logo de Kasa" />
      <nav>
        <ul>
          <li><NavLink to="/" activeclassname="activeLink">Accueil</NavLink></li>
          <li><NavLink to="/about" activeclassname="activeLink">A Propos</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

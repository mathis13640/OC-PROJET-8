import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../style/Header.css";

function Header() {
  return (
    <div className='headdiv'>
      <img src={logo} className="Kasalogo" alt="logo de Kasa" />
      <nav>
        <ul>
          <li><NavLink to="/" activeclassname="activeLink">Accueil</NavLink></li>
          <li><NavLink to="/about" activeclassname="activeLink">A Propos</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

import React from "react";
import white_logo from "../assets/white_logo.png";
import "../css/Footer.css";

function Footer() {
    return (
        <footer>
            <img src={white_logo} className="logoblanc" alt="logo de Kasa" />
            <h5>© 2020 Kasa. All rights reserved</h5>
        </footer>
    )
}

export default Footer;
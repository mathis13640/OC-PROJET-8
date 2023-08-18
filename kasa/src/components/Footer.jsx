import React from "react";
import white_logo from "../assets/white_logo.png";
import "../style/Footer.css";

function Footer() {
    return (
        <div className='footerdiv'>
            <img src={white_logo} className="logoblanc" alt="logo de Kasa" />
            <h5>© 2020 Kasa. All rights reserved</h5>
        </div>
    )
}

export default Footer;
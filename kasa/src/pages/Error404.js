import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Error404.css";

function Error404() {
  return (
    <div className="mainhome">
      <div className="error">
        <h6>404</h6>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
      </div>
      <div className="link">
        <NavLink to="/">
          <p className="linkhome">Retourner sur la page d’accueil</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Error404;

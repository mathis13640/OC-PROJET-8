import React from "react";
import '../sass/_Home.scss';
import { NavLink } from "react-router-dom";
import Logement from '../data/logements.json';


function Card() {
  return (
    // Conteneur principal pour les cartes de logement
      <div className='locations'>
          {Logement.map((detail) => {
              return (
                  <div className="locate" key={detail.id}>
                      <NavLink to={`/logement/${detail.id}`}><img src={detail.cover} alt={detail.title}/></NavLink>
                      <p>{detail.title}</p>
                  </div>
              )
          })}
      </div>
  )
}

export default Card;
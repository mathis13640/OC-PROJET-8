import React from "react";
import '../css/Home.css';
import { NavLink } from "react-router-dom";
import Logement from '../data/logements.json';

function Card() {
  return (
    // Conteneur principal pour les cartes de logement
    <div className='locations'>
        {Logement.map((detail) => {
            return (
                <div className="locate" key={detail.id}>
                    <NavLink to={`/logement/${detail.id}`}>
                      <img src={detail.cover} alt={detail.title}/>
                      <p>{detail.title}</p>
                    </NavLink>
                </div>
            )
        })}
    </div>
  )
}

export default Card;

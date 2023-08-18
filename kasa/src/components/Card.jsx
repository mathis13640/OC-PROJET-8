import React from "react";
import '../style/Home.css';
import { NavLink } from "react-router-dom";
import Logement from '../data/logements.json';


function Card() {
  return (
      <div className='locations'>
          {Logement.map((detail) => {
              return (
                  <div className="locate" key={detail.id}>
                      <NavLink to={`/fiche/${detail.id}`}><img src={detail.cover} alt={detail.title}/></NavLink> 
                      <p>{detail.title}</p>
                  </div>
              )
          })}
      </div>
  )
}

export default Card;
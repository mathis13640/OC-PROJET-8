import React from "react";
import { useState } from "react";
import flecheD from '../assets/arrowright.png';
import flecheG from '../assets/arrowleft.png';

function Collapse({ i, title, texte }) {
    const [selectedIndex, setSelectedIndex] = useState(null); //hook useState pour créer une variable d'état appelée selectedIndex et une fonction setSelectedIndex pour mettre à jour sa valeur
  
    // fonction toggle est utilisée pour basculer l'index sélectionné
    const toggle = () => {
      setSelectedIndex((prevIndex) => (prevIndex === i ? null : i));
    };
  
    return (
      <>
        <span className="spantitle" onClick={toggle}>
          <span className="spanP">{title}</span>
          <img src={selectedIndex === i ? flecheG : flecheD} alt="flèche" />
        </span>
        <div className={`texte ${selectedIndex === i ? 'show' : ''}`}>
          <span className="spanP">{texte}</span>                    
        </div>
      </>
    );
  }
  
  export default Collapse;
  
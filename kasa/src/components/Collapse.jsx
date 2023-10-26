import React from "react";
import { useState } from "react";
import flecheD from '../assets/arrowright.png';
import flecheU from '../assets/arrowleft.png';

//suis l'index de l'élément actuellement sélectionné
function Collapse({ i, title, texte }) {
   //hook useState pour créer une variable d'état appelée selectedIndex 
    //et une fonction setSelectedIndex pour mettre à jour sa valeur
    const [selectedIndex, setSelectedIndex] = useState(null); 
    
    // fonction toggle est utilisée pour basculer l'index sélectionné
    const toggle = () => {
      setSelectedIndex((prevIndex) => (prevIndex === i ? null : i));
    };
  
    return (
      <>
        <span className="spantitle" onClick={toggle}>
          <span className="spanP">{title}</span>
          <img src={selectedIndex === i ? flecheU : flecheD} alt="flèche" />
        </span>
        <div className={`texte ${selectedIndex === i ? 'show' : ''}`}>
          <span className="spanP">{texte}</span>                    
        </div>
      </>
    );
  }
  
  export default Collapse;
  
import React from "react";
import { useState } from "react";
import flecheD from '../assets/arrowright.png';
import flecheG from '../assets/arrowleft.png';

function Slideshow(props) {
    // L'index de l'image actuellement affichée.
    const [index, setIndex] = useState(0);

    //// Fonction pour afficher l'image précédente. ////
    const goToPrevious = () => {
        // Déterminer si l'image actuelle est la première.
        const firstImage = index === 0;
        // Si c'est la première image, aller à la dernière, sinon aller à l'image précédente.
        const newIndex = firstImage ? props.nbPictures - 1 : index - 1;
        setIndex(newIndex);
    }

    //// Fonction pour afficher l'image suivante. ////
    const goToNext = () => {
        // Déterminer si l'image actuelle est la dernière.
        const lastImage = index === props.nbPictures - 1;
        // Si c'est la dernière image, retourner à la première, sinon aller à l'image suivante.
        const newIndex = lastImage ? 0 : index + 1;
        setIndex(newIndex);
    }
  console.log(props.destination.pictures[index]);
    return (
        
        <>
            {/* Afficher l'image en cours basée sur l'index */}
            <div className ="image-slide"
      style={{
        backgroundImage: `url(${props.destination.pictures[index]})`,
        width: '100%', 
        height: '600px', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        
      }}
    />
            {/* Si il y a plus d'une image, afficher les contrôles du diaporama */}
            {(props.nbPictures > 1) ?
                <>
                    {/* Compteur pour indiquer la position actuelle dans le diaporama */}
                    <div className="counter">{index + 1} / {props.nbPictures}</div>
                    {/* Flèche gauche pour aller à l'image précédente */}
                    <img src={flecheG} alt="flèche gauche" className="arrow arrow_left" onClick={goToPrevious} />
                    {/* Flèche droite pour aller à l'image suivante */}
                    <img src={flecheD} alt="flèche droite" className="arrow arrow_right" onClick={goToNext} />
                </>
                // Si il n'y a qu'une seule image, ne pas afficher les flèches.
                : null}
        </>
    )
}

export default Slideshow;

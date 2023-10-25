import React from "react";
import { useState } from "react";
import flecheD from '../assets/arrowright.png';
import flecheG from '../assets/arrowleft.png';

function Slideshow(props) {
    const [index, setIndex] = useState(0);
    const goToPrevious = () => {
        const firstImage = index === 0;
        const newIndex = firstImage ? props.nbPictures - 1 : index - 1;
        setIndex(newIndex);
    }

    const goToNext = () => {
        const lastImage = index === props.nbPictures - 1;
        const newIndex = lastImage ? 0 : index + 1;
        setIndex(newIndex);
    }

    const backgroundImage = props.destination && props.destination.pictures 
                            ? props.destination.pictures[index] 
                            : null;

    return (
        <>
            {/* Affichage de l'image actuelle */}
            <div className ="image-slide"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    width: '100%', 
                    height: '600px', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                }}
            />
            {/* Si il y a plus d'une image, affichez les contrôles du diaporama */}
            {(props.nbPictures > 1) &&
                <>
                    {/* Affichage de l'index actuel de l'image */}
                    <div className="counter">{index + 1} / {props.nbPictures}</div>
                    {/* Bouton pour naviguer vers l'image précédente */}
                    <img src={flecheG} alt="flèche gauche" className="arrow arrow_left" onClick={goToPrevious} />
                    {/* Bouton pour naviguer vers l'image suivante */}
                    <img src={flecheD} alt="flèche droite" className="arrow arrow_right" onClick={goToNext} />
                </>
            }
        </>
    )
}

export default Slideshow;

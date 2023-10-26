import React from "react";
import starOn from '../assets/staron.png';
import starOff from '../assets/staroff.png';

function RatingStars(props) {
    const rating = props.rating;

    return (
        // Conteneur pour les étoiles de notation
        <span className="star">
            {/* La première étoile est toujours allumée */}
            <img src={starOn}  alt="star" />

            {/* Si la note est supérieure ou égale à X, affichez l'étoile allumée, sinon éteinte */}
            <img src={rating >= 2 ? starOn : starOff} alt="star" />
            <img src={rating >= 3 ? starOn : starOff} alt="star" />
            <img src={rating >= 4 ? starOn : starOff} alt="star" />
            <img src={rating === 5 ? starOn : starOff} alt="star" />
        </span>
    )
}

export default RatingStars;

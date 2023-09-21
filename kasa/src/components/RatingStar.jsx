import React from "react";
import starOn from '../assets/staron.png';
import starOff from '../assets/staroff.png';

function RatingStars(props) {
    const rating = props.props;
    return (  <span className="star">
                    <img src={starOn}  alt="star" />  
                    <img src={rating >= 2 ? starOn : starOff} alt="star" />
                    <img src={rating >= 3 ? starOn : starOff} alt="star" />
                    <img src={rating >= 4 ? starOn : starOff} alt="star" />
                    <img src={rating >= 5 ? starOn : starOff} alt="star" />
                </span>)
}

export default RatingStars;
import React from "react";

function Banner(props) {
  return (
    <div className="miseenavant">
      <img src={props.image} className={props.namealt} alt={props.namealt} />
      {props.h1 && <h1>{props.h1}</h1>}
    </div>
  );
}

export default Banner;

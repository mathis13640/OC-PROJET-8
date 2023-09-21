import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Slideshow from "../components/Slideshow ";
import Logement from "../data/logements.json";
import Collapse from "../components/Collapse";
import RatingStars from "../components/RatingStar";
import "../css/Logement.css";

function FLogement() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Vérification de l'existence de l'ID
  useEffect(() => {
    const idLieu = Logement.find((lieu) => lieu.id === id);
    if (!idLieu) navigate("/page404");
  }, [id, navigate]);

  const destination = Logement.find((lieu) => lieu.id === id) || {};

  const {
    title,
    location,
    host = {},
    pictures = [],
    equipments = [],
    tags = [],
  } = destination;

  return (
    <div className="mainlogement">
      <div className="placement">
        <Slideshow nbPictures={pictures.length} destination={destination} />
      </div>
      <section className="section1">
        <article className="article1">
          <h2 className="droite">{title}</h2>
          <p>{location}</p>
          <span className="filtre">
            {tags.map((detail, index) => (
              <div key={destination.id + index}>
                <p>{detail}</p>
              </div>
            ))}
          </span>
        </article>
        <article className="article2">
          <span>
            <div className="name">
              <p>{host.name}</p>
            </div>
            <div>
              <img src={host.picture} className="avatar" alt="avatar" />
            </div>
          </span>
          <RatingStars props={destination.rating} />
        </article>
      </section>
      <section className="section2">
        <article>
          <Collapse title="Description" texte={destination.description} />
        </article>
        <article>
          <Collapse
            title="Équipements"
            texte={equipments.map((detail, index) => (
              <p key={index + "Z"}>{detail}</p>
            ))}
          />
        </article>
      </section>
    </div>
  );
}

export default FLogement;

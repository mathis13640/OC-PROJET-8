import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Slideshow from "../components/Slideshow ";
import Logement from "../data/logements.json";
import Collapse from "../components/Collapse";
import RatingStars from "../components/RatingStar";
import "../css/Logement.css";

function FLogement() {
  // Récupération de l'ID depuis les paramètres de l'URL
  const { id } = useParams();
  // Utilisation de l'hook useNavigate pour la navigation
  const navigate = useNavigate();

  // Vérification de l'existence de l'ID
  useEffect(() => {
    // Recherche du logement par ID
    const idLieu = Logement.find((lieu) => lieu.id === id);
    // Si l'ID n'existe pas, redirection vers la page 404
    if (!idLieu) navigate("/page404");
  }, [id, navigate]);

  // Récupération des détails du logement
  const destination = Logement.find((lieu) => lieu.id === id) || {};

  // Destructuration (extraction) des propriétés du logement
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
      {/* Affichage du diaporama */}
      <div className="placement">
        <Slideshow nbPictures={pictures.length} destination={destination} />
      </div>
      {/* Affichage des détails du logement */}
      <section className="section1">
        <article className="article1">
          <h2 className="droite">{title}</h2>
          <p>{location}</p>
          {/* Affichage des tags */}
          <span className="filtre">
            {tags.map((detail, index) => (
              <div key={destination.id + index}>
                <p>{detail}</p>
              </div>
            ))}
          </span>
        </article>
        {/* Affichage des détails de l'hôte */}
        <article className="article2">
          <span>
            <div className="name">
              <p>{host.name}</p>
            </div>
            <div>
              <img src={host.picture} className="avatar" alt="avatar" />
            </div>
          </span>
          {/* Affichage de la note */}
          <RatingStars rating={destination.rating} />
        </article>
      </section>
      {/* Affichage de la description et des équipements */}
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

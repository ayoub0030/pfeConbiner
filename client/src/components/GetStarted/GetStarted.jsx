import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs"; // Importation d'une icône pour le bouton
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryTextY">Rejoignez Homyz dès aujourd'hui</span>
          <span className="secondaryTextY">
            Découvrez des services à domicile fiables en quelques clics. Inscrivez-vous maintenant et profitez de la commodité de l'aide professionnelle à portée de main.
          </span>
          <Link to="/register">
            <button className="buttony">
              Commencer <BsArrowRight size={20} style={{ marginLeft: "8px" }} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

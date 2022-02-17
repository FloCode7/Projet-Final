import React from "react";
import "../css/components/Sidebar.css";
import img from "../assets/logo.png";

export default function Sidebard() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">À propos de nous</span>
        <img src={img} alt="img-article" />
        <p>
          Présente en Corse et sur le Continent, Géoréso accompagne les
          entreprises et les particuliers dans l’établissement de relevés
          topographiques, la détection et le géo-référencement de réseaux, la
          réalisation des Plans Géo-Référencé des Ouvrages Construits (PGOC)
          ainsi que la mise en oeuvre d’implatations.
        </p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">Suivez-nous</span>
        <div className="sidebar-socials">
          <a href="https://www.facebook.com/georeso/?ref=page_internal">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/geo_reso/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://fr.linkedin.com/company/georeso">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

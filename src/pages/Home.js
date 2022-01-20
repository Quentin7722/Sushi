import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Hero.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
    url(${BannerImage})`,
      }}
    >
      <div className="headerContainer">
        <h1> Tokyo Sushi </h1>
        <p>Au coeur de la qualité</p>
        <Link to="/menu">
          <button>Voir la Carte</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

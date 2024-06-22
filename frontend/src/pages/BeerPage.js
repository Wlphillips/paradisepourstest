import React from 'react';
import '.css/BeerPage.css';
import beerImage from './images/Home_pouring_beer.jpg';

const BeerPage = () => {
  return (
    <div className="beer-page">
      <div className="header">
        <div className="menu">Menu</div>
        <div className="beer">Beer</div>
        <div className="liquor">Liquor</div>
        <div className="wine">Wine</div>
      </div>
      <div className="content">
        <div className="about-us">ABOUT US</div>
        <div className="beer-of-the-day">Beer OF The day</div>
      </div>
      <div className="image-container">
        <img src={beerImage} alt="Beer" className="beer-image" />
      </div>
    </div>
  );
};

export default BeerPage;

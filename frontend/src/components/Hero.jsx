import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h2>Welcome to Grass Hawk</h2>
        <p>Precision farming starts here. Discover our mole trap solution.</p>
        <p className="tagline">
          <span className="tagline-part">You grow it, we protect it</span>
        </p>
        <button className="hero-btn" onClick={() => navigate('/products')}>
          Explore Products
        </button>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import "./Products.css";
import MoleTrapInstructions from "./MoleTrapInstructions";
import moletrapImage from "../assets/moletrap.png";
// import MoleTrapProductPage from "./MoleTrapProductPage";

const Products = ({ addToCart }) => {
  const productList = [
    {
      name: "Mole Trap Basic",
      price: 799,
      description: "One unit with manual guide",
    },
    {
      name: "Mole Trap Pro",
      price: 1499,
      description: "Two units with support",
    },
  ];

  return (
    <section className="product-section" id="product">
      <div className="product-container">
        <h2>Our Product: Mole Trap</h2>

        {/* Central Image Section with Frame and Animation */}
        <div className="product-image-section">
          <div className="image-frame-container">
            <div className="image-frame">
              <img
                src={moletrapImage}
                alt="Grass Hawk Mole Trap"
                className="product-center-image"
              />
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="product-cards">
          {productList.map((product, index) => (
            <div className="product-card" key={index}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>

        {/* Mole Trap Instructions Section */}
        <div className="instructions-section">
          <MoleTrapInstructions />
        </div>
      </div>
    </section>
    
  );
  
};

export default Products;

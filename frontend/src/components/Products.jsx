// // import React from "react";
// // import "./Products.css";
// // import MoleTrapInstructions from "./MoleTrapInstructions";
// // import moletrapImage from "../assets/moletrap.png";
// // import easySetupIcon from "../assets/easytosetup.png"; // Corrected path
// // import petFriendlyIcon from "../assets/petfriendly.png"; // Corrected path
// // import weatherResistantIcon from "../assets/weatherresistance.png"; // Corrected path
// // import durableIcon from "../assets/durableandheavyduty.png"; // Corrected path
// // import ecoFriendlyIcon from "../assets/reusableandecofriendly.png"; // Corrected path

// // const Products = ({ addToCart }) => {
// //   const productList = [
// //     {
// //       name: "Mole Trap Basic",
// //       price: 799,
// //       description: "One unit with manual guide",
// //     },
// //   ];

// //   return (
// //     <section className="product-section" id="product">
// //       <div className="product-container">
// //         <h2>Our Product: Mole Trap</h2>

// //         {/* Central Image Section with Frame and Animation */}
// //         <div className="product-main-row">
// //           <div className="product-main-image-col">
// //             <div className="product-main-image-card">
// //               <img
// //                 src={moletrapImage}
// //                 alt="Grass Hawk Mole Trap"
// //                 className="product-center-image"
// //               />
// //             </div>
// //           </div>

// //           <div className="product-main-info-col">

// //         {/* Mole Trap Instructions Section */}
// //         <div className="instructions-section">
// //           <MoleTrapInstructions />
// //         </div>

// //         {/* Features Section */}
// //         <div className="features-section">
// //           <h3>Features</h3>
// //           <div className="features-grid">
// //             <div className="feature-card">
// //               <img src={easySetupIcon} alt="Easy to set up" />
// //               <p>Easy to set up</p>
// //             </div>
// //             <div className="feature-card">
// //               <img src={petFriendlyIcon} alt="Pet friendly" />
// //               <p>Pet friendly</p>
// //             </div>
// //             <div className="feature-card">
// //               <img src={weatherResistantIcon} alt="Weather resistant" />
// //               <p>Weather resistant</p>
// //             </div>
// //             <div className="feature-card">
// //               <img src={durableIcon} alt="Durable and heavy duty" />
// //               <p>Durable and heavy duty</p>
// //             </div>
// //             <div className="feature-card">
// //               <img src={ecoFriendlyIcon} alt="Reusable and eco-friendly" />
// //               <p>Reusable and eco-friendly</p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Customer Reviews Section */}
// //         <div className="reviews-section">
// //           <h3>Customer Reviews</h3>
// //           <div className="reviews-grid">
// //             <div className="review-card">
// //               <div className="review-header">
// //                 <span className="reviewer-name">Sarah J.</span>
// //                 <span className="review-rating">★★★★★</span>
// //               </div>
// //               <p className="review-text">
// //                 "This mole trap saved my garden! After trying everything, the
// //                 Grass Hawk worked on the first try. Easy to set up and very
// //                 effective."
// //               </p>
// //             </div>

// //             <div className="review-card">
// //               <div className="review-header">
// //                 <span className="reviewer-name">Mike T.</span>
// //                 <span className="review-rating">★★★★★</span>
// //               </div>
// //               <p className="review-text">
// //                 "Professional quality at an affordable price. The instructions
// //                 were clear and I caught 3 moles in the first week. Highly
// //                 recommend!"
// //               </p>
// //             </div>

// //             <div className="review-card">
// //               <div className="review-header">
// //                 <span className="reviewer-name">Lisa M.</span>
// //                 <span className="review-rating">★★★★☆</span>
// //               </div>
// //               <p className="review-text">
// //                 "Great product! It took a couple of days to figure out the best
// //                 placement, but once I did, it worked perfectly. Customer service
// //                 was very helpful too."
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Products;
// import React from "react";
// import "./Products.css";
// import MoleTrapInstructions from "./MoleTrapInstructions";
// import moletrapImage from "../assets/moletrap.png";
// import easySetupIcon from "../assets/easytosetup.png";
// import petFriendlyIcon from "../assets/petfriendly.png";
// import weatherResistantIcon from "../assets/weatherresistance.png";
// import durableIcon from "../assets/durableandheavyduty.png";
// import ecoFriendlyIcon from "../assets/reusableandecofriendly.png";

// const Products = ({ addToCart }) => {
//   const productList = [
//     {
//       name: "Mole Trap Basic",
//       price: 799,
//       description: "One unit with manual guide",
//     },
//   ];

//   return (
//     <section className="product-section" id="product">
//       <div className="product-container">
//         <h2>Our Product: Mole Trap</h2>

//         {/* Central Image Section with Frame and Animation */}
//         <div className="product-main-row">
//           <div className="product-main-image-col">
//             <div className="product-main-image-card">
//               <img
//                 src={moletrapImage}
//                 alt="Grass Hawk Mole Trap"
//                 className="product-center-image"
//               />
//             </div>
//           </div>

//           <div className="product-main-info-col">
//             {/* Mole Trap Instructions Section */}
//             <div className="instructions-section">
//               <MoleTrapInstructions />
//             </div>

//             {/* Features Section */}
//             <div className="features-section">
//               <h3>Features</h3>
//               <div className="features-grid">
//                 <div className="feature-card">
//                   <img src={easySetupIcon} alt="Easy to set up" />
//                   <p>Easy to set up</p>
//                 </div>
//                 <div className="feature-card">
//                   <img src={petFriendlyIcon} alt="Pet friendly" />
//                   <p>Pet friendly</p>
//                 </div>
//                 <div className="feature-card">
//                   <img src={weatherResistantIcon} alt="Weather resistant" />
//                   <p>Weather resistant</p>
//                 </div>
//                 <div className="feature-card">
//                   <img src={durableIcon} alt="Durable and heavy duty" />
//                   <p>Durable and heavy duty</p>
//                 </div>
//                 <div className="feature-card">
//                   <img src={ecoFriendlyIcon} alt="Reusable and eco-friendly" />
//                   <p>Reusable and eco-friendly</p>
//                 </div>
//               </div>
//             </div>

//             {/* Customer Reviews Section */}
//             <div className="reviews-section">
//               <h3>Customer Reviews</h3>
//               <div className="reviews-grid">
//                 <div className="review-card">
//                   <div className="review-header">
//                     <span className="reviewer-name">Sarah J.</span>
//                     <span className="review-rating">★★★★★</span>
//                   </div>
//                   <p className="review-text">
//                     "This mole trap saved my garden! After trying everything, the
//                     Grass Hawk worked on the first try. Easy to set up and very
//                     effective."
//                   </p>
//                 </div>

//                 <div className="review-card">
//                   <div className="review-header">
//                     <span className="reviewer-name">Mike T.</span>
//                     <span className="review-rating">★★★★★</span>
//                   </div>
//                   <p className="review-text">
//                     "Professional quality at an affordable price. The instructions
//                     were clear and I caught 3 moles in the first week. Highly
//                     recommend!"
//                   </p>
//                 </div>

//                 <div className="review-card">
//                   <div className="review-header">
//                     <span className="reviewer-name">Lisa M.</span>
//                     <span className="review-rating">★★★★☆</span>
//                   </div>
//                   <p className="review-text">
//                     "Great product! It took a couple of days to figure out the best
//                     placement, but once I did, it worked perfectly. Customer service
//                     was very helpful too."
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div> {/* ✅ closing .product-main-info-col */}
//         </div> {/* ✅ closing .product-main-row */}
//       </div> {/* ✅ closing .product-container */}
//     </section>
//   );
// };

// export default Products;

import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import "./Products.css";
import MoleTrapInstructions from "./MoleTrapInstructions";
import moletrapImage from "../assets/moletrap.png";
import trapImage from "../assets/trap.png";
import moleTrapHeroImage from "../assets/mole-trap-hero.jpg";
import easySetupIcon from "../assets/easytosetup.png";
import petFriendlyIcon from "../assets/petfriendly.png";
import weatherResistantIcon from "../assets/weatherresistance.png";
import durableIcon from "../assets/durableandheavyduty.png";
import ecoFriendlyIcon from "../assets/reusableandecofriendly.png";

const Products = ({ addToCart }) => {
  const { addToCart: addToCartContext } = useCart();
  const [searchParams] = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState('grasshawk');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showProductModal, setShowProductModal] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);

  // Handle URL parameters for product selection
  useEffect(() => {
    const productParam = searchParams.get('product');
    if (productParam && ['grasshawk', 'ecoseed', 'wintershield', 'naturefeed'].includes(productParam)) {
      setSelectedProduct(productParam);
    }
  }, [searchParams]);

  // Add to cart function that connects to backend
  const addToCartBackend = async (product) => {
    if (!product || !product.available) {
      setMessage('This product is coming soon!');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    try {
      setLoading(true);
      setMessage('');

      // Use the cart context to add item
      const result = await addToCartContext({
        id: product.name.toLowerCase().replace(/\s+/g, '-'),
        name: product.name,
        price: product.price,
        image: '/api/placeholder/300/200'
      });

      if (result.success) {
        setMessage('Product added to cart successfully!');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage(result.message || 'Failed to add product to cart');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      setMessage('Error adding to cart. Please try again.');
      setTimeout(() => setMessage(''), 3000);
    } finally {
      setLoading(false);
    }
  };
  
  const productList = {
    grasshawk: {
      name: "Grasshawk Mole Trap",
      price: 799,
      description:
        "Get rid of moles quickly and safely with the Grasshawk Mole Trap. Designed for efficiency, reliability, and eco-friendliness, this durable trap ensures effective mole control without harmful chemicals. Easy to set up and reusable, it's the perfect solution for protecting your lawn and garden.",
      available: true,
      company: "VIBGYOR Maple",
      productLine: "Grasshawk Series",
      image: moletrapImage
    },
    ecoseed: {
      name: "EcoSeed Pro",
      price: 0,
      description:
        "Premium grass seed blend optimized for Canadian climates. Coming soon with advanced seed technology.",
      available: false,
      company: "VIBGYOR Maple",
      productLine: "EcoSeed Series",
      image: trapImage
    },
    wintershield: {
      name: "WinterShield",
      price: 0,
      description:
        "Advanced winter protection for your garden. Coming soon with innovative cold-weather solutions.",
      available: false,
      company: "VIBGYOR Maple",
      productLine: "WinterShield Series",
      image: moleTrapHeroImage
    },
    naturefeed: {
      name: "NatureFeed",
      price: 0,
      description:
        "Natural plant nutrition system. Coming soon with eco-friendly feeding solutions.",
      available: false,
      company: "VIBGYOR Maple",
      productLine: "NatureFeed Series",
      image: moletrapImage
    }
  };

  const currentProduct = productList[selectedProduct] || productList.grasshawk;

  // Function to handle product card click
  const handleProductClick = (productKey) => {
    const product = productList[productKey];
    setModalProduct(product);
    setShowProductModal(true);
  };

  // Function to close modal
  const closeModal = () => {
    setShowProductModal(false);
    setModalProduct(null);
  };

  return (
    <section className="product-section" id="product">
      <div className="product-container">
        <h2>Our Products</h2>

        {/* ==== Product Cards Grid ==== */}
        <div className="product-cards-grid">
          {Object.entries(productList).map(([key, product]) => (
            <div key={key} className="product-card" onClick={() => handleProductClick(key)}>
              <div className="product-card-image">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-card-img"
                />
              </div>
              <div className="product-card-content">
                <h3 className="product-card-title">{product.name}</h3>
                <p className="product-card-description">
                  {product.description.length > 80 
                    ? `${product.description.substring(0, 80)}...` 
                    : product.description}
                </p>
                <div className="product-card-price">
                  {product.available ? (
                    <span className="price">${product.price}</span>
                  ) : (
                    <span className="coming-soon">Coming Soon</span>
                  )}
                </div>
                <button className="know-more-btn">
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* ==== END Product Cards Grid ==== */}
      </div>

      {/* ==== Product Detail Modal ==== */}
      {showProductModal && modalProduct && (
        <div className="fullscreen-modal-overlay" onClick={closeModal}>
          <div className="fullscreen-modal" onClick={(e) => e.stopPropagation()}>
            <button className="fullscreen-close-btn" onClick={closeModal}>
              ×
            </button>
            
            <div className="fullscreen-content">
              <div className="fullscreen-header">
                <h2>Our Product: {modalProduct.name}</h2>
              </div>

                {/* ==== Product Row (Image + Info) ==== */}
                <div className="product-main-row">
                  <div className="product-main-image-col">
                    <div className="product-main-image-card">
                      <img
                        src={modalProduct.image}
                        alt={modalProduct.name}
                        className="product-center-image"
                      />
                    </div>
                  </div>

                  <div className="product-main-info-col">
                    <div className="product-main-info-card">
                      <div className="product-company-info">
                        <span className="company-name">{modalProduct.company}</span>
                        <span className="product-line">{modalProduct.productLine}</span>
                      </div>
                      <div className="product-title-with-logo">
                        <div className="product-logo">
                          <svg width="40" height="40" viewBox="0 0 40 40" className="maple-leaf-small">
                            <defs>
                              <filter id="small-shadow" x="-20%" y="-20%" width="140%" height="140%">
                                <feDropShadow dx="1" dy="1" stdDeviation="1" floodColor="#888" floodOpacity="0.3"/>
                              </filter>
                            </defs>
                            <path d="M20 3 L23 8 L28 6 L26 12 L32 13 L28 18 L30 22 L23 20 L20 28 L17 20 L10 22 L12 18 L8 13 L14 12 L12 6 L17 8 Z" 
                                  fill="black" stroke="red" strokeWidth="1" filter="url(#small-shadow)"/>
                          </svg>
                        </div>
                        <h3>{modalProduct.name}</h3>
                      </div>
                      <p>{modalProduct.description}</p>
                      {modalProduct.available ? (
                        <>
                          <p>
                            <strong>${modalProduct.price}</strong>
                          </p>
                          <button 
                            onClick={() => addToCartBackend(modalProduct)}
                            disabled={loading}
                            className="add-to-cart-btn"
                          >
                            {loading ? 'Adding...' : 'Add to Cart'}
                          </button>
                        </>
                      ) : (
                        <>
                          <p className="coming-soon-price">Coming Soon</p>
                          <button disabled className="coming-soon-btn">
                            Coming Soon
                          </button>
                        </>
                      )}
                      {message && (
                        <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
                          {message}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* ==== END Product Row ==== */}

                {/* ==== Instructions Section ==== */}
                <div className="instructions-section">
                  <MoleTrapInstructions />
                </div>

                {/* ==== Features Section ==== */}
                <div className="features-section">
                  <h3>Features</h3>
                  <div className="features-grid">
                    <div className="feature-card" style={{
                      borderRadius: '0px',
                      width: '200px',
                      height: '200px',
                      minWidth: '200px',
                      maxWidth: '200px',
                      minHeight: '200px',
                      maxHeight: '200px'
                    }}>
                      <img src={easySetupIcon} alt="Easy to set up" />
                      <p>Easy to set up</p>
                    </div>
                    <div className="feature-card" style={{
                      borderRadius: '0px',
                      width: '200px',
                      height: '200px',
                      minWidth: '200px',
                      maxWidth: '200px',
                      minHeight: '200px',
                      maxHeight: '200px'
                    }}>
                      <img src={petFriendlyIcon} alt="Pet friendly" />
                      <p>Pet friendly</p>
                    </div>
                    <div className="feature-card" style={{
                      borderRadius: '0px',
                      width: '200px',
                      height: '200px',
                      minWidth: '200px',
                      maxWidth: '200px',
                      minHeight: '200px',
                      maxHeight: '200px'
                    }}>
                      <img src={weatherResistantIcon} alt="Weather resistant" />
                      <p>Weather resistant</p>
                    </div>
                    <div className="feature-card" style={{
                      borderRadius: '0px',
                      width: '200px',
                      height: '200px',
                      minWidth: '200px',
                      maxWidth: '200px',
                      minHeight: '200px',
                      maxHeight: '200px'
                    }}>
                      <img src={durableIcon} alt="Durable and heavy duty" />
                      <p>Durable and heavy duty</p>
                    </div>
                    <div className="feature-card" style={{
                      borderRadius: '0px',
                      width: '200px',
                      height: '200px',
                      minWidth: '200px',
                      maxWidth: '200px',
                      minHeight: '200px',
                      maxHeight: '200px'
                    }}>
                      <img src={ecoFriendlyIcon} alt="Reusable and eco-friendly" />
                      <p>Reusable and eco-friendly</p>
                    </div>
                  </div>
                </div>

                {/* ==== Customer Reviews Section ==== */}
                <div className="reviews-section">
                  <h3>Customer Reviews</h3>
                  <div className="reviews-grid">
                    <div className="review-card">
                      <div className="review-header">
                        <span className="reviewer-name">Sarah J.</span>
                        <span className="review-rating">★★★★★</span>
                      </div>
                      <p className="review-text">
                        "This mole trap saved my garden! After trying everything, the
                        Grass Hawk worked on the first try. Easy to set up and very
                        effective."
                      </p>
                    </div>

                    <div className="review-card">
                      <div className="review-header">
                        <span className="reviewer-name">Mike T.</span>
                        <span className="review-rating">★★★★★</span>
                      </div>
                      <p className="review-text">
                        "Professional quality at an affordable price. The instructions
                        were clear and I caught 3 moles in the first week. Highly
                        recommend!"
                      </p>
                    </div>

                    <div className="review-card">
                      <div className="review-header">
                        <span className="reviewer-name">Lisa M.</span>
                        <span className="review-rating">★★★★☆</span>
                      </div>
                      <p className="review-text">
                        "Great product! It took a couple of days to figure out the best
                        placement, but once I did, it worked perfectly. Customer service
                        was very helpful too."
                      </p>
                    </div>
                  </div>
                </div>
                {/* ==== END Customer Reviews ==== */}
            </div>
          </div>
        </div>
      )}
      {/* ==== END Product Detail Modal ==== */}
    </section>
  );
};

export default Products;

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

import React from "react";
import "./Products.css";
import MoleTrapInstructions from "./MoleTrapInstructions";
import moletrapImage from "../assets/moletrap.png";
import easySetupIcon from "../assets/easytosetup.png";
import petFriendlyIcon from "../assets/petfriendly.png";
import weatherResistantIcon from "../assets/weatherresistance.png";
import durableIcon from "../assets/durableandheavyduty.png";
import ecoFriendlyIcon from "../assets/reusableandecofriendly.png";

const Products = ({ addToCart }) => {
  const productList = [
    {
      name: "Mole Trap Basic",
      price: 799,
      description: "One unit with manual guide",
    },
  ];

  return (
    <section className="product-section" id="product">
      <div className="product-container">
        <h2>Our Product: Mole Trap</h2>

        {/* ==== Product Row (Image + Info) ==== */}
        <div className="product-main-row">
          <div className="product-main-image-col">
            <div className="product-main-image-card">
              <img
                src={moletrapImage}
                alt="Grass Hawk Mole Trap"
                className="product-center-image"
              />
            </div>
          </div>

          <div className="product-main-info-col">
            <div className="product-main-info-card">
              <h3>{productList[0].name}</h3>
              <p>{productList[0].description}</p>
              <p>
                <strong>${productList[0].price}</strong>
              </p>
              <button onClick={() => addToCart(productList[0])}>
                Add to Cart
              </button>
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
            <div className="feature-card">
              <img src={easySetupIcon} alt="Easy to set up" />
              <p>Easy to set up</p>
            </div>
            <div className="feature-card">
              <img src={petFriendlyIcon} alt="Pet friendly" />
              <p>Pet friendly</p>
            </div>
            <div className="feature-card">
              <img src={weatherResistantIcon} alt="Weather resistant" />
              <p>Weather resistant</p>
            </div>
            <div className="feature-card">
              <img src={durableIcon} alt="Durable and heavy duty" />
              <p>Durable and heavy duty</p>
            </div>
            <div className="feature-card">
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
    </section>
  );
};

export default Products;

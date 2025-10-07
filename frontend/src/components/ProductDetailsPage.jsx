import React, { useState } from 'react';
import { useCart } from "../contexts/CartContext";
import { translations } from "../utils/translations";
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

const ProductDetailsPage = ({ language = 'en' }) => {
  const t = translations[language] || translations.en;
  const { addToCart: addToCartContext } = useCart();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Product list with the main Grasshawk product and additional coming soon products
  const products = {
    grasshawk: {
      name: t.products.grasshawk.name,
      price: 20,
      description: t.products.grasshawk.description,
      available: true,
      company: "VIBGYOR Maple",
      productLine: "Grasshawk Series",
      image: moletrapImage
    },
    ecoseed: {
      name: t.products.ecoseed.name,
      price: 0,
      description: t.products.ecoseed.description,
      available: false,
      company: "VIBGYOR Maple",
      productLine: "EcoSeed Series",
      image: trapImage
    },
    wintershield: {
      name: t.products.wintershield.name,
      price: 0,
      description: t.products.wintershield.description,
      available: false,
      company: "VIBGYOR Maple",
      productLine: "WinterShield Series",
      image: moleTrapHeroImage
    },
    naturefeed: {
      name: t.products.naturefeed.name,
      price: 0,
      description: t.products.naturefeed.description,
      available: false,
      company: "VIBGYOR Maple",
      productLine: "NatureFeed Series",
      image: moletrapImage
    },
    gardenpro: {
      name: t.products.gardenpro?.name || "GardenPro Shield",
      price: 0,
      description: t.products.gardenpro?.description || "Advanced garden protection system designed for year-round plant care. Coming soon with smart sensor technology.",
      available: false,
      company: "VIBGYOR Maple",
      productLine: "GardenPro Series",
      image: trapImage
    },
    soilmaster: {
      name: t.products.soilmaster?.name || "SoilMaster Pro",
      price: 0,
      description: t.products.soilmaster?.description || "Professional soil enhancement solution for optimal plant growth. Coming soon with organic nutrient formulations.",
      available: false,
      company: "VIBGYOR Maple",
      productLine: "SoilMaster Series",
      image: moleTrapHeroImage
    }
  };

  // Default to the main Grasshawk product
  const currentProduct = products.grasshawk;

  // Add to cart function
  const addToCartBackend = async (product) => {
    if (!product || !product.available) {
      setMessage(t.products.comingSoon);
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    try {
      setLoading(true);
      setMessage('');

      const result = await addToCartContext({
        id: product.name.toLowerCase().replace(/\s+/g, '-'),
        name: product.name,
        price: product.price,
        image: '/api/placeholder/300/200'
      });

      if (result.success) {
        setMessage(t.products.addedToCart);
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage(result.message || t.products.errorAddingToCart);
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      setMessage(t.products.errorAddingToCart);
      setTimeout(() => setMessage(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="product-section" id="product">
      <div className="product-container">
        <div className="fullscreen-content">
          <div className="fullscreen-header">
            <h2>{t.products.ourProduct}: {currentProduct.name}</h2>
          </div>

          {/* ==== Product Row (Image + Info) ==== */}
          <div className="product-main-row">
            <div className="product-main-image-col">
              <div className="product-main-image-card">
                <img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  className="product-center-image"
                />
              </div>
            </div>

            <div className="product-main-info-col">
              <div className="product-main-info-card">
                <div className="product-company-info">
                  <span className="company-name">{currentProduct.company}</span>
                  <span className="product-line">{currentProduct.productLine}</span>
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
                  <h3>{currentProduct.name}</h3>
                </div>
                <p>{currentProduct.description}</p>
                {currentProduct.available ? (
                  <>
                    <p>
                      <strong>${currentProduct.price}</strong>
                    </p>
                    <button 
                      onClick={() => addToCartBackend(currentProduct)}
                      disabled={loading}
                      className="add-to-cart-btn"
                    >
                      {loading ? t.products.adding || 'Adding...' : t.products.addToCart}
                    </button>
                  </>
                ) : (
                  <>
                    <p className="coming-soon-price">{t.products.comingSoon}</p>
                    <button disabled className="coming-soon-btn">
                      {t.products.comingSoon}
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

          {/* ==== Other Products Preview ==== */}
          <div className="other-products-section">
            <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center' }}>
              Other VIBGYOR Maple Products
            </h3>
            <div className="other-products-grid">
              {Object.entries(products).filter(([key]) => key !== 'grasshawk').map(([key, product]) => (
                <div key={key} className="other-product-card">
                  <div className="other-product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="other-product-info">
                    <h4>{product.name}</h4>
                    <p>{product.description.length > 80 
                      ? `${product.description.substring(0, 80)}...` 
                      : product.description}</p>
                    <div className="other-product-status">
                      <span className="coming-soon-small">{t.products.comingSoon}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ==== Instructions Section ==== */}
          <div className="instructions-section">
            <MoleTrapInstructions />
          </div>

          {/* ==== Features Section ==== */}
          <div className="features-section">
            <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>{t.products.features}</h3>
            <div className="features-grid">
              <div className="feature-card" style={{
                borderRadius: '0px',
                width: '250px',
                height: '250px',
                minWidth: '250px',
                maxWidth: '250px',
                minHeight: '250px',
                maxHeight: '250px'
              }}>
                <img src={easySetupIcon} alt={t.products.easyToSetUp} style={{ width: '120px', height: '120px' }} />
                <p style={{ fontSize: '1.1rem', fontWeight: '600', marginTop: '15px' }}>{t.products.easyToSetUp}</p>
              </div>
              <div className="feature-card" style={{
                borderRadius: '0px',
                width: '250px',
                height: '250px',
                minWidth: '250px',
                maxWidth: '250px',
                minHeight: '250px',
                maxHeight: '250px'
              }}>
                <img src={petFriendlyIcon} alt={t.products.petFriendly} style={{ width: '120px', height: '120px' }} />
                <p style={{ fontSize: '1.1rem', fontWeight: '600', marginTop: '15px' }}>{t.products.petFriendly}</p>
              </div>
              <div className="feature-card" style={{
                borderRadius: '0px',
                width: '250px',
                height: '250px',
                minWidth: '250px',
                maxWidth: '250px',
                minHeight: '250px',
                maxHeight: '250px'
              }}>
                <img src={weatherResistantIcon} alt={t.products.weatherResistant} style={{ width: '120px', height: '120px' }} />
                <p style={{ fontSize: '1.1rem', fontWeight: '600', marginTop: '15px' }}>{t.products.weatherResistant}</p>
              </div>
              <div className="feature-card" style={{
                borderRadius: '0px',
                width: '250px',
                height: '250px',
                minWidth: '250px',
                maxWidth: '250px',
                minHeight: '250px',
                maxHeight: '250px'
              }}>
                <img src={durableIcon} alt={t.products.durableAndHeavyDuty} style={{ width: '120px', height: '120px' }} />
                <p style={{ fontSize: '1.1rem', fontWeight: '600', marginTop: '15px' }}>{t.products.durableAndHeavyDuty}</p>
              </div>
              <div className="feature-card" style={{
                borderRadius: '0px',
                width: '250px',
                height: '250px',
                minWidth: '250px',
                maxWidth: '250px',
                minHeight: '250px',
                maxHeight: '250px'
              }}>
                <img src={ecoFriendlyIcon} alt={t.products.reusableAndEcoFriendly} style={{ width: '120px', height: '120px' }} />
                <p style={{ fontSize: '1.1rem', fontWeight: '600', marginTop: '15px' }}>{t.products.reusableAndEcoFriendly}</p>
              </div>
            </div>
          </div>

          {/* ==== Customer Reviews Section ==== */}
          <div className="reviews-section">
            <h3>{t.products.reviews}</h3>
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
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;

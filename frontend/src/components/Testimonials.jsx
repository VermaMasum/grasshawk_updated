import React, { useState } from "react";
import "./Testimonials.css";

const testimonialsData = [
  {
    id: 1,
    rating: 5,
    quote: "Grasshawk completely transformed our backyard! We were worried about using chemicals around our kids and pets, but this eco-friendly solution gave us the lush green lawn we always wanted. The Canadian winter didn't stand a chance!",
    name: "Sarah & Mike Johnson",
    location: "Calgary, AB",
    productUsed: "Grasshawk",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    rating: 5,
    quote: "The mole trap is incredibly effective and safe. We love that it's eco-friendly and made in Canada. Highly recommend to anyone dealing with pesky moles!",
    name: "John & Emily Smith",
    location: "Toronto, ON",
    productUsed: "Mole Trap",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { rating, quote, name, location, productUsed, photo } = testimonialsData[currentIndex];

  return (
    <section className="testimonials-section">
      <h1>What Our Customers Say</h1>
      <p className="subtitle">
        Real stories from Canadian families who've transformed their outdoor spaces with our products
      </p>
      <div className="testimonial-card">
        <div className="quote-icon">“”</div>
        <div className="stars">
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} className="star">★</span>
          ))}
        </div>
        <p className="quote-text">{quote}</p>
        <div className="customer-info">
          <img src={photo} alt={name} className="customer-photo" />
          <div className="customer-details">
            <strong>{name}</strong>
            <span>{location}</span>
            <span className="product-used">Used: {productUsed}</span>
          </div>
        </div>
        <div className="carousel-controls">
          <button onClick={prevTestimonial} aria-label="Previous testimonial" className="carousel-btn">&#60;</button>
          <button onClick={nextTestimonial} aria-label="Next testimonial" className="carousel-btn">&#62;</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

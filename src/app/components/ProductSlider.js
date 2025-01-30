import React, { useState } from "react";
import "../product.css";

const ProductSlider = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  return (
   <div className="slider-container">
  <h1 className="slider-title">Featured Products</h1>

  <div className="slider-navigation">
    <button className="prev-button" onClick={goToPrevious}>&#10094;</button>

    <div className="product-slide">
      <img
        src={products[currentIndex].image}
        alt={products[currentIndex].name}
        className="product-image"
      />
      <div className="product-info">
        <h2>{products[currentIndex].name}</h2>
        <p>{products[currentIndex].description}</p>
        <span className="product-price">${products[currentIndex].price.toFixed(2)}</span>
      </div>
    </div>

    <button className="next-button" onClick={goToNext}>&#10095;</button>
  </div>
</div>

  );
};

export default ProductSlider;

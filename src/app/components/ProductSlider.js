import React, { useState } from 'react';



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
      <button className="prev-button" onClick={goToPrevious}>
        &#10094;
      </button>
      <div className="product-slide">
        <img
          src={products[currentIndex].image}
          alt={products[currentIndex].name}
          className="product-image"
        />
        <h2>{products[currentIndex].name}</h2>
        <p>{products[currentIndex].description}</p>
        <span>${products[currentIndex].price}</span>
      </div>
      <button className="next-button" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default ProductSlider;

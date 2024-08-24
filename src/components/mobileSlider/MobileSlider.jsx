import React, { useState, useEffect } from "react";
import "./MobileSlider.css";

const CustomSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="slide-image"
            />
          </div>
        ))}
      </div>
      <div className="navigation-dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;

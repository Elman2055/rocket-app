import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Carousel.css";

const Carousel = ({ items, title }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const itemsPerPage = 3;
  const totalSlides = Math.ceil(items.length / itemsPerPage);
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: itemsPerPage,
    slidesToScroll: itemsPerPage,
    arrows: false,
    beforeChange: (current, next) => {
      setCurrentSlide(Math.floor(next / itemsPerPage));
    },
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        textAlign: "center",
        marginBottom: "40px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h4" className="carousel-title">
          {title}
        </Typography>
        <div style={{ display: "flex" }}>
          <Button
            onClick={handlePrev}
            variant="outlined"
            sx={{
              backgroundColor: "#1A1A1A",
              color: "#EFEFEF",
              fontSize: "14px",
              padding: "2px 10px",
              "&:hover": {
                backgroundColor: "#333333",
              },
            }}
          >
            &#8592;
          </Button>
          <Typography sx={{ margin: "0 10px" }}>
            {currentSlide + 1}/{totalSlides}
          </Typography>
          <Button
            onClick={handleNext}
            variant="outlined"
            sx={{
              backgroundColor: "#1A1A1A",
              color: "#EFEFEF",
              fontSize: "14px",
              padding: "2px 10px",
              "&:hover": {
                backgroundColor: "#333333",
              },
            }}
          >
            &#8594;
          </Button>
        </div>
      </Box>

      <Slider ref={sliderRef} {...settings}>
        {items.map((item) => (
          <Link
            key={item.product_id}
            to={`/product/${item.product_id}`}
            style={{
              textDecoration: "none",
              padding: "10px",
              boxSizing: "border-box",
            }}
          >
            <img
              src={`https://approcket.kz/api/products/previewImage/${item.image_preview_one}`}
              alt={item.title}
              style={{ aspectRatio: "8/9", width: "80%", cursor: "pointer" }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
            <h3>{item.title}</h3>
            <p>{item.price} ₸</p>
          </Link>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;

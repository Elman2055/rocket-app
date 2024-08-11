import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { Box, Button, Typography } from "@mui/material";
import "./Carousel.css";

const Carousel = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 3; // Количество элементов на странице
  const totalSlides = Math.ceil(items.length / itemsPerPage); // Количество пачек
  const sliderRef = useRef(null); // Создаем реф для слайдера

  const settings = {
    dots: false,
    infinite: false, // Не зацикливаем карусель
    slidesToShow: itemsPerPage, // Количество элементов на странице
    slidesToScroll: itemsPerPage, // Прокручиваем столько же элементов
    arrows: false,
    beforeChange: (current, next) => {
      setCurrentSlide(Math.floor(next / itemsPerPage)); // Обновляем номер текущего слайда
    },
  };

  // Функции для управления слайдером
  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <Box sx={{ width: "100%", position: "relative", textAlign: "center" }}>
      {/* Кнопки и число страниц справа над слайдером */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h4" className="carousel-title">
          Самая востребованная утилита
        </Typography>
        <div style={{ display: "flex" }}>
          <Button
            onClick={handlePrev}
            variant="outlined"
            sx={{
              backgroundColor: "#1A1A1A", // Фон кнопки
              color: "#EFEFEF", // Цвет текста
              fontSize: "14px", // Уменьшаем размер шрифта
              padding: "2px 10px", // Уменьшаем отступы
              "&:hover": {
                backgroundColor: "#333333", // Цвет при наведении
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
              backgroundColor: "#1A1A1A", // Фон кнопки
              color: "#EFEFEF", // Цвет текста
              fontSize: "14px", // Уменьшаем размер шрифта
              padding: "2px 10px", // Уменьшаем отступы
              "&:hover": {
                backgroundColor: "#333333", // Цвет при наведении
              },
            }}
          >
            &#8594;
          </Button>
        </div>
      </Box>

      <Slider ref={sliderRef} {...settings}>
        {items.map((item, index) => (
          <div key={index} style={{ padding: "10px", boxSizing: "border-box" }}>
            <img
              src={item.image}
              alt={item.title}
              style={{ height: "80%", width: "25vw" }}
            />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;

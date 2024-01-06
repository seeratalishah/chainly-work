"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./sliderCard.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <img className="custom-arrow" src="/arrowPrev.png" alt="Previous" style={{width: "60px", height: "60px"}}/>,
  nextArrow: <img className="custom-arrow" src="/arrowNext.png" alt="Next" style={{width: "60px", height: "60px"}}/>,
};

const SliderCard = ({ slides }) => {
  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          {/* <img src="" alt={`Slide ${index}`} /> */}
          <div><p>{slide.text}</p></div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderCard;

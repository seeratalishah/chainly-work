"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderCard.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: (
    <img
      className="custom-arrow"
      src="/arrowPrev.png"
      alt="Previous"
    />
  ),
  nextArrow: (
    <img
      className="custom-arrow"
      src="/arrowNext.png"
      alt="Next"
    />
  ),
};

const SliderCard = ({ slides }) => {
  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="bg-slideBG rounded-xl" style={{ height: "320px" }}>
          <div className="grid grid-cols-3 w-full">
            <div className="col-span-1">
              <video className="rounded-l-xl" width="100%" controls>
                <source src="/video.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="col-span-2 p-4">
              <p className="mb-4">
                Tim and Dan Joo, Co-Founders <span>| HAERFEST</span>
              </p>
              <p>
              “When you want to create a business bigger than yourself,you need a lot of help. That’s what Fiverr does.”
              </p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};


export default SliderCard;

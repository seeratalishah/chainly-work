"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Modal } from "antd";
import "./sliderCard.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: (
    <img className="custom-arrow" src="/arrowPrev.png" alt="Previous" />
  ),
  nextArrow: <img className="custom-arrow" src="/arrowNext.png" alt="Next" />,
};

const SliderCard = ({ slides }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const { theme, setTheme } = useTheme();

  const playVideo = () => {
    setIsPlaying(true);
    setVisible(true);
  };

  const handleCancel = () => {
    setIsPlaying(false);
    setVisible(false);
  };

  return (
    <>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              theme === "dark" ? "bg-[#0A0A0A80]" : "bg-[#0a0a0a00]"
            }  rounded-xl`}
            style={{ height: "320px" }}
          >
            <div className="grid grid-cols-3 w-full">
              <div className="col-span-1 relative">
                {!isPlaying && (
                  <div className="overlay cursor-pointer" onClick={playVideo}>
                    <svg
                      className="absolute top-[40%] left-[40%] pointer-events-none  duration-300 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      width="72"
                      height="72"
                    >
                      <circle
                        className={`${
                          theme === "dark"
                            ? "fill-[#000000B2]"
                            : "fill-[#FFFFFFB2]"
                        } `}
                        cx="36"
                        cy="36"
                        r="36"
                        fillOpacity=".8"
                      />
                      <path
                        className={`drop-shadow-2xl ${
                          theme === "dark" ? "fill-white" : "fill-black"
                        } `}
                        d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z"
                      />
                    </svg>
                  </div>
                )}
                <img
                  className="cursor-pointer rounded-l-xl w-full h-full"
                  onClick={playVideo}
                  src="/videoThumbnail.png"
                  alt="videoThumbnail"
                />
              </div>
              <div className="col-span-2 p-12">
                <p
                  className="mb-4 flex items-center"
                  style={{
                    fontSize: "28px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "28px",
                  }}
                >
                  Tim and Dan Joo, Co-Founders <span className="ml-2 mr-2 font-thin"> | </span>
                  <img src="/reviewLogo.png" alt="reviewLogo" />
                </p>

                <p className="font-playFair text-4xl leading-[50px]">
                  “When you want to create a business bigger than yourself, you
                  need a lot of help. That’s what Fiverr does.”
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Modal visible={visible} onCancel={handleCancel} footer={null}>
        <video width="100%" controls>
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </Modal>
    </>
  );
};

export default SliderCard;

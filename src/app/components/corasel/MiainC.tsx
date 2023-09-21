"use client";
import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { CoraselData } from "../data/data";

type Props = {};

function MiainC({}: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="max-container">
      <div>
        <h3 className="max-sm:text-2xl max-sm:ml-4 text-4xl font-bold font-Montserrat capitalize">
          Enjoy <span className="text-cyan-600">Our </span>Cool{" "}
          <span className="text-cyan-600">Slideshow..</span>
        </h3>
      </div>
      <div className="mt-10 grid grid-cols-1">
        <Slider {...settings}>
          {CoraselData.map((data, id) => (
            <div key={id}>
              <Card {...data} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default MiainC;

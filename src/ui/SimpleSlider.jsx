/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useEffect } from "react";
import Slider from "react-slick";

export default function SimpleSlider({ productImages }) {
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    arrows:false
  });


  return (
    <Slider {...settings}>
      {productImages.map((prod) => (
        <img key={prod} className="w-[300px] rounded-lg" src={prod} />
      ))}
    </Slider>
  );
}

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import useCategories from "./useCategories";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StyledHeading from "../../ui/StyledHeading";

function CategoriesSlider() {
  const { categories, isLoading } = useCategories();

  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSettings({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoPlay: true,
        });
      }

      if (window.innerWidth > 768) {
        setSettings({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          autoPlay: true,
        });
      }

      if (window.innerWidth > 1024) {
        setSettings({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 8,
          slidesToScroll: 1,
          autoPlay: true,
        });
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isLoading) return;

  return (
    <div className="w-full">
      <StyledHeading headingText={"Our Categories"} />
      <Slider {...settings}>
        {categories?.map((category) => (
          <div key={category._id}>
            <img src={category.image} alt={category.name} className="w-full object-cover h-[200px]" />
            <h3>{category.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CategoriesSlider;

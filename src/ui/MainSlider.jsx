import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StyledHeading from "./StyledHeading";

function MainSlider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    autoplaySpeed: 3000
  };


  return (
    <div className="w-full">
      <StyledHeading headingText={'Now on Sale'} />
      <Slider {...settings}>
          <div >
            <img src='/black_friday_facebook_banner_30.jpg'  className="w-full object-cover " />
          </div>
          <div >
            <img src='/black_friday_facebook_banner_25.jpg'  className="w-full object-cover" />
          </div>
          <div >
            <img src='/18899191.jpg'  className="w-full object-cover " />
          </div>
      </Slider>
    </div>
  );
}

export default MainSlider;

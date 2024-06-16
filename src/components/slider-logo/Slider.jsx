import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SliderLogo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const logos = [
    'logo1.png',
    'logo2.png',
    'logo3.png',
    'logo4.png',
    'logo5.png',
  ];

  return (
    <Slider {...settings}>
      {logos.map((logo, index) => (
        <div key={index}>
          <img src={logo} alt={`Logo ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default SliderLogo;

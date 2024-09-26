import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImage1 from "../Assets/Banner/img-1.jpg";
import BannerImage2 from "../Assets/Banner/img-2.jpg";
import BannerImage3 from "../Assets/Banner/img-3.jpg";

const BannerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <BannerSection>
      <CustomSlider {...settings}>
        <SlideImage img={BannerImage1} />
        <SlideImage img={BannerImage2} />
        <SlideImage img={BannerImage3} />
      </CustomSlider>
    </BannerSection>
  );
};

export default BannerSlider;

const BannerSection = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

const SlideImage = styled.div`
  position: relative;
  width: 100%;
  height: 400px; 
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;

  @media (max-width: 1024px) {
    height: 350px; 
  }

  @media (max-width: 768px) {
    height: 250px; 
  }
`;

const CustomSlider = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    color: white; 
    font-size: 30px;
  }

  .slick-prev {
    left: 15px; 
    z-index: 2; 
  }

  .slick-next {
    right: 15px; 
    z-index: 2; 
  }
`;

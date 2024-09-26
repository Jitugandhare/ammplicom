import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImage1 from "../Assets/Banner/img1.webp";
import BannerImage2 from "../Assets/Banner/img2.webp";
import BannerImage3 from "../Assets/Banner/img3.webp";

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
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <BannerSection>
      <CustomSlider {...settings}>
        <SlideImage img={BannerImage1}>
          {/* <OverlayText>
            Immune Support
            <Button>Shop now</Button>
          </OverlayText> */}
        </SlideImage>
        <SlideImage img={BannerImage2}>
          {/* <OverlayText>
            Immune Support
            <Button>Shop now</Button>
          </OverlayText> */}
        </SlideImage>
        <SlideImage img={BannerImage3}>
          {/* <OverlayText>
            Immune Support
            <Button>Shop now</Button>
          </OverlayText> */}
        </SlideImage>
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
  height: 650px; 
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;

  @media (max-width: 1024px) {
    height: 400px; 
  }

  @media (max-width: 768px) {
    height: 300px; 
  }

  @media (max-width: 480px) {
    height: 200px; 
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

// const OverlayText = styled.div`
//   position: absolute;
//   top: 20%; /* Positioning from the top */
//   left: 50%;
//   transform: translate(-50%, -50%);
//   color: white;
//   font-size: 2.5vw; /* Reduced font size */
//   font-weight: bold;
//   text-align: center;
//   padding: 0 10px;
//   background: rgba(0, 0, 0, 0.5); /* Semi-transparent background for contrast */
//   border-radius: 5px;

//   @media (max-width: 768px) {
//     font-size: 4vw; 
//   }
// `;

// const Button = styled.button`
//   background-color: #5e35b1;
//   color: white;
//   border: none;
//   padding: 8px 16px; /* Reduced padding */
//   font-size: 2vw; /* Reduced font size */
//   margin-top: 10px; /* Margin between text and button */
//   cursor: pointer;
//   border-radius: 5px;

//   &:hover {
//     background-color: #7e57c2;
//   }

//   @media (max-width: 768px) {
//     font-size: 3.5vw; 
//     padding: 6px 12px; 
//   }
// `;

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const BrandChoose = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URI}/brands/`);
        setBrands(response.data);
        console.log("brands response", response.data);
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    };

    fetchBrands();
  }, []);

  const settings = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
  };

  return (
    <>
      <div className="brandChoose text-center">
        <h2>
          Brands
          <span> Choose any one</span>
        </h2>
        <div className="Choose ps-4 ps-lg-0">
          <div className="marquee-container">
            <Slider {...settings}>
              {brands.map((brand, index) => (
                <div key={index} className="marquee-item">
                  <img src={brand.logo} alt={brand.name} className="brand-logo" style={{
                    width: "160px", height: "auto"
                  }} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandChoose;

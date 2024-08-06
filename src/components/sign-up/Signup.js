import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import SignUpComp from "../signUp/SignUpComp";
import { Link } from "react-router-dom"; // Add this line
const Signup = () => {
  return (
    <>
      <Row className="g-0 signmainBox">
        <Col md={5}>
          <SignUpComp />
        </Col>
        <Col md={7}>
          <div className="signbox2">
            <div className="logo">
              <a href="#">
                <img src="/images/signup-logo.png" alt="logo" />
              </a>
            </div>
            <p className="mb-5 text-center">
              <img
                src="/images/Get-Your-Own-Customized.svg"
                alt="Get Your Own Customized"
              />
            </p>
            <div className="signupAnimation">
              <Swiper
                spaceBetween={50}
                slidesPerView={2}
                loop={true}
                effect={"fade"}
                modules={[EffectFade, Autoplay]}
                fadeEffect={{ crossFade: true }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
              >
                
                <SwiperSlide>
                  <img src="/images/Fancy-Wardrobe.svg" alt="text" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/Luxury-Wardrobe.svg" alt="text" />
                </SwiperSlide>

                <SwiperSlide>
                  {" "}
                  <img src="/images/Casual-Wardrobe.svg" alt="text" />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src="/images/Formal-Wardrobe.svg" alt="text" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="staticImg">
              <img src="/images/MBL1.png" alt="picture" />
              <img src="/images/mblMen1.png" alt="picture" />
              <img src="/images/mbl2.png" alt="picture" />
              <img src="/images/mblMen2.png" alt="picture" />
            </div>
            <p>No Sign up, No Login</p>
            <div className="text-center d-flex justify-content-center">
           
           
              <Button className="btnPrimary">
                <img className="me-3" src="/images/staricon.svg" alt="star" />{" "}
                <Link to="/GuestCreateWardrobe">
                Try it now
                </Link>
              </Button>
             
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Signup;

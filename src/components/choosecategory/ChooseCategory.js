import React  from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const ChooseCategory = () => {

  const navigate = useNavigate();
  const handleChange = ()=>{
    navigate("/GuestCreateWardrobe");
  }
  return (
    <>
      <div className="ChooseCategory text-center">
        <div className="topdiv ">
          <Button className="border-0 bg-transparent p-0">
            <img
              className="d-none d-lg-block"
              src="/images/male-product-icon.svg"
              alt="male"
            />
          </Button>
          <h2>
            Category
            <span> Choose any one</span>
          </h2>
          <Button className="border-0 bg-transparent p-0">
            <img
              className="d-none d-lg-block"
              src="/images/female-product-icon.svg"
              alt="male"
            />
          </Button>
        </div>
        <div className="container">
          <Row className="category ">
            <Col lg={6}>
              <Button className="border-0 bg-transparent p-0">
                <img
                  className="text-center d-lg-none"
                  src="/images/male-product-icon.svg"
                  alt="male"
                />
              </Button>
              <div className="firstSlide position-relative mb-5 mb-lg-0">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={4}
                  slidesPerGroup={4}
                  loop={true}
                  speed={5}
                  modules={[EffectFade, Autoplay]}
                  fadeEffect={{ crossFade: true }}
                  autoplay={{
                    delay: 1000,
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },

                    576: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },

                    992: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="text-center">
                      <img
                        src="/images/choose1.png"
                        alt="imge"
                        className="w-100"
                      />
                      <p>Jeans</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-center">
                      <img
                        src="/images/choose2.png"
                        alt="imge"
                        className="w-100"
                      />
                      <p>T-Shirts</p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="text-center">
                      <img
                        src="/images/choose3.png"
                        alt="imge"
                        className="w-100"
                      />
                      <p>Suits</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-center">
                      <img
                        src="/images/choose4.png"
                        alt="imge"
                        className="w-100"
                      />
                      <p>Blazers</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-center">
                      <img
                        src="/images/choose3.png"
                        alt="imge"
                        className="w-100"
                      />
                      <p>Jeans</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-center">
                      <img
                        src="/images/choose1.png"
                        alt="imge"
                        className="w-100"
                      />
                      <p>T-Shirts</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="text-center">
                      <img
                        src="/images/choose4.png"
                        alt="imge"
                        className="w-100"
                      />
                      <p>T-Shirts</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-center">
                      <img
                        src="/images/choose2.png"
                        alt="imge"
                        className="w-100"
                      />
                      <p>Jeans</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </Col>
            <Col lg={6}>
              <Button className="border-0 p-0 bg-transparent">
                <img
                  className="text-center d-lg-none"
                  src="/images/female-product-icon.svg"
                  alt="male"
                />
              </Button>
              <div className="firstSlide">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={4}
                  slidesPerGroup={4}
                  loop={true}
                  speed={5}
                  modules={[EffectFade, Autoplay]}
                  fadeEffect={{ crossFade: true }}
                  autoplay={{
                    delay: 1000,
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },

                    576: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },

                    992: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="text-center">
                      <img
                        src="/images/choose1.png"
                        alt="imge"
                        className="w-100"
                      />
                      <p>Jeans</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-center">
                      <img
                        src="/images/choose2.png"
                        alt="imge"
                        className="w-100"
                      />
                      <p>T-Shirts</p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="text-center">
                      <img
                        src="/images/choose3.png"
                        alt="imge"
                        className="w-100"
                      />
                      <p>Suits</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-center">
                      <img
                        src="/images/choose4.png"
                        alt="imge"
                        className="w-100"
                      />
                      <p>Blazers</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-center">
                      <img
                        src="/images/choose3.png"
                        alt="imge"
                        className="w-100"
                      />
                      <p>Jeans</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-center">
                      <img
                        src="/images/choose1.png"
                        alt="imge"
                        className="w-100"
                      />
                      <p>T-Shirts</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="text-center">
                      <img
                        src="/images/choose4.png"
                        alt="imge"
                        className="w-100"
                      />
                      <p>Suits</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-center">
                      <img
                        src="/images/choose2.png"
                        alt="imge"
                        className="w-100"
                      />
                      <p>Jeans</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </Col>
          </Row>
        </div>
        
        <Button className="btnPrimary mx-auto mt-5 mb-3" onClick={handleChange}>
          <img className="me-3" src="/images/staricon.svg" alt="star" />
       
          Try it
          now
        </Button>
      </div>
    </>
  );
};

export default ChooseCategory;

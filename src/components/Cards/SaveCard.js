import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";
import { RatingStar } from "../Rating/RatingStar";

const SaveCard = () => {
  return (
    <>
      <div className="cardBox">
        <h2>People love our suggested products</h2>
        <div className="d-flex align-items-center justify-content-center gap-3"></div>
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          slidesPerGroup={1}
          loop={true}
          speed={500}
          modules={[EffectFade, Autoplay]}
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 5000,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            576: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <div className="loveCrd">
              <div className="prIcon">
                <img src="/images/pr-Icon.png" alt="icon" />
              </div>
              <p className="discription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                nisi dolor officia magnam consequuntur tempora id excepturi
                cupiditate architecto consectetur.
              </p>
              <div className="RatingBox">
                {/* <div className="d-flex align-items-center">
                  <img src="/images/star.svg" alt="Rating" />
                  <img src="/images/star.svg" alt="Rating" />
                  <img src="/images/star.svg" alt="Rating" />
                  <img src="/images/star.svg" alt="Rating" />
                  <img src="/images/star.svg" alt="Rating" />
                  <p className="point">5.0 RATING</p>
                </div> */}
                <RatingStar />
                <h3>Rick Wright</h3>
              </div>
              <div className="fctr-Brand">
                <div className="d-flex gap-1 mb-3">
                  <img src="/images/card-prdctimg.png" alt="product" />
                  <div className="d-flex flex-column align-items-start">
                    <p>SMART FIT POLO SHIRT - FMTCP23-067</p>

                    <span className="brndLogo">
                      <img src="/images/brandename.png" alt="logo" />
                    </span>
                  </div>
                </div>
                <span className="prcLevel">
                  <img src="/images/sparkIcon.svg" alt="icon" />
                  lowest price
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="loveCrd">
              <div className="prIcon">
                <img src="/images/pr-Icon.png" alt="icon" />
              </div>
              <p className="discription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                nisi dolor officia magnam consequuntur tempora id excepturi
                cupiditate architecto consectetur.
              </p>
              <div className="RatingBox">
                <RatingStar />
                <h3>Rick Wright</h3>
              </div>
              <div className="fctr-Brand">
                <div className="d-flex gap-1 mb-3">
                  <img src="/images/card-prdctimg.png" alt="product" />
                  <div className="d-flex flex-column align-items-start">
                    <p>SMART FIT POLO SHIRT - FMTCP23-067</p>

                    <span className="brndLogo">
                      <img src="/images/brandename.png" alt="logo" />
                    </span>
                  </div>
                </div>
                <span className="prcLevel">
                  <img src="/images/sparkIcon.svg" alt="icon" />
                  lowest price
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="loveCrd">
              <div className="prIcon">
                <img src="/images/pr-Icon.png" alt="icon" />
              </div>
              <p className="discription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                nisi dolor officia magnam consequuntur tempora id excepturi
                cupiditate architecto consectetur.
              </p>
              <div className="RatingBox">
                <RatingStar />
                <h3>Rick Wright</h3>
              </div>
              <div className="fctr-Brand">
                <div className="d-flex gap-1 mb-3">
                  <img src="/images/card-prdctimg.png" alt="product" />
                  <div className="d-flex flex-column align-items-start">
                    <p>SMART FIT POLO SHIRT - FMTCP23-067</p>

                    <span className="brndLogo">
                      <img src="/images/brandename.png" alt="logo" />
                    </span>
                  </div>
                </div>
                <span className="prcLevel">
                  <img src="/images/sparkIcon.svg" alt="icon" />
                  lowest price
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="loveCrd">
              <div className="prIcon">
                <img src="/images/pr-Icon.png" alt="icon" />
              </div>
              <p className="discription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                nisi dolor officia magnam consequuntur tempora id excepturi
                cupiditate architecto consectetur.
              </p>
              <div className="RatingBox">
                <RatingStar />
                <h3>Rick Wright</h3>
              </div>
              <div className="fctr-Brand">
                <div className="d-flex gap-1 mb-3">
                  <img src="/images/card-prdctimg.png" alt="product" />
                  <div className="d-flex flex-column align-items-start">
                    <p>SMART FIT POLO SHIRT - FMTCP23-067</p>

                    <span className="brndLogo">
                      <img src="/images/brandename.png" alt="logo" />
                    </span>
                  </div>
                </div>
                <span className="prcLevel">
                  <img src="/images/sparkIcon.svg" alt="icon" />
                  lowest price
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="loveCrd">
              <div className="prIcon">
                <img src="/images/pr-Icon.png" alt="icon" />
              </div>
              <p className="discription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                nisi dolor officia magnam consequuntur tempora id excepturi
                cupiditate architecto consectetur.
              </p>
              <div className="RatingBox">
                <RatingStar />
                <h3>Rick Wright</h3>
              </div>
              <div className="fctr-Brand">
                <div className="d-flex gap-1 mb-3">
                  <img src="/images/card-prdctimg.png" alt="product" />
                  <div className="d-flex flex-column align-items-start">
                    <p>SMART FIT POLO SHIRT - FMTCP23-067</p>

                    <span className="brndLogo">
                      <img src="/images/brandename.png" alt="logo" />
                    </span>
                  </div>
                </div>
                <span className="prcLevel">
                  <img src="/images/sparkIcon.svg" alt="icon" />
                  lowest price
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <img
          className="leftBgsvg"
          src="/images/abstract-ng-arrow.svg"
          alt="vector"
        />
      </div>
    </>
  );
};

export default SaveCard;

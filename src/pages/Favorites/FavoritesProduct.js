import React from "react";
import { Col, Row } from "react-bootstrap";
import UserSideBar from "../../components/Sidebar/UserSideBar";
import HomeHeader from "../../components/headers/HomeHeader";
import FvrtProductBox from "../../components/favoriteProducts/FvrtProductBox";
import WelcomeHeader from "../../components/headers/WelcomeHeader";
import { FavoritesHeader } from "../../components/headers/FavoritesHeader";

const FavoritesProduct = () => {
  return (
    <>
      <div className="crtWrdbMain">
        <div className="d-lg-none">
          <WelcomeHeader />
        </div>
        <FavoritesHeader />
        <Row className="m-0 p-0">
          <Col lg={2} className="ps-0">
            <UserSideBar />
          </Col>
          <Col xs={12} lg={10} className="pe-0">
            <FvrtProductBox />
          </Col>
        </Row>
        <div className="BlurSvg d-none d-lg-block">
          <img src="/images/attach-footer-blur.svg" alt="bg img" />
        </div>
      </div>
    </>
  );
};

export default FavoritesProduct;

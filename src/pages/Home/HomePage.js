import React , {useState} from "react";
import { Col, Row } from "react-bootstrap";
import UserSideBar from "../../components/Sidebar/UserSideBar";
import HomeHeader from "../../components/headers/HomeHeader";
import HomeBox from "../../components/home/HomeBox";
import HomeFooter from "../../components/home-footer/HomeFooter";
import WelcomeHeader from "../../components/headers/WelcomeHeader";

const HomePage = () => {

  return (
    <>
      <div className="crtWrdbMain pb-0">
        <div className="d-lg-none">
          <WelcomeHeader />
        </div>
        <HomeHeader />
        <Row className="m-0 p-0">
          <Col lg={2} className="ps-0">
            <UserSideBar />
          </Col>
          <Col xs={12} lg={10} className="pe-0">
            <HomeBox/>
            {/* ------when you have don't wardrobe then show this div----- */}
            {/* <div className="NoHaveWardrobe">
              <img src="/images/no-have-wardrobe.png" alt="No Have Wordrobe" />
            </div> */}
          </Col>
        </Row>
        <div className="d-none d-lg-block">
          <HomeFooter />
        </div>
        <div className="BlurSvg d-none d-lg-block">
          <img src="/images/attach-footer-blur.svg" alt="bg img" />
        </div>
      </div>
    </>
  );
};

export default HomePage;

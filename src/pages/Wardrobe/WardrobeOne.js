import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import UserSideBar from "../../components/Sidebar/UserSideBar";
import WardrobeOneResult from "../../components/WardrobeResult/WardrobeOneResult";
import WelcomeHeader from "../../components/headers/WelcomeHeader";
import WardrobesHeader from "../../components/headers/WardrobesHeader";

const WardrobeOne = () => {

  const [wardrobes, setWardrobe] = useState([]);

  return (
    <>
      <div className="crtWrdbMain">
        <div className="d-lg-none">
          <WelcomeHeader />
        </div>
        <WardrobesHeader />
        <Row className="m-0 p-0 pe-3">
          <Col lg={2} className="ps-0">
            <UserSideBar />
          </Col>
          <Col xs={12} lg={10} className="pe-0">
            <div className="genratedResult">
              <WardrobeOneResult wardrobe={wardrobes} />
            </div>         
          </Col>
        </Row>
      </div>
    </>
  );
};

export default WardrobeOne;

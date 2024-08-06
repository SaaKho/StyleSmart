import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import UserSideBar from "../../components/Sidebar/UserSideBar";
import DraftOneResult from "../../components/WardrobeResult/DraftOneResult";
import WelcomeHeader from "../../components/headers/WelcomeHeader";
import Draftsheader from "../../components/headers/Draftsheader";

const DraftOne = () => {

  const [wardrobe, setWardrobe] = useState({});

  return (
    <>
      <div className="crtWrdbMain">
        <div className="d-lg-none">
          <WelcomeHeader />
        </div>
        <Draftsheader />
        <Row className="m-0 p-0 pe-3">
          <Col lg={2} className="ps-0">
            <UserSideBar />
          </Col>
          <Col xs={12} lg={10} className="pe-0">
            <div className="genratedResult">
              <DraftOneResult wardrobe={wardrobe} />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DraftOne;

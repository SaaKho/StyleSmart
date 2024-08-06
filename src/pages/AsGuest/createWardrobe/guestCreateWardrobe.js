import React from "react";

import { Col, Row } from "react-bootstrap";

import GuestForm from "../createWardrobeGuestForm";
import WelcomeHeader from "../../../components/headers/WelcomeHeader";
import CreateWrdrobeHeader from "../../../components/headers/CreateWrdrobeHeader";
import GuestGenratedResult from "../../../components/guestGenratedResult.js/GuestGenratedResult";
import GuestSideBar from "../../../components/Sidebar/GuestSideBar";
const GuestCreateWardrobe = () => {
  return (
    <>
      <div className="crtWrdbMain">
        <div className="d-lg-none">
         <WelcomeHeader/>
        </div>
        <CreateWrdrobeHeader />
    
        <Row className="m-0 p-0">
          <Col lg={2} className="ps-0 d-none d-lg-block">
          <GuestSideBar/>
          </Col>
          <Col lg={10} className="pe-0">
          <GuestForm/>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default GuestCreateWardrobe;

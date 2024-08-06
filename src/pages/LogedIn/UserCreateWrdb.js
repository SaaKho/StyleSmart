import React from "react";
import { Col, Row } from "react-bootstrap";
import UserSideBar from "../../components/Sidebar/UserSideBar";
import CreateWrdrobeHeader from "../../components/headers/CreateWrdrobeHeader";
import GuestGenrateForm from "../../components/genrateForm/GuestGenrateForm";
import WelcomeHeader from "../../components/headers/WelcomeHeader";

const UserCreateWrdb = () => {
  return (
    <>
      <div className="crtWrdbMain">
        <div className="d-lg-none">
          <WelcomeHeader />
        </div>
        <CreateWrdrobeHeader />
        <Row className="m-0 p-0 px-3">
          <Col lg={2} className="ps-0">
            <UserSideBar />
          </Col>
          <Col xs={12} lg={10} className="pe-0">
            <GuestGenrateForm />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default UserCreateWrdb;

import React , {useState} from "react";
import CreateWrdrobeHeader from "../../../components/headers/CreateWrdrobeHeader";
import { Col, Row } from "react-bootstrap";
import GuestSideBar from "../../../components/Sidebar/GuestSideBar";
import GuestGenratedResult from "../../../components/guestGenratedResult.js/GuestGenratedResult";
import WelcomeHeader from "../../../components/headers/WelcomeHeader";
import { useLocation } from 'react-router-dom';
const GenratedResult = () => {
  const [uploadedImages, setUploadedImages] = useState([]);

  return (
    <>
      <div className="crtWrdbMain">
        <div className="d-lg-none">
          <WelcomeHeader />
        </div>
        <CreateWrdrobeHeader />
        <Row className="m-0 p-0">
          <Col md={2} className="ps-0 d-none d-lg-block">
            <GuestSideBar />
          </Col>
          <Col lg={10} className="pe-0">
            <div className="genratedResult px-3 ">
              <GuestGenratedResult />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default GenratedResult;

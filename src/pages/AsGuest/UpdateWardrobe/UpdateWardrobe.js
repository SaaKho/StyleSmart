import React , {useEffect} from "react";
import { Col, Row } from "react-bootstrap";
import GuestSideBar from "../../../components/Sidebar/GuestSideBar";
import WelcomeHeader from "../../../components/headers/WelcomeHeader";
import UpdateWardrobeHeader from "../../../components/headers/UpdateWardrobeHeader";
import UpdateForm from "../../../components/genrateForm/UpdateForm";
import { useLocation } from "react-router-dom";

const UpdateWardrobe = () => {
  const location = useLocation();
  const { uploadedImage, manualPreferences, mediaLinks } = location.state || {};

  useEffect(() => {
    console.log("Received Data in UpdateWardrobe:", {
      uploadedImage,
      manualPreferences,
      mediaLinks
    });
  }, [uploadedImage, manualPreferences, mediaLinks]);

  return (
    <>
      <div className="crtWrdbMain">
        <div className="d-lg-none">
          <WelcomeHeader />
        </div>
        <UpdateWardrobeHeader />
        <Row className="m-0 p-0">
          <Col lg={2} className="ps-0 d-none d-lg-block">
            <GuestSideBar />
          </Col>
        
          <Col lg={10} className="pe-0">
            <UpdateForm uploadedImage={uploadedImage} manualPreferences={manualPreferences} mediaLinks={mediaLinks} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default UpdateWardrobe;

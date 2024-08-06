import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import UserSideBar from "../../components/Sidebar/UserSideBar";
import HomeFooter from "../../components/home-footer/HomeFooter";
import WelcomeHeader from "../../components/headers/WelcomeHeader";
import WardrobesBox from './WardrobesBox';
import WardrobesHeader from "../../components/headers/WardrobesHeader";
import SaveWardrobe from "../../services/saveWardrobe";
import { useSelector } from "react-redux";

const WardrobesCollecions = () => {

  const token = useSelector((state) => state.token);
  const [wardrobes, setWardrobes] = useState([]);

  useEffect(() => {
    const fetchWardrobes = async () => {
      try {
        const data = await SaveWardrobe.getAllSaveWardrobes(token);
        setWardrobes(data);
      } catch (error) {
        console.error("Error fetching wardrobe products:", error);
      }
    };

    fetchWardrobes();
  }, [token]);

  return (
    <>
      <div className="crtWrdbMain pb-0">
        <div className="d-lg-none">
          <WelcomeHeader />
        </div>
        <WardrobesHeader />
        <Row className="m-0 p-0">
          <Col lg={2} className="ps-0">
            <UserSideBar wardrobes={wardrobes} />
          </Col>
          <Col xs={12} lg={10} className="pe-0">
            <WardrobesBox wardrobes={wardrobes}/>
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
  )
}

export default WardrobesCollecions
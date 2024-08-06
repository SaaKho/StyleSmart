import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Add this line
import SignUpComp from "../signUp/SignUpComp";
import LoginModal from "../Modals/LoginModal";

const WelcomeHeader = () => {

  const [isToggled, setToggled] = useState(false);

  const [modalShow, setModalShow] = useState(false);
  
  const handleButtonClick = () => {
    setToggled(!isToggled);
  };


  return (
    <>
      <div className="welcomHeader">
        <div className="d-lg-none"></div>
        <div className="d-flex align-items-center position-relative">
          <img
            className="me-3 d-none d-lg-block"
            src="/images/Welcomelogo.png"
            alt="welcom logo"
          />
          <h2>Fashion Fusion</h2>
          <img
            className="mblWelcomescreen d-lg-none"
            src="/images/mbl-bg-welcomescreen.svg"
            alt="svgg"
          />
        </div>
        <div className="makeAccount d-none d-lg-flex">
          <p>Make your products saved in your account</p>

          <Button onClick={() => setModalShow(true)}>Login</Button>
            <LoginModal show={modalShow} onHide={() => setModalShow(false)} />

          <Link to="/signup">
            <Button>Sign up</Button>
          </Link>
        </div>
        <div className="d-lg-none">
          <Button className="btn-mblPrfl" onClick={handleButtonClick}>
            <img src="/images/profile-icon.svg" alt="icon" />
          </Button>
          <div className={`sign-up-component ${isToggled ? "toggled" : ""}`}>
            <Button onClick={handleButtonClick} className="close-btnn">
              <img src="/images/close-Icon.svg" alt="icon" />
            </Button>
            <SignUpComp />
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeHeader;

import React from "react";
import { Link } from "react-router-dom";


const WardrobesHeader = () => {
  return (
      <>
      <div className="crtWrdbHeader align-items-center justify-content-lg-start justify-content-center">
        <img
          className="logo d-none d-lg-block"
          src="/images/create-wardrobe-headerlogo.png"
          alt="logo"
        />
        <div className="HomeHdr">
          <h2>
            <img
             className="sideBarIcon"
             src="/images/noun-wardrobe.svg"
             alt="home"
            />
            My Wardrobes
          </h2>
        </div>
      </div>
    </>
  )
}

export default WardrobesHeader
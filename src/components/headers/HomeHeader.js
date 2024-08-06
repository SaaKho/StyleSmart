import React from "react";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <>
      <div className="crtWrdbHeader align-items-center justify-content-lg-start justify-content-center">
        <img
          className="logo d-none d-lg-block"
          src="/images/create-wardrobe-headerlogo.png"
          alt="logo"
        />
        <div className="HomeHdr">
          {/* <h2>
            <img
              className="me-3"
              src="/images/noun-home-6295373-1.svg"
              alt="start icon"
            />
            Home
          </h2> */}
          {/* ------when open wardrobe then show this heading----- */}
          {/* <h2>
            <img
              className="me-3"
              src="/images/main-wardrobe-icon.svg"
              alt="start icon"
            />
            My Wardrobes
          </h2> */}
          {/* -----------when open wardrobe 1 then show this heading------ */}
          {/* <h2>
            <Link to="#" className="d-flex me-4">
              <img src="/images/back-Icon.svg" alt="arrow" />
            </Link>
            Wardrobe 1
          </h2> */}
          {/* ------when open Favorites page then show this heading----- */}
          <h2>
            <img
              className="sideBarIcon active"
              src="/images/noun-home.svg"
              alt="home"
              width="100%"
            />
            Home
          </h2>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;

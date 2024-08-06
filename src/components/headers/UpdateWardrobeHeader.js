import React from "react";
import { Link } from "react-router-dom";

const UpdateWardrobeHeader = () => {
  return (
      <>
      <div className="crtWrdbHeader">
        <img
          className="logo d-none d-lg-block"
          src="/images/create-wardrobe-headerlogo.png"
          alt="logo"
        />
        <div className="WrdbHeaderBox">
          <h2 className="createWrdb">
            <img
              className="me-3"
              src="/images/bluestar-Icon.svg"
              alt="start icon"
            />
            Update Your Wardrobe
          </h2>

          {/* --------when update your wardrobe then show this heading--- */}
          {/* <h2 className="updateWrdrb">
            <Link to="#" className="d-flex me-4">
              <img src="/images/back-Icon.svg" alt="Arrow" />{" "}
            </Link>
            Update Your Wardrobe
          </h2> */}
          <p>Select your way of generating wardrobes</p>
        </div>
      </div>
    </>
  )
}

export default UpdateWardrobeHeader
import React from "react";
import { Link } from "react-router-dom";

export const FavoritesHeader = () => {
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
              className="me-3"
              src="/images/Black-heart-icon.svg"
              alt="start icon"
            />
            Favorites
          </h2>
        </div>
      </div>
    </>
  )
}

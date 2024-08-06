import React from "react";
import WelcomeHeader from "../../components/headers/WelcomeHeader";
import SaveCard from "../../components/Cards/SaveCard";
import BrandChoose from "../../components/brandChoose/BrandChoose";
import ChooseCategory from "../../components/choosecategory/ChooseCategory";
import SignUpComp from "../../components/signUp/SignUpComp";

const WelcomeScreen = () => {
  return (
    <>
      <div className="welcomMain">
        <WelcomeHeader />

        <SaveCard />
        <div className="brandchoseBox">
          <BrandChoose />
          <ChooseCategory />
        </div>

        <img
          className="rightBgsvg d-none d-lg-block"
          src="/images/topright-bg-welcom.svg"
          alt="vector"
        />
      </div>
    </>
  );
};

export default WelcomeScreen;

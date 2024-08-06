import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Add this line
const HomeFooter = () => {

  const navigate = useNavigate();

  const handleChange =()=>{
    navigate('/createwardrobe');
  }

  return (
    <>
   
      <div className="position-relative">
        <div className="HomeFooter">
          <h3>Create Your Own Wardrobes</h3>
         
          <Button className="btnPrimary" onClick={handleChange}>
            <img  src="/images/staricon.svg" alt="star" /> Let’s
            do this
          </Button>
          
        </div>
      </div>{" "}
    </>
  );
};

export default HomeFooter;

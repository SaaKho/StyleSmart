import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SuccessfullyRmvPrdct = ({ showToast, onClose }) => {
  return (
    <div>
      <Toast
        className="successfullToast"
        show={showToast}
        onClose={onClose}
        delay={5000}
        autohide
      >
        <Toast.Body>
          <p className="savedwrdb text-center">
            <img
              className="me-3"
              src="/images/tick-Icon-placeholder.svg"
              alt="tick"
            />{" "}
            Products removed successfully
          </p>
        </Toast.Body>
      </Toast>
      
    </div>
  );
};

export default SuccessfullyRmvPrdct;

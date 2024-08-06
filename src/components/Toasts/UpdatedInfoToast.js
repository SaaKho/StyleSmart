import React, { useState } from "react";
import { Button, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const UpdatedInfoToast = ({ showToast, onClose }) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      {showToast && <div className="Toastoverlay"></div>}
      <Toast
        className="EditSavedToast"
        show={showToast}
        onClose={onClose}
        delay={3000}
        autohide
      >
        
        <Toast.Body>
          <div className="">
            <img src="/images/saved-img.png" alt="save image" />
          </div>
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default UpdatedInfoToast;

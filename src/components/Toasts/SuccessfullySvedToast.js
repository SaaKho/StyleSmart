import React, { useState } from "react";
import { Button, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import RenameWardrobeModal from "../Modals/RenameWardrobeModal";

const SuccessfullySavedToast = ({ showToast, onClose , wardrobeId }) => {
  const [modalShow, setModalShow] = React.useState(false);
  
  return (
    <div>
      <Toast
        className="successfullToast"
        show={showToast}
        onClose={onClose}
        delay={5000}
        autohide
      >
        {/* <Toast.Header>
          <strong className="me-auto">Bootstrap Toast</strong>
        </Toast.Header> */}
        <Toast.Body>
          <div className="d-flex justify-content-between align-items-center gap-3">
            <p className="savedwrdb">
              <span>Your Wardrobe</span> saved successfully
            </p>
            <Button className="svdEdtWrdb" onClick={() => setModalShow(true)}>
              <img src="/images/toast-edit-Icon.svg" alt="icon" />
            </Button>
            <RenameWardrobeModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              wardrobeId={wardrobeId}
            />

          </div>
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default SuccessfullySavedToast;

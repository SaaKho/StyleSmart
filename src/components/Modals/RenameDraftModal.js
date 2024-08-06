import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import EditSavedToast from "../Toasts/EditSavedToast";
import { useSelector } from "react-redux";
import UnSaveWardrobe from "../../services/unsaveWardrobe";


const RenameDraftModal = (props) => {

  const [wardrobeName, setWardrobeName] = useState(""); // State for input value
  const [showToast, setShowToast] = useState(false); // State for toast visibility
  const token = useSelector((state) => state.token);


  const handleInputChange = (e) => {
    setWardrobeName(e.target.value); // Update input value state
  };

  const handleButtonClick = async () => {
    if (!props.wardrobeId) {
      console.error('Error: Draft Id is undefined');
      return;
    }
    try {
      
      // Calling the renameWardrobe API method with wardrobeId, token, and newName
      await UnSaveWardrobe.renameUnSaveWardrobe(props.wardrobeId, token, wardrobeName);
      setShowToast(true); // Showing success toast

      // Close the modal after 2 seconds
      setTimeout(() => {
        setShowToast(false); // Close the toast
        props.onHide(); // Close the modal
        window.location.reload();
      }, 2000);

    } catch (error) {
      console.error('Error Renaming Draft:', error);
    }
  };

  const handleCloseToast = () => {
    setShowToast(false); // Close toast
  };

  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Rename Draft
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="Your Wardrobe"
            className="renameWrb"
            value={wardrobeName}
            onChange={handleInputChange} // Handle input change
          />
        </Modal.Body>
        <Modal.Footer className="border-0 d-flex align-items-center">
          <Button onClick={props.onHide} className="btnrgtn">
            Cancel
          </Button>

          <div>
            <Button className="btnPrfSubmit" onClick={handleButtonClick}>
              Save
            </Button>

            <EditSavedToast showToast={showToast} onClose={handleCloseToast} />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RenameDraftModal;

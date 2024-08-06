import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const RegenerateModal = (props) => {
  // State variables
  const [comment, setComment] = useState(""); // State for comment input

  // Event handler for submitting the form
  const handleSubmit = () => {
    // Perform actions with the comment data here
    console.log("Comment submitted:", comment);
    // Close the modal
    props.onHide();
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="viewReslt"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <p className="rmvPrdct">Generate New</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="tellResn">Tell us the reason (Optional)</p>
          <textarea
            className="addTxtCmnt mb-3 w-full d-block"
            name=""
            id=""
            cols="30"
            rows="1"
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)} // Update comment state
          ></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} className="btnrgtn">
            Cancel
          </Button>
          {/* Add event handler to submit button */}
          <Button className="btnPrfSubmit" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegenerateModal;

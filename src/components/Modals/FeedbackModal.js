import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import feedbackSvc from '../../services/feedback'
import EditSavedToast from "../Toasts/EditSavedToast";

const FeedbackModal = (props) => {
  const [comment, setComment] = useState('');
  const token = useSelector((state) => state.token); // Assuming state.name returns a Promise
  const [showToast, setShowToast] = useState(false);      // State to control the visibility of the toast

  console.log("USERNAMETOKEN", token);

  const handleSubmit = async () => {
    try {
    
   
      // Calling the API function to send feedback
     
      const response = await feedbackSvc.giveFeedback(token, comment);
      // Handle successful response (e.g., show success message, close modal, etc.)
      setShowToast(true);
      console.log('Feedback submitted successfully:', response);
      props.onHide(); // Close the modal after successful submission
    } catch (error) {
      // Handle API errors (e.g., show error message)
      console.error('Error submitting feedback:', error.message);
      // Optionally, you can set state to display an error message to the user
    }
  };
  
  const handleTextareaChange = (event) => {
    setComment(event.target.value);
  }

  return (
    <>
    
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="productDtlMdl"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <p className="rmvPrdct">Please provide feedback </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column align-items-start">
            <p className="tellResn">Your feedback </p>

            <textarea
              className="addTxtCmnt mb-3 w-full d-block"
              value={comment}
              onChange={handleTextareaChange}
              name=""
              id=""
              cols="30"
              rows="1"
              placeholder="Comment"
            ></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button className="btnPrfSubmit" onClick={handleSubmit} >Submit </Button>
        </Modal.Footer>
      </Modal>

      {/* Showing the feedback saved toast on successfull submission */}
      <EditSavedToast showToast={showToast} onClose={() => setShowToast(false)} />
    </>
  );
};

export default FeedbackModal;

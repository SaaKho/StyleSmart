

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ProductDetails = (props) => {
  // State for comment input and selected reasons
  const [comment, setComment] = useState("");
  const [selectedReasons, setSelectedReasons] = useState([]);
  const [reasonsList, setReasonsList] = useState([
    "Price",
    "Size",
    "Color",
    "Brand",
    "Gender"
  ]);
 

   const handleReasonChange = (reason) => {
    const updatedReasons = [...selectedReasons];
    const index = updatedReasons.indexOf(reason);
  
    if (index === -1) {
      updatedReasons.push(reason); // Reason not found, add it
    } else {
      updatedReasons.splice(index, 1); // Reason found, remove it
    }
  
    setSelectedReasons(updatedReasons); // Update selected reasons
  };
 

 

  // Function to handle submit button click
  const handleSubmit = () => {
    // Here you can perform actions like submitting the comment and selected reasons
    console.log("Comment:", comment);
    console.log("Selected Reasons:", selectedReasons);

    // Close the modal
    props.onHide();
  };

  return (
    <>

    
<style>
        {`
        .tagg {
          padding: 5px 10px;
          margin-right: 10px;
          cursor: pointer;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        
        .selected {
          background-color: #007bff;
          color: #fff;
          border-color: #007bff;
        }
        `}
      </style>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="productDtlMdl"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <p className="rmvPrdct">
              Please provide feedback{" "}
              <span className="optionss">(Optional)</span>
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-between align-items-start">
            <div>
            <p className="tellResn">Tell us the reason of removing</p>
              <div className="dtlTagg d-flex align-items-center gap-2 mb-3">
  {reasonsList.map((reason) => (
    <span
      key={reason}
      className={`tagg ${selectedReasons.includes(reason) ? "selected" : ""}`}
      onClick={() => handleReasonChange(reason)}
    >
      {reason}
    </span>
  ))}
           </div>

</div> 
              
              <img
                className="prvImage d-none d-lg-block"
                src="/images/modal-prview-image.png"
                alt="pic"
              />
            </div>
        
          <textarea
            className="addTxtCmnt mb-3 w-full d-block"
            name=""
            id=""
            cols="30"
            rows="1"
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button onClick={props.onHide} className="cancelPrv">
            Cancel
          </Button>
          <Button className="btnPrfSubmit" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductDetails;

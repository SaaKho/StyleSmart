import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { RatingStar } from "../Rating/RatingStar";
import AddFavoritToast from "../Toasts/AddFavoritToast";
import axios from 'axios'; // Import Axios for HTTP requests
import favouriteProductSvc from '../../services/favouriteProduct'
import { useSelector } from "react-redux";

const AddProduct = (props) => {

  const { show, onHide, productData } = props;
  const token = useSelector((state) => state.token); // Assuming state.name returns a Promise

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const [reasonsList, setReasonsList] = useState([
    "Price",
    "Size",
    "Color",
    "Brand",
    "Gender"
  ]);
  const [selectedReasons, setSelectedReasons] = useState([]);

  const handleButtonClick = async () => {
    console.log("Rating before submission:", rating);
    // Prepare formData object
    const formData = {

      brand_name: productData.brand_name,
      brand_logo: productData.brand_logo,
      product_name: productData.product_name,
      product_link: productData.product_link,
      price: productData.price,
      images_arr: productData.images_arr,
      comment: comment,
      rating: rating,
      reasons: selectedReasons.join(', ') // Combine selected reasons as a string
    };
    console.log("formdata", formData);
    try {

      console.log("Token", formData)
      const response = await favouriteProductSvc.addToFavorites(token, formData);

      console.log('Feedback submitted & Product added to favourites:', response);
      props.onHide();

    } catch (error) {
      // Handle API errors (e.g., show error message)
      console.error('Error submitting feedback:', error.message);
      // Optionally, you can set state to display an error message to the user
    }

    setShowToast(true);
  };

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
          <div className="d-flex flex-lg-row flex-column flex-column-reverse justify-content-between align-items-start ">
            <div>
              <p className="tellResn">Rate Our Categories: (Optional) </p>
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
              className="prvImage mx-auto mx-lg-0"
              src="/images/modal-prview-image.png"
              alt="pic"
            />
            {/* Add other content as needed */}
          </div>
          <RatingStar onChange={(newRating) => setRating(newRating)} />

          <textarea
            className="addTxtCmnt mb-3 w-full d-block"
            name=""
            id=""
            cols="30"
            rows="1"
            placeholder="Your Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </Modal.Body>
        <Modal.Footer className="border-0 d-flex justify-content-between align-items-center pt-0">
          <p className="infoDis">
            <img className="me-1" src="/images/info-Icon.svg" alt="info icon" />
            Product will be saved with the comments and rating
          </p>
          <div className="w-100">
            <Button
              className="btnPrfSubmit ms-3 w-100"
              onClick={handleButtonClick}
            >
              Done
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      {/* Showing the deleted successfully Toast component */}
      <AddFavoritToast showToast={showToast} onClose={() => setShowToast(false)} />

    </>
  );
};

export default AddProduct;

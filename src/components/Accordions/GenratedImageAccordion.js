import React, { useState, useEffect } from "react";
import { Button, CloseButton, ProgressBar } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

const GenratedImageAccordion = ({ uploadedImages: initialImages, onImageChange }) => {
  const [uploadedImages, setUploadedImages] = useState([]);

  useEffect(() => {
    setUploadedImages(initialImages);
  }, [initialImages]);

  const handleImageUpload = (event) => {
    const newImage = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(newImage);
    reader.onload = () => {
      const imageData = {
        name: newImage.name,
        dataURL: reader.result // Base64 encoded image data
      };
      const updatedImages = [...uploadedImages, imageData];
      setUploadedImages(updatedImages);
      onImageChange(updatedImages);
    };
  };

  const handleRemoveImage = (index) => {
    const updatedImages = uploadedImages.filter((image, i) => i !== index);
    setUploadedImages(updatedImages);
    onImageChange(updatedImages);
  };

  const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <button
        type="button"
        style={{ backgroundColor: "pink" }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  };

  return (
    <Accordion defaultActiveKey="0">
      <Card className="imageGenrat">
        <Card.Header className="d-md-flex align-items-start justify-content-between">
          <div className="mb-3 mb-md-0">
            <span className="gnrspan">
              <img className="me-2" src="/images/picture-Icon.svg" alt="icon" />
              Generate by image
            </span>
            <p>Upload your images below to generate wardrobes</p>
          </div>
          <div className="d-flex align-items-center">
            <span className="tagg">
              <img src="/images/up-img-Icon.svg" alt="icon" /> {uploadedImages.length} images
            </span>
            <div className="d-none d-md-block">
              <CustomToggle eventKey="0" as={Button}>
                <img
                  className="arrowSvg"
                  src="/images/downarrow.svg"
                  alt="icon"
                />
              </CustomToggle>
            </div>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <div className="upldItem">
              <label htmlFor="imageUpload" className="btUploadImg">
                <img src="/images/picture-outline-Icon.svg" alt="icon" />
                <p>Browse or drag and drop any image to upload</p>
              </label>
              <input
                id="imageUpload"
                type="file"
                onChange={handleImageUpload}
                style={{ display: "none" }}
                multiple
              />
            </div>
            {/* Display uploaded images */}
            {uploadedImages.map((imageData, index) => (
              <div key={index} className="uploadingItems d-flex justify-content-sm-start justify-content-between align-items-center gap-2">
                <div className="d-flex justify-content-start align-items-center gap-2">
              
                <p className="imageName">{imageData.name}</p>
                <ProgressBar now={60} label={`${60}%`} visuallyHidden className="uploadProgress" />
                  <img src="/images/blue-img-Icon.svg" alt="items" />

                 
                </div>
                <CloseButton aria-label="Hide" onClick={() => handleRemoveImage(index)} />
              </div>
            ))}
          </Card.Body>
        </Accordion.Collapse>
        <div className="card-header d-flex justify-content-center d-md-none ">
          <CustomToggle eventKey="0" as={Button}>
            <img className="arrowSvg" src="/images/downarrow.svg" alt="icon" />
          </CustomToggle>
        </div>
      </Card>
    </Accordion>
  );
};

export default GenratedImageAccordion;

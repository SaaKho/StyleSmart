import React, { useState, useEffect } from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import GenratedImageAccordion from '../Accordions/GenratedImageAccordion';
import GenrateSocialAccordion from '../Accordions/GenrateSocialAccordion';
import GeneratePreferences from '../Accordions/GentratePreferences';
import { useNavigate } from 'react-router-dom';
import brandSvc from "../../services/brandService"; 
import UnSaveWardrobe from "../../services/unsaveWardrobe";
import { useSelector } from "react-redux";


const GuestGenrateForm = () => {

  const [uploadedImages, setUploadedImages] = useState([]);
  const [preferences, setPreferences] = useState([]); 
  const [facebookLink, setFacebookLink] = useState('');
  const [instagramLink, setInstagramLink] = useState('');
  const [wardrobeProducts, setWardrobeProducts] = useState([]);
  const token = useSelector((state) => state.token);
  const [draftWardrobeId, setDraftWardrobeId] = useState(null);
  const navigate = useNavigate();

  
  // brands api to get brand products in drafted wardrobe
  useEffect(() => {
    const fetchWardrobeProducts = async () => {
      try {
        const data = await brandSvc.getWardrobeProducts("women");
        console.log("Wardrobe data:", data);
        setWardrobeProducts(data);
      } catch (error) {
        console.error("Error fetching wardrobe products:", error);
      }
    };
    fetchWardrobeProducts();

  }, []); // Run this effect whenever preferences state changes

  const handleSubmit = async (submittedPreferences) => {
    const dataToSend = {
      uploadedImages,
      preferences: submittedPreferences,
      facebookLink,
      instagramLink,
    };

    const draftData = {
      name: "Draft Wardrobe",
      upload_images_arr: dataToSend.uploadedImages.map((x) => x.dataURL),
      media_links: {
        Facebook: dataToSend.facebookLink,
        Instagram: dataToSend.instagramLink,
      },
      manual_preferences: dataToSend.preferences,
      products: wardrobeProducts,
    };

    // drafts api to create drafted wardrobe
    const response = await UnSaveWardrobe.UnSaveWardrobe(draftData, token);
    setDraftWardrobeId(response.wardrobe_id);
    navigate('/guestresult', { state: { dataToSend, draftWardrobeId: response.wardrobe_id } });

  };


  const handleImageUpload = (event) => {
    const newImage = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(newImage);
    reader.onload = () => {
      const imageData = {
        name: newImage.name,
        dataURL: reader.result // Base64 encoded image data
      };
      setUploadedImages([...uploadedImages, imageData]);
      // onImageChange([...uploadedImages, imageData]);
    };
  };

  const handleFacebookLinkChange = (value) => {
    setFacebookLink(value);
  };

  const handleInstagramLinkChange = (value) => {
    setInstagramLink(value);
  };

  const handlePreferencesSubmit = (newPreferencesData) => {
    console.log('Received new preferences data in Parent:', newPreferencesData);
    // Use functional update to ensure correct state update
    setPreferences((prevPreferences) => {
      console.log('Previous preferences:', prevPreferences);
      const updatedPreferences = [...prevPreferences, ...newPreferencesData];
      console.log('Updated preferences:', updatedPreferences);
      return updatedPreferences;
    });
  };
  return (
    <div className="guestgenrete-Form">
      <div className="poopOverinfo text-end mb-2">
        {['top'].map((placement) => (
          <OverlayTrigger
            trigger="click"
            key={placement}
            placement={placement}
            overlay={
              <Popover id={`popover-positioned-${'top'}`}>
                <Popover.Body>
                  <img
                    className="text-end"
                    src="/images/question-mark-Icon.svg"
                    alt="icon"
                  />
                  <p className="totlgnrteprdt">
                    Total of 20 products will be generated
                  </p>
                </Popover.Body>
              </Popover>
            }
          >
            <Button>
              {' '}
              <img
                className="text-end"
                src="/images/question-mark-Icon.svg"
                alt="icon"
              />
            </Button>
          </OverlayTrigger>
        ))}
      </div>
      <GenratedImageAccordion
        uploadedImages={uploadedImages}
        onImageChange={setUploadedImages}
      />

      <GenrateSocialAccordion
        onFacebookLinkChange={handleFacebookLinkChange}
        onInstagramLinkChange={handleInstagramLinkChange}
      />
      <GeneratePreferences
        preferences={preferences}
        onPreferencesChange={handlePreferencesSubmit}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default GuestGenrateForm;

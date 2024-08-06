import React, { useState,useEffect } from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';
import GenratedImageAccordion from '../../components/Accordions/GenratedImageAccordion';
import GeneratePreferences from '../../components/Accordions/GentratePreferences';
import GenrateSocialAccordion from '../../components/Accordions/GenrateSocialAccordion';

const GuestForm = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [preferences, setPreferences] = useState([]); // Corrected state setter name
  const [facebookLink, setFacebookLink] = useState('');
  const [instagramLink, setInstagramLink] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    console.log('Updated Preferences:', preferences);
  }, [preferences]); // Run this effect whenever preferences state changes

  const handleSubmit = (submittedPreferences) => {
    console.log('Before navigation:', { uploadedImages, submittedPreferences, facebookLink, instagramLink });
    const dataToSend = {
      uploadedImages: uploadedImages,
      preferences: submittedPreferences, // Use the submitted preferences here
      facebookLink: facebookLink,
      instagramLink: instagramLink,
    };
    navigate('/guestresult', { state: { dataToSend } });
  };
  

  const handleImageChange = (newImages) => {
    setUploadedImages(newImages);
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
        onImageChange={handleImageChange}
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

export default  GuestForm;

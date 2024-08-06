import React, { useState, useEffect } from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import GenratedImageAccordion from '../Accordions/GenratedImageAccordion';
import GenrateSocialAccordion from '../Accordions/GenrateSocialAccordion';
import GeneratePreferences from '../Accordions/GentratePreferences';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import GeneratePreferencesTwo from '../Accordions/GeneratePreferncesTwo';


const UpdateForm = ({ uploadedImage = [], manualPreferences = [], mediaLinks = {} }) => {
      const [uploadedImages, setUploadedImages] = useState(uploadedImage);
      const [preferences, setPreferences] = useState(manualPreferences);
      const [facebookLink, setFacebookLink] = useState(mediaLinks.facebook || '');
      const [instagramLink, setInstagramLink] = useState(mediaLinks.instagram || '');

      const token = useSelector((state) => state.token);
      const navigate = useNavigate();

      useEffect(() => {
            setUploadedImages(uploadedImage);
            setPreferences(manualPreferences);
            setFacebookLink(mediaLinks.facebook || '');
            setInstagramLink(mediaLinks.instagram || '');
            console.log("UpdateForm Initialized with:", { uploadedImage, manualPreferences, mediaLinks });
      }, [uploadedImage, manualPreferences, mediaLinks]);

      const handleSubmit = async (submittedPreferences) => {
            const dataToSend = {
                  uploadedImages,
                  preferences: submittedPreferences,
                  facebookLink,
                  instagramLink,
            }
            // Logic for submitting data
      }

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
                        initialFacebookLink={mediaLinks.Facebook}
                        initialInstagramLink={mediaLinks.Instagram}
                        onFacebookLinkChange={handleFacebookLinkChange}
                        onInstagramLinkChange={handleInstagramLinkChange}
                  />
                  <GeneratePreferencesTwo              
                        manualPreferences={manualPreferences}
                        preferences={preferences}
                        onPreferencesChange={handlePreferencesSubmit}
                        onSubmit={handleSubmit}
                  />
            </div>
      );
};

export default UpdateForm;

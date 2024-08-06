import React, { useState, useEffect } from 'react';
import {
  Button,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Row,
} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import MultiRangeSlider from 'multi-range-slider-react';
import { ChromePicker } from "react-color";
import { CompactPicker } from 'react-color';
import { CirclePicker } from "react-color";

import { useNavigate } from 'react-router-dom';

const GeneratePreferencesTwo = ({  manualPreferences = [], onPreferencesChange, onSubmit }) => {


  const [gender, setGender] = useState('MALE'); // Track selected gender
  const [preferences, setPreferences] = useState(manualPreferences);    
  const MAX_PREFERENCES = 20;
  const navigate = useNavigate();
  const [priceError, setPriceError] = useState('');

  const PriceRegex = /^\d+(\.\d{1,2})?$/; // Allows prices with up to two decimal places


  const handleAddPreference = () => {
    if (preferences.length < MAX_PREFERENCES) {
      const newId = Date.now(); // Generate a unique ID
      const newPreference = {
        id: newId,
        gender: gender,
        category: '',
        brand: '',
        color: '#000000',
        size: '',
        quantity: 0,
        price: 0
      };
      const updatedPreferences = [...preferences, newPreference];
      setPreferences(updatedPreferences);
      onPreferencesChange(updatedPreferences);
    }
  };

  const handleRemovePreference = (id) => {
    const updatedPreferences = preferences.filter(
      (preference) => preference.id !== id
    );
    setPreferences(updatedPreferences);
    onPreferencesChange(updatedPreferences);

  };
  const handleChange = () => {
    // Call the prop function to send preferencesData to the parent component
    // Handle form submission or other actions
    //navigate('/GuestGeneratedForm', { state: { preferences } });


    onSubmit(preferences);

    // Navigate to the result page or perform other actions
    // navigate('/wardroberesults');
  };

  const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!')
    );

    //navigate("/wardroberesults");
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

  const handleGenderChange = (selectedGender) => {
    setGender(selectedGender);
    // Update gender for existing preferences as well
    const updatedPreferences = preferences.map(preference => ({
      ...preference,
      gender: selectedGender,
    }));
    setPreferences(updatedPreferences);
    onPreferencesChange(updatedPreferences);
  };

  const handlePreferenceChange = (id, field, value) => {
    console.log("Price", value);
    const updatedPreferences = preferences.map((preference) => {
      if (preference.id === id) {
        return { ...preference, [field]: value };    // Update field value
      }
      return preference;
    });
    setPreferences(updatedPreferences);
  };

  // validation for restricting negative value of price
  const validatePrice = (value) => {
    if (!PriceRegex.test(value) || parseFloat(value) < 0) {
      setPriceError('Price can not be negative');
    } else {
      setPriceError('');
    }
  };

  const handlePriceBlur = (event) => {
    validatePrice(event.target.value);
  };

  const handlePriceFocus = () => {
    setPriceError('');
  };


  return (
    <>
      <Accordion defaultActiveKey="0">
        <Card className="preferencesGenrat">
          <Card.Header className="d-md-flex align-items-start justify-content-between">
            <div className="mb-3 mb-md-0">
              <span className="gnrspan">
                <img className="me-2" src="/images/card-Icon.svg" alt="icon" />
                Generate by your Custom Preferences
              </span>
              <p className="prvd">
                Provide your preferences manually to generate wardrobes
              </p>
            </div>
            <div className="d-flex align-items-center">
              <span className="tagg">
                <img src="/images/card-whiteIcon.svg" alt="icon" />{preferences.length} Preferences
              </span>
              <p className="acnumber mx-2 d-none d-md-block">
                <span>{preferences.length}</span>
                <span>/20</span>
              </p>
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>

              <div className="Gender mb-4">
                <strong>Gender</strong>
                <div className="d-flex align-items-center gap-3">
                  <Button
                    className={gender === 'MALE' ? 'active' : ''}
                    onClick={() => handleGenderChange('MALE')}
                  >
                    MALE
                  </Button>
                  <Button
                    className={gender === 'FEMALE' ? 'active' : ''}
                    onClick={() => handleGenderChange('FEMALE')}
                  >
                    FEMALE
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      {preferences.map((preference, index) => (
        <Accordion key={preference.id} defaultActiveKey={`0-${index}`}>
          <Card className="preferencesGenrat">
            <Card.Header className="d-md-flex align-items-start justify-content-between">
              <div className="mb-3 mb-md-0">
                <span className="gnrspan">Preference {index + 1}</span>
              </div>
              <div className="d-flex align-items-center">
                <Button
                  className="btnRemove"
                  onClick={() => handleRemovePreference(preference.id)}
                >
                  Remove
                </Button>
                <CustomToggle eventKey={`0-${index}`} as={Button}>
                  <img
                    className="arrowSvg"
                    src="/images/downarrow.svg"
                    alt="icon"
                  />
                </CustomToggle>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey={`0-${index}`}>
              <Card.Body className="nestedAcrdn">
                <Row className="p-3">
                  <Col md={6} xs={12} className="ps-md-0">
                    <Form.Label>Category</Form.Label>
                    <InputGroup className="mb-3">
                      <Button className="searchIcon">
                        <img src="/images/search-Icon.svg" alt="icon" />
                      </Button>
                      <Form.Control
                        className="searchInput"
                        aria-label="Example text with two button addons"
                        placeholder="Search Category"
                        value={preference.category}
                        onChange={(e) =>
                          handlePreferenceChange(
                            preference.id,
                            'category',
                            e.target.value
                          )
                        }
                      />
                      <Button
                        className="srchClr"
                        onClick={() =>
                          handlePreferenceChange(preference.id, 'category', '')
                        }
                      >
                        Clear
                      </Button>
                    </InputGroup>
                  </Col>
                  <Col md={6} xs={12} className="pe-md-0">
                    <Form.Label>Brand</Form.Label>
                    <InputGroup>
                      <Button className="searchIcon">
                        <img src="/images/search-Icon.svg" alt="icon" />
                      </Button>
                      <Form.Control
                        className="searchInput"
                        aria-label="Example text with two button addons"
                        placeholder="Furor"
                        value={preference.brand}
                        onChange={(e) =>
                          handlePreferenceChange(
                            preference.id,
                            'brand',
                            e.target.value
                          )
                        }
                      />
                      <Button
                        className="srchClr"
                        onClick={() =>
                          handlePreferenceChange(preference.id, 'brand', '')
                        }
                      >
                        Clear
                      </Button>
                    </InputGroup>
                  </Col>
                  <Col md={6} xs={12} className="order-1 order-md-0">
                    <Row>
                      <Col md={6}>
                        <div>
                          <Form.Label>Price</Form.Label>
                          <InputGroup>
                            <Form.Control
                              type="number"
                              placeholder="Enter Price"
                              value={preference.price}
                              onChange={(e) =>
                                handlePreferenceChange(
                                  preference.id,
                                  'price',
                                  parseFloat(e.target.value)
                                )
                              }
                              onBlur={handlePriceBlur}
                              onFocus={handlePriceFocus}
                            />
                          </InputGroup>
                        </div>
                        {priceError && <p style={{ color: "red" }} >{priceError}</p>}
                      </Col>
                      <Col md={6}>
                        <div className="colorPickr" style={{ marginLeft: "1px" }}>
                          <Form.Label>Color</Form.Label>
                          <CirclePicker
                            color={preference.color}
                            onChange={(color) =>
                              handlePreferenceChange(
                                preference.id,
                                'color',
                                color.hex
                              )
                            }
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6} xs={12}>
                    <Row>
                      <Col md={6}>
                        <Form.Label>Size</Form.Label>
                        <InputGroup>
                          <Form.Select
                            className="selectSize"
                            aria-label="Size"
                            onChange={(e) =>
                              handlePreferenceChange(
                                preference.id,
                                'size',
                                e.target.value
                              )
                            }
                            value={preference.size} // Set the value to the selected size
                          >
                            <option value="">Select size</option>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                            <option value="Xl">Xl</option>
                          </Form.Select>
                        </InputGroup>
                      </Col>

                      <Col md={6}>
                        <Form.Label>Quantity</Form.Label>
                        <InputGroup>
                          <Form.Select
                            className="selectQuantity"
                            aria-label="Quantity"
                            onChange={(e) =>
                              handlePreferenceChange(
                                preference.id,
                                'quantity',
                                parseInt(e.target.value)
                              )
                            }
                            value={preference.quantity} // Set the value to the selected quantity
                          >
                            <option value="">Select quantity</option>
                            <option value="1">1</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                          </Form.Select>
                          {/* Display the selected quantity in the input field */}

                        </InputGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
      <Button className="addPreference" onClick={handleAddPreference}>
        <img src="/images/plus-Icon.svg" alt="plus" /> Add
      </Button>
      <Button className="btnPrimary mx-auto mt-5 mb-3" onClick={handleChange}>
        <img className="me-3" src="/images/staricon.svg" alt="star" /> Generate
        the magic
      </Button>
    </>
  );
};

export default GeneratePreferencesTwo;  
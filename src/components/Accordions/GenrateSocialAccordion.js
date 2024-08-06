import React, { useState, useEffect } from "react";
import { Button, Col, FormControl, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

const GenrateSocialAccordion = ({
  initialFacebookLink = "",
  initialInstagramLink = "",
  onFacebookLinkChange,
  onInstagramLinkChange,
}) => {
  const [facebookLink, setFacebookLink] = useState(initialFacebookLink);
  const [instagramLink, setInstagramLink] = useState(initialInstagramLink);

  useEffect(() => {
    setFacebookLink(initialFacebookLink);
    setInstagramLink(initialInstagramLink);
  }, [initialFacebookLink, initialInstagramLink]);

  const handleFacebookLinkChange = (e) => {
    const { value } = e.target;
    setFacebookLink(value);
    onFacebookLinkChange(value);
  };

  const handleInstagramLinkChange = (e) => {
    const { value } = e.target;
    setInstagramLink(value);
    onInstagramLinkChange(value);
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
      <Card className="socialGenrat">
        <Card.Header className="d-md-flex align-items-start justify-content-between">
          <div className="mb-3 mb-md-0">
            <span className="gnrspan">
              <img
                className="me-2"
                src="/images/link-Icon.svg"
                alt="icon"
              />
              Generate by Social Media Posts
            </span>
            <p>
              Provide your Instagram or Facebook Profile Link to generate
              wardrobes
            </p>
          </div>
          <div className="d-flex align-items-center">
            <span className="tagg">
              <img
                src="/images/links-white-Icon.svg"
                alt="icon"
              />
              Links
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
          <Card.Body className="px-0">
            <Row>
              <Col xs={12} lg={6} className="position-relative mb-3 mb-lg-0">
                <FormControl
                  type="text"
                  placeholder="Facebook link"
                  value={facebookLink}
                  onChange={handleFacebookLinkChange}
                />
                <img
                  className="inptlogo"
                  src="/images/fcbIcon.svg"
                  alt="facebook icon"
                />
              </Col>
              <Col xs={12} lg={6} className="position-relative">
                <FormControl
                  type="text"
                  placeholder="Instagram link"
                  value={instagramLink}
                  onChange={handleInstagramLinkChange}
                />
                <img
                  className="inptlogo"
                  src="/images/insta-Icon.svg"
                  alt="instagram icon"
                />
              </Col>
            </Row>
          </Card.Body>
        </Accordion.Collapse>
        <div className="card-header d-flex justify-content-center d-md-none ">
          <CustomToggle eventKey="0" as={Button}>
            <img
              className="arrowSvg"
              src="/images/downarrow.svg"
              alt="icon"
            />
          </CustomToggle>
        </div>
      </Card>
    </Accordion>
  );
};

export default GenrateSocialAccordion;

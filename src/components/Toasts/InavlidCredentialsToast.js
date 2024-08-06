import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const InvalidCredentialsToast = ({ showToast, onClose }) => {
      return (
            <div>
                  {showToast && <div className="Toastoverlay"></div>}
                  <Toast
                        className="EditSavedToast bg-white px-4 py-3"
                        show={showToast}
                        onClose={onClose}
                        delay={2000}
                        autohide
                  >
                        <Toast.Body>
                              <div className="d-flex flex-column align-items-center">
                                    <i className="bi bi-exclamation-circle-fill text-danger me-3" style={{ fontSize: '24px' }}></i>
                                    <p className="prdtAdded" style={{ color: 'red' }}>Inavlid Credentials!
                                          <br />Please Try Again</p>
                              </div>
                        </Toast.Body>
                  </Toast>
            </div>
      )
}

export default InvalidCredentialsToast
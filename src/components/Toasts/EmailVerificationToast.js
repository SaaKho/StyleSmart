import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const EmailVerificationToast = ({ showToast, onClose }) => {
      return (
            <div>
                  {showToast && <div className="Toastoverlay"></div>}
                  <Toast
                        className="EditSavedToast bg-white px-4 py-3"
                        show={showToast}
                        onClose={onClose}
                        delay={3000}
                        autohide
                  >
                        <Toast.Body>
                              <div className="d-flex flex-column align-items-center">
                                    <div class="spinner-border text-primary" role="status">
                                    </div>
                                    <p className="prdtAdded">Email Verification has been sent to your email
                                          <br /> Please Verify! </p>
                              </div>
                        </Toast.Body>
                  </Toast>
            </div>
      )
}

export default EmailVerificationToast
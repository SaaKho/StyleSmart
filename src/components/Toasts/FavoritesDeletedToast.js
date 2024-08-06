import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FavoritesDeletedToast = ({ showToast, onClose }) => {
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
                                    <img
                                          className="me-3"
                                          src="/images/tick-Icon-placeholder.svg"
                                          alt="tick"
                                    />
                                    <p className="prdtAdded"> Favorite Item Deleted Successfully! </p>
                              </div>
                        </Toast.Body>
                  </Toast>
            </div>
      )
}

export default FavoritesDeletedToast
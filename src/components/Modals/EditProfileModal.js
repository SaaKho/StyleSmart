import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';
import { getAuth, updateProfile } from 'firebase/auth';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { firebaseApp } from '../../firebase';
import { useDispatch } from 'react-redux';
import { updateUserToken } from '../../store/actions';
import UpdatedInfoToast from '../Toasts/UpdatedInfoToast';

const EditProfileModal = ({ show, onHide }) => {
      const dispatch = useDispatch();
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [currentUser, setCurrentUser] = useState(null);
      const [error, setError] = useState(null);
      const auth = getAuth(firebaseApp);
      const db = getFirestore(firebaseApp);
      const [showToast, setShowToast] = useState(false);

      // Fetch user data from Firestore and update state
      const fetchUserData = async () => {
            try {
                  if (auth.currentUser) {
                        const userDocRef = doc(db, 'users', auth.currentUser.uid);
                        const userDocSnapshot = await getDoc(userDocRef);

                        if (userDocSnapshot.exists()) {
                              const userData = userDocSnapshot.data();
                              setCurrentUser(userData);
                              setName(userData.displayName);
                              setEmail(userData.email);
                        }
                  }
            } catch (error) {
                  console.error('Error fetching user data:', error.message);
            }
      };

      // Effect to fetch user data when modal shows
      useEffect(() => {
            if (show) {
                  fetchUserData();
            }
      }, [show]);

      // Handle save button click
      const handleSave = async () => {
            try {
                  if (!auth.currentUser) {
                        throw new Error('User not authenticated');
                  }

                  // Update name in authentication (using displayName)
                  await updateProfile(auth.currentUser, {
                        displayName: name,
                  });

                  // Update name in Firestore
                  const userDocRef = doc(db, 'users', auth.currentUser.uid);
                  await updateDoc(userDocRef, {
                        displayName: name,
                  });

                  // Update currentUser state with the new name
                  setCurrentUser(prevUser => ({
                        ...prevUser,
                        displayName: name,
                  }));

                  // Dispatch action to update Redux store
                  dispatch(updateUserToken({ ...currentUser, displayName: name }));

                  onHide(); // Close modal
                  setShowToast(true);
            } catch (error) {
                  console.error('Error updating profile:', error.message);
                  setError('Failed to update profile. Please try again.');
            }
      };

      // Auto-fill email and disable the field once data is fetched
      useEffect(() => {
            if (currentUser && currentUser.email) {
                  setEmail(currentUser.email);
            }
      }, [currentUser]);

      return (
            <>
                  <Modal centered show={show} onHide={onHide}>
                        <Modal.Header closeButton className="modal-header-custom">
                              <Modal.Title>Your Profile</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                              {/*
                              <div className="text-center mb-3">
                                      <div className="profile-image-container">
                                          <img src="profile_image_url" className="profile-image"
                                           />
                                          <div className="camera-icon">
                                          <i className="fas fa-camera"></i>
                                          </div>
                                    </div>  
                              </div>
                              */}
                              <Form>
                                    <Form.Group controlId="formName" className="mb-3">
                                          <InputGroup>
                                                <InputGroup.Text style={{ borderRight: 0, backgroundColor: 'white' }}>
                                                      <i className="far fa-user"></i>
                                                </InputGroup.Text>
                                                <Form.Control
                                                      type="text"
                                                      placeholder="Your name"
                                                      value={name}
                                                      onChange={(e) => setName(e.target.value)}
                                                      style={{ borderLeft: 0 }}
                                                />
                                          </InputGroup>
                                    </Form.Group>
                                    <Form.Group controlId="formEmail" className="mb-3">
                                          <InputGroup>
                                                <InputGroup.Text style={{ borderRight: 0, backgroundColor: 'white' }}>
                                                      <i className="far fa-envelope"></i>
                                                </InputGroup.Text>
                                                <Form.Control
                                                      type="email"
                                                      placeholder="Your email"
                                                      value={email}
                                                      disabled // Disable the email field
                                                      style={{ borderLeft: 0 }}
                                                />
                                          </InputGroup>
                                    </Form.Group>
                                    {error && <p className="text-danger">{error}</p>}
                              </Form>
                        </Modal.Body>
                        <Modal.Footer>
                              <Button variant="secondary" onClick={onHide} style={{ width: '20%', backgroundColor: 'white', color: 'black' }}>
                                    Cancel
                              </Button>
                              <Button variant="primary" onClick={handleSave} style={{ width: '20%' }}>
                                    Save
                              </Button>
                        </Modal.Footer>
                  </Modal>

                  <UpdatedInfoToast showToast={showToast} onClose={() => setShowToast(false)} />
            </>
      );
};

export default EditProfileModal;


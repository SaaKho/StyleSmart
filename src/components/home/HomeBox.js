import React, { useState, useEffect } from "react";
import { Button, Col, Dropdown, Row } from "react-bootstrap";
import FeedbackModal from "../Modals/FeedbackModal";
import SortedBy from "../sorted/SortedBy";
import { Link } from "react-router-dom";
import SaveWardrobe from "../../services/saveWardrobe";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DeletedSuccessfullyToast from "../Toasts/DeletedSuccessfullyToast";
import { Pencil } from 'react-bootstrap-icons';
import UnSaveWardrobe from "../../services/unsaveWardrobe";
import RenameDraftModal from "../Modals/RenameDraftModal";
import UnSaveWardrobesSortedBy from "../sorted/UnSaveWardrobesSortedBy";

const HomeBox = () => {

  const userId = "user123";
  const token = useSelector((state) => state.token);
  const [modalShow, setModalShow] = useState(false);
  const [wardrobes, setWardrobe] = useState([]);
  const [showToast, setShowToast] = useState(false);      // State to control the visibility of the toast
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [sortOrder, setSortOrder] = useState('Newest First'); // Default sorting
  const [currentWardrobeId, setCurrentWardrobeId] = useState(null);
  const [wardrobeProducts, setWardrobeProducts] = useState([]);

  // api required parameters
  const accessToken = useSelector(state => state.token);
  const navigate = useNavigate();

  const [dataToSend, setDataToSend] = useState({
    uploadedImages: [],
    facebookLink: '',
    instagramLink: '',
    preferences: [],
  });

  // Get Request to fetch unsaved wardrobes i.e. Drafts 
  useEffect(() => {
    const fetchWardrobe = async () => {
      try {
        const data = await UnSaveWardrobe.getAllUnSaveWardrobes(token);
        console.log("wardrobedata", data);

        // Sorting on the basis of `created_at timetstramp`
        const sortedData = sortOrder === 'Newest First'
          ? [...data].sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          : [...data].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

        setWardrobe(sortedData);

      } catch (error) {
        console.error("Error fetching wardrobe products:", error);
      }
    };

    fetchWardrobe();
  }, [userId, token, sortOrder]);  // Run effect whenever userId or token changes

  // Delete Request to delete (draft ) i.e. unsaved wardrobe
  const handleDeleteWardrobe = async (id) => {
    if (!id) {
      console.error('Draft ID is undefined');
      return;
    }

    try {
      await UnSaveWardrobe.deleteUnSaveWardrobe(accessToken, id);
      console.log("Draft Deleted Successfully");
      // Setting the state to show the toast after successful deletion
      setShowToast(true);

      // Set a timeout to refresh the page after 3 seconds , till 3 seconds deletion toast will show 
      setTimeout(() => {
        window.location.reload();
      }, 3000);

    } catch (error) {
      console.error('Failed to delete draft:', error);
    }
  };


  const handleButtonClick = () => {
    setModalShow(!modalShow); // Toggle the modal state
  };


  // Function to close the modal
  const handleModalClose = () => {
    setShowRenameModal(false); // Close the modal
  };

  // function for sorting
  const handleSortChange = (order) => {
    console.log('Sorting order changed to:', order);  // Debug log
    setSortOrder(order); // Update sorting order
  };

  // extracting only date from created_at timestramp, instaed of time 
  const formatDate = (datetime) => {
    const date = new Date(datetime);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options); // Formats the date as "Jan 1, 2023"
  };


  const handleSaveWardrobe = async (wardrobeId) => {
    if (!wardrobeId) {
      console.error('Wardrobe ID is undefined');
      return;
    }
    try {
      const selectedWardrobe = wardrobes.find(x => x.wardrobe_id === wardrobeId);
  
      if (!selectedWardrobe) {
        console.error('No wardrobe found with the provided ID:', wardrobeId);
        return;
      }
  
      // Ensure the properties are defined and have correct data types
      const uploadedImages = selectedWardrobe.uploadedImages ? selectedWardrobe.uploadedImages : [];
      const facebookLink = selectedWardrobe.facebookLink ? selectedWardrobe.facebookLink : '';
      const instagramLink = selectedWardrobe.instagramLink ? selectedWardrobe.instagramLink : '';
      const preferences = selectedWardrobe.preferences ? selectedWardrobe.preferences : [];
      const products = selectedWardrobe.products ? selectedWardrobe.products : [];
  
      // Construct the data to be sent
      const dataToSend = {
        name: selectedWardrobe.name,
        upload_images_arr: Array.isArray(uploadedImages) ? uploadedImages.map((x) => x.dataURL) : [], // Ensure uploadedImages is an array
        media_links: {
          Facebook: facebookLink,
          Instagram: instagramLink
        },
        manual_preferences: preferences,
        products: products
      };
  
      // Log the data being sent
      console.log('Data being sent to save wardrobe:', dataToSend);
  
      // Create Request to push in user saved wardrobes 
      const response = await SaveWardrobe.saveWardrobe(token, dataToSend);
      console.log('Wardrobe Saved successfully:', response);
  
      // Delete Request to delete from Draft wardrobe
      await UnSaveWardrobe.deleteUnSaveWardrobe(token, wardrobeId);
      console.log("Draft Deleted Successfully");
  
      setTimeout(() => {
        window.location.reload();
      }, 3000);
  
    } catch (error) {
      console.error('Failed to save wardrobe:', error);
    }
    setShowToast(true);
  };
  

  return (
    <>
      <div className="HomeBox">
        <div className="gif-image d-none d-lg-block">
          <img src="/images/Home-screen.gif" alt="Gif Image" />
        </div>
        <UnSaveWardrobesSortedBy onSortChange={handleSortChange} />

        <div className="MainCardBox">
          <Row className="g-3 me-0">
            {wardrobes && wardrobes.map((wardrobeItem, index) => (
              <Col key={index} xs={12} md={6} xl={3} lg={4}>
                <div className="HomeCard">
                  <Row className="g-1 mb-4 justify-content-center justify-content-md-start">
                    {/* Rendering wardrobe images here */}
                    {wardrobeItem.products && Array.isArray(wardrobeItem.products) && wardrobeItem.products.slice(0, 6).map((product, imgIndex) => (
                      <Col key={imgIndex} md={4} className="mblCol">
                        {product.image && product.image.length > 0 && (
                          <>
                            <img className="SmlProduct" src={product.image[0]} alt={`product-${imgIndex}`} />
                          </>
                        )}
                      </Col>
                    ))}
                  </Row>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Link to={`/draft/${wardrobeItem.wardrobe_id}`} style={{ textDecoration: 'none' }}>
                      <p className="WrdbNmbr" >{wardrobeItem.name}</p>
                    </Link>
                    <Dropdown className="twoOption">
                      <Dropdown.Toggle id="dropdown-basic" className="btnSimple">
                        <img src="/images/three-Icon.svg" alt="three doit" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleSaveWardrobe(wardrobeItem.wardrobe_id)}>
                          Save Wardrobe
                        </Dropdown.Item>

                        <Dropdown.Item
                          style={{ color: '#962d2d' }}
                          onClick={() => handleDeleteWardrobe(wardrobeItem.wardrobe_id)}>
                          Delete  <img src="/images/remove-icon.svg" alt="icon" />
                        </Dropdown.Item>

                        <Dropdown.Item onClick={() => {
                          setShowRenameModal(true);
                          setCurrentWardrobeId(wardrobeItem.wardrobe_id); // Set current wardrobe ID when Rename is clicked
                          console.log("Current ID set for renaming:", wardrobeItem.wardrobe_id);
                        }}>
                          <span className="d-flex justify-content-between align-items-center">
                            <span>Rename</span>
                            <Pencil />
                          </span>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <RenameDraftModal
                      show={showRenameModal}
                      onHide={handleModalClose}
                      wardrobeId={currentWardrobeId}
                    // Passing the currentWardrobeId to the modal
                    />

                  </div>
                  <div className="CreatedTime d-flex justify-content-between align-items-center">
                    <Button className="BtnTaggCstm">
                      <img src="/images/home-card-Icon.svg" alt="custom" />
                      <span>Custom</span>
                    </Button>

                    <p className="AgaoTime">
                      Created: {formatDate(wardrobeItem.created_at)}
                    </p>

                  </div>
                  <div className="BottomCurveImg">
                    <img src="/images/bottom-bg-img.svg" alt="curve" />
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>


        {/* Showing the deleted successfully Toast component */}
        <DeletedSuccessfullyToast showToast={showToast} onClose={() => setShowToast(false)} />

        <Button className="btnFeedBack" onClick={handleButtonClick}>
          <img src="/images/feedback-Icon.svg" alt="icon" />
          Feedback
        </Button>
        <FeedbackModal show={modalShow} onHide={() => setModalShow(false)} />
      </div >
    </>
  );
};

export default HomeBox;

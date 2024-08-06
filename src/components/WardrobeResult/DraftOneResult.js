import React, { useState, useEffect } from "react";
import { Button, FormCheck } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import BasedUponPrfrnc from "../guestGenratedResult.js/BasedUponPrfrnc";
import SuccessfullyRmvPrdct from "../Toasts/SuccessfullyRmvPrdct";
import ProductOverview from "../Modals/ProductOverview";  // Import ProductOverview component
import RegenerateModal from "../Modals/RegenerateModal";
import SuccessfullySavedToast from "../Toasts/SuccessfullySvedToast";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import SaveWardrobe from "../../services/saveWardrobe";
import SavedBasedUponPrfrnc from "./savedbasedpref";
import { deleteSaveWardrobe, renameWardrobe } from '../../services/saveWardrobe';
import DeleteSuccessfullyToast from "../Toasts/DeletedSuccessfullyToast";
import { Link } from 'react-router-dom';
import UnSaveWardrobe from "../../services/unsaveWardrobe";
import { Pencil } from 'react-bootstrap-icons';

const DraftOneResult = () => {


  const navigate = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const location = useLocation();
  const { wardrobeId } = useParams();
  const accessToken = useSelector(state => state.token);
  const [wardrobes, setWardrobe] = useState({ products: [] }); // Initialize with an empty products array
  const [modalRegenrateShow, setModalRegenrateShow] = useState(false);
  const [showToast, setShowToast] = useState(false);      // State to control the visibility of the toast

  const userId = "user123";
  // Declare a variable to hold the timeout ID
  let timeoutId;
  const [showModal, setShowModal] = React.useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchWardrobe = async () => {
      try {
        const data = await UnSaveWardrobe.getUnSaveWardrobeById(accessToken, wardrobeId);
        console.log("Draft One Result Data:", data); // Check fetched data
        setWardrobe(data);  // Update state with fetched wardrobe products data
      } catch (error) {
        console.error("Error fetching wardrobe products:", error);
        // Handle error or set an error state
      }
    };

    fetchWardrobe();
  }, [userId, accessToken, wardrobeId]);

  const handleProductSelect = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const handleCheckboxChange = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  // function to delete wardrobe
  const handleDeleteWardrobe = async () => {
    try {
      await UnSaveWardrobe.deleteUnSaveWardrobe(accessToken, wardrobeId);
      // Setting the state to show the toast after successful deletion of toast
      setShowToast(true);
      console.log("Draft Deleted Successfully");

      // Calling navigate inside the setTimeout function and store the timeout ID
      timeoutId = setTimeout(() => {
        navigate('/home');
      }, 2000);

    } catch (error) {
      console.error('Failed to delete draft:', error);
    }
  };

  // Clear the timeout when the component unmounts
  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);


  const handleChange = () => {
    navigate("/");
  };

  return (
    <>
      <SavedBasedUponPrfrnc
        uploadedImage={wardrobes.upload_images_arr}
        manualPreferences={wardrobes.manual_preferences}
        mediaLinks={wardrobes.media_links}
      />

      <div className="yourWardrobe">
        <div className="youWrdrbInner">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <Button className="btnRemoveEvry" onClick={handleDeleteWardrobe}>
                <img className="me-2" src="/images/remove-icon.svg" alt="icon" />
                Delete
              </Button>
            </div>

              <Button className="saveWrdrb" style={{
                width: "200px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
               >
                <Pencil style={{ marginRight: '10px' }} />
                Update Preferences
              </Button>       
          </div>

          {/* Showing the deleted successfully Toast component */}
          <DeleteSuccessfullyToast showToast={showToast} onClose={() => setShowToast(false)} />

          <div className="prfrncResult">
            <Swiper
              navigation={true}
              direction="horizontal"
              slidesPerView={4}
              grid={{
                rows: 2,
                fill: "row",
              }}
              spaceBetween={10}
              modules={[Grid, Navigation]}
              className="mySwiperRst"
            >
              {wardrobes.products.map((product) => (
                <SwiperSlide key={product._id}>
                  <div className="prfrncResultShow">
                    <FormCheck
                      className={`wrdbCheck ${selectedProducts.includes(product._id) ? "isChecked" : ""}`}
                      aria-label="option 1"
                      onChange={() => handleProductSelect(product._id)}
                      checked={selectedProducts.includes(product._id)}
                    />
                    <Button className="resultImg" onClick={() => handleProductSelect(product._id)}>
                      <img className="productImg" src={product.image[0]} alt="picture" />
                    </Button>

                    {/* Display ProductOverview modal on button click */}
                    <ProductOverview product={product}
                      show={selectedProducts.includes(product._id)}
                      onHide={() => handleProductSelect(product._id)}
                      token={accessToken} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="d-flex justify-content-between align-items-center flex-column flex-xl-row mt-4">
            <div className="d-flex align-items-center flex-column flex-lg-row mb-3 mb-xl-0">
              <span className="d-block">
                <img src="/images/question-mark-Icon.svg" alt="icon" />
              </span>
              <p className="gnrtDiscrptn text-center text-lg-start">
                Regenerate your wardrobe
              </p>
            </div>
            <div className="d-flex align-items-center gap-2">

              <Link to="/UpdateWardrobe">
                <Button className="regenrete" onClick={() => setModalRegenrateShow(true)}>
                  Regenerate
                </Button>
              </Link>

              <RegenerateModal show={modalRegenrateShow} onHide={() => setModalRegenrateShow(false)} />
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>

      <Button className="btnPrimary mx-auto mt-5 mb-3" onClick={handleChange}>
        Generate the magic
      </Button>

    </>
  );
};

export default DraftOneResult;

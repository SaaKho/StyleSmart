import React, { useState, useEffect } from "react";
import { Button, FormCheck } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/grid";
import ProductDetails from "../Modals/ProductDetails";
import AddProduct from "../Modals/AddProduct";
import ProductOverview from "../Modals/ProductOverview";
import RegenerateModal from "../Modals/RegenerateModal";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SuccessfullySavedToast from "../Toasts/SuccessfullySvedToast";
import BasedUponPrfrnc from "./BasedUponPrfrnc";
import brandSvc from "../../services/brandService"; // Import the API service
import SaveWardrobe from "../../services/saveWardrobe";
import { useSelector } from "react-redux";
import EditSavedToast from "../Toasts/EditSavedToast";
import UnSaveWardrobe from "../../services/unsaveWardrobe";

const GuestGenratedResult = () => {

  const [wardrobeId, setWardrobeId] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const { dataToSend, draftWardrobeId } = location.state || {};
  const [productModalVisible, setProductModalVisible] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [modalAddShow, setModalAddShow] = useState(false);
  const [modalOverViewShow, setModalOverViewShow] = useState(false);
  const [modalRegenrateShow, setModalRegenrateShow] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track the index of the currently displayed image
  const [selectedProducts, setSelectedProducts] = useState([]);
  const accessToken = useSelector(state => state.token);
  const [wardrobeProducts, setWardrobeProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  const handleChange = () => {
    // Logic to handle change
    // navigate("/home",{state:{ dataToSend, draftWardrobeId: draftWardrobeId }});
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  useEffect(() => {
    // Check if dataToSend is properly received
    if (!dataToSend) {
      console.error("No data received in WardrobeOneResult component");
      // Optionally, redirect or handle the absence of data
    } else {
      console.log("Data received:", dataToSend);
    }
  }, [dataToSend]);

// get request to fetch brand products 
  useEffect(() => {
    const fetchWardrobeProducts = async () => {
      try {
        const data = await brandSvc.getWardrobeProducts("women");
        console.log("wardrobedata", data);
        setWardrobeProducts(data); // Update state with fetched wardrobe products data
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching wardrobe products:", error);
        // Handle error or set an error state
        setLoading(false); // Set loading to false on error
      }
    };

    fetchWardrobeProducts();
  }, []); // Run effect whenever gender changes

  // firstly, deleting the draft wardrobe then calling the Saved api to create new wardrobe in user saved wardrobes 
  const handleButtonClick = async () => {
    try {
      // Delete the draft wardrobe
      const deleteResponse = await UnSaveWardrobe.deleteUnSaveWardrobe( token, draftWardrobeId);
      console.log('Draft wardrobe deleted:', deleteResponse);

      const imageData = dataToSend.uploadedImages.map(image => ({
        name: image.name,
        dataURL: image.dataURL.includes(',') ? image.dataURL.split(',')[1] : image.dataURL     // Check if dataURL contains prefix
      }));

      const data2 = {

        "name": "My Wardrobe",
        "upload_images_arr": dataToSend.uploadedImages.map((x) => x.dataURL), // Updated image data
        "media_links": {
          "Facebook": dataToSend.facebookLink,
          "Instagram": dataToSend.instagramLink
        },
        "manual_preferences": dataToSend.preferences,
        "products": wardrobeProducts
      };

      // Create Request
      const response = await SaveWardrobe.saveWardrobe(token, data2);
      console.log('Wardrobe Saved successfully:', response);
      console.log('New wardrobe ID:', response.wardrobeId);

      // Setting a timeout to refresh the page after 2 seconds
      setTimeout(() => {
        navigate('/WardrobesCollection')
      }, 2000);

    } catch (error) {
      console.error('Error saving wardrobe:', error.message);
    }
    setShowToast(true);
  };


  // Function to handle add to favorites click
  const handleAddToFavorites = (product) => {
    console.log("Button clicked");
    // Find the selected product using productId or any other identifier
    const selectedProductData = {
      product_id: product.productId,
      brand_name: product.brand_name,
      brand_logo: product.brand_logo,
      user_id: "user123",
      product_name: product.product_name,
      product_link: product.product_url,
      price: product.price,
      images_arr: [product.image[0], product.image[1]]
    };

    // Set the selected product data
    //setSelectedProduct(selectedProductData);
    // Show the AddProduct modal
    setSelectedProduct(selectedProductData);
    setModalAddShow(true);
  };


  // Function to handle removing the current image
  const handleRemoveImage = (productId) => {
    // Filter out the product with the given productId
    const updatedProducts = wardrobeProducts.filter(product => product._id !== productId);
    // Update the wardrobeProducts state with the filtered array
    setWardrobeProducts(updatedProducts);
  };

  const handleProductSelect = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const toggleProductModal = (productId) => {
    setProductModalVisible((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  return (
    <>
      <BasedUponPrfrnc data={dataToSend} />
      <div className="yourWardrobe">
        <div className="youWrdrbInner">
          <h3 className="yur">Your Wardrobe</h3>
          <div className="prfrncResult">
            <Swiper
              navigation={true}
              direction="horizontal"
              slidesPerView={4}
              grid={{
                rows: 2,
                fill: "row",
              }}
              breakpoints={{
                320: { slidesPerView: 1, rows: 2 },
                480: { slidesPerView: 2, rows: 2 },
                576: { slidesPerView: 2, rows: 2 },
                640: { slidesPerView: 2, rows: 2 },
                768: { slidesPerView: 2, rows: 2 },
                991: { slidesPerView: 3, rows: 2 },
                1200: { slidesPerView: 4, rows: 2 },
              }}
              spaceBetween={10}
              modules={[Grid, Navigation]}
              className="mySwiperRst"
            >

              {/* Iterate over products array */}
              {wardrobeProducts.map((product) => (
                <SwiperSlide key={product._id}>
                  <div className="prfrncResultShow">

                    <Button
                      className="resultImg"
                      onClick={() => setModalOverViewShow(product._id)}
                    >
                      <img
                        className="productImg"
                        src={product.image[0]}
                        alt="picture"
                      />
                    </Button>

                    <AddProduct
                      show={modalAddShow}
                      onHide={() => setModalAddShow(false)}
                      productData={selectedProduct} // Pass product data as props
                    />

                    <div className="buttonGroup">
                      {/* Add to Favorites Button */}
                      <Button
                        className="btnFavourite"
                        onClick={() =>
                          handleAddToFavorites(product)
                        }
                      >
                        <img
                          className="me-2"
                          src="/images/fvrt-heart-Icon.svg"
                          alt="icon"
                        />
                        Add to Favorites
                      </Button>

                      {/* Close (Cross) Button */}
                      <Button
                        className="btnRemoveClose"
                        onClick={() => handleRemoveImage(product._id)}
                      >
                        <img src="/images/close-Icon.svg" alt="delete" />
                      </Button>
                    </div>
                  </div>


                  {/* Display ProductOverview modal */}
                  <ProductOverview
                    product={product}
                    show={modalOverViewShow === product._id}
                    onHide={() => setModalOverViewShow(null)}
                    token={accessToken}
                  />

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
                You can save this wardrobe as it is or you can regenerate for
                some new results
              </p>
            </div>
            <div className="d-flex align-items-center gap-2">
              {localStorage.getItem("token") && (
                <Button className="saveWrdrb" onClick={handleButtonClick}>
                  Save Wardrobe
                </Button>
              )}

              {/* Showing the deleted successfully Toast component */}
              <EditSavedToast showToast={showToast} onClose={() => setShowToast(false)} />

              <Button
                className="regenrete"
                onClick={() => setModalRegenrateShow(true)}
              >
                <img src="/images/refresh-Icon.svg" alt="icon" /> Regenerate
              </Button>

              <RegenerateModal
                show={modalRegenrateShow}
                onHide={() => setModalRegenrateShow(false)}
              />
            </div>
          </div>
        </div>
      </div>
      <div>

        {/*  <SuccessfullySavedToast
          showToast={showToast}
          onClose={handleCloseToast}
          wardrobeId={wardrobeId}
        /> */}

      </div>
      <Button className="btnPrimary mx-auto mt-5 mb-3" >
        <img className="me-3" src="/images/staricon.svg" alt="star" /> Generate
        the magic
      </Button>
    </>
  );
};

export default GuestGenratedResult;

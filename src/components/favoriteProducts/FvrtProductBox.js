

import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import axios from "axios";
import FavoriteProductCard from "../Cards/FavoriteProductCard";
import FeedbackModal from "../Modals/FeedbackModal";
import { useSelector } from "react-redux";
import favouriteProductSvc from '../../services/favouriteProduct'
const FvrtProductBox = () => {


  const [modalShow, setModalShow] = useState(false);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const token = useSelector((state) => state.token); // Assuming state.name returns a Promise
  const userId="user123";


  const handleDeleteProduct = async (favProductid) => {
    
    console.log("productid",favProductid);
    try {
      const data = await favouriteProductSvc.deleteFavouriteProduct(token,favProductid);
      // Handle success response (e.g., update state, show message)
      console.log("Product removed successfully:", data);
    } catch (error) {
      console.error("Error removing product:", error);
      // Handle error (e.g., show error message)
    }
  };
  useEffect(() => {
    // Fetch favorite products when component mounts
    async function fetchFavoriteProducts() {
     
      try {
        const data = await favouriteProductSvc.getAllFavouriteProducts(token);
        setFavoriteProducts(data); // Update state with fetched wardrobe products data
       // setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching wardrobe products:", error);
        // Handle error or set an error state
      //  setLoading(false); // Set loading to false on error
      }
  
    }

    fetchFavoriteProducts(); // Call the async function
  }, [userId, token]);

  const handleButtonClick = () => {
    setModalShow(!modalShow); // Toggle the modal state
  };

  return (
    <>
      <div className="FvrtProductBox">
        <Row className="p-0 m-0 pe-3 g-3">
          {favoriteProducts.map((product) => (
            <Col key={product.id} xl={6}>
             <FavoriteProductCard product={product} onDelete={handleDeleteProduct} />
            </Col>
          ))}
        </Row>
        <Button className="btnFeedBack my-4" onClick={handleButtonClick}>
          <img src="/images/feedback-Icon.svg" alt="icon" />
          Feedback
        </Button>
        <FeedbackModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </>
  );
};

export default FvrtProductBox;


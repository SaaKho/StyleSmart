import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Button, Col, Row } from "react-bootstrap";
import { RatingStar } from "../Rating/RatingStar";
import { useSelector } from "react-redux";
import favouriteProductSvc from "../../services/favouriteProduct";
import FavoritesDeletedToast from "../Toasts/FavoritesDeletedToast";

const FavoriteProductCard = ({ product, onDelete }) => {
  const [showToast, setShowToast] = useState(false);

  const {
    product_id,
    brand_name,
    brand_logo,
    product_name,
    price,
    images_arr,
    comment,
    rating,
    reason,
    product_link, // Assuming product_url is available in product data
  } = product;

  const token = useSelector((state) => state.token);

  const handleDeleteClick = async () => {
    try {
      await favouriteProductSvc.deleteFavouriteProduct(token, product_id);
      onDelete(product_id);
      setShowToast(true);

      // Set a timeout to refresh the page after 2 seconds
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Error deleting favorite product:", error);
    }
  };

  const handleBuyNow = () => {
    window.open(product_link, "_blank");
  };

  return (
    <div className="favoritsProducts">
      <Row>
        <Col xs={12} md={5} className="mb-3 mb-md-0">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
            className="FavoritProductSwiper"
          >
            {images_arr.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`product-${index}`}
                  onLoad={() => console.log(`Image ${index} loaded successfully`)}
                  onError={(e) => console.error(`Error loading image ${index}:`, e)}
                  onClick={() => handleBuyNow(image.product_url)} // Pass product URL to handleBuyNow
                  style={{ cursor: "pointer" }} // Add cursor pointer for better UX
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
        <Col xs={12} md={7}>
          <div className="detailBox">
            <p className="prdctName mb-3">{product_name}</p>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="priceThis">{price}</p>
              <img className="BrandThis" src={brand_logo} alt="brand" />
            </div>
            <strong>Your Comments</strong>
            <p className="yourCommentDtl">{comment}</p>
            <div className="d-flex align-items-center mb-3">
              <RatingStar rating={rating} />
            </div>
            <div className="d-flex align-items-center mb-3">
              <Button className="buyProduct" onClick={handleBuyNow}>
                BUY NOW <img src="/images/buynow-Icon.svg" alt="icon" />
              </Button>
              <Button className="btnRemoveEvry border-0 ms-3" onClick={handleDeleteClick}>
                <img src="/images/remove-icon.svg" alt="remove" />
              </Button>
            </div>
          </div>
        </Col>
      </Row>

      <FavoritesDeletedToast showToast={showToast} onClose={() => setShowToast(false)} />
    </div>
  );
};

export default FavoriteProductCard;

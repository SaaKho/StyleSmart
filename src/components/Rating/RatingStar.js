import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import StarRatings from "react-star-ratings";

const RatingStar = ({ rating: initialRating, onChange }) => {
  const [rating, setRating] = useState(initialRating); // Initialize rating with the provided initial value

  useEffect(() => {
    // Update the rating state when the initialRating prop changes
    setRating(initialRating);
  }, [initialRating]); // Re-run effect when the initialRating prop changes

  const changeRating = (newRating) => {
    setRating(newRating);
    onChange(newRating); // Passing the new rating back to the parent component
  };

  return (
    <>
      <div className="d-flex align-items-center my-3">
        <Form.Label className="me-3 fw-bold m-0">Rating</Form.Label>
        <StarRatings
          rating={rating}
          starRatedColor="#4e46b4"
          starDimension="15px"
          changeRating={changeRating}
          numberOfStars={5}
          name="rating"
        />
      </div>
    </>
  );
};

export { RatingStar };

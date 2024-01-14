import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductCard = () => {
  return (
    <>
      <div className="col-3">
        <div className="product-card">
          <div className="product-image">
            <img src="images/watch.jpg" alt="product image"/>
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars count={5} size={24} value="3" activeColor="#ffd700" />
            <p className="price">$1000.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

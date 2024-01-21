import React from "react";
import { Link, useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={` ${
          location.pathname === "/store" ? `gr-${grid}` : "col-3 mb-5"
        }`}
      >
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>

          <div className="product-image">
            <img
              src="images/watch.jpg"
              className="img-fluid"
              alt="product image"
            />
            <img
              src="images/watch-1.avif"
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars count={5} size={24} value="3" activeColor="#ffd700" />
            <p  className={`description ${
                    grid === 12 ? "d-block" : "d-none"
                  }`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
              laudantium esse autem culpa minus in adipisci unde modi veritatis
              itaque dolorem, ducimus dolore hic omnis accusantium nihil
              inventore dolor odio.
            </p>
            <p className="price">$1000.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` ${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        }`}
      >
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>

          <div className="product-image ">
            <img
            src="images/apple.jpeg"
              className="img-fluid mt-1 mt-1"
              alt="product image"
            />
            
            <img
              src="images/apple1(1).jpeg"
              className="img-fluid mt-1 "
              alt="product image"
            />
            
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars count={5} size={24} value="3" activeColor="#ffd700" />
            <p  className={`description ${
                    grid === 12 ? "d-block" : "d-none"
                  }`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
              laudantium esse autem culpa minus in adipisci unde modi veritatis
              itaque dolorem, ducimus dolore hic omnis accusantium nihil
              inventore dolor odio.
            </p>
            <p className="price">$1000.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

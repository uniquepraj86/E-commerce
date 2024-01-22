import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="conttainer-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="img-fluid position-absolute cross"
                />

                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="bg-white px-3 py-2"
                  />
                </div>
                <h5 className="title">Honer T1 7.0.1 GB RAM 8 GB</h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="img-fluid position-absolute cross"
                />

                <div className="wishlist-card-image">
                  <img
                    src="images/watch-1.avif"
                    alt="watch"
                    className="bg-white px-3 py-3 " 
                  />
                </div>
                <h5 className="title">Honer T1 7.0.1 GB RAM 8 GB</h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="img-fluid position-absolute cross"
                />

                <div className="wishlist-card-image">
                  <img
                    src="images/washing.jpeg"
                    alt="watch"
                    className="bg-white px-3 py-4 " 
                  />
                </div>
                <h5 className="title">Honer T1 7.0.1 GB RAM 8 GB</h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="img-fluid position-absolute cross"
                />

                <div className="wishlist-card-image">
                  <img
                    src="images/washing.jpeg"
                    alt="watch"
                    className="bg-white px-5 py-4 " 
                  />
                </div>
                <h5 className="title">Honer T1 7.0.1 GB RAM 8 GB</h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;

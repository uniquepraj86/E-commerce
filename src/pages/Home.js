import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner-content p-3 position-relative">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid"
                  alt="main-banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo</p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="small-banner-content p-3 position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid"
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPPERCHARGED FOR PROS.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 or $41.62/mo</p>
                    <Link className="button">Buy Now</Link>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

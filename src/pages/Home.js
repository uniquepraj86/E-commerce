import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";

import Marquee from "react-fast-marquee";
import BlogCard from "./BlogCard";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <>

      <Container className="home-wrapper-1 py-5 ">

        <div className="container-xxl">
          <div className="row d-flex align-items-center">
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
              <div className="d-flex flex-wrap justify-content-around align-items-center">
                <div className="small-banner-content p-2 position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid"
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPPERCHARGED FOR PROS.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 or $41.62/mo</p>
                  </div>
                </div>
                <div className="small-banner-content p-2 position-relative">
                  <img
                    src="images/catbanner-02.jpg "
                    className="img-fluid"
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPPERCHARGED FOR PROS.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 or $41.62/mo</p>
                  </div>
                </div>
                <div className="small-banner-content p-2 position-relative">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid"
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPPERCHARGED FOR PROS.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 or $41.62/mo</p>
                  </div>
                </div>
                <div className="small-banner-content p-2 position-relative">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid"
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPPERCHARGED FOR PROS.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 or $41.62/mo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-15">
                <img src="images/service.png" alt="services" />
                <div>
                  <h6>FreeShipping</h6>
                  <p>From All orders over $5</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/service-02.png" alt="services" />
                <div>
                  <h6>FreeShipping</h6>
                  <p>From All orders over $5</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/service-03.png" alt="services" />
                <div>
                  <h6>FreeShipping</h6>
                  <p>From All orders over $5</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/service-04.png" alt="services" />
                <div>
                  <h6>FreeShipping</h6>
                  <p>From All orders over $5</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/service-05.png" alt="services" />
                <div>
                  <h6>FreeShipping</h6>
                  <p>From All orders over $5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-1.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-2.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of brightness.</h6>
                <p className="text-dark">27-inch 5K Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-3.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">smartphones</h5>
                <h6 className="text-dark">Smartphone 13 Pro.</h6>
                <p className="text-dark">
                  Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-3.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">home speakers</h5>
                <h6 className="text-dark">Room-filling sound.</h6>
                <p className="text-dark">
                  From $699 or $116.58/mo. for 12 mo.*
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest News </h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              <div>
                <img src="images/service.png" alt="services" />
                <div>
                  <h6></h6>
                  <p></p>
                </div>
              </div>
              <div>
                <img src="images/service-02.png" alt="services" />
                <div>
                  <h6></h6>
                  <p></p>
                </div>
              </div>
              <div>
                <img src="images/service-03.png" alt="services" />
                <div>
                  <h6></h6>
                  <p></p>
                </div>
              </div>
              <div>
                <img src="images/service-04.png" alt="services" />
                <div>
                  <h6></h6>
                  <p></p>
                </div>
              </div>
              <div>
                <img src="images/service-05.png" alt="services" />
                <div>
                  <h6></h6>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;

import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import ReactStars from "react-rating-stars-component";

const OurStore = () => {
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0"></ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput1">To</label>
                  </div>
                </div>
                <h5 className="sub-title">Colors</h5>
                <div className="d-flex flex-wrap">
                  <ul className="colors ps-0">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <h5 className="sub-title">Size</h5>
                <div>
                  <div className="form-check">
                    <input 
                    className="form-check-label"
                    value=""
                    id="color-1"      
                     type="checkbox" />
                     <label htmlFor="color-1" className="form-check-label"></label>
                  s{2}
                 </div>
                 <div className="form-check">
                    <input 
                    className="form-check-label"
                    value=""
                    id="color-2"      
                     type="checkbox" />
                     <label htmlFor="color-2" className="form-check-label"></label>
                  M{2}
                 </div>
                 <div className="form-check">
                    <input 
                    className="form-check-label"
                    value=""
                    id="color-3"      
                     type="checkbox" />
                     <label htmlFor="color-3" className="form-check-label"></label>
                  s{2}
                 </div>
                </div>
              </div>
              <div className="mt-4 mb-3">
                <h3 className="sub-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      HeadPhone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Wire
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                     tablet
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mt-4 mb-3">
                <h3 className="filter-title sub-title">Random Product</h3>
                <div>
                  <div className="random-products d-flex">
                     <div className="w-50">
                      <img src="images/headphone.jpg" 
                      className="img.fluid w-100" alt="watch"/>
                     </div>
                     <div className="w-50">
                      <h5>Kids Headphone bulk 10 pack multi colored For_</h5>
                      <ReactStars count={5} size={24} value="3" activeColor="#ffd700" />
                      <b>$300</b>
                     </div>
                </div>
                <div className="random-products d-flex mt-4">
                     <div className="w-50">
                      <img src="images/watch.jpg" 
                      className="img.fluid w-100" alt="watch"/>
                     </div>
                     <div className="w-50">
                      <h5>Kids Headphone bulk 10 pack multi colored For_</h5>
                      <ReactStars count={5} size={24} value="3" activeColor="#ffd700" />
                      <b>$300</b>
                     </div>
                </div>
                </div>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10"></div>
                </div>
              </div>
              <div className=" mb-3">
                <h3 className="sub-title">Product Brands</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select
                    name=""
                    defaultValue={"manula"}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="title">Alphabetically, A-Z</option>
                    <option value="-title">Alphabetically, Z-A</option>
                    <option value="price">Price, low to high</option>
                    <option value="-price">Price, high to low</option>
                    <option value="createdAt">Date, old to new</option>
                    <option value="-createdAt">Date, new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">21 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />

                    <img
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap"></div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;

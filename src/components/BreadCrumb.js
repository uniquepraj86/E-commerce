
import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
     const {title} = props;
  return (
    <div className="breadCrumb py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <p>
              <Link to="/" className="text-dark"> Home </Link> / {title}
              {/* <Link to="/" className="text-dark"> Home </Link> / {title} */}

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;










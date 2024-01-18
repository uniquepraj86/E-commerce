
import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
     const {title} = props;
  return (
    <div className="breadCrumb py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p>
              <Link to="/store" className="text-dark"> Home </Link> / {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;










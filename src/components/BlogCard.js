import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">1 Dec,2022</p>
        <h5 className="title">A beautiful sunday morning renaissance</h5>
        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          delectus ea alias deleniti sapiente corporis placeat at voluptatum!
        </p>
        <Link to="/" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

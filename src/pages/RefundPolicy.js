import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const RefundPloicy = () => {
  return (
    <>
      <Meta title={"Refund Policy"} />
      <BreadCrumb title="Refund Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum at laboriosam magnam velit error tenetur totam quasi incidunt eius sunt rerum, maxime aperiam veritatis iste debitis libero officia molestiae praesentium?</p>
            </div>
            <div className="policy">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum at laboriosam magnam velit error tenetur totam quasi incidunt eius sunt rerum, maxime aperiam veritatis iste debitis libero officia molestiae praesentium?</p>
            </div>
            <div className="policy">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum at laboriosam magnam velit error tenetur totam quasi incidunt eius sunt rerum, maxime aperiam veritatis iste debitis libero officia molestiae praesentium?</p>
            </div>
            <div className="policy">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum at laboriosam magnam velit error tenetur totam quasi incidunt eius sunt rerum, maxime aperiam veritatis iste debitis libero officia molestiae praesentium?</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RefundPloicy;

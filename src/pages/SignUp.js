import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import CustomInput from "../components/CustomInput";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <div className="container-xxl">
      <div className="row">
        <div className="login-wrapper py-5 home-wrapper-2">
          <div className="col-12">
            <div className="auth-card">
              <h2 className="text-center mb-5">Sign Up</h2>
              <form action="action" className="d-flex flex-column gap-30">
                <div>
                  <CustomInput
                    type="name"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                  />
                </div>
                <div>
                  <CustomInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div>
                  <CustomInput
                    type="number"
                    name="number"
                    placeholder="Mobile Number"
                    className="form-control"
                  />
                </div>
                <div>
                  <CustomInput
                    type="password"
                    name="Password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div>
                  <div className="d-flex justify-content-center gap-15 align-items-center">
                    <Link to='/log-in' className="button login border-0">Submit</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default SignUp;

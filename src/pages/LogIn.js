import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import CustomInput from "../components/CustomInput";

const LogIn = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <div className="row">
        <div className="login-wrapper py-5 home-wrapper-2">
          <div className="col-12">
            <div className="auth-card">
            <h2 className="text-center mb-5">Login</h2>
             <form action="action"className="d-flex flex-column gap-30">
              <div>
              <CustomInput type="email" name="email" placeholder="Email" className="form-control"/>
              </div>
              <div>
              <CustomInput type="password" name="Password" placeholder="Password" className="form-control"/>
              </div>
              <div>
                <Link to='/forgot-password' className="font-weight-bold mb-2">Forgot Password?</Link>
                <div className="d-flex justify-content-center gap-15 align-items-center">
                <Link  to='/reset-password' className="button login border-0">Login</Link>
                  <Link to='/sign-up' className="button signup border-0">Sign Up</Link>
                  
                </div>
                 </div>
             </form>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;

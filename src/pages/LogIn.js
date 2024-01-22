import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
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
              <input type="email" name="email" placeholder="E-mail" className="form-control" />
              </div>
              <div>
              <input type="password" name="password" placeholder="password" className="form-control"/>
              </div>
              <div>
                <Link to='/forgot-password' className="font-weight-bold mb-2">Forgot Password?</Link>
                <div className="d-flex justify-content-center gap-15 align-items-center">
                  <button className="button border-0">Login</button>
                  <button className="button signup border-0">Sign Up</button>
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

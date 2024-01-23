import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import CustomInput from '../components/CustomInput';
import { Link } from "react-router-dom";


const ForgotPassword = () => {



  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrumb title="Forgot Password" />
      <div className="row">
        <div className="login-wrapper py-5 home-wrapper-2">
          <div className="col-12">
            <div className="auth-card">
            <h2 className="text-center mb-1">Forgot Password</h2>
            <p className="text-center mb-5"> prajakta kailas arote</p>
             <form action="action"className="d-flex flex-column gap-30">
              <div>
              <CustomInput type="email" name="email" placeholder="Email" className="form-control"/>
              </div>
              <div>
              
                <div className="d-flex justify-content-center gap-15 align-items-center">
                  <button className="button border-0">Submit</button>
                </div> 
                <div className="text-center mt-2">
                <Link  to='/log-in'> Cancel</Link>
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

export default ForgotPassword;

import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact "} />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7520.679387783524!2d73.89654280464828!3d19.52702447678607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd0bbd44f47249%3A0x90755e70b57e9465!2sChitalwedhe%2C%20Maharashtra%20422604!5e0!3m2!1sen!2sin!4v1705733128906!5m2!1sen!2sin"
                width="100%"
                height="450"
                className="border-0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title">Contact</h3>
                  <form action="" className="d-flex flex-column gap-">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="E-mail"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile number"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="form-control"
                        cols="20"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button mt-5 border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title">Get In Touch With Us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15">
                        <AiOutlineHome className="fs-5"/>
                        <address>At.post-chitalwedhe tal-Akole Dist-Ahmednagar</address>
                      </li>
                      <li className="mb-3 d-flex gap-15">
                     
                        <BiPhoneCall   className="fs-5"/>
                        <a href="tel: +91 8329383044"className="text-black" >  +91 8329383044</a>
                      </li>
                      <li className="mb-3 d-flex gap-15">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto: mailto:prajuarote86@gmail.com"className="text-black" >prajuarote86@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex gap-15">
                        <BiInfoCircle  className="fs-5"/>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

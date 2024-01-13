import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin,FaGithub,BsYoutube,BsInstagram, BsLinkedin, BsGithub,} from "react-icons/bs";
import { PiPaperPlaneTiltFill } from "react-icons/pi";

function Footer() {
  return (
   <>
   <footer className='py-3'>
     <div className="container-xxl">
        <div className="row d-flex align-items-center">
            <div className="col-5">
                <div className="footer-top-data d-flex gap-30 align-items-center.fs-3 text-white">
                <PiPaperPlaneTiltFill />
                    {/* <img src="images/newsletter.png" alt="newsletter" /> */}
                    <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
                </div>
            </div>
            <div className="col-7">
                <div className="input-group">
                    <input 
                    type="text"
                    className="from-control py-1"
                    placeholder='Your Email Address...'
                    aria-label="Your Email Address..."
                    aria-describedby='basic-addon2'
                    />
                    <span className='input-group-text p-3' id='basic-addon2'>
                        Subscribe
                    </span>
                </div>
            </div>
        </div>
     </div>
   </footer>
   <footer className='py-4'>
   <div className="container-xxl">
    <div className="row">
        <div className="col-4">
            <h4 className='text-white mb-4'>Contact Us</h4>
            <div className='footer-link d-flex flex-column'>
             <div>
                <address className='text-white fs-6'>
                    Hno:277 Near vill chopal,<br/> Soniapat,Haryana <br/>
                    PinCode:131103
                </address>
                    <a href="tel:+91 8329383044"
                     className='mt-4 d-block mb-2 text-white'>
                        +91 8329383044
                    </a>
                    <a href="mailto:prajktaarote86@gmail.com" 
                    className='mt-4 d-block mb-2 text-white'> 
                        prajktaarote86@gmail.com
                    </a>
                    <div className="social-icons d-flex align-items-center gap-30">
                      <a href="https://www.linkedin.com/in/prajakta86/" className='text-white mb-4 '>
                        <BsLinkedin/>
                      </a>
                      <a href="" className='text-white mb-4'>
                        <BsInstagram/>
                      </a>
                      <a href="https://www.youtube.com/shorts/3PyRBLQ7W7U"className='text-white mb-4'>
                        <BsYoutube/>
                      </a>
                      <a href="https://github.com/uniquepraj86"className='text-white mb-4'>
                      <BsGithub/>
                      </a>
                    </div>
             </div>
            </div>
        </div>
        <div className="col-3">
            <h4 className='text-white mb-4'>Information</h4>
            <div className='footer-link d-flex flex-column'>
             <Link className="text-white py-2 mb-1">Privacy Policy </Link>
             <Link className="text-white py-2 mb-1">Refund Policy</Link>
             <Link className="text-white py-2 mb-1">Shipping Policy</Link>
             <Link className="text-white py-2 mb-1">Terms & Condition</Link>
             <Link className="text-white py-2 mb-1">Blogs</Link>
            </div>
        </div>
        <div className="col-3">
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-link d-flex flex-column'>
             <Link className="text-white py-2 mb-1">About</Link>
             <Link className="text-white py-2 mb-1">Faq</Link>
             <Link className="text-white py-2 mb-1">Contact</Link>
            </div>
        </div>
        <div className="col-2">
            <h4 className='text-white mb-4'>Quick Link</h4>
            <div className='footer-link d-flex flex-column'>
             <Link className="text-white py-2 mb-1">Laptops</Link>
             <Link className="text-white py-2 mb-1">Headphone</Link>
             <Link className="text-white py-2 mb-1">Tablets</Link>
             <Link className="text-white py-2 mb-1">Watch</Link>
            </div>
        </div>
    </div>
   </div>
   </footer>
   <footer className='py-4 '>
     <div className="container-xxl">
        <div className="row">
            <div className="col-12">
                <div className="text-center mb-0 text-white">
                    &copy;{new Date().getFullYear()};
                    Powered by Developered
                </div>
             </div>
        </div>
     </div>
   </footer>
   </>
  )
}

export default Footer


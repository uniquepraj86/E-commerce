import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'

const Header = () => {
  return (
   <>
   <header className="header-top-strip py-3">
    <div className="container-xxl">
      <div className="row">
        <div className="col-6">
           <p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
        </div>
        <div className="col-6">
         <p className='text-end text-white mb-0'>
          Hotline: <a href="tel:+91 8329383044"> +91 8329383044</a>
         </p>
        </div>
      </div>
    </div>
   </header>
   <header className="header-upper py-3">
  <div className="container-xxl d-flex">
    <div className="col-2">
      <h3>
        <Link className='text-white'>
          Dev Corner
        </Link>
      </h3>
    </div>
    <h2 className="col-2">
      <Link>Developers</Link>
    </h2>
    <div className="col-3">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control py-2"
          placeholder="Search Product Here..."
          aria-label='Search Product Here'
          aria-describedby='basic-addon2'
        />
        <span className='input-group-text p-3' id='basic-addon2'>
          <BsSearch className='fs-6'/>
        </span>
      </div>
    </div>
    <div className="col-5">
      <div className="header-upper-links d-flex align-items-center justify-content-between">
        <div></div>
        <div>
          <Link className='d-flex align-items-center gap-2 text-white'>
          <img src="images/compare.png" alt="compare"  />
          <p>
            Compare <br />Products
          </p>
          </Link>
        </div>
        <div>
          <Link className='d-flex align-items-center gap-2 text-white'>
          <img src="images/wishlist.png" alt="wishlist"  />
          <p>
            Favourite <br />Wishlist
          </p>
          </Link>
        </div>
        <div>
          <Link className='d-flex align-items-center gap-2 text-white'>
          <img src="images/user.png" alt="user"  />
          <p>
            Log in <br />My Account
          </p>
          </Link>
        </div>
        <div>
          <Link className='d-flex align-items-center gap-1 text-white'>
          <img src="images/cart.png" alt="cart"  />
          <div className="d-flex flex-column gap-10">
            <span className='badge bg-white text-dark'>0</span>
            <p className='mb-0'>$0.00</p>
          </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
</header>
<div className="header-bottom py-3">
  <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <div className="menu-bottom d-flex laign-items-center">
            <div></div>
            <div className="menu-links">
              <div className="d-flex align-items-center gap-15">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">Our Store</NavLink>
                <NavLink to="/">Blogs</NavLink>
                <NavLink to="/">Contact</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
   </>
  )
}

export default Header
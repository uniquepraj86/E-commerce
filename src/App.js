import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore'
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct'
import Wishlist from './pages/Wishlist';
import LogIn from './pages/LogIn'
import ForgotPassword from './pages/ForgotPassward';
import SignUp from './pages/SignUp';
import PrivacyPolicy from './pages/privacyPolicy';
import RefundPloicy from './pages/RefundPolicy';


function App() {
  return (
  <>
  <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout/>}>
           <Route index element={<Home/>}/>
           <Route path='about' element={<About/>}/>
           <Route path='contact' element={<Contact/>}/>
           <Route path='store' element={<OurStore/>}/>
           <Route path='blog' element={<Blog/>}/>
           <Route path='compare-product' element={<CompareProduct/>}/>
           <Route path='wishlist' element={<Wishlist/>}/>
           <Route path='log-in' element={<LogIn/>}/>
           <Route path='forgot-password' element={<ForgotPassword/>}/>
           <Route path='sign-up' element={<SignUp/>}/>
           <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="refund-policy" element={<RefundPloicy />} />
          </Route>
      </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;

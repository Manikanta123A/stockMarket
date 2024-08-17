import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route, useLocation, matchPath} from 'react-router-dom'
import HomePage from './landingPage/Home/HomePage';
import AboutPage from './landingPage/About/AboutPage';
import PricingPage from './landingPage/Pricing/PricingPage';
import SignUpPage from './landingPage/Signup/signup';
import SupportPage from './landingPage/Support/SupportPage';
import ProductPage from './landingPage/Products/ProductPage';
import NotFound from './landingPage/NotFound';
import Navbar from './landingPage/navbar';
import Footer from './landingPage/Footer';
import VarsityHomePage from './varsityPage/home/Homepage';
import VarsityNavBar from './varsityPage/navbar';
import Videos from './varsityPage/Videos/videos';
import VideoPage from './varsityPage/videopage';
import Module from './varsityPage/modules/modulepage';
import ModulePage from './varsityPage/ModulePage';
import JuniorPage from './varsityPage/Juniors/Junior';
import CertificatPag from './varsityPage/certified/CertificatPag';
const root = ReactDOM.createRoot(document.getElementById('root'));
function Absolute(){
  let navbartwo = ["/varsity","/video","/VideoPage","/Module","/ModulePage/:number","/JuniorPage","/Certified"]
  function NavaBar(){
    const location = useLocation();
    const shownav2 = navbartwo.some((path)=>location.pathname.includes(path))
    return(<>
    {shownav2? <VarsityNavBar/>:<Navbar/>}
    </>)
  }
  return(<>
  <BrowserRouter>
  <NavaBar/>
  <Routes>
   <Route path="/" element={<HomePage/>}/>
   <Route path="/About" element={<AboutPage/>}/>
   <Route path="/Price" element={<PricingPage/>}/>
   <Route path="/product" element={<ProductPage/>}/>
   <Route path="/signup" element={<SignUpPage/>}/>
   <Route path="/support" element={<SupportPage/>}/>
   <Route path="/varsity" element={<VarsityHomePage/>}/>
   <Route path="/video" element={<Videos/>}/>
   <Route path="/VideoPage/:number" element={<VideoPage/>}/>
   <Route path="/Module" element={<Module/>}/>
   <Route path="/ModulePage/:number" element={<ModulePage/>}/>
   <Route path="/JuniorPage" element={<JuniorPage/>}/>
   <Route path="/Certified" element={<CertificatPag/>}/>
   <Route path="*" element={<NotFound/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter></>)
}
root.render(
  <React.StrictMode>
  <Absolute/>
  </React.StrictMode>
);



import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";

function NavItems() {
  const [menuToggal, setmenuToggal] = useState(false);
  const [socialToggle, setsocialToggle] = useState(false);
  const [headerFixed, setheaderFixed] = useState(false);

  window.addEventListener("scroll", () => {
    window.scrollY > 200 ? setheaderFixed(true) : setheaderFixed(false);
  });
  return (
    <header className={`header-section style-4 ${headerFixed? "header-fixed fadeInUp":""}`}>
      <div className={`header-top  d-md-none  ${socialToggle?"open":""}`}>
        <div className="container">   
          <div className="header-top-area">
            <Link to='/singin' className="lab-btn me-3"><span>Sign in</span></Link>
            <Link to='/login'> Log in</Link>
          </div>
        </div>

          
      </div>

      <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              <div className="logo-search-acte">
               
                  <img src={logo} alt="" srcset="" />
             
              
              </div>
              <div className="menu-area">
                  <div className="menu">  
                    <ul className={`lab-ul ${menuToggal?"active":""}`}>
                      <li><Link to='/'>Home</Link></li>
                      <li><Link to='/Shope'>Shope</Link></li>
                      <li><Link to='/Blog'>Blog</Link></li>
                      <li><Link to='/About'>About</Link></li>
                      <li><Link to='/Contact'>Contact</Link></li>
                    </ul>
                  </div>
                  <Link to='/singin ' className='lab-btn me-3 d-none d-md-block'>Sing in</Link>
                  <Link to='/login ' className='d-none d-md-block'>Log in</Link>

                  <div className={`header-bar d-lg-none m-4 ${menuToggal ? "active" : " "}`} onClick={()=>setmenuToggal(!menuToggal)} >
                    <span></span><span></span><span></span>

                  </div>
                  <div className="d-md-none ">
                    <button className=" lab-btn" onClick={()=>{
                      setsocialToggle(!socialToggle)
                    }}>socialToggle</button>
                  </div>
                </div>
            </div>
          </div>
          
        </div>
    </header>
  );
}

export default NavItems;

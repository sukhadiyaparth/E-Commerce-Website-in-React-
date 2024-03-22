import React from 'react'
import { Link } from 'react-router-dom';
import './FS.css'

function Footer() {
  return (
    <div>
            
    <footer class="footer-distributed">

        <div class="footer-left">
            <h3>A To Z <span> ShOPECART</span></h3>

            <p class="footer-links">
                <Link to='/home'>Home</Link>
                |
                <Link to='/shope'>Shope</Link>
                |
                <Link to='/blog'>Blog</Link>
                |
                <Link to='/about'>About</Link>
                |
                <Link to='/contact'>Contact</Link>
                                
            </p>

            <p class="footer-company-name">Copyright © 2024 <strong>Parth Sukhadiya</strong> All rights reserved</p>
        </div>

        <div class="footer-center">
            <div>
            <i class="icofont-location" ></i>
                <p><span>Gujrat</span>
                    </p>
            </div>

            <div>
            <i class="icofont-phone"></i>
                <p>+91 9***9****</p>
            </div>
            <div>
            <i class="icofont-mass-mail"></i>
                <p><a href="mailto:sagar00001.co@gmail.com">xyz@gmail.com</a></p>
            </div>
        </div>
        <div class="footer-right">
            <p class="footer-company-about">
                <span>About the company</span>
               
            </p>
            <div class="footer-icons">
                <a href="#"><i class="icofont-facebook"></i></a>
                <a href="#"><i class="icofont-instagram"></i></a>
                <a href="#"><i class="icofont-linkedin"></i></a>
                <a href="#"><i class="icofont-twitter"></i></a>
               
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
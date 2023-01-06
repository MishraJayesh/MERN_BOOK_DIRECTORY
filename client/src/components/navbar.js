import React from "react";
import './navbar.css';
import logo from './img/logo.jpg';

function Navbar() {
  return (
    <div className="container">
      <header className="header">
        <nav className="nav">
          <p className="brand"><img src={logo} alt="logo" />
            MY BOOKS APP
          </p>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="wrapper">
            <a href="##" alt="" className="nav-link">Home</a>
            <ul>
              <li>
                <a href="##" alt="" className="nav-link">Category</a>
                <ul>
                  <li><a href="##">Biographies</a></li>
                  <li><a href="##">Novels</a></li>
                  <li><a href="##">Science-Fiction</a></li>
                  <li><a href="##">Factual</a></li>
                  <li><a href="##">Encyclopedias &
                    Dictonaries   </a></li>
                  <li><a href="##">Mythological</a></li>
                  <li><a href="##">Poetries</a></li>
                  <li><a href="##">Stories</a></li>
                  <li><a href="##">Auto-Biographies</a></li>
                </ul>
              </li>
            </ul>
            <a href="##" alt="" className="nav-link">Pricing</a>
            <a href="##" alt="" className="nav-link">Contact Us</a>
            <a href="##" alt="" className="nav-link">FAQs</a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className={isHomePage ? 'homePage_footer otherPage_footer' : "otherPage_footer"}>
        <div className="container">
          <h4>LUXURY RENTALS</h4>
          <p>
            Experience the epitome of luxury living with our curated collection of premium properties. Whether you're looking for a short-term rental or a long-term stay, our homes offer unparalleled comfort and style.
          </p>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/aboutus"}>About Us</Link>
            </li>
            <li>
              <Link to={"/properties"}>Properties</Link>
            </li>
            <li>
              <Link to={"/termsandconditions"}>Terms & Conditions</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Connect with Us</h4>
          <p>Phone: +91 7973002267</p>
          <p>Email: ravi@gmail.com</p>

          <p>© {currentYear} All Rights Reserved by DreamDwelling.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

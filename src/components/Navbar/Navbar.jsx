import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = ({ mobileNavbar, setMobileNavbar, barsRef, navToggledRef }) => {
  return (
    <>
      <div className="navbarContainer">
        <div className="navbarSections">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/diruiumfk/image/upload/v1684452535/zolution-logo-black_zyvpgc.svg"
              className="navbarBrand"
              alt="zolution logo"
            />
          </Link>
        </div>
        <div className="navbarSections settings">
          <Link to="/" className="subtitles navLinks">
            Works{" "}
            <img
              src="https://res.cloudinary.com/diruiumfk/image/upload/v1684457890/see-more_dez2nv.svg"
              className="iconsMini"
              alt=""
            />
          </Link>
          <Link to="/" className="subtitles navLinks">
            About Us
          </Link>
          <Link to="/" className="subtitles navLinks">
            Contact
          </Link>
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1684457549/settings_v2znqe.svg"
            className="settingsIcon"
            alt="settings icon"
          />
          <button className="btn getInTouch">Get in Touch</button>
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1684455458/navbar-toggler-mobile_snhqgf.svg"
            className="navbarMobileToggler"
            alt=""
            ref={barsRef}
            onClick={() => setMobileNavbar(!mobileNavbar)}
          />
        </div>
      </div>

      {mobileNavbar && (
        <>
          <span className="menuArrow"></span>
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1684461010/close_dkoqot.svg"
            className="closeIcon"
            alt=""
          />
          <div className="navbarToggledMobile" ref={navToggledRef}>
            <Link to="/" className="subtitles navLinksMobile">
              Works{" "}
              <img
                src="https://res.cloudinary.com/diruiumfk/image/upload/v1684457890/see-more_dez2nv.svg"
                className="iconsMini"
                alt=""
              />
            </Link>
            <Link to="/" className="subtitles navLinksMobile">
              About Us
            </Link>
            <Link to="/" className="subtitles navLinksMobile">
              Contact
            </Link>
          </div>
        </>
      )}
      <Outlet />
    </>
  );
};

export default Navbar;

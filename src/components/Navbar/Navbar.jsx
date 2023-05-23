import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = ({
  navScroll,
  mobileNavbar,
  setMobileNavbar,
  barsRef,
  navToggledRef,
  settingsMenu,
  setSettingsMenu,
  settingsRef,
  settingsMenuRef,
}) => {
  return (
    <>
      <div className={navScroll ? "navbarContainer active" : "navbarContainer"}>
        <div className="navbarSections">
          <Link to="/" draggable="false">
            <img
              src="https://res.cloudinary.com/diruiumfk/image/upload/v1684452535/zolution-logo-black_zyvpgc.svg"
              className="navbarBrand"
              alt="zolution logo"
            />
          </Link>
        </div>
        <div className="navbarSections settings">
          <Link to="/" className="navLinks subtitles" draggable="false">
            Works{" "}
            <img
              src="https://res.cloudinary.com/diruiumfk/image/upload/v1684457890/see-more_dez2nv.svg"
              className="iconsMini"
              alt=""
            />
          </Link>
          <Link to="/" className="navLinks subtitles" draggable="false">
            About Us
          </Link>
          <Link to="/" className="navLinks subtitles" draggable="false">
            Contact
          </Link>
          {settingsMenu === true ? (
            <img
              src="https://res.cloudinary.com/diruiumfk/image/upload/v1684530495/settings-active_c03a6r.svg"
              className="settingsIcon"
              alt="settings icon"
              ref={settingsRef}
              onClick={() => setSettingsMenu(!settingsMenu)}
            />
          ) : (
            <img
              src="https://res.cloudinary.com/diruiumfk/image/upload/v1684457549/settings_v2znqe.svg"
              className="settingsIcon"
              alt="settings icon"
              ref={settingsRef}
              onClick={() => setSettingsMenu(!settingsMenu)}
            />
          )}

          <button className="btn getInTouch">Get in Touch</button>
          {mobileNavbar === true ? (
            <img
              src="https://res.cloudinary.com/diruiumfk/image/upload/v1684530589/navbar-toggler-mobile-yellow_o0s4kq.svg"
              className="navbarMobileToggler"
              alt="settings icon"
              ref={barsRef}
              onClick={() => setMobileNavbar(!mobileNavbar)}
            />
          ) : (
            <img
              src="https://res.cloudinary.com/diruiumfk/image/upload/v1684455458/navbar-toggler-mobile_snhqgf.svg"
              className="navbarMobileToggler"
              alt="settings icon"
              ref={barsRef}
              onClick={() => setMobileNavbar(!mobileNavbar)}
            />
          )}
        </div>
      </div>

      {mobileNavbar && (
        <>
          <span className="menuArrow"></span>
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1684461010/close_dkoqot.svg"
            className="closeIcon toggledNavbarClose"
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

      {settingsMenu && (
        <>
          <span className="menuArrowSettings"></span>
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1684461010/close_dkoqot.svg"
            className="closeIcon"
            alt=""
          />
          <div className="settingsToggled" ref={settingsMenuRef}>
            <div className="settingsOptions">
              <img
                src="https://res.cloudinary.com/diruiumfk/image/upload/v1684452792/dark-mode_kkdx8c.svg"
                className="settingsIcon"
                alt=""
              />
            </div>
          </div>
        </>
      )}
      <Outlet />
    </>
  );
};

export default Navbar;

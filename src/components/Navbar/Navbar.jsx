import React from "react";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarSections">
        <img
          src="https://res.cloudinary.com/diruiumfk/image/upload/v1684452535/zolution-logo-black_zyvpgc.svg"
          className="navbarBrand"
          alt="zolution logo"
        />
      </div>
      <div className="navbarSections settings">
        <img
          src="https://res.cloudinary.com/diruiumfk/image/upload/v1684452792/dark-mode_kkdx8c.svg"
          className="toggleMode"
          alt="dark mode icon"
        />
        <button className="btn getInTouch">Get in Touch</button>
        <img
          src="https://res.cloudinary.com/diruiumfk/image/upload/v1684455458/navbar-toggler-mobile_snhqgf.svg"
          className="navbarMobileToggler"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;

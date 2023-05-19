import { useRef, useState } from "react";
import Navbar from "./Navbar";

const NavbarContainer = () => {
  const [mobileNavbar, setMobileNavbar] = useState(false);

  const barsRef = useRef();
  const navToggledRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== barsRef.current && e.target !== navToggledRef.current) {
      setMobileNavbar(false);
    }
  });

  return (
    <Navbar
      mobileNavbar={mobileNavbar}
      setMobileNavbar={setMobileNavbar}
      barsRef={barsRef}
      navToggledRef={navToggledRef}
    />
  );
};

export default NavbarContainer;

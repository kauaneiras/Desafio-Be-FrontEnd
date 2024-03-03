import React from "react";
import { Nav, Logo } from "../styles/navbar-styles";
import BeLogo from "../assets/images/BeLogo.svg";

const Navbar: React.FC = () => {
  return (
    <Nav>
        <Logo src={BeLogo} alt="Be Logo" />
    </Nav>
  );
};

export default Navbar;
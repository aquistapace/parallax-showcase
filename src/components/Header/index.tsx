import React from "react";
import Logo from '../../assets/logo.png'
import { Container, Menu } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <div><img src={Logo} alt="logo"/></div>
      <Menu>
        <nav>
          <a href="#">Home</a>
          <a href="#">Sections</a>
        </nav>
      </Menu>
    </Container>
  );
};

export default Header;

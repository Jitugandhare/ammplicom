import React, { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <TopBar>Worldwide Shipping - Duties and Taxes Prepaid</TopBar>
            <NavbarContainer>
                <Logo>
                    HEBRON <span>NUTRITION</span>
                </Logo>
                <NavItems isOpen={isOpen}>
                    <NavItem href="#">Home</NavItem>
                    <NavItem href="#">Shop by brand</NavItem>
                    <NavItem href="#">Shop by category &#9662;</NavItem>
                    <NavItem href="#">Meet us CMO</NavItem>
                    <NavItem href="#">Contact us</NavItem>
                </NavItems>
                <HamburgerIcon onClick={toggleMenu}>
                    {isOpen ? "✕" : "☰"}
                </HamburgerIcon>
                <IconContainer isOpen={isOpen}>
                    <Icon>🔍</Icon>
                    <Icon>👤</Icon>
                    <Icon>🛒</Icon>
                </IconContainer>
            </NavbarContainer>
        </>
    );
};

export default Navbar;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px; 
  }
`;

const TopBar = styled.div`
  background-color: #003366;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  font-size: 14px;
  width: 100%;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #d60f2f;

  span {
    color: #4a148c;
  }
`;

const HamburgerIcon = styled.div`
  cursor: pointer;
  font-size: 24px;
  margin-left: auto;

  @media (min-width: 769px) {
    display: none; 
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }
`;

const NavItem = styled.a`
  margin: 0 15px;
  color: #000;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: #d60f2f;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
    text-align: center; 
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    margin-top: 10px;
  }
`;

const Icon = styled.div`
  margin: 0 10px;
  cursor: pointer;
  font-size: 20px;
`;

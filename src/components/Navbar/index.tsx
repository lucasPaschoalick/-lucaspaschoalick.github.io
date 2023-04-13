import React, { useState } from "react";
import styled from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from 'react-reveal/Fade';

const NavStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;  

  .dropdown-div {
    display: none;
  }

  .nav-links {
    width: 60%;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: space-between;
  }

  @media screen and (max-width: 800px) {
    .dropdown-div {
      width: 100%;
      display: flex;      
      flex-direction: column;      
      position: fixed;
      left: 0px;
    }

    .dropdown-icon {
      padding-left: 50px;
    }

    .dropdown-content{
      width: 15%;
      display: flex;
      flex-direction: column;
      gap: 30px;      
      padding: 30px 20px 30px 50px;
      background: rgba(32,33,36, 0.99);
      border-radius: 15px;
    }

    .menu-icon {
      display: block;
      cursor: pointer;
      color: #e3e3e3;
      height: 40px;      
    }

    .nav-links {
      display: none;
    }
  }
`;

const AnchorStyle = styled.a`
  font-family: Raleway;
  font-size: 24px;
  color: #e3e3e3;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }

  &:hover {
    color: #a1a1a1;
  }
`;

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      toggleMenu();
    }
  };


  return (
    <NavStyle>
      <Fade top cascade> 
        <div className="nav-links">
          <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
          <AnchorStyle onClick={() => handleScrollTo("home")}>About</AnchorStyle>
          <AnchorStyle onClick={() => handleScrollTo("skillset")}>Skillset</AnchorStyle>
          <AnchorStyle onClick={() => handleScrollTo("projects")}>Projects</AnchorStyle>
          <AnchorStyle onClick={() => handleScrollTo("contact")}>Contact</AnchorStyle>
          <AnchorStyle href="/assets/resume_Lucas_Paschoalick.pdf" target="_blank">Resume</AnchorStyle>
        </div>
      </Fade>
      <div className="dropdown-div">
        <div className="dropdown-icon">
          <FontAwesomeIcon icon={faBars} onClick={toggleMenu} className="menu-icon" />
        </div>
        <div>
          {showMenu && (
            <div className="dropdown-content">
              <AnchorStyle onClick={() => handleScrollTo("home")}>About</AnchorStyle>
              <AnchorStyle onClick={() => handleScrollTo("skillset")}>Skillset</AnchorStyle>
              <AnchorStyle onClick={() => handleScrollTo("projects")}>Projects</AnchorStyle>
              <AnchorStyle onClick={() => handleScrollTo("contact")}>Contact</AnchorStyle>
              <AnchorStyle href="/assets/resume_Lucas_Paschoalick.pdf" target="_blank">Resume</AnchorStyle>
            </div>
          )}
        </div>
      </div>
    </NavStyle>
  );
};

export default Navbar;

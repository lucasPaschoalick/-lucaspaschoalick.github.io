import React from "react";
import styled from "styled-components";

const NavStyle = styled.div`
    width: 60%;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: space-between;
`;

const AnchorStyle = styled.a`
    font-family: Raleway;
    font-size: 24px;
    color: #e3e3e3;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;

    &:hover{
        color: #a1a1a1;
    }    
`;

const Navbar = () => {
    return (
        <NavStyle>
            <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'></link>
            <AnchorStyle href="#home">About</AnchorStyle>
            <AnchorStyle href="#skillset">Skillset</AnchorStyle>
            <AnchorStyle href="#projects">Projects</AnchorStyle>
            <AnchorStyle href="#contact">Contact</AnchorStyle>
            <AnchorStyle href="/assets/resume_Lucas_Paschoalick.pdf" target="_blank">Resume</AnchorStyle>
        </NavStyle>
    )
}

export default Navbar;
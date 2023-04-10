import React from "react";
import styled from "styled-components";

const NavStyle = styled.div`
    width: 60%;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: space-between;

    a{               
        font-family: Raleway;
        font-size: 24px;
        cursor: pointer;

        &:hover{
            color: #a1a1a1;
        }
    }
`;

const Navbar = () => {
    return (
        <NavStyle>
            <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'></link>
            <a href="#home">About</a>
            <a href="#skillset">Skillset</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="/assets/resume_Lucas_Paschoalick.pdf" target="_blank">Resume</a>
        </NavStyle>
    )
}

export default Navbar;
import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import Fade from 'react-reveal/fade';

const Container = styled.div`
    max-width: 1200px;
    margin: auto;    
`;

const HeaderStyle = styled.div`
    padding: 50px 0;
    color: #e3e3e3;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #202124;
`

const HeaderFlex = styled.header`    
    display: flex;
    justify-content: center;
`

const Header = () => {
    return (
        <Fade top cascade>                
            <HeaderStyle>
                <Container>
                    <HeaderFlex>                                       
                        <Navbar />
                    </HeaderFlex>            
                </Container>
            </HeaderStyle>
        </Fade>        
    )
}

export default Header
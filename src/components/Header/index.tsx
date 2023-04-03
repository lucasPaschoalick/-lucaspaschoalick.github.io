import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";

const Container = styled.div`
    max-width: 1200px;
    margin: auto;    
`;

const HeaderStyle = styled.div`
    padding: 50px 0;
    color: #e3e3e3;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(32,33,36, 0.99);
`;

const HeaderFlex = styled.header`    
    display: flex;
    justify-content: center;
`;

const Header = () => {
    return (
                       
            <HeaderStyle>
                <Container>
                    <HeaderFlex>                                       
                        <Navbar />
                    </HeaderFlex>            
                </Container>
            </HeaderStyle>
                
    )
}

export default Header
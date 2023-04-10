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
`

const HeaderFlex = styled.header`
    display: flex;
    justify-content: center;
`

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
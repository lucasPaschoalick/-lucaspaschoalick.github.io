import React from "react";
import styled from "styled-components";
import Image from 'next/image';
import Fade from 'react-reveal/Fade';

const Container = styled.div`
    max-width: 1200px;
    margin: auto;

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

const ParStyle = styled.p`
    font-family: Raleway;
    font-size: 20px;
    color: #e3e3e3;

    a{
        font-weight: bold;
        font-size: 21px;

        &:hover{
        color: #a1a1a1;
        }
    }
`;

const Row = styled.div`
    display: flex;    
    justify-content: space-between;
    align-items: center;
    padding-top: 320px;    
    padding-bottom: 50px;

    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        padding-top: 220px;
        gap:50px;
    }
`;

const Column = styled.div`
    max-width: 50%;

    @media screen and (max-width: 800px) {
        max-width: 80%;
    }
`;

const StyledImage = styled(Image)`
    border-radius: 60px;    

    @media screen and (max-width: 800px) {
        border-radius: 50%;
        width: 300px;
        height: 380px;
    }
`;

const SpanTitle = styled.span`
    font-family: Raleway;
    font-size: 40px;
    color: #e3e3e3;
    font-weight: bold;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 800px) {
        font-size: 25px;
    }
`;

const HomeTitle = styled.h1`
    font-family: Raleway;
    font-size: 65px;
    color: #e3e3e3;
    font-weight: bold;
    margin: 0;
    padding: 10px 0;

    @media screen and (max-width: 800px) {
        font-size: 45px;
    }
`;

const Home = () => {
    return(
        <>
            <Container id="home">
                <Row>
                    <Fade cascade>
                        <Column>
                            <StyledImage
                                src="/images/photo.jpeg"
                                alt="Foto de perfil"
                                width={350}
                                height={450}
                                priority
                            />
                        </Column>
                    </Fade>
                    <Column>
                        <SpanTitle>Hi, I am</SpanTitle>
                        <HomeTitle>Lucas Paschoalick.</HomeTitle>
                        <ParStyle> I`m a Computer Engeneering student at Universidade Tecnológica Federal do Paraná - Cornélio Procópio.
                        </ParStyle>
                    </Column>
                </Row>
            </Container>
        </>
    )
}

export default Home;
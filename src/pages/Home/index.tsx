import React from "react";
import styled from "styled-components";
import Image from 'next/image';

const Container = styled.div`
    max-width: 1200px;
    margin: auto;    
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
    margin-top: 200px;
`;

const Column = styled.div`
    max-width: 50%;
`;

const StyledImage = styled(Image)`
    border-radius: 60px;
`;

const SpanTitle = styled.span`
    font-family: Raleway;
    font-size: 40px;
    color: #e3e3e3;
    font-weight: bold;
    margin: 0;
    padding: 0;
`;

const HomeTitle = styled.h1`
    font-family: Raleway;
    font-size: 65px;
    color: #e3e3e3;
    font-weight: bold;
    margin: 0;
    padding: 10px 0;
`;

const Home = () => {
    return(
        <>
            <Container id="home">
                <Row>
                    <Column>
                        <StyledImage
                            src="/images/photo.jpeg"
                            alt="Foto de perfil"
                            width={350}
                            height={450}
                            priority
                        />
                    </Column>
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
import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

const Container = styled.div`
    max-width: 1200px;
    margin: auto;

    @media screen and (max-width: 800px) {
        max-width: 80%;
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

const H2Style = styled.h2`
    font-family: Raleway;
    font-size: 45px;
    color: #e3e3e3;
    font-weight: bold;
    margin: 0;
    padding: 0 0 40px;
`;

const SkillContainer = styled.div`
    padding-top: 150px;
    padding-bottom: 50px;

    @media screen and (max-width: 800px) {
        justify-content: center;
        max-width: 100%;
    }
`;

const ContentDiv = styled.div`
    display: flex;
    gap: 55px;
    align-items: center;
    padding: 0 20px;

    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        gap:50px;
    }
`;

const TextDiv = styled.div`
    width: 50%;

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

const SkillDiv = styled.div`    
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;

const SpansDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    span{        
        font-family: Raleway;
        font-size: 20px;
        color: #e3e3e3;
        font-weight: bold;
    };

    @media (max-width: 1024px) {
    flex-wrap: wrap;
    };

`;

const Skillset = () => {
    return (
        <>
            <Container id="skillset">                
                    <SkillContainer>                        
                        <div>
                            <H2Style>Skillset</H2Style>
                        </div>                        
                            <Fade cascade>
                                <ContentDiv>
                                    <TextDiv>
                                        <ParStyle>
                                            I have done a variety of projects at University with different technologies. Currently, my focus is on studies and projects related to Web and Data development.
                                        </ParStyle>
                                    </TextDiv>
                                    <TextDiv>                            
                                        <SkillDiv>
                                            <SpansDiv>
                                                <span>Python</span>
                                                <span>Java</span>
                                                <span>PHP</span>
                                                <span>TypeScript</span>
                                            </SpansDiv>
                                            <SpansDiv>
                                                <span>Web Scraping</span>
                                                <span>Spring Boot</span>
                                                <span>Laravel</span>
                                                <span>ReactJs</span>
                                            </SpansDiv>
                                            <SpansDiv>
                                                <span>NodeJs</span>
                                                <span>GitHub</span>
                                                <span>REST Api</span>
                                                <span>SQL/NoSQL</span>
                                            </SpansDiv>
                                        </SkillDiv>
                                    </TextDiv>
                                </ContentDiv>
                            </Fade>
                    </SkillContainer>                
            </Container>
        </>
    )
}

export default Skillset;
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-regular-svg-icons';
import Fade from 'react-reveal/fade';

const Container = styled.div`
    max-width: 1200px;
    margin: auto;

    @media screen and (max-width: 800px) {
        max-width: 100%;
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

const ParStyle = styled.p`
    font-family: Raleway;
    font-size: 20px;
    color: #e3e3e3;

    a{
        font-weight: bold;
        font-size: 21px;
        color: #bb86fc;

        &:hover{
        color: #dcb2ff;
        }
    }
`;

const ContactDiv = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: column;        
    align-items: center;
    padding-top: 50px;    
`;

const LinksDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 60%;
    padding: 100px 0;

    @media screen and (max-width: 700px) {
        flex-direction: column;
        gap: 30px;
    }
`;

const IconsDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    @media screen and (max-width: 700px) {
        gap: 5px;
    }
`;

const AnchorStyle = styled.a`
    font-family: Raleway;
    font-size: 20px;
    color: #e3e3e3;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;

    &:hover{
        color: #a1a1a1;
    }    
`;
const LinksStyle = styled.div`
    display: flex;
    width: 50%;
    justify-content: center;
`

const BackgroundDiv = styled.div`
    background: #171717;
`

const Contact = () => {
    return (
        <>
            <BackgroundDiv>
                <Container id="contact">
                    <Fade cascade>
                        <ContactDiv>
                            <div>
                                <H2Style>Contact</H2Style>
                            </div>
                            <div>
                                <ParStyle>Fell free to drop me a message!</ParStyle>
                            </div>
                                <LinksDiv>
                                    <IconsDiv>
                                        <LinksStyle>
                                            <a
                                                href="mailto:lucaspascontato@gmail.com"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                            ><FontAwesomeIcon icon={faEnvelope} color="#bb86fc" height={38}/></a>
                                            
                                        </LinksStyle>
                                        <LinksStyle>
                                            <AnchorStyle
                                                href="mailto:lucaspascontato@gmail.com"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                            >
                                                Email
                                            </AnchorStyle>
                                        </LinksStyle>
                                    </IconsDiv>                        
                                    <IconsDiv>
                                        <LinksStyle>
                                            <a
                                                href={`https://www.linkedin.com/in/lucas-paschoalick/`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            ><FontAwesomeIcon icon={faLinkedinIn} color="#bb86fc" height={38}/></a>
                                        </LinksStyle>
                                        <LinksStyle>                                
                                            <AnchorStyle
                                                href={`https://www.linkedin.com/in/lucas-paschoalick/`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Linkedin
                                            </AnchorStyle>
                                        </LinksStyle>
                                    </IconsDiv>            
                                    <IconsDiv>
                                        <LinksStyle>
                                            <a
                                                href="https://github.com/lucasPaschoalick"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                            ><FontAwesomeIcon icon={faGithub} color="#bb86fc" height={38}/></a>
                                        </LinksStyle>
                                        <LinksStyle>
                                            <AnchorStyle                                        
                                                href="https://github.com/lucasPaschoalick"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                            >
                                                Github
                                            </AnchorStyle>
                                        </LinksStyle>
                                    </IconsDiv>            
                                    <IconsDiv>
                                        <LinksStyle>
                                            <a
                                                href="/assets/resume_Lucas_Paschoalick.pdf"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                            ><FontAwesomeIcon icon={faFile} color="#bb86fc" height={38}/></a>
                                        </LinksStyle>
                                        <LinksStyle>
                                            <AnchorStyle
                                                href="/assets/resume_Lucas_Paschoalick.pdf"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                            >
                                                Resume
                                            </AnchorStyle>
                                        </LinksStyle>
                                    </IconsDiv>
                                </LinksDiv>                    
                            <div>
                                <ParStyle>Built from scratch by me, it is <AnchorStyle href="https://github.com/lucasPaschoalick/lucaspaschoalick.github.io" target="_blank">Open Source</AnchorStyle>.</ParStyle>
                            </div>
                        </ContactDiv>
                    </Fade>
                </Container>
            </BackgroundDiv>
        </>
    )
}

export default Contact;
import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/fade';

const Container = styled.div`
    max-width: 1200px;
    margin: auto;

    @media screen and (max-width: 800px) {
        max-width: 80%;
    }
`;

const AnchorStyle = styled.a`
    font-family: Raleway;
    font-size: 25px;
    color: #e3e3e3;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;

    &:hover{
        color: #a1a1a1;
    }    
`;

const H2Style = styled.h2`
    font-family: Raleway;
    font-size: 45px;
    color: #e3e3e3;
    font-weight: bold;
    margin: 0;
    padding-bottom: 50px;
`;

const Par2Style = styled.p`
    font-family: Raleway;
    font-size: 20px;
    color: #e3e3e3;
    padding-left: 10px;

    a{
        font-weight: bold;
        font-size: 21px;

        &:hover{
        color: #a1a1a1;
        }
    }
`;

const ProjectsContainer = styled.div`
    padding-top: 150px;
    padding-bottom: 50px;    
`;

const AllProjects = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
    
    @media screen and (max-width: 800px) {
        max-width: 100%;
        justify-content: center;
    }
`;

const ProjectsContent = styled.div`
    display: flex;    
    flex-direction: column;
    gap: 5px;
    max-width: 400px;

    .projects-button {        
        display: flex;
        justify-content: center;
    }

    .projects-href {
        display: flex;
        justify-content: center;
        align-items: center;        
        padding: 10px;
        background: #bb86fc;
        border-radius: 5px;

        &:hover{
            background: #dcb2ff;
        }
    }
`;

const ProjectsAnchor = styled.a`    
    font-family: Raleway;
    font-weight: bold;
    font-size: 20px;
    color: #202124;
    text-decoration: none;
`;

const Projects = () => {
    return(
        <>
            <Container id="projects">
                    <ProjectsContainer>                        
                        <H2Style>
                            Projects
                        </H2Style>                        
                        <Fade cascade>
                            <AllProjects>
                                <ProjectsContent>
                                    <div>
                                        <AnchorStyle href="https://github.com/lucasPaschoalick/curso-laravel" target="_blank">PHP, Laravel Web Page</AnchorStyle>
                                    </div>
                                    <div>
                                        <Par2Style>
                                            In this project, I developed an events page, where it is possible to create, delete, register participation and view events on the site.
                                            PHP was used in the implementation of the project, with the framework Laravel, Blade, following the REST guidelines for the APIs.
                                            MySQL was used to store the data.
                                        </Par2Style>
                                    </div>
                                    <div className="projects-button">
                                        <ProjectsAnchor href="https://github.com/lucasPaschoalick/curso-laravel" target="_blank">
                                            <div className="projects-href">See on GitHub</div>
                                        </ProjectsAnchor>
                                    </div>
                                </ProjectsContent>                        
                            </AllProjects>
                        </Fade>
                    </ProjectsContainer>
            </Container>
        </>
    )
}

export default Projects;
import React from "react";
import styled from "styled-components";

const Container = styled.div`
max-width: 1200px;
margin: auto;    
`;

const H3Style = styled.h2`
    font-family: Raleway;
    font-size: 25px;
    color: #e3e3e3;
    font-weight: bold;
    margin: 0;
    padding: 0 0 10px;

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
    padding: 0 0 40px;
`;

const Par2Style = styled.p`
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

const ProjectsContainer = styled.div`
    padding-top: 200px;    
`;

const AllProjects = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
`;

const ProjectsContent = styled.div`
    display: flex;    
    flex-direction: column;
    gap: 5px;
    max-width: 400px;    
`;

const Projects = () => {
    return(
        <>
            <Container id="projects">
                <ProjectsContainer>
                    <H2Style>
                        Projects
                    </H2Style>
                    <AllProjects>
                        <ProjectsContent>
                            <div>
                                <H3Style>
                                    <a href="https://github.com/lucasPaschoalick/curso-laravel" target="_blank">PHP, Laravel Web Page</a>

                                </H3Style>
                            </div>
                            <div>
                                <Par2Style>
                                    In this project, I developed an events page, where it is possible to create, delete, register participation and view events on the site.
                                    PHP was used in the implementation of the project, with the framework Laravel, Blade, following the REST guidelines for the APIs.
                                    MySQL was used to store the data.
                                </Par2Style>
                            </div>
                        </ProjectsContent>                        
                    </AllProjects>
                    
                </ProjectsContainer>
            </Container>
        </>
    )
}

export default Projects;
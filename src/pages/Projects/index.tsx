import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;

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

    @media screen and (max-width: 800px) {
        font-size: 18px;
    }
`;

const H2Style = styled.h2`
    font-family: Raleway;
    font-size: 45px;
    color: #e3e3e3;
    font-weight: bold;
    margin: 0;
    padding-bottom: 50px;

    @media screen and (max-width: 800px) {
        font-size: 35px;
    }
`;

const Par2Style = styled.p`
    font-family: Raleway;
    font-size: 20px;
    color: #e3e3e3;    
    
    @media screen and (max-width: 800px) {
        font-size: 1em;
    }
`;

const ProjectsContainer = styled.div`
    padding-top: 150px;
    padding-bottom: 50px;    
`;

const AllProjects = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 20px;
    gap: 50px;
    
    
    @media screen and (max-width: 800px) {
        max-width: 100%;
        justify-content: center;
    }
`;

const ProjectsContent = styled.div`
    display: flex;    
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    max-width: 400px;    

    .projects-button {        
        display: flex;
        justify-content: center;
        align-items: flex-end;        
    }

    .projects-href {
        display: inline-block;
        padding: 10px;
        background: #bb86fc;
        border-radius: 5px;
        text-align: center;
        white-space: nowrap;        

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

    @media screen and (max-width: 800px) {
        font-size: 1em;
    }
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
                                        This project involves an events page with CRUD functionalities for create, delete, register participation, and view events on the site. It was developed using PHP (Laravel, Blade), REST API, and MySQL.
                                        </Par2Style>
                                    </div>
                                    <div className="projects-button">
                                        <ProjectsAnchor href="https://github.com/lucasPaschoalick/curso-laravel" target="_blank">
                                            <div className="projects-href">See on GitHub</div>
                                        </ProjectsAnchor>
                                    </div>
                                </ProjectsContent>
                                <ProjectsContent>
                                    <div>
                                        <AnchorStyle href="https://github.com/lucasPaschoalick/tcc-utfpr-avaliacao-de-acessibilidade" target="_blank">Web Pages Accessibility Tests</AnchorStyle>
                                    </div>
                                    <div>
                                        <Par2Style>
                                        This is my Undergraduate Final Project for my Bachelor's degree. I developed a Python Web Crawler to run accessibility tests based on WCAG guidelines on a list of web pages using Selenium WebDriver and Axe-core.
                                        </Par2Style>
                                    </div>
                                    <div className="projects-button">
                                        <ProjectsAnchor href="https://github.com/lucasPaschoalick/tcc-utfpr-avaliacao-de-acessibilidade" target="_blank">
                                            <div className="projects-href">See on GitHub</div>
                                        </ProjectsAnchor>
                                    </div>
                                </ProjectsContent>
                                <ProjectsContent>
                                    <div>
                                        <AnchorStyle href="https://github.com/lucasPaschoalick/desafio-xbrain" target="_blank">Java Spring Boot API</AnchorStyle>
                                    </div>
                                    <div>
                                        <Par2Style>
                                        This project involves a challenge to develop a Java Spring Boot API for registering new sales in an H2 database and retrieving a list of sellers based on the period provided as a parameter.
                                        </Par2Style>
                                    </div>
                                    <div className="projects-button">
                                        <ProjectsAnchor href="https://github.com/lucasPaschoalick/desafio-xbrain" target="_blank">
                                            <div className="projects-href">See on GitHub</div>
                                        </ProjectsAnchor>
                                    </div>
                                </ProjectsContent>
                                <ProjectsContent>
                                    <div>
                                        <AnchorStyle href="https://github.com/lucasPaschoalick/todo-list-crud" target="_blank">ToDo List CRUD</AnchorStyle>
                                    </div>
                                    <div>
                                        <Par2Style>
                                        This project involves a challenge to develop a task management system (to-do list) with CRUD functionalities. It was implemented using HTML, CSS, JavaScript, Jquery, Ajax, PHP and MySQL.
                                        </Par2Style>
                                    </div>
                                    <div className="projects-button">
                                        <ProjectsAnchor href="https://github.com/lucasPaschoalick/todo-list-crud" target="_blank">
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
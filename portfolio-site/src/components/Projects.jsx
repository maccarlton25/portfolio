import React from 'react';
import '../css/projects.scss';
const Projects = () => {

    return (
        <div className="container dark min-max">
            <div className="row">
                <div className="d-flex justify-content-start">
                    <h1>Projects</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-12">
                    <div className="card dark light-border margin-please">
                        <img className="card-img-top" src="/aux.png" />
                        <div className="card-body">
                            <h5 className="card-title "> Aux, Inc. </h5>
                            <h6 className="card-subtitle mb-2 text-muted small">Startup, AI &amp; Music | Spring 2021</h6>
                            <p className="card-text">
                                Aux needed a website for an upcoming potential investor meeting. I worked with another developer and a graphic designer to get a  React website together within a month.
                            </p>
                            <a href="https://www.auxtunes.com" className="card-link" target="_blank">Site</a>
                            <a href="https://github.com/shah-carlton-dev/aux-collab" className="card-link" target="_blank">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="card dark light-border margin-please">
                        <img className="card-img-top" src="/courseplanner.png" />
                        <div className="card-body">
                            <h5 className="card-title"> Course Planner </h5>
                            <h6 className="card-subtitle mb-2 text-muted small">Final Project COMP-426 | Fall 2020</h6>
                            <p className="card-text">
                                Developed a course planner and major requirements tracker app for computer science majors at UNC-CH. This project was built on the MERN stack and has a useless weather API!
                            </p>
                            <a href="https://unc-schedule-app.herokuapp.com/" className="card-link" target="_blank">Site</a>
                            <a href="https://github.com/maccarlton25/course-planner" className="card-link" target="_blank">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="card dark light-border margin-please">
                        <img className="card-img-top" src="/joshactually.png" />
                        <div className="card-body">
                            <h5 className="card-title"> Josh Neuman </h5>
                            <h6 className="card-subtitle mb-2 text-muted small">Entrepreneur, filmaker | Winter 2018 </h6>
                            <p className="card-text">
                            This was the first website I built from start to finish. Back in 2018 I worked with a close friend to develop his portfolio website. This project sparked my passion for programming!
                            </p>
                            <a href="https://joshneuman.com" className="card-link" target="_blank">Site</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-12">
                    <div className="card dark light-border margin-please">
                        <img className="card-img-top" src="https://cdn.dribbble.com/users/2670006/screenshots/6217560/maintenance-page-final.png?compress=1&resize=400x300" />
                        <div className="card-body">
                            <h5 className="card-title"> Headless CMS </h5>
                            <h6 className="card-subtitle mb-2 text-muted small">Web Dev Carolina | Fall 2020</h6>
                            <p className="card-text">
                            I worked with a friend to build a headless CMS for our club. We have since reprioritized our efforts, but this was a great exercise in designing APIs and using the MERN stack. 
                            </p>
                            <a href="https://github.com/web-dev-carolina/headless-cms" className="card-link" target="_blank">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="card dark light-border margin-please">
                        <img className="card-img-top" src="/joshneuman.png" />
                        <div className="card-body">
                            <h5 className="card-title"> Event Registration Sites </h5>
                            <h6 className="card-subtitle mb-2 text-muted small">Client work | Summer 2020</h6>
                            <p className="card-text">
                            Theese sites are quick builds for a corporate event planner. Unfortunately our first project was canceled due to COVID-19. Recently however, we have begun working again!
                            </p>
                            <a href="https://zealand-site.web.app/" className="card-link" target="_blank">Site One(abandoned)</a>
                            <a href="https://west-dermatology-reg.web.app/" className="card-link" target="_blank">Site Two</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="card dark light-border margin-please">
                        <img className="card-img-top" src="/education.png" />
                        <div className="card-body">
                            <h5 className="card-title"> Web Dev Education </h5>
                            <h6 className="card-subtitle mb-2 text-muted small">Web Dev Carolina | Spring 2020</h6>
                            <p className="card-text">
                            I wanted to take a stab at trying to teach web development.  My team developed a 7 week education program.  This was designed for students with no background in web development.
                            </p>
                            <a href="https://drive.google.com/drive/folders/1YnBsSlRZet3IWa5NPIJBARm6XKT2spEF?usp=sharing" className="card-link" target="_blank">Slides</a>
                            <a href="https://github.com/web-dev-carolina/education-fall2020" className="card-link" target="_blank">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
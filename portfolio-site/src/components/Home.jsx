import React from 'react';
import '../css/Home.scss';

const Home = () => {

    return (
        <div className="container-fluid dark min-max">
            <div className="jumbotron jumbotron-fluid j-size" >
                <div className="container max-height">
                    <div className="row max-height">
                        <div className="col-lg-6 col-md-8 col-12 align-self-center">
                            <div className="card text-center home-dark light-border home-border margin-please">
                                <img className="rounded-circle" src="/me.png" />
                                <div className="card-body">
                                    <h4 className="card-title"> Mac Carlton </h4>
                                    <h6 className="card-subtitle mb-2 text-muted small">cs @ unc-ch | business administration @ kenan-flagler</h6>
                                    <p className="card-text">
                                        I am a senior in college graduating in May 2022, pursuing a double major in comp sci and business admin. I have worked with front-end technolgies since high school and have learned back-end development over the past four years.  
                                    </p>
                                    <p>
                                        I currently intern at SAS as a technical consultant working on their digital marketing platform.  I also co-founded UNC-CH's first web development <a href="https://webdevcarolina.com/" target="_blank">club</a> and co-founded a web development firm for freelance projects.
                                    </p>
                                    <p>
                                        I am seeking a career in tech where I can leverage both my business and developer skills. Check out my blog and portfolio pages to learn more!
                                    </p>
                                    <a href="https://www.linkedin.com/in/mac-carlton-335442179/" className="card-link" target="_blank">LinkedIn</a>
                                    <a href="https://github.com/maccarlton25" className="card-link" target="_blank">GitHub</a>
                                    <a href="/Carlton_Resume" className="card-link" target="_blank" download>Resume</a>
                                    <a href="https://www.goodreads.com/book/show/135479.Cat_s_Cradle" className="card-link" target="_blank">Favorite Book</a>
                                    <a href="mailto:mac_carlton@kenan-flagler.unc.edu" className="card-link">Email</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
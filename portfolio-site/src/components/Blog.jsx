import React, {useState} from 'react';
import '../css/blog.scss';
import * as $ from 'jquery';

const Blog = () => {
    const [toggled, setToggled] = useState(true);
    const [toggled1, setToggled1] = useState(true);
    const [toggled2, setToggled2] = useState(true);

    // yes this should be one function
    const handleTogglePress = (e) => {
        toggled ? $('#text1').css("display", "inline-block") : $('#text1').css("display", "none");
        toggled ? $('#toggle1').text("read less") : $('#toggle1').text("read more");
        setToggled(!toggled);
    }
    const handleTogglePress1 = (e) => {
        toggled2 ? $('#text3').css("display", "inline-block") : $('#text3').css("display", "none");
        toggled2 ? $('#toggle3').text("read less") : $('#toggle3').text("read more");
        setToggled2(!toggled2);
    }
    const handleTogglePress2 = (e) => {
        toggled1 ? $('#text2').css("display", "inline-block") : $('#text2').css("display", "none");
        toggled ? $('#toggle2').text("read less") : $('#toggle2').text("read more");
        setToggled1(!toggled1);
    }
    return (
        <div className="container-fluid dark min-max">
            <div className="row">
                <div className="d-flex justify-content-start">
                    <div>
                        <h1>Blog</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 col-10">
                    <div className="bg-blog-l red-grad">
                        <article className="article">
                            <header>
                                <h3> Thoughts on Web Dev Carolina</h3>
                                <p> Mac Carlton | <span className="small"> 2021 </span></p>
                            </header>
                            <div>
                                <p>Web development is something that is impossible to ‘master’ because it is constantly evolving. I must admit the first couple of years(!) that I was learning web development, I often found myself overwhelmed by the complexity.</p>
                                <div id="text1" style={{display: "none"}}>
                                    <p>I felt lost in this subject because I was treating it like I would any other class I had at the time. I would signup for a self-paced course and assume that as long as I completed it, I would be a competent developer.  Instead what I would take away from the course was a basic understanding of HTML/CSS/JS syntax. Not very useful. </p>
                                    <p>It was only through personal projects and independent research that I found myself learning the valuable skills. I started with simple questions - how do you make a contact form populate a database? Then I would play around with basic DOM manipulation and a Firebase DB and figure it out.  Eventually my questions got a bit more complicated - How do I make a messaging feature on my site? How do you design and implement an API? Why are JS frameworks useful? You get the picture.  Through this journey I discovered what I had really gained was learning by doing and practical research skills.</p>
                                    <p>When starting Web Dev Carolina, specifically the education program, those skills was what I wanted members to take away.  By no means did I expect them to  truly understand the intricacies of web development from wireframes to deployment, instead I focused on priming them with the toolkit they needed to figure it out on their own. </p>
                                    <p>I have published education resources in the projects page if you are interested in seeing how this philosophy was implemented.</p>
                                </div>
                                <a id="toggle1" className="button-light" onClick={e => handleTogglePress(e)}>read more</a>
                            </div>
                        </article>
                    </div>
                    
                </div>
                <div className="col-md-4 col-2 bg-style" style={{ backgroundImage: "url(/blog_bg.png)" }}>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 col-10 ">
                    <div className="bg-blog-l blue-grad">
                    <article className="article">
                            <header>
                                <h3> First Blog!</h3>
                                <p> Mac Carlton | <span className="small"> 2021 </span></p>
                            </header>
                            <div>
                                
                                <p>I am going to start this blog by reflecting on formative experiences in my career development. I am going to start with the big ones: internships, leadership roles, etc. and then get more specific over time. Lets start with SAS.  </p>
                                <div id="text3" style={{display: "none"}}>
                                    <p>For the past two summers and during this semester I have interned at SAS, Inc. (link) as a technical consultant.  Working one the same team has provided continuity and allowed for me to contribute to longterm projects. Unfortunately, the majority of my work is confidential and for internal use only, but I hope I can communicate some of my project work here. </p>
                                    <p>The product I worked on was the JS Events API for Customer Intelligence 360 (SAS’s digital marketing solution).  My first summer spent at SAS was taking the existing documentation and developing use cases and examples for each event type.  This was a great exercise in working with enterprise-level API’s and mapping data from user input to the database. I also had the opportunity to develop and Angular JS website to support my documentation. </p>
                                    <p>I also developed several utilities for customers to comfortably integrate CI 360 into their systems.  For the previously mentioned Events API, I developed an initialization script to ensure the API collected all events, along with error reporting to help customers recognize if they are are incorrectly using the API. </p>
                                    <p>The second major utility I built was on the backend.  The data model used a rudimentary name/value schema for custom properties collected from the API. To make this data more useful for segmentation and reporting. I developed a process using Base SAS and SQL to ‘flatten’ these tables.</p>
                                    <p>In addition to my technical work, I have also worked on several business analysis projects.  This includes understanding how customers use the product and setting up a standardized reporting process to understand customer journeys from pre-sales through customer success meetings.</p>
                                </div>
                                <a id="toggle3" className="button-light" onClick={e => handleTogglePress1(e)}>read more</a>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="col-md-4 col-2 bg-style" style={{ backgroundImage: "url(/blog_bg_blue.png)" }}>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 col-10 ">
                    <div className="bg-blog-l green-grad">
                    <article className="article">
                            <header>
                                <h3> Placeholder </h3>
                                <p> Mac Carlton | <span className="small"> 2021 </span></p>
                            </header>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <div id="text2" style={{display: "none"}}>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                                </div>
                                <a id="toggle2" className="button-light" onClick={e => handleTogglePress2(e)}>read more</a>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="col-md-4 col-2 bg-style" style={{ backgroundImage: "url(/blog_bg_green.png)" }}>
                </div>
            </div>
        </div>
    );
}

export default Blog;
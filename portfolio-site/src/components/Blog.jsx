import React from 'react';
import '../css/blog.scss';
import * as $ from 'jquery';

const Blog = () => {

        $(document).on("click", "#toggle1", function() {
          if ($("#text1").hasClass('hidden')) {
            $("#text1").removeClass('hidden');
            $("#toggle1").text("read less");
          } else {
            $("#text1").addClass('hidden');
            $("#toggle1").text("read more");
          }
          setTimeout(function() {}, 500);
        });
        $(document).on("click", "#toggle2", function() {
            if ($("#text2").hasClass('hidden')) {
              $("#text2").removeClass('hidden');
              $("#toggle2").text("read less");
            } else {
              $("#text2").addClass('hidden');
              $("#toggle2").text("read more");
            }
            setTimeout(function() {}, 500);
          });
          $(document).on("click", "#toggle3", function() {
            if ($("#text3").hasClass('hidden')) {
              $("#text3").removeClass('hidden');
              $("#toggle3").text("read less");
            } else {
              $("#text3").addClass('hidden');
              $("#toggle3").text("read more");
            }
            setTimeout(function() {}, 500);
          });
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
                                <h3> First Blog!</h3>
                                <p> Mac Carlton | <span className="small"> 2021 </span></p>
                            </header>
                            <div>
                                <p>First blog, don’t know what to write about. I guess I will just write about my internship (kinda basic, I know). I plan to use this as a place to write about anything and everything that matters to me. </p>
                                <div id="text1" className="hidden">
                                    <p>For the past two summers and during this semester I have interned at SAS, Inc. (link) as a technical consultant.  Working one the same team has provided continuity and allowed for me to contribute to longterm projects. Unfortunately, the majority of my work is confidential and for internal use only, but I hope I can communicate some of my project work here. </p>
                                    <p>The product I worked on was the JS Events API for Customer Intelligence 360 (SAS’s digital marketing solution).  My first summer spent at SAS was taking the existing documentation and developing use cases and examples for each event type.  This was a great exercise in working with enterprise-level API’s and mapping data from user input to the database. I also had the opportunity to develop and Angular JS website to support my documentation. </p>
                                    <p>I also developed several utilities for customers to comfortably integrate CI 360 into their systems.  For the previously mentioned Events API, I developed an initialization script to ensure the API collected all events, along with error reporting to help customers recognize if they are are incorrectly using the API. </p>
                                    <p>The second major utility I built was on the backend.  The data model used a rudimentary name/value schema for custom properties collected from the API. To make this data more useful for segmentation and reporting. I developed a process using Base SAS and SQL to ‘flatten’ these tables.</p>
                                    <p>In addition to my technical work, I have also worked on several business analysis projects.  This includes understanding how customers use the product and setting up a standardized reporting process to understand customer journeys from pre-sales through customer success meetings.</p>
                                </div>
                                <a id="toggle1" className="button-light">read more</a>
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
                                <p>First blog, don’t know what to write about. I guess I will just write about my internship (kinda basic, I know). I plan to use this as a place to write about anything and everything that matters to me. </p>
                                <div id="text2" className="hidden">
                                    <p>For the past two summers and during this semester I have interned at SAS, Inc. (link) as a technical consultant.  Working one the same team has provided continuity and allowed for me to contribute to longterm projects. Unfortunately, the majority of my work is confidential and for internal use only, but I hope I can communicate some of my project work here. </p>
                                    <p>The product I worked on was the JS Events API for Customer Intelligence 360 (SAS’s digital marketing solution).  My first summer spent at SAS was taking the existing documentation and developing use cases and examples for each event type.  This was a great exercise in working with enterprise-level API’s and mapping data from user input to the database. I also had the opportunity to develop and Angular JS website to support my documentation. </p>
                                    <p>I also developed several utilities for customers to comfortably integrate CI 360 into their systems.  For the previously mentioned Events API, I developed an initialization script to ensure the API collected all events, along with error reporting to help customers recognize if they are are incorrectly using the API. </p>
                                    <p>The second major utility I built was on the backend.  The data model used a rudimentary name/value schema for custom properties collected from the API. To make this data more useful for segmentation and reporting. I developed a process using Base SAS and SQL to ‘flatten’ these tables.</p>
                                    <p>In addition to my technical work, I have also worked on several business analysis projects.  This includes understanding how customers use the product and setting up a standardized reporting process to understand customer journeys from pre-sales through customer success meetings.</p>
                                </div>
                                <a id="toggle2" className="button-light">read more</a>
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
                                <h3> First Blog!</h3>
                                <p> Mac Carlton | <span className="small"> 2021 </span></p>
                            </header>
                            <div>
                                <p>First blog, don’t know what to write about. I guess I will just write about my internship (kinda basic, I know). I plan to use this as a place to write about anything and everything that matters to me. </p>
                                <div id="text3" className="hidden">
                                    <p>For the past two summers and during this semester I have interned at SAS, Inc. (link) as a technical consultant.  Working one the same team has provided continuity and allowed for me to contribute to longterm projects. Unfortunately, the majority of my work is confidential and for internal use only, but I hope I can communicate some of my project work here. </p>
                                    <p>The product I worked on was the JS Events API for Customer Intelligence 360 (SAS’s digital marketing solution).  My first summer spent at SAS was taking the existing documentation and developing use cases and examples for each event type.  This was a great exercise in working with enterprise-level API’s and mapping data from user input to the database. I also had the opportunity to develop and Angular JS website to support my documentation. </p>
                                    <p>I also developed several utilities for customers to comfortably integrate CI 360 into their systems.  For the previously mentioned Events API, I developed an initialization script to ensure the API collected all events, along with error reporting to help customers recognize if they are are incorrectly using the API. </p>
                                    <p>The second major utility I built was on the backend.  The data model used a rudimentary name/value schema for custom properties collected from the API. To make this data more useful for segmentation and reporting. I developed a process using Base SAS and SQL to ‘flatten’ these tables.</p>
                                    <p>In addition to my technical work, I have also worked on several business analysis projects.  This includes understanding how customers use the product and setting up a standardized reporting process to understand customer journeys from pre-sales through customer success meetings.</p>
                                </div>
                                <a id="toggle3" className="button-light">read more</a>
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
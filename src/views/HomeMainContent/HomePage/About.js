import React from 'react'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="overflow_hide">
        <div className="container">
        <div className="heading_s1"> 
            <h2><center>About Us</center></h2>
          </div>
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="animation" data-animation="fadeInLeft" data-animation-delay="0.01s">
                <div className="floating">
                  <div className="card-object rotate">
                    <header></header>
                    <aside></aside>
                    <main><blockquote className="message">May all the <em className="forgotten">tiny</em> black <em className="forget">insects</em> crawling on the peonies be my sons <em className="forget">and daughters</em> in future lives.</blockquote></main>
                    <footer className="author">John Giorno</footer>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <img src="assets/images/about_img2.png" alt="about_img2" />
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default About

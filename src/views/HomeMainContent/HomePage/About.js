import React from 'react'
import { Link } from "react-router-dom";

const About = () => {
    return (
        <>
<section className="overflow_hide">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-5">
        <div className="animation" data-animation="fadeInLeft" data-animation-delay="0.01s">
          <img src="assets/images/about_img2.png" alt="about_img2" />
        </div>
      </div>
      <div className="col-md-7">
        <div className="padding_eight_all animation fancy_box" data-animation="fadeInRight" data-animation-delay="0.02s">
          <div className="heading_s1"> 
            <h2>About Us</h2>
          </div>
          <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
          <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
          <Link to="#!" className="btn btn-outline-black rounded-0 my-2">Read More</Link>
        </div>
      </div>
    </div>
  </div>
</section>


        </>
    )
}

export default About

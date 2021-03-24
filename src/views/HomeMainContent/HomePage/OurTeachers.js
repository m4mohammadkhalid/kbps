import React from 'react'
import { Link } from "react-router-dom";

const OurTeachers = () => {
    return (
        <>

<section>
  <div className="container">	
    <div className="row justify-content-center">
      <div className="col-xl-6 col-lg-8">
        <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
          <div className="heading_s1 text-center">
            <h2>Our Teachers</h2>
          </div>
          <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3 col-sm-6">
        <div className="team_box team_style3 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
          <div className="team_img">
            <img src="assets/images/team_img1.jpg" alt="team1" />
          </div>
          <div className="team_title radius_lbrb_10 text-center">
            <h5><Link to="#">Aden Smith</Link></h5>
            <span>Head Of Department</span>
            <ul className="list_none social_icons">
              <li><Link to="#"><i className="ion-social-facebook" /></Link></li>
              <li><Link to="#"><i className="ion-social-twitter" /></Link></li>
              <li><Link to="#"><i className="ion-social-googleplus" /></Link></li>
              <li><Link to="#"><i className="ion-social-instagram-outline" /></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="team_box team_style3 animation" data-animation="fadeInUp" data-animation-delay="0.03s">
          <div className="team_img">
            <img src="assets/images/team_img2.jpg" alt="team2" />
          </div>
          <div className="team_title radius_lbrb_10 text-center">
            <h5><Link to="#">Kally Brooks</Link></h5>
            <span>Professor</span>
            <ul className="list_none social_icons">
              <li><Link to="#"><i className="ion-social-facebook" /></Link></li>
              <li><Link to="#"><i className="ion-social-twitter" /></Link></li>
              <li><Link to="#"><i className="ion-social-googleplus" /></Link></li>
              <li><Link to="#"><i className="ion-social-instagram-outline" /></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="team_box team_style3 animation" data-animation="fadeInUp" data-animation-delay="0.04s">
          <div className="team_img">
            <img src="assets/images/team_img3.jpg" alt="team3" />
          </div>
          <div className="team_title radius_lbrb_10 text-center">
            <h5><Link to="#">David clark</Link></h5>
            <span>Chemistry Teacher</span>
            <ul className="list_none social_icons">
              <li><Link to="#"><i className="ion-social-facebook" /></Link></li>
              <li><Link to="#"><i className="ion-social-twitter" /></Link></li>
              <li><Link to="#"><i className="ion-social-googleplus" /></Link></li>
              <li><Link to="#"><i className="ion-social-instagram-outline" /></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="team_box team_style3 animation" data-animation="fadeInUp" data-animation-delay="0.05s">
          <div className="team_img">
            <img src="assets/images/team_img6.jpg" alt="team6" />
          </div>
          <div className="team_title radius_lbrb_10 text-center">
            <h5><Link to="#">Jesica Belly</Link></h5>
            <span>Chemistry Teacher</span>
            <ul className="list_none social_icons">
              <li><Link to="#"><i className="ion-social-facebook" /></Link></li>
              <li><Link to="#"><i className="ion-social-twitter" /></Link></li>
              <li><Link to="#"><i className="ion-social-googleplus" /></Link></li>
              <li><Link to="#"><i className="ion-social-instagram-outline" /></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      </>
    )
}

export default OurTeachers

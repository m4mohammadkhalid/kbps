import React from "react";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

const Footer = () => {
  return (
    <>
       <Helmet>
                <link rel="stylesheet" href="https://m4mohammadkhalid.github.io/file/f1.css" />
        <link rel="stylesheet" href="https://m4mohammadkhalid.github.io/file/f2.css" />
        <link rel="stylesheet" href="https://m4mohammadkhalid.github.io/file/f3.css" />            
        
            </Helmet>
<div className="education-main-wrapper">
  <footer id="education-footer" className="education-footer-one">
    <span className="education-footer-pattren" />
    <div className="education-footer-widget">
      <div className="container">
        <div className="row">
          <aside className="col-md-4 widget widget_contact_info">
            <a href="index.html" className="education-footer-logo"><img src="images/footer-logo.png" alt /></a>
            <p>4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat urna non ipsum maxim us malesuada.</p>
            <ul>
              <li><i className="education-color fa fa-home" /> 195 Cooks Mine Road Espa nola, NM 87532</li>
              <li><i className="education-color fa fa-phone" /> +123 45 678 - 00 913 2245 <br />678</li>
              <li><i className="education-color fa fa-envelope" /> <a href="mailto:name@email.com">info@example.com - </a> <a href="mailto:name@email.com">example@abc.com</a></li>
            </ul>
          </aside>
          <aside className="col-md-4 widget widget_featured_courses">
            <div className="education-footer-title"> <h4>Featured Courses</h4> </div>
            <ul>
              <li>
                <figure><a href="course-detail.html"><img src="images/widget-featured-courses-1.jpg" alt /></a>
                  <figcaption>
                    <h6><a href="course-detail.html">Lorem ipsum dolor sit amet, cons scing elit. Praesent.</a></h6>
                    <div className="star-rating"><span className="star-rating-box" style={{width: '54%'}} /></div>
                    <small>( 12 Reviews )</small>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure><a href="course-detail.html"><img src="images/widget-featured-courses-2.jpg" alt /></a>
                  <figcaption>
                    <h6><a href="course-detail.html">Lorem ipsum dolor sit amet, cons scing elit. Praesent.</a></h6>
                    <div className="star-rating"><span className="star-rating-box" style={{width: '34%'}} /></div>
                    <small>( 12 Reviews )</small>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure><a href="course-detail.html"><img src="images/widget-featured-courses-3.jpg" alt /></a>
                  <figcaption>
                    <h6><a href="course-detail.html">Lorem ipsum dolor sit amet, cons scing elit. Praesent.</a></h6>
                    <div className="star-rating"><span className="star-rating-box" style={{width: '85%'}} /></div>
                    <small>( 12 Reviews )</small>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </aside>
          <aside className="col-md-4 widget widget_gallery">
            <div className="education-footer-title"> <h4>Flicker Images</h4> </div>
            <ul>
              <li><a data-fancybox-group="group" href="extra-images/widget-gallery-1.jpg" className="fancybox"><img src="images/widget-gallery-1.jpg" alt /></a></li>
              <li><a data-fancybox-group="group" href="extra-images/widget-gallery-2.jpg" className="fancybox"><img src="images/widget-gallery-2.jpg" alt /></a></li>
              <li><a data-fancybox-group="group" href="extra-images/widget-gallery-3.jpg" className="fancybox"><img src="images/widget-gallery-3.jpg" alt /></a></li>
              <li><a data-fancybox-group="group" href="extra-images/widget-gallery-4.jpg" className="fancybox"><img src="images/widget-gallery-4.jpg" alt /></a></li>
              <li><a data-fancybox-group="group" href="extra-images/widget-gallery-5.jpg" className="fancybox"><img src="images/widget-gallery-5.jpg" alt /></a></li>
              <li><a data-fancybox-group="group" href="extra-images/widget-gallery-6.jpg" className="fancybox"><img src="images/widget-gallery-6.jpg" alt /></a></li>
              <li><a data-fancybox-group="group" href="extra-images/widget-gallery-7.jpg" className="fancybox"><img src="images/widget-gallery-7.jpg" alt /></a></li>
              <li><a data-fancybox-group="group" href="extra-images/widget-gallery-8.jpg" className="fancybox"><img src="images/widget-gallery-8.jpg" alt /></a></li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="education-copyright">
            <p>© 2017, All Right Reserved - by <a href="index.html">EyeCix</a></p>
            <ul>
              <li><a href="404.html">Privacy</a></li>
              <li><a href="404.html">Terms</a></li>
              <li><a href="404.html">Sitemap</a></li>
              <li><a href="404.html">Purchase</a></li>
            </ul>
            <a href="#" className="education-back-top"><i className="fa fa-angle-up" /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div className="education-parallax">
    <span className="education-footer-pattren" />
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Get the Coaching Training for Free</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et elementum nulla, eu placerat felis. Etiam tincidunt orci lacus, id varius.</p> <br />
          <a href="#">Get Started Now</a>
        </div>
      </div>
    </div>
  </div>
  <div className="clearfix" />
</div>

      <Link to="#" className="scrollup" style={{ display: "none" }}>
        <i className="ion-ios-arrow-up" />
      </Link>
    </>
  );
};

export default Footer;

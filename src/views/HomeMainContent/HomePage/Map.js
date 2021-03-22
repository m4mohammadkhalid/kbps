import React from 'react';
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";

function Map() {
    return (
        <>
            <Helmet>
                <link rel="stylesheet" href="https://m4mohammadkhalid.github.io/file/footer.css" />
                <link rel="stylesheet" href="https://m4mohammadkhalid.github.io/file/bootstrap.min.css" />            
            </Helmet>

  <section className="counterup-section">
    <div className="container">
      <div className="counterup-content common-section padding-top-60 padding-bottom-30">
        <div className="counter-shape">
          <img src="assets/images/round-shape-2.png" alt="shape" className="round-shape-2" />
          <img src="assets/images/plus-sign.png" alt="shape" className="plus-sign item-rotate" />
          <img src="assets/images/round-shape-3.png" alt="shape" className="round-shape-3" />
        </div>
        <div className="row align-items-center">
          <div className="col-xl-3 col-sm-6">
            <div className="single-counterup">
              <div className="single-counterup-image">
                <img src="assets/images/counter-image-1.png" alt="khalid" />
              </div>
              <div className="single-counterup-content">
                <div className="counter-number">
                  <h3 className="title counter">2000</h3>
                  <h3 className="title">+</h3>
                </div>
                <span>expert instructors</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="single-counterup">
              <div className="single-counterup-image">
                <img src="assets/images/category-icon-3.png" alt="khalid" />
              </div>
              <div className="single-counterup-content">
                <div className="counter-number">
                  <h3 className="title counter">7000</h3>
                  <h3 className="title">+</h3>
                </div>
                <span>students enrolled</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="single-counterup">
              <div className="single-counterup-image">
                <img src="assets/images/counter-image-2.png" alt="khalid" />
              </div>
              <div className="single-counterup-content">
                <div className="counter-number">
                  <h3 className="title counter">10</h3>
                  <h3 className="title">+</h3>
                </div>
                <span>experience years</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="single-counterup">
              <div className="single-counterup-image">
                <img src="assets/images/category-icon-6.png" alt="khalid" />
              </div>
              <div className="single-counterup-content">
                <div className="counter-number">
                  <h3 className="title counter">50</h3>
                  <h3 className="title">+</h3>
                </div>
                <span>total course</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="instructor-section gradient-bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <h2>top online <span>instructors</span></h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="single-instructor">
            <span className="instructor-sign">john</span>
            <div className="instructor-image">
              <Link to="/"><img src="assets/images/instructor-1.png" alt="khalid" /></Link>
            </div>
            <div className="instructor-content">
              <h4><Link to="/">john doe</Link></h4>
              <span>founder CEO</span>
            </div>
            <div className="hover-state">
              <ul>
                <li><Link to="/"><i className="fa fa-facebook" /></Link></li>
                <li><Link to="/"><i className="fa fa-twitter" /></Link></li>
                <li><Link to="/"><i className="fa fa-linkedin" /></Link></li>
                <li><Link to="/"><i className="fa fa-instagram" /></Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-instructor diffrent-bg-color">
            <span className="instructor-sign">arya</span>
            <div className="instructor-image">
              <Link to="/"><img src="assets/images/instructor-3.png" alt="khalid" /></Link>
            </div>
            <div className="instructor-content">
              <h4><Link to="/">arya stark</Link></h4>
              <span>web teacher</span>
            </div>
            <div className="hover-state">
              <ul>
                <li><Link to="/"><i className="fa fa-facebook" /></Link></li>
                <li><Link to="/"><i className="fa fa-twitter" /></Link></li>
                <li><Link to="/"><i className="fa fa-linkedin" /></Link></li>
                <li><Link to="/"><i className="fa fa-instagram" /></Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-instructor">
            <span className="instructor-sign">chris</span>
            <div className="instructor-image">
              <Link to="/"><img src="assets/images/instructor-2.png" alt="khalid" /></Link>
            </div>
            <div className="instructor-content">
              <h4><Link to="/">chris wokes</Link></h4>
              <span>UI UX teacher</span>
            </div>
            <div className="hover-state">
              <ul>
                <li><Link to="/"><i className="fa fa-facebook" /></Link></li>
                <li><Link to="/"><i className="fa fa-twitter" /></Link></li>
                <li><Link to="/"><i className="fa fa-linkedin" /></Link></li>
                <li><Link to="/"><i className="fa fa-instagram" /></Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-instructor diffrent-bg-color">
            <span className="instructor-sign">devid</span>
            <div className="instructor-image">
              <Link to="/"><img src="assets/images/instructor-4.png" alt="khalid" /></Link>
            </div>
            <div className="instructor-content">
              <h4><Link to="/">devid walter</Link></h4>
              <span>marketing teacher</span>
            </div>
            <div className="hover-state">
              <ul>
                <li><Link to="/"><i className="fa fa-facebook" /></Link></li>
                <li><Link to="/"><i className="fa fa-twitter" /></Link></li>
                <li><Link to="/"><i className="fa fa-linkedin" /></Link></li>
                <li><Link to="/"><i className="fa fa-instagram" /></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="instructor-button margin-top-20 text-center">
            <Link to="/" className="template-button">see more instructor</Link>
          </div>
        </div>
      </div>
    </div>
  </section>




            <section className="countdown-section">
  <div className="container">
    <div className="common-section">
      <div className="counter-shape">
        <img src="assets/images/round-shape-2.png" alt="khalid" className="round-shape-2" />
        <img src="assets/images/plus-sign.png" alt="shape" className="plus-sign item-rotate" />
        <img src="assets/images/round-shape-3.png" alt="shape" className="round-shape-3" />
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="countdown-left">
            <h2 className="home-2">upcoming our free <span>web design</span> course!</h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="countdown-right">
            <ul className="countdown">
              <li>
                <span className="days">00</span>
                <p className="days_ref">days</p>
              </li>
              <li className="separator">:</li>
              <li>
                <span className="hours">00</span>
                <p className="hours_ref">hours</p>
              </li>
              <li className="separator">:</li>
              <li>
                <span className="minutes">00</span>
                <p className="minutes_ref">minutes</p>
              </li>
              <li className="separator">:</li>
              <li>
                <span className="seconds">00</span>
                <p className="seconds_ref">seconds</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

            </>
);
}
export default Map;
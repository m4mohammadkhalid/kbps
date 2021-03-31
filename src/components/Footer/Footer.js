import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg_blue_dark footer_dark">
        <div className="top_footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-8 mb-4 mb-lg-0">
                <div className="footer_logo">
                  <Link to="index.html">
                  <h2>KBPS SCHOOL</h2>
                  </Link>
                </div>
                <p>
                  Phasellus blandit massa enim. elit id varius nunc. Lorem ipsum
                  dolor sit amet, consectetur industry.
                </p>
                <ul className="contact_info contact_info_light list_none">
                  <li>
                    <i className="fa fa-map-marker-alt " />
                    <address>Califonia Street san Francisco, CA</address>
                  </li>
                  <li>
                    <i className="fa fa-envelope" />
                    <Link to="mailto:info@sitename.com">info@sitename.com</Link>
                  </li>
                  <li>
                    <i className="fa fa-mobile-alt" />
                    <p>+ 457 789 789 65</p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-sm-4 mb-4 mb-lg-0">
                <h6 className="widget_title">Useful Links</h6>
                <ul className="list_none widget_links links_style2">
                  <li>
                    <Link to="#">Join Us</Link>
                  </li>
                  <li>
                    <Link to="#">About Us</Link>
                  </li>
                  <li>
                    <Link to="#">Features</Link>
                  </li>
                  <li>
                    <Link to="#">Feedback</Link>
                  </li>
                  <li>
                    <Link to="#">Support center</Link>
                  </li>
                  <li>
                    <Link to="#">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h6 className="widget_title">Recent Posts</h6>
                <ul className="recent_post border_bottom_dash list_none">
                  <li>
                    <div className="post_footer">
                      <div className="post_img">
                        <Link to="#">
                          <img
                            src="assets/images/letest_post1.jpg"
                            alt="letest_post1"
                          />
                        </Link>
                      </div>
                      <div className="post_content">
                        <h6>
                          <Link to="#">
                            Lorem ipsum dolor sit amet, consectetur
                          </Link>
                        </h6>
                        <span className="post_date">April 14, 2018</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="post_footer">
                      <div className="post_img">
                        <Link to="#">
                          <img
                            src="assets/images/letest_post2.jpg"
                            alt="letest_post1"
                          />
                        </Link>
                      </div>
                      <div className="post_content">
                        <h6>
                          <Link to="#">
                            Lorem ipsum dolor sit amet, consectetur
                          </Link>
                        </h6>
                        <span className="post_date">April 14, 2018</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="post_footer">
                      <div className="post_img">
                        <Link to="#">
                          <img
                            src="assets/images/letest_post3.jpg"
                            alt="letest_post1"
                          />
                        </Link>
                      </div>
                      <div className="post_content">
                        <h6>
                          <Link to="#">
                            Lorem ipsum dolor sit amet, consectetur
                          </Link>
                        </h6>
                        <span className="post_date">April 14, 2018</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6">
                <h6 className="widget_title">Subscribe Newsletter</h6>
                <p>
                  Contrary to popular belief of lorem Ipsm Latin amet ltin from
                  consectetur industry.
                </p>
                <div className="newsletter_form form_style2 mb-4">
                  <form>
                    <input
                      type="text"
                      className="form-control"
                      required
                      placeholder="Email Address"
                    />
                    <button
                      type="submit"
                      title="Subscribe"
                      className="btn btn-default btn-sm rounded-0"
                      name="submit"
                      value="Submit"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
                <h6 className="widget_title">Follow Us</h6>
                <ul className="list_none social_icons social_white social_style1">
                  <li>
                    <Link to="#">
                      <i className="ion-social-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="ion-social-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="ion-social-googleplus" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="ion-social-youtube-outline" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="ion-social-instagram-outline" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_footer bg_blue_dark2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="copyright m-md-0 text-center text-md-left">
                  © 2018 All Rights Reserved by KBPS School.
                </p>
              </div>
              <div className="col-md-6">
                <ul className="list_none footer_link text-center text-md-right">
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="#">Terms &amp; Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Link to="#" className="scrollup" style={{ display: "none" }}>
        <i className="ion-ios-arrow-up" />
      </Link>
    </>
  );
};

export default Footer;

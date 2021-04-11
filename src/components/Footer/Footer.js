import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer style={{backgroundImage:'url("assets/images/footer2.jpeg")',height:'10%',borderRadius: '20px',backgroundRepeat:'no-repeat',backgroundPosition: 'center',backgroundSize: 'cover'}} className="bg_blue_dark footer_dark">
        <div className="top_footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-8 mb-4 mb-lg-0">
                <div className="footer_logo signnn">
                  <Link to="index.html">
                  <p> <h1> <span class="fast-flicker">KBPS</span> SCHOOL </h1></p>
                  </Link>
                </div>
                <p style={{color:'black',fontWeight: 'bold'}}>
                  Phasellus blandit massa enim. elit id varius nunc. Lorem ipsum
                  dolor sit amet, consectetur industry.
                </p>
                <ul className="contact_info contact_info_light list_none">
                  <li >
                    <i style={{color:'black',fontWeight: 'bold'}} className="fa fa-map-marker-alt " />
                    <address style={{color:'black',fontWeight: 'bold'}}>Palam New Delhi</address>
                  </li>
                  <li>
                    <i style={{color:'black',fontWeight: 'bold'}} className="fa fa-envelope" />
                    <Link style={{color:'black',fontWeight: 'bold'}} to="mailto:info@sitename.com">codesparrows@gmail.com</Link>
                  </li>
                  <li>
                    <i style={{color:'black',fontWeight: 'bold'}} className="fa fa-mobile-alt" />
                    <p style={{color:'black',fontWeight: 'bold'}} >+91-9911228484</p>
                  </li>
                </ul>
              </div>
              <div  className="col-lg-2 col-sm-4 mb-4 mb-lg-0">
                <h6 style={{color:'black',fontWeight: 'bold'}} className="widget_title">Useful Links</h6>
                <ul className="list_none widget_links links_style2">
                  <li>
                    <Link style={{color:'black',fontWeight: 'bold'}} to="#">Join Us</Link>
                  </li>
                  <li>
                    <Link style={{color:'black',fontWeight: 'bold'}} to="#">About Us</Link>
                  </li>
                  <li>
                    <Link style={{color:'black',fontWeight: 'bold'}} to="#">Features</Link>
                  </li>
                  <li>
                    <Link style={{color:'black',fontWeight: 'bold'}} to="#">Feedback</Link>
                  </li>
                  <li>
                    <Link style={{color:'black',fontWeight: 'bold'}} to="#">Support center</Link>
                  </li>
                  <li>
                    <Link style={{color:'black',fontWeight: 'bold'}} to="#">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h6 style={{color:'black',fontWeight: 'bold'}} className="widget_title">Recent Posts</h6>
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
                          <Link style={{color:'black',fontWeight: 'bold'}} to="#">
                            Lorem ipsum dolor sit amet, consectetur
                          </Link>
                        </h6>
                        <span style={{color:'black',fontWeight: 'bold'}} className="post_date">April 14, 2018</span>
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
                          <Link style={{color:'black',fontWeight: 'bold'}} to="#">
                            Lorem ipsum dolor sit amet, consectetur
                          </Link>
                        </h6>
                        <span style={{color:'black',fontWeight: 'bold'}} className="post_date">April 14, 2018</span>
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
                          <Link style={{color:'black',fontWeight: 'bold'}} to="#">
                            Lorem ipsum dolor sit amet, consectetur
                          </Link>
                        </h6>
                        <span style={{color:'black',fontWeight: 'bold'}} className="post_date">April 14, 2018</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6">
                <h6 style={{color:'black',fontWeight: 'bold'}} className="widget_title">Subscribe Newsletter</h6>
                <p style={{color:'black',fontWeight: 'bold'}}>
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
                <h6 style={{color:'black',fontWeight: 'bold'}} className="widget_title">Follow Us</h6>
                <ul className="list_none social_icons social_white social_style1">
                  <li>
                    <Link style={{color:'black',fontWeight: 'bold'}} to="#">
                      <i className="ion-social-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link style={{color:'black',fontWeight: 'bold'}} to="#">
                      <i className="ion-social-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link style={{color:'black',fontWeight: 'bold'}} to="#">
                      <i className="ion-social-googleplus" />
                    </Link>
                  </li>
                  <li>
                    <Link style={{color:'black',fontWeight: 'bold'}} to="#">
                      <i className="ion-social-youtube-outline" />
                    </Link>
                  </li>
                  <li>
                    <Link style={{color:'black',fontWeight: 'bold'}} to="#">
                      <i className="ion-social-instagram-outline" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div style={{backgroundColor:'green',borderTopLeftRadius: '25px',borderTopRightRadius: '25px'}} className="bottom_footer bg_blue_dark2">
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

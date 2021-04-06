import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const Header = () => {
  return (
    <>
      <Helmet>
        <title>KBPS SCHOOL</title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          to="assets/images/favicon.png"
        />
      </Helmet>
      <div
        className="modal fade lr_popup"
        id="Login"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content border-0">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <div className="row no-gutters">
                <div className="col-lg-5">
                  <div
                    className="h-100 background_bg radius_ltlb_5"
                    data-img-src="assets/images/login_img.jpg"
                  />

                </div>
                <div className="col-lg-7">
                  <div className="padding_eight_all">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          id="login-tab1"
                          data-toggle="tab"
                          to="#login"
                          role="tab"
                          aria-controls="login"
                          aria-selected="true"
                        >
                          Login
                        </Link>
                      </li>
                      <li className="nav-item">
                        {/* <Link
                          className="nav-link"
                          id="signup-tab1"
                          data-toggle="tab"
                          to="#signup"
                          role="tab"
                          aria-controls="signup"
                          aria-selected="false"
                        >
                          Sign Up
                        </Link> */}
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="login"
                        role="tabpanel"
                      >
                        <div className="heading_s1 mb-3">
                          <h4>Login</h4>
                        </div>
                        <form method="post" className="login form_style2">
                          <div className="form-group">
                            <input
                              type="text"
                              required
                              className="form-control"
                              name="email"
                              placeholder="Email"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              className="form-control"
                              required
                              type="password"
                              name="password"
                              placeholder="Password"
                            />
                          </div>
                          <div className="login_footer form-group">
                            <Link to="#!">Lost your password?</Link>
                            <div className="chek-form mb-3">
                              <div className="custome-checkbox">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="checkbox"
                                  id="exampleCheckbox3"
                                  defaultValue
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="exampleCheckbox3"
                                >
                                  Remember me
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <button
                              type="submit"
                              className="btn btn-default btn-block rounded-0"
                              name="login"
                            >
                              Log in
                            </button>
                          </div>
                        </form>

                        <div className="different_login">
                          <span> or</span>
                        </div>
                        <ul className="btn-login list_none text-center">
                          <li>
                            <Link to="#!" className="btn btn-facebook rounded-0">
                              <i className="ion-social-facebook" />
                              Facebook
                            </Link>
                          </li>
                          <li>
                            <Link to="#!" className="btn btn-google rounded-0">
                              <i className="ion-social-googleplus" />
                              Google
                            </Link>
                          </li>
                        </ul>

                      </div>
                      {/* <div
                        className="tab-pane fade"
                        id="signup"
                        role="tabpanel"
                      >
                        <div className="heading_s1 mb-3">
                          <h4>Sign Up</h4>
                        </div> */}
                      {/* <form method="post" className="login form_style2">
                          <div className="form-group">
                            <input
                              type="text"
                              required
                              className="form-control"
                              name="username"
                              placeholder="Username"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              required
                              className="form-control"
                              name="email"
                              placeholder="Email"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              className="form-control"
                              required
                              type="password"
                              name="password"
                              placeholder="Password"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              className="form-control"
                              required
                              type="password"
                              name="cpassword"
                              placeholder="Confirm Password"
                            />
                          </div>
                          <div className="form-group">
                            <button
                              type="submit"
                              className="btn btn-default btn-block rounded-0"
                              name="login"
                            >
                              Sign Up
                            </button>
                          </div>
                        </form>
                         */}
                      {/* <div className="different_login">
                          <span> or</span>
                        </div> */}
                      {/* <ul className="btn-login list_none text-center">
                          <li>
                            <Link to="#!" className="btn btn-facebook rounded-0">
                              <i className="ion-social-facebook" />
                              Facebook
                            </Link>
                          </li>
                          <li>
                            <Link to="#!" className="btn btn-google rounded-0">
                              <i className="ion-social-googleplus" />
                              Google
                            </Link>
                          </li>
                        </ul> 
                      </div>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="header_wrap dark_skin">
        <div className="top-header bg_blue_dark2 light_skin">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <ul className="contact_detail list_none text-center text-md-left">
                  <li>
                    <Link to="#">
                      <i className="ti-mobile" />
                      +91-9911228484
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="ti-email" />
                      codesparrow@gmail.com
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <div className="col-md-6">
                <div className="d-flex flex-wrap align-items-center justify-content-md-end justify-content-center mt-2 mt-md-0">
                  <ul className="list_none social_icons social_white text-center text-md-right">
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
                  <ul className="list_none header_list border_list ml-1">
                    <li>
                      <Link to="#" data-toggle="modal" data-target="#Login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="btn btn-default btn-sm rounded-0">
                        Apply For Vacancy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
           */}
            </div>
          </div>
        </div>
        <div  className="container">
          <nav className="navbar navbar-expand-lg">
            <Link style={{ padding: '6px 0px 1px 0px', fontSize: '30px', textAlign: 'center' }} to="/" className="navbar-brand signnn">
              {/* <img
                className="logo_light"
                src="assets/images/logo_white.png"
                alt="logo"
              /> */}

              <p> <span class="fast-flicker">KBPS</span> SCHOOL</p>

              {/* <img
                className="logo_dark"
                src="assets/images/logo_dark.png"
                alt="logo"
              /> */}
              {/* <img
                className="logo_default"
                src="assets/images/logo_dark.png"
                alt="logo"
              /> */}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >

              <span className="ion-android-menu" />
            </button>
            <div style={{ textAlign: 'center' }}
              className="collapse navbar-collapse justify-content-end navbar-nav1"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav navbar-nav1">
                <li className="dropdown">
                  <NavLink activeClassName="active_class"
                    className="nav-link"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="dropdown ">
                  <NavLink to="/about" activeClassName="active_class" className="nav-link">
                    About
                  </NavLink>
                </li>
                <li className="dropdown">
                  <NavLink activeClassName="active_class" className="nav-link" to="/gallery">
                    Gallery
                  </NavLink>
                </li>
                <li className="dropdown">
                  <NavLink activeClassName="active_class" className="nav-link" to="/event">
                    News & Event
                  </NavLink>

                </li>
                <li className="dropdown">
                  <NavLink activeClassName="active_class" className="nav-link" to="/teacher">
                    Teacher
                  </NavLink>
                </li>
                <li className="dropdown">
                  <NavLink activeClassName="active_class" className="nav-link" to="/facility">
                    Facility & Infrastructure
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active_class" to="/contact" className="nav-link">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin" className="nav-link">
                    Admin
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

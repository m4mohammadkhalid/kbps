import React from 'react'
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

const Header = () => {
    return (
        <>
        <Helmet>
               <meta charSet="utf-8" />
               <title>KBPS SCHOOL</title>
               <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.png" />
               
      </Helmet>
  <div className="modal fade lr_popup" id="Login" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div className="modal-content border-0">
        <div className="modal-body">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          <div className="row no-gutters">
            <div className="col-lg-5">
              <div className="h-100 background_bg radius_ltlb_5" data-img-src="assets/images/login_img.jpg" />
            </div>
            <div className="col-lg-7">	
              <div className="padding_eight_all">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="login-tab1" data-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="true">Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="signup-tab1" data-toggle="tab" href="#signup" role="tab" aria-controls="signup" aria-selected="false">Sign Up</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="login" role="tabpanel">
                    <div className="heading_s1 mb-3">
                      <h4>Login</h4>
                    </div>
                    <form method="post" className="login form_style2">
                      <div className="form-group">
                        <input type="text" required className="form-control" name="email" placeholder="Email" />
                      </div>
                      <div className="form-group">
                        <input className="form-control" required type="password" name="password" placeholder="Password" />
                      </div>
                      <div className="login_footer form-group">
                        <a href="#!">Lost your password?</a>
                        <div className="chek-form mb-3">
                          <div className="custome-checkbox">
                            <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox3" defaultValue />
                            <label className="form-check-label" htmlFor="exampleCheckbox3">Remember me</label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-default btn-block rounded-0" name="login">Log in</button>
                      </div>
                    </form>
                    <div className="different_login">
                      <span> or</span>
                    </div>
                    <ul className="btn-login list_none text-center">
                      <li><a href="#!" className="btn btn-facebook rounded-0"><i className="ion-social-facebook" />Facebook</a></li>
                      <li><a href="#!" className="btn btn-google rounded-0"><i className="ion-social-googleplus" />Google</a></li>
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="signup" role="tabpanel">
                    <div className="heading_s1 mb-3">
                      <h4>Sign Up</h4>
                    </div>
                    <form method="post" className="login form_style2">
                      <div className="form-group">
                        <input type="text" required className="form-control" name="username" placeholder="Username" />
                      </div>
                      <div className="form-group">
                        <input type="text" required className="form-control" name="email" placeholder="Email" />
                      </div>
                      <div className="form-group">
                        <input className="form-control" required type="password" name="password" placeholder="Password" />
                      </div>
                      <div className="form-group">
                        <input className="form-control" required type="password" name="cpassword" placeholder="Confirm Password" />
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-default btn-block rounded-0" name="login">Sign Up</button>
                      </div>
                    </form>
                    <div className="different_login">
                      <span> or</span>
                    </div>
                    <ul className="btn-login list_none text-center">
                      <li><a href="#!" className="btn btn-facebook rounded-0"><i className="ion-social-facebook" />Facebook</a></li>
                      <li><a href="#!" className="btn btn-google rounded-0"><i className="ion-social-googleplus" />Google</a></li>
                    </ul>
                  </div>
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
              <li><Link to="#"><i className="ti-mobile" />123-456-7890</Link></li>
              <li><Link to="#"><i className="ti-email" />info@yourmail.com</Link></li>
            </ul>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-wrap align-items-center justify-content-md-end justify-content-center mt-2 mt-md-0">
              <ul className="list_none social_icons social_white text-center text-md-right">
                <li><Link to="#"><i className="ion-social-facebook" /></Link></li>
                <li><Link to="#"><i className="ion-social-twitter" /></Link></li>
                <li><Link to="#"><i className="ion-social-googleplus" /></Link></li>
                <li><Link to="#"><i className="ion-social-youtube-outline" /></Link></li>
                <li><Link to="#"><i className="ion-social-instagram-outline" /></Link></li>
              </ul>
              <ul className="list_none header_list border_list ml-1">
                <li><Link to="#" data-toggle="modal" data-target="#Login">Login</Link></li>
                <li><Link to="#" className="btn btn-default btn-sm rounded-0">Apply Now</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <nav className="navbar navbar-expand-lg"> 
      <Link to="#" className="navbar-brand">
          <img className="logo_light" src="assets/images/logo_white.png" alt="logo" />
          <img className="logo_dark" src="assets/images/logo_dark.png" alt="logo" />
          <img className="logo_default" src="assets/images/logo_dark.png" alt="logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="ion-android-menu" /> </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="dropdown">
              <Link className="nav-link active" to="/" data-toggle="dropdown">Home</Link>
            </li>
            <li className="dropdown">
            <Link to="/about" className="nav-link"  data-toggle="dropdown">About</Link>
            </li>
            <li className="dropdown">
              <Link className="nav-link" to="#" data-toggle="dropdown">Course</Link>
              <div className="dropdown-menu">
                <ul> 
                  <li><Link className="dropdown-item nav-link nav_item" to="courses.html">Courses</Link></li> 
                  <li><Link className="dropdown-item nav-link nav_item" to="course-detail.html">Course Detail</Link></li>
                </ul>
              </div>
            </li>
            <li className="dropdown">
              <Link className="nav-link" to="#" data-toggle="dropdown">Event</Link>
              <div className="dropdown-menu">
                <ul> 
                  <li><Link className="dropdown-item nav-link nav_item" to="event.html">Event</Link></li> 
                  <li><Link className="dropdown-item nav-link nav_item" to="event-detail.html">Event Detail</Link></li>
                </ul>
              </div>
            </li>
            <li className="dropdown">
              <Link className="nav-link" to="#" data-toggle="dropdown">Teacher</Link>
              <div className="dropdown-menu">
                <ul> 
                  <li><Link className="dropdown-item nav-link nav_item" to="teacher.html">Teacher</Link></li> 
                  <li><Link className="dropdown-item nav-link nav_item" to="teacher-detail.html">Teacher Detail</Link></li>
                </ul>
              </div>
            </li>
            <li className="dropdown">
              <Link className="nav-link" to="#" data-toggle="dropdown">Blog</Link>
              <div className="dropdown-menu">
                <ul> 
                  <li><Link className="dropdown-item nav-link nav_item" to="blog.html">Blog</Link></li> 
                  <li><Link className="dropdown-item nav-link nav_item" to="blog-detail.html">Blog Detail</Link></li>
                </ul>
              </div>
            </li>
            <li>
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        
      </nav>
    </div>
  </header>
</>

    )
}

export default Header

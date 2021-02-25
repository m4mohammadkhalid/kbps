import React from 'react'
import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <>
      <Helmet>
          <title>KBPS SCHOOL</title>
      </Helmet>
      <header className="header_wrap dark_skin">
        <div className="top-header bg_blue_dark2 light_skin">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <ul className="contact_detail list_none text-center text-md-left">
                  <li><a href="/#"><i className="ti-mobile" />+91 9102603030</a></li>
                  <li><a href="/#"><i className="ti-email" />codesparrows@gmail.com</a></li>
                </ul>
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-wrap align-items-center justify-content-md-end justify-content-center mt-2 mt-md-0">
                  <ul className="list_none social_icons social_white text-center text-md-right">
                    <li><a href="/#"><i className="ion-social-facebook" /></a></li>
                    <li><a href="/#"><i className="ion-social-twitter" /></a></li>
                    <li><a href="/#"><i className="ion-social-googleplus" /></a></li>
                    <li><a href="/#"><i className="ion-social-youtube-outline" /></a></li>
                    <li><a href="/#"><i className="ion-social-instagram-outline" /></a></li>
                  </ul>
                  <ul className="list_none header_list border_list ml-1">
                    <li><a href="/#" data-toggle="modal" data-target="#Login">Login</a></li>
                    <li><a href="/#" className="btn btn-default btn-sm rounded-0">Apply Now</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">
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
                  <a className=" nav-link" href="/#" data-toggle="dropdown">About</a>
                </li>
                <li className="dropdown">
                  <a className=" nav-link" href="/#" data-toggle="dropdown">CourseS</a>
                </li>
                <li className="dropdown">
                  <a className=" nav-link" href="/#" data-toggle="dropdown">Event</a>
                  <div className="dropdown-menu">
                    <ul>
                      <li><a className="dropdown-item nav-link nav_item" href="event.html">Event</a></li>
                      <li><a className="dropdown-item nav-link nav_item" href="event-detail.html">Event
                    Detail</a></li>
                    </ul>
                  </div>
                </li>
                <li className="dropdown">
                  <a className=" nav-link" href="/#" data-toggle="dropdown">Teacher</a>
                  <div className="dropdown-menu">
                    <ul>
                      <li><a className="dropdown-item nav-link nav_item" href="teacher.html">Teacher</a></li>
                      <li><a className="dropdown-item nav-link nav_item" href="teacher-detail.html">Teacher
                    Detail</a></li>
                    </ul>
                  </div>
                </li>
                <li className="dropdown">
                  <a className=" nav-link" href="/#" data-toggle="dropdown">Blog</a>
                  <div className="dropdown-menu">
                    <ul>
                      <li><a className="dropdown-item nav-link nav_item" href="blog.html">Blog</a></li>
                      <li><a className="dropdown-item nav-link nav_item" href="blog-detail.html">Blog
                    Detail</a></li>
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

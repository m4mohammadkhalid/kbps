import React from 'react'
import { Link } from "react-router-dom";

const About = () => {
    return (
        <>
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
                    <Link className="nav-link active" id="login-tab1" data-toggle="tab" to="#login" role="tab" aria-controls="login" aria-selected="true">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" id="signup-tab1" data-toggle="tab" to="#signup" role="tab" aria-controls="signup" aria-selected="false">Sign Up</Link>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="login" role="tabpanel">
                    <div className="heading_s1 mb-3">
                      <h4>Login</h4>
                    </div>
                    <form method="post" className="login">
                      <div className="form-group">
                        <input type="text" required className="form-control" name="email" placeholder="Email" />
                      </div>
                      <div className="form-group">
                        <input className="form-control" required type="password" name="password" placeholder="Password" />
                      </div>
                      <div className="login_footer form-group">
                        <Link to="#">Lost your password?</Link>
                        <div className="chek-form mb-3">
                          <div className="custome-checkbox">
                            <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox3" defaultValue />
                            <label className="form-check-label" htmlFor="exampleCheckbox3">Remember me</label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-default btn-block" name="login">Log in</button>
                      </div>
                    </form>
                    <div className="different_login">
                      <span> or</span>
                    </div>
                    <ul className="btn-login list_none text-center">
                      <li><Link to="#" className="btn btn-facebook"><i className="ion-social-facebook" />Facebook</Link></li>
                      <li><Link to="#" className="btn btn-google"><i className="ion-social-googleplus" />Google</Link></li>
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="signup" role="tabpanel">
                    <div className="heading_s1 mb-3">
                      <h4>Sign Up</h4>
                    </div>
                    <form method="post" className="login">
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
                        <button type="submit" className="btn btn-default btn-block" name="login">Sign Up</button>
                      </div>
                    </form>
                    <div className="different_login">
                      <span> or</span>
                    </div>
                    <ul className="btn-login list_none text-center">
                      <li><Link to="#" className="btn btn-facebook"><i className="ion-social-facebook" />Facebook</Link></li>
                      <li><Link to="#" className="btn btn-google"><i className="ion-social-googleplus" />Google</Link></li>
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
  {/* START SECTION BREADCRUMB */}
  <section className="page-title-light breadcrumb_section parallax_bg overlay_bg_50" data-parallax-bg-image="assets/images/about_bg.jpg">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-sm-6">
          <div className="page-title">
            <h1>About Us</h1>
          </div>
        </div>
        <div className="col-sm-6">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-sm-end">
              <li className="breadcrumb-item"><Link to="#">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">About Us</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
  {/* END SECTION BANNER */}
  {/* START SECTION FEATURE */}
  <section className="bg_gray">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
            <div className="heading_s1 text-center">
              <h2>Why Choose Eduglobal</h2>
            </div>
            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="icon_box text-center bg-white icon_box_style2 box_shadow2 radius_all_10 animation" data-animation="fadeInUp" data-animation-delay="0.2s">
            <div className="box_icon bg_danger mb-3">
              <img src="assets/images/book.png" alt="book" />
            </div>
            <div className="intro_desc">
              <h5>Books &amp; Library</h5>
              <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="icon_box text-center bg-white icon_box_style2 box_shadow2 radius_all_10 animation" data-animation="fadeInUp" data-animation-delay="0.03s">
            <div className="box_icon bg_default mb-3">
              <img src="assets/images/globe.png" alt="globe" />
            </div>
            <div className="intro_desc">
              <h5>Learn Courses Online</h5>
              <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="icon_box text-center bg-white icon_box_style2 box_shadow2 radius_all_10 animation" data-animation="fadeInUp" data-animation-delay="0.04s">
            <div className="box_icon bg_light_green mb-3">
              <img src="assets/images/instructors.png" alt="instructors" />
            </div>
            <div className="intro_desc">
              <h5>Expert Instructors</h5>
              <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> 
  {/* END SECTION FEATURE */}
  {/* START SECTION ABOUT */}
  <section className="overflow-hidden res_md_p_0">
    <div className="container-fluid p-0">
      <div className="row no-gutters align-items-center">
        <div className="col-md-6">
          <div className="box_shadow1 bg-white overlap_section padding_eight_all">
            <div className="animation" data-animation="fadeInLeft" data-animation-delay="0.02s">
              <div className="heading_s1"> 
                <h2>About Us</h2>
              </div>
              <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
              <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
              <ul className="list_none list_item">
                <li>
                  <div className="counter_content">
                    <h3 className="h1 text_danger"><span className="counter">260</span></h3>
                    <h6>Free Courses</h6>
                  </div>
                </li>
                <li>
                  <div className="counter_content">
                    <h3 className="h1 text_light_green"><span className="counter">152</span></h3>
                    <h6>Paid Courses</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="animation" data-animation="fadeInRight" data-animation-delay="0.03s">
            <div className="overlay_bg_30 about_img z_index_minus1">	
              <img className="w-100" src="assets/images/about_img.jpg" alt="about_img" />
            </div>
            <Link to="https://www.youtube.com/watch?v=7e90gBu4pas" className="video_popup video_play">
              <span className="ripple"><i className="ion-play ml-1" /></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END SECTION ABOUT */}
  {/* START SECTION TEACHER */}
  <section className="parallax_bg overlay_bg_blue_90" data-parallax-bg-image="assets/images/teacher_bg.jpg">
    <div className="container">	
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8">
          <div className="text-center text_white animation" data-animation="fadeInUp" data-animation-delay="0.01s">
            <div className="heading_s1 heading_light text-center">
              <h2>Our Teachers</h2>
            </div>
            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="team_box team_style1 box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
            <div className="team_img">
              <img src="assets/images/team_img1.jpg" alt="team1" />
              <ul className="list_none social_icons social_white">
                <li><Link to="#"><i className="ion-social-facebook" /></Link></li>
                <li><Link to="#"><i className="ion-social-twitter" /></Link></li>
                <li><Link to="#"><i className="ion-social-googleplus" /></Link></li>
                <li><Link to="#"><i className="ion-social-instagram-outline" /></Link></li>
              </ul>
            </div>
            <div className="team_title radius_lbrb_10 text-center">
              <h5><Link to="#">Aden Smith</Link></h5>
              <span>Head Of Department</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="team_box team_style1 box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.03s">
            <div className="team_img">
              <img src="assets/images/team_img2.jpg" alt="team2" />
              <ul className="list_none social_icons social_white">
                <li><Link to="#"><i className="ion-social-facebook" /></Link></li>
                <li><Link to="#"><i className="ion-social-twitter" /></Link></li>
                <li><Link to="#"><i className="ion-social-googleplus" /></Link></li>
                <li><Link to="#"><i className="ion-social-instagram-outline" /></Link></li>
              </ul>
            </div>
            <div className="team_title radius_lbrb_10 text-center">
              <h5><Link to="#">Kally Brooks</Link></h5>
              <span>Professor</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="team_box team_style1 box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.04s">
            <div className="team_img">
              <img src="assets/images/team_img3.jpg" alt="team3" />
              <ul className="list_none social_icons social_white">
                <li><Link to="#"><i className="ion-social-facebook" /></Link></li>
                <li><Link to="#"><i className="ion-social-twitter" /></Link></li>
                <li><Link to="#"><i className="ion-social-googleplus" /></Link></li>
                <li><Link to="#"><i className="ion-social-instagram-outline" /></Link></li>
              </ul>
            </div>
            <div className="team_title radius_lbrb_10 text-center">
              <h5><Link to="#">David clark</Link></h5>
              <span>Chemistry Teacher</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="team_box team_style1 box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.05s">
            <div className="team_img">
              <img src="assets/images/team_img4.jpg" alt="team4" />
              <ul className="list_none social_icons social_white">
                <li><Link to="#"><i className="ion-social-facebook" /></Link></li>
                <li><Link to="#"><i className="ion-social-twitter" /></Link></li>
                <li><Link to="#"><i className="ion-social-googleplus" /></Link></li>
                <li><Link to="#"><i className="ion-social-instagram-outline" /></Link></li>
              </ul>
            </div>
            <div className="team_title radius_lbrb_10 text-center">
              <h5><Link to="#">Rebeka Alig</Link></h5>
              <span>English Teacher</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END SECTION TEACHER */}
  {/* START SECTION COUNTER */}
  <section className="bg_gray">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-6 ">
          <div className="box_counter counter_style1 text-center animation" data-animation="fadeInUp" data-animation-delay="0.02s">
            <div className="counter_icon">
              <img src="assets/images/counter_icon_dark1.png" alt="counter_icon1" />
            </div>
            <div className="counter_content">
              <h3 className="counter_text"><span className="counter">1800</span>+</h3>
              <p>Students</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-6 ">
          <div className="box_counter counter_style1 text-center animation" data-animation="fadeInUp" data-animation-delay="0.03s">
            <div className="counter_icon">
              <img src="assets/images/counter_icon_dark2.png" alt="counter_icon2" />
            </div>
            <div className="counter_content">
              <h3 className="counter_text"><span className="counter">70</span></h3>
              <p>Courses</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-6 ">
          <div className="box_counter counter_style1 text-center animation" data-animation="fadeInUp" data-animation-delay="0.04s">
            <div className="counter_icon">
              <img src="assets/images/counter_icon_dark3.png" alt="counter_icon3" />
            </div>
            <div className="counter_content">
              <h3 className="counter_text"><span className="counter">700</span>+</h3>
              <p>Certified teachers</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-6 ">
          <div className="box_counter counter_style1 text-center animation" data-animation="fadeInUp" data-animation-delay="0.05s">
            <div className="counter_icon">
              <img src="assets/images/counter_icon_dark4.png" alt="counter_icon4" />
            </div>
            <div className="counter_content">
              <h3 className="counter_text"><span className="counter">1200</span>+</h3>
              <p>Award Winning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END SECTION COUNTER */}
  {/* START SECTION TESTIMONIAL */}
  <section>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
            <div className="heading_s1 text-center">
              <h2>Student Say!</h2>
            </div>
            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
            <div className="small_divider" />
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
          <div className="testimonial_slider testimonial_style1 carousel_slider owl-carousel owl-theme" data-margin={30} data-loop="true" data-autoplay="true" data-dots="false" data-responsive="{&quot;0&quot;:{&quot;items&quot;: &quot;1&quot;}, &quot;576&quot;:{&quot;items&quot;: &quot;2&quot;}, &quot;1199&quot;:{&quot;items&quot;: &quot;2&quot;}}">
            <div className="testimonial_box">
              <div className="testimonial_img">
                <img className="radius_all_5" src="assets/images/client_img1.jpg" alt="client" />
              </div>
              <div className="testi_meta">
                <div className="testi_user">
                  <h6>Lissa Castro</h6>
                  <span className="text_default">Co-Founder</span>
                </div>
                <div className="testi_desc">
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, quaeillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
              </div>
            </div>
            <div className="testimonial_box">
              <div className="testimonial_img">
                <img className="radius_all_5" src="assets/images/client_img2.jpg" alt="client" />
              </div>
              <div className="testi_meta">
                <div className="testi_user">
                  <h6>Lissa Castro</h6>
                  <span className="text_default">Co-Founder</span>
                </div>
                <div className="testi_desc">
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, quaeillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
              </div>
            </div>
            <div className="testimonial_box">
              <div className="testimonial_img">
                <img className="radius_all_5" src="assets/images/client_img3.jpg" alt="client" />
              </div>
              <div className="testi_meta">
                <div className="testi_user">
                  <h6>Lissa Castro</h6>
                  <span className="text_default">Co-Founder</span>
                </div>
                <div className="testi_desc">
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, quaeillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END SECTION TESTIMONIAL */}
  {/* END SECTION CALL TO ACTION */}
  <section className="bg_default small_pt small_pb">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-8">
          <div className="text_white cta_section">
            <div className="medium_divider d-block d-md-none" />
            <div className="heading_s1 heading_light">
              <h2>Get The Coaching Training Today!</h2>
            </div>
            <p>If you are going to use a passage of embarrassing hidden in the middle of text</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-md-right">
            <Link to="#" className="btn btn-outline-white">Get Started</Link>
          </div>
          <div className="medium_divider d-block d-md-none" />
        </div>
      </div>
    </div>
  </section>
</>

    )
}

export default About

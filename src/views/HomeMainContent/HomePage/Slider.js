import React from 'react'
import Marquee from 'react-double-marquee';
import { Link } from "react-router-dom";

const Slider = () => {
    return (
        <>
                           
        


<div className="news_ticker bg-warning">
	<div className="container" style={{
        width: '100%',
        whiteSpace: 'nowrap',
      }}>
    <Marquee behavior="scroll" direction="left" onMouseOver="this.stop();" onMouseOut="this.start();">
        <Link to="/">Universities the winners if Labor assumes government</Link> ||
        <Link to="/">Overseas students are driving rapid population growth</Link> || 
        <Link to="/">Admission for Ph.D. Programme 2019-20</Link> || 
        <Link to="/">Application form for Provisional Registration for Ph.D</Link> || 
        <Link to="/">Graduates need second degree to become a high earner</Link> ||
        <Link to="/">Eduglobal Portal for students seeking Education Loan</Link> || 
        <Link to="/">Creating inclusive curricula in higher education</Link>
    </Marquee>
    </div>
</div>


<section className="banner_section p-0 full_screen">
  <div id="carouselExampleControls" className="banner_content_wrap carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active background_bg overlay_bg_50" data-img-src="/assets/images/banner7.jpg">
        <div className="banner_slide_content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-sm-12 text-center">
                <div className="banner_content animation text_white" data-animation="fadeIn" data-animation-delay="0.8s">
                  <h2 className="font-weight-bold animation text-uppercase" data-animation="zoomIn" data-animation-delay="1s">Welcome To <span className="text_default">eduglobal</span> University</h2>
                  <p className="animation" data-animation="zoomIn" data-animation-delay="1.5s">Lorem is simply text of the printing and typesetting industry.</p>
                  <Link className="btn btn-default animation rounded-0" to="#" data-animation="zoomIn" data-animation-delay="1.8s">Get Started</Link>
                  <Link className="btn btn-outline-white animation rounded-0" to="#" data-animation="zoomIn" data-animation-delay="1.8s">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item background_bg overlay_bg_50" data-img-src="/assets/images/banner8.jpg">
        <div className="banner_slide_content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-sm-12 text-center">
                <div className="banner_content animation text_white" data-animation="fadeIn" data-animation-delay="0.8s">
                  <h2 className="font-weight-bold animation text-uppercase" data-animation="zoomIn" data-animation-delay="1s">find your perfect <span className="text_default">University</span></h2>
                  <p className="animation" data-animation="zoomIn" data-animation-delay="1.5s">Contrary to popular belief, Lorem Ipsum is not simply random</p>
                  <Link className="btn btn-default animation rounded-0" to="#" data-animation="zoomIn" data-animation-delay="1.8s">Get Started</Link>
                  <Link className="btn btn-outline-white animation rounded-0" to="#" data-animation="zoomIn" data-animation-delay="1.8s">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item background_bg overlay_bg_50" data-img-src="/assets/images/banner9.jpg">
        <div className="banner_slide_content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-sm-12 text-left">
                <div className="banner_content animation text_white" data-animation="fadeInLeft" data-animation-delay="0.8s">
                  <h2 className="font-weight-bold animation text-uppercase" data-animation="fadeInLeft" data-animation-delay="1s"><span className="text_default">Eduction</span> from a new angle</h2>
                  <p className="animation" data-animation="fadeInLeft" data-animation-delay="1.5s">Contrary to popular belief, Lorem Ipsum is not simply random</p>
                  <Link className="btn btn-default animation rounded-0" to="#" data-animation="fadeInLeft" data-animation-delay="1.8s">Get Started</Link>
                  <Link className="btn btn-outline-white animation rounded-0" to="#" data-animation="fadeInLeft" data-animation-delay="1.8s">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item background_bg overlay_bg_50" data-img-src="/assets/images/banner10.jpg">
        <div className="banner_slide_content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-sm-12 text-right">
                <div className="banner_content animation text_white" data-animation="fadeInRight" data-animation-delay="0.8s">
                  <h2 className="font-weight-bold animation text-uppercase" data-animation="fadeInRight" data-animation-delay="1s">best <span className="text_default"> online training</span> course</h2>
                  <p className="animation" data-animation="fadeInRight" data-animation-delay="1.5s">Contrary to popular belief, Lorem Ipsum is not simply random</p>
                  <Link className="btn btn-default animation rounded-0" to="#" data-animation="fadeInRight" data-animation-delay="1.8s">Get Started</Link>
                  <Link className="btn btn-outline-white animation rounded-0" to="#" data-animation="fadeInRight" data-animation-delay="1.8s">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-nav">
      <Link className="carousel-control-prev" to="#carouselExampleControls" role="button" data-slide="prev">
        <i className="ion-chevron-left" />
      </Link>
      <Link className="carousel-control-next" to="#carouselExampleControls" role="button" data-slide="next">
        <i className="ion-chevron-right" />
      </Link>
    </div>
  </div>
</section>
<section className="p-0 overlap_box">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="cat_overlap_box course_categories carousel_slider owl-carousel owl-theme nav_style1" data-margin={15} data-nav="true" data-dots="false" data-loop="true" data-autoplay="true" data-responsive="{&quot;0&quot;:{&quot;items&quot;: &quot;1&quot;}, &quot;380&quot;:{&quot;items&quot;: &quot;2&quot;}, &quot;576&quot;:{&quot;items&quot;: &quot;3&quot;}, &quot;1000&quot;:{&quot;items&quot;: &quot;4&quot;}, &quot;1199&quot;:{&quot;items&quot;: &quot;5&quot;}}">
          <div className="item">
            <div className="single_categories">
              <Link to="#" className="bg_danger">
                <i className="fa fa-globe" />
                Scholarship
              </Link>
            </div>
          </div>
          <div className="item">
            <div className="single_categories">
              <Link to="#" className="bg_light_green">
                <i className="fa fa-chart-line" />
                2500+ Courses
              </Link>
            </div>
          </div>
          <div className="item">
            <div className="single_categories">
              <Link to="#" className="bg_default">
                <i className="fa fa-book" />
                Admission
              </Link>
            </div>
          </div>
          <div className="item">
            <div className="single_categories">
              <Link to="#" className="bg_pink">
                <i className="fa fa-camera" />
                Global exposure
              </Link>
            </div>
          </div>
          <div className="item">
            <div className="single_categories">
              <Link to="#" className="bg_blue">
                <i className="fa fa-heartbeat" />
                academics
              </Link>
            </div>
          </div>
          <div className="item">
            <div className="single_categories">
              <Link to="#" className="bg_orange">
                <i className="fa fa-code" />
                Campus life
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
    )
}

export default Slider

import React from 'react'
import {Helmet} from "react-helmet";
import './App.css'
import WhyChoseUs from './components/HomePage/WhyChoseUs'
const Home = () => {
    return (

        <>
            <Helmet>
                <script src='https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/js/swiper.min.js'></script><script  src="assets/js/scriptt.js"></script>
            </Helmet>
            {/* <div className="news_ticker bg-warning">
                <div className="container">
                    <marquee behavior="scroll" direction="left" onMouseOver="this.stop();" onMouseOut="this.start();" >
                        <a href="!#" target="_blank">Universities the winners if Labor assumes government</a> ||
                        <a href="!#" target="_blank">Overseas students are driving rapid population growth</a> ||
                        <a href="!#" target="_blank">Admission for Ph.D. Programme 2019-20</a> ||
                        <a href="!#" target="_blank">Application form for Provisional Registration for Ph.D</a> ||
                        <a href="!#" target="_blank">Graduates need second degree to become a high earner</a> ||
                        <a href="!#" target="_blank">Eduglobal Portal for students seeking Education Loan</a> ||
                        <a href="!#" target="_blank">Creating inclusive curricula in higher education</a>
                    </marquee>
                </div>
            </div> */}
            {/* START SECTION BANNER */}
            <section className="banner_section p-0 full_screen">
                <div className="swiper-container main-slider loading">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <figure className="slide-bgimg" style={{ backgroundImage: 'url(assets/images/course_img1.jpg)' }}>
                                <img  src="assets/images/about_img.jpg" alt="khalid" className="entity-img" />
                            </figure>
                            <div className="content">
                                <p className="title">Shaun Matthews</p>
                                <span className="caption">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <figure className="slide-bgimg" style={{ backgroundImage: 'url(assets/images/course_img1.jpg)' }}>
                                <img alt="khalid" src="../public/assets/images/course_img1.jpg" className="entity-img" />
                            </figure>
                            <div className="content">
                                <p className="title">Alexis Berry</p>
                                <span className="caption">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <figure className="slide-bgimg" style={{ backgroundImage: 'url(https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLRml1b3B6eXVqQ2s)' }}>
                                <img alt="khalid" src="https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLRml1b3B6eXVqQ2s" className="entity-img" />
                            </figure>
                            <div className="content">
                                <p className="title">Billie	Pierce</p>
                                <span className="caption">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <figure className="slide-bgimg" style={{ backgroundImage: 'url(https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLVUpEems2ZXpHYVk)' }}>
                                <img alt="khalid" src="https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLVUpEems2ZXpHYVk" className="entity-img" />
                            </figure>
                            <div className="content">
                                <p className="title">Trevor	Copeland</p>
                                <span className="caption">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <figure className="slide-bgimg" style={{ backgroundImage: 'url(https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLNXBIcEdOUFVIWmM)' }}>
                                <img alt="khalid" src="https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLNXBIcEdOUFVIWmM" className="entity-img" />
                            </figure>
                            <div className="content">
                                <p className="title">Bernadette	Newman</p>
                                <span className="caption">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                            </div>
                        </div>
                    </div>
                    {/* If we need navigation buttons */}
                    <div className="swiper-button-prev swiper-button-white" />
                    <div className="swiper-button-next swiper-button-white" />
                </div>
                <div className="swiper-container nav-slider loading">
                    <div className="swiper-wrapper" role="navigation">
                        <div className="swiper-slide">
                            <figure className="slide-bgimg" style={{ backgroundImage: 'url(https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLbVhsNzdIYmlfN1E)' }}>
                                <img alt="khalid" src="https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLbVhsNzdIYmlfN1E" className="entity-img" />
                            </figure>
                            <div className="content">
                                <p className="title">Shaun Matthews</p>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <figure className="slide-bgimg" style={{ backgroundImage: 'url(https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLWTdaX3J5b1VueDg)' }}>
                                <img alt="khalid" src="https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLWTdaX3J5b1VueDg" className="entity-img" />
                            </figure>
                            <div className="content">
                                <p className="title">Alexis Berry</p>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <figure className="slide-bgimg" style={{ backgroundImage: 'url(https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLRml1b3B6eXVqQ2s)' }}>
                                <img alt="khalid" src="https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLRml1b3B6eXVqQ2s" className="entity-img" />
                            </figure>
                            <div className="content">
                                <p className="title">Billie	Pierce</p>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <figure className="slide-bgimg" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg)' }}>
                                <img alt="khalid" src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg" className="entity-img" />
                            </figure>
                            <div className="content">
                                <p className="title">Trevor	Copeland</p>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <figure className="slide-bgimg" style={{ backgroundImage: 'url(https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLNXBIcEdOUFVIWmM)' }}>
                                <img alt="khalid" src="https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLNXBIcEdOUFVIWmM" className="entity-img" />
                            </figure>
                            <div className="content">
                                <p className="title">Bernadette	Newman</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* END SECTION BANNER */}
            <section className="p-0 overlap_box">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cat_overlap_box course_categories carousel_slider owl-carousel owl-theme nav_style1" data-margin={15} data-nav="true" data-dots="false" data-loop="true" data-autoplay="true" data-responsive="{&quot;0&quot;:{&quot;items&quot;: &quot;1&quot;}, &quot;380&quot;:{&quot;items&quot;: &quot;2&quot;}, &quot;576&quot;:{&quot;items&quot;: &quot;3&quot;}, &quot;1000&quot;:{&quot;items&quot;: &quot;4&quot;}, &quot;1199&quot;:{&quot;items&quot;: &quot;5&quot;}}">
                                <div className="item">
                                    <div className="single_categories">
                                        <a href="!#" className="bg_danger">
                                            <i className="fa fa-globe" />
                        Scholarship
                      </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="single_categories">
                                        <a href="!#" className="bg_light_green">
                                            <i className="fa fa-chart-line" />
                        2500+ Courses
                      </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="single_categories">
                                        <a href="!#" className="bg_default">
                                            <i className="fa fa-book" />
                        Admission
                      </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="single_categories">
                                        <a href="!#" className="bg_pink">
                                            <i className="fa fa-camera" />
                        Global exposure
                      </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="single_categories">
                                        <a href="!#" className="bg_blue">
                                            <i className="fa fa-heartbeat" />
                        academics
                      </a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="single_categories">
                                        <a href="!#" className="bg_orange">
                                            <i className="fa fa-code" />
                        Campus life
                      </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* START SECTION FEATURE */}
   
            <WhyChoseUs />


            {/* END SECTION FEATURE */}
            {/* START SECTION ABOUT */}
            <section className="overflow-hidden small_pt small_pb">
                <div className="container-fluid p-0">
                    <div className="row no-gutters ">
                        <div className="col-lg-6">
                            <div className="bg_gray h-100 d-flex align-items-center padding_eight_all">
                                <div className="animation" data-animation="fadeInLeft" data-animation-delay="0.02s">
                                    <div className="heading_s1">
                                        <h2>About Us</h2>
                                    </div>
                                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
                                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
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
                        <div className="col-lg-6 animation" data-animation="fadeInRight" data-animation-delay="0.03s">
                            <div className="overlay_bg_30 about_img z_index_minus1 h-100 background_bg md-height-300" data-img-src="assets/images/about_img.jpg" />
                            <a href="https://www.youtube.com/watch?v=7e90gBu4pas" className="video_popup video_play">
                                <span className="ripple"><i className="ion-play ml-1" /></span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* END SECTION ABOUT */}
            {/* START SECTION FACULTY */}
            <section className="small_pt">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                                <div className="heading_s1 text-center">
                                    <h2>Our Faculty</h2>
                                </div>
                                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="overlay_bg_danger_90 icon_box text-center text_white background_bg animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                                <div className="intro_desc">
                                    <h5>Faculty of Pharmacy</h5>
                                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="overlay_bg_light_green_90 icon_box text-center text_white background_bg animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                <div className="intro_desc">
                                    <h5>Faculty of Computer Science</h5>
                                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="overlay_bg_default_90 icon_box text-center text_white background_bg animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                <div className="intro_desc">
                                    <h5>Faculty of Design</h5>
                                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                                <div className="medium_divider" />
                                <a href="!#" className="btn btn-default rounded-0">View All Faculty <i className="ion-ios-arrow-thin-right ml-1" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* END SECTION FACULTY */}
            {/* START SECTION VIDEO */}
            <section className="parallax_bg overlay_bg_blue_70" data-parallax-bg-image="assets/images/banner5.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
                                <a href="https://www.youtube.com/watch?v=7e90gBu4pas" className="video_popup">
                                    <span className="ripple"><i className="ion-play ml-1" /></span>
                                </a>
                                <div className="mt-md-5 mt-4 text_white animation" data-animation="fadeInUp" data-animation-delay="0.02s">
                                    <h2>Video Tutorial For Our Campus</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* END SECTION VIDEO */}
            {/* START SECTION COURSES */}
            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
                                <div className="heading_s1 text-center">
                                    <h2>Popular Courses</h2>
                                </div>
                                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="content_box box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
                                <div className="content_img">
                                    <a href="!#"><img src="assets/images/course_img1.jpg" alt="course_img1" /></a>
                                </div>
                                <div className="content_desc">
                                    <h4 className="content_title"><a href="!#">Nullam id varius nunc id varius nunc</a></h4>
                                    <p>If you are going to use a passage of Lorem Ipsum you need to be sure anything embarrassing hidden in the middle of text.</p>
                                    <div className="courses_info">
                                        <div className="rating_stars">
                                            <i className="ion-android-star" />
                                            <i className="ion-android-star" />
                                            <i className="ion-android-star" />
                                            <i className="ion-android-star" />
                                            <i className="ion-android-star-half" />
                                        </div>
                                        <ul className="list_none content_meta">
                                            <li><a href="!#"><i className="ti-user" />31</a></li>
                                            <li><a href="!#"><i className="ti-heart" />10</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="content_footer">
                                    <div className="teacher">
                                        <a href="!#"><img src="assets/images/user1.jpg" alt="user1" /><span>Alia Noor</span></a>
                                    </div>
                                    <div className="price">
                                        <span className="alert alert-success">Free</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="content_box box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.03s">
                                <div className="content_img">
                                    <a href="!#"><img src="assets/images/course_img2.jpg" alt="course_img2" /></a>
                                </div>
                                <div className="content_desc">
                                    <h4 className="content_title"><a href="!#">Nullam id varius nunc id varius nunc</a></h4>
                                    <p>If you are going to use a passage of Lorem Ipsum you need to be sure anything embarrassing hidden in the middle of text.</p>
                                    <div className="courses_info">
                                        <div className="rating_stars">
                                            <i className="ion-android-star" />
                                            <i className="ion-android-star" />
                                            <i className="ion-android-star" />
                                            <i className="ion-android-star" />
                                            <i className="ion-android-star-half" />
                                        </div>
                                        <ul className="list_none content_meta">
                                            <li><a href="!#"><i className="ti-user" />31</a></li>
                                            <li><a href="!#"><i className="ti-heart" />10</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="content_footer">
                                    <div className="teacher">
                                        <a href="!#"><img src="assets/images/user2.jpg" alt="user2" /><span>Dany Core</span></a>
                                    </div>
                                    <div className="price">
                                        <span className="alert alert-info">$49</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="content_box box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.04s">
                                <div className="content_img">
                                    <a href="!#"><img src="assets/images/course_img3.jpg" alt="course_img3" /></a>
                                </div>
                                <div className="content_desc">
                                    <h4 className="content_title"><a href="!#">Nullam id varius nunc id varius nunc</a></h4>
                                    <p>If you are going to use a passage of Lorem Ipsum you need to be sure anything embarrassing hidden in the middle of text.</p>
                                    <div className="courses_info">
                                        <div className="rating_stars">
                                            <i className="ion-android-star" />
                                            <i className="ion-android-star" />
                                            <i className="ion-android-star" />
                                            <i className="ion-android-star" />
                                            <i className="ion-android-star-half" />
                                        </div>
                                        <ul className="list_none content_meta">
                                            <li><a href="!#"><i className="ti-user" />31</a></li>
                                            <li><a href="!#"><i className="ti-heart" />10</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="content_footer">
                                    <div className="teacher">
                                        <a href="!#"><img src="assets/images/user3.jpg" alt="user3" /><span>Smith Parker</span></a>
                                    </div>
                                    <div className="price">
                                        <span className="alert alert-success">Free</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="content_box box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.05s">
                                <div className="content_img">
                                    <a href="!#"><img src="assets/images/course_img4.jpg" alt="course_img4" /></a>
                                </div>
                                <div className="content_desc">
                                    <h4 className="content_title"><a href="!#">Nullam id varius nunc id varius nunc</a></h4>
                                    <p>If you are going to use a passage of Lorem Ipsum you need to be sure anything embarrassing hidden in the middle of text.</p>
                                    <div className="courses_info">
                                        <div className="rating_stars">
                                            <i className="ion-android-star" />
                                            <i className="ion-android-star" />
                                            <i className="ion-android-star" />
                                            <i className="ion-android-star" />
                                            <i className="ion-android-star-half" />
                                        </div>
                                        <ul className="list_none content_meta">
                                            <li><a href="!#"><i className="ti-user" />31</a></li>
                                            <li><a href="!#"><i className="ti-heart" />10</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="content_footer">
                                    <div className="teacher">
                                        <a href="!#"><img src="assets/images/user4.jpg" alt="user4" /><span>Sara Robert</span></a>
                                    </div>
                                    <div className="price">
                                        <span className="alert alert-info">$54</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="content_box box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.06s">
                                <div className="content_img">
                                    <a href="!#"><img src="assets/images/course_img5.jpg" alt="course_img5" /></a>
                                </div>
                                <div className="content_desc">
                                    <h4 className="content_title"><a href="!#">Nullam id varius nunc id varius nunc</a></h4>
                                    <p>If you are going to use a passage of Lorem Ipsum you need to be sure anything embarrassing hidden in the middle of text.</p>
                                    <div className="courses_info">
                                        <div className="rating_stars">
                                            <i className="ion-android-star" />
                                            <i className="ion-android-star" />
                                            <i className="ion-android-star" />
                                            <i className="ion-android-star" />
                                            <i className="ion-android-star-half" />
                                        </div>
                                        <ul className="list_none content_meta">
                                            <li><a href="!#"><i className="ti-user" />31</a></li>
                                            <li><a href="!#"><i className="ti-heart" />10</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="content_footer">
                                    <div className="teacher">
                                        <a href="!#"><img src="assets/images/user5.jpg" alt="user5" /><span>Wendy Nahse</span></a>
                                    </div>
                                    <div className="price">
                                        <span className="alert alert-info">$36</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="content_box box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.07s">
                                <div className="content_img">
                                    <a href="!#"><img src="assets/images/course_img6.jpg" alt="course_img6" /></a>
                                </div>
                                <div className="content_desc">
                                    <h4 className="content_title"><a href="!#">Nullam id varius nunc id varius nunc</a></h4>
                                    <p>If you are going to use a passage of Lorem Ipsum you need to be sure anything embarrassing hidden in the middle of text.</p>
                                    <div className="courses_info">
                                        <div className="rating_stars">
                                            <i className="ion-android-star" />
                                            <i className="ion-android-star" />
                                            <i className="ion-android-star" />
                                            <i className="ion-android-star" />
                                            <i className="ion-android-star-half" />
                                        </div>
                                        <ul className="list_none content_meta">
                                            <li><a href="!#"><i className="ti-user" />31</a></li>
                                            <li><a href="!#"><i className="ti-heart" />10</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="content_footer">
                                    <div className="teacher">
                                        <a href="!#"><img src="assets/images/user6.jpg" alt="user6" /><span>John Wood</span></a>
                                    </div>
                                    <div className="price">
                                        <span className="alert alert-info">$22</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.07s">
                                <div className="medium_divider" />
                                <a href="!#" className="btn btn-default rounded-0">View All Courses <i className="ion-ios-arrow-thin-right ml-1" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* END SECTION COURSES */}
            {/* START SECTION COUNTER */}
            <section className="parallax_bg overlay_bg_blue_70" data-parallax-bg-image="assets/images/video_bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-6 ">
                            <div className="box_counter counter_style1 text_white text-center animation" data-animation="fadeInUp" data-animation-delay="0.02s">
                                <div className="counter_icon">
                                    <img src="assets/images/counter_icon1.png" alt="counter_icon1" />
                                </div>
                                <div className="counter_content">
                                    <h3 className="counter_text"><span className="counter">1800</span>+</h3>
                                    <p>Students</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-6 ">
                            <div className="box_counter counter_style1 text_white text-center animation" data-animation="fadeInUp" data-animation-delay="0.03s">
                                <div className="counter_icon">
                                    <img src="assets/images/counter_icon2.png" alt="counter_icon2" />
                                </div>
                                <div className="counter_content">
                                    <h3 className="counter_text"><span className="counter">70</span></h3>
                                    <p>Courses</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-6 ">
                            <div className="box_counter counter_style1 text_white text-center animation" data-animation="fadeInUp" data-animation-delay="0.04s">
                                <div className="counter_icon">
                                    <img src="assets/images/counter_icon3.png" alt="counter_icon3" />
                                </div>
                                <div className="counter_content">
                                    <h3 className="counter_text"><span className="counter">700</span>+</h3>
                                    <p>Certified teachers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-6 ">
                            <div className="box_counter counter_style1 text_white text-center animation" data-animation="fadeInUp" data-animation-delay="0.05s">
                                <div className="counter_icon">
                                    <img src="assets/images/counter_icon4.png" alt="counter_icon4" />
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
            {/* START SECTION EVENT */}
            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
                                <div className="heading_s1 text-center">
                                    <h2>Upcoming events</h2>
                                </div>
                                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                            </div>
                        </div>
                    </div>
                    <div className="row event_list justify-content-center">
                        <div className="col-lg-6">
                            <div className="content_box event_box box_shadow1 animation mb-4 mb-lg-0" data-animation="fadeInUp" data-animation-delay="0.02s">
                                <div className="content_img">
                                    <a href="!#"><img src="assets/images/event_img1.jpg" alt="event_img1" /></a>
                                </div>
                                <div className="event_date">
                                    <h5><span>16</span> May</h5>
                                    <span className="event_time bg_default">10:00 am 3:00 pm</span>
                                </div>
                                <div className="content_desc bg-white">
                                    <h4 className="content_title"><a href="!#">Nullam id varius nunc id varius nunc</a></h4>
                                    <ul className="list_none content_meta">
                                        <li><i className="ti-user" /> <a href="!#" className="text_default">John Wood</a></li>
                                        <li><i className="ti-location-pin" /><span className="text_default">New York City</span></li>
                                    </ul>
                                    <p>If you are going to use a passage of Lorem Ipsum you need to be sure anything embarrassing hidden in the middle of text.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="content_box event_box box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.03s">
                                        <div className="event_date">
                                            <h5><span>27</span> Apr</h5>
                                            <span className="event_time bg_default">9:00 am 4:00 pm</span>
                                        </div>
                                        <div className="content_desc bg-white">
                                            <h4 className="content_title"><a href="!#">Nullam id varius nunc id varius nunc</a></h4>
                                            <ul className="list_none content_meta">
                                                <li><i className="ti-user" /> <a href="!#" className="text_default">John Wood</a></li>
                                                <li><i className="ti-location-pin" /><span className="text_default">New York City</span></li>
                                            </ul>
                                            <p>If you are going to use a passage of Lorem Ipsum you need to be sure anything embarrassing hidden in the middle of text.</p>
                                        </div>
                                    </div>
                                    <div className="content_box event_box box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.04s">
                                        <div className="event_date">
                                            <h5><span>22</span> Jun</h5>
                                            <span className="event_time bg_default">11:00 am 4:00 pm</span>
                                        </div>
                                        <div className="content_desc bg-white">
                                            <h4 className="content_title"><a href="!#">Nullam id varius nunc id varius nunc</a></h4>
                                            <ul className="list_none content_meta">
                                                <li><i className="ti-user" /> <a href="!#" className="text_default">John Wood</a></li>
                                                <li><i className="ti-location-pin" /><span className="text_default">New York City</span></li>
                                            </ul>
                                            <p>If you are going to use a passage of Lorem Ipsum you need to be sure anything embarrassing hidden in the middle of text.</p>
                                        </div>
                                    </div>
                                    <div className="content_box event_box box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.04s">
                                        <div className="event_date">
                                            <h5><span>22</span> Jun</h5>
                                            <span className="event_time bg_default">11:00 am 4:00 pm</span>
                                        </div>
                                        <div className="content_desc bg-white">
                                            <h4 className="content_title"><a href="!#">Nullam id varius nunc id varius nunc</a></h4>
                                            <ul className="list_none content_meta">
                                                <li><i className="ti-user" /> <a href="!#" className="text_default">John Wood</a></li>
                                                <li><i className="ti-location-pin" /><span className="text_default">New York City</span></li>
                                            </ul>
                                            <p>If you are going to use a passage of Lorem Ipsum you need to be sure anything embarrassing hidden in the middle of text.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* START SECTION EVENT */}
            {/* START SECTION INQUIRY */}
            <section className="pb-0 background_bg bg_blue_dark" data-img-src="assets/images/pattern_bg.png">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6 col-md-7">
                            <div className="register_form text_white padding_eight_all animation" data-animation="fadeInLeft" data-animation-delay="0.02s">
                                <div className="heading_s1 heading_light">
                                    <h2>Get a Free <span className="text_default">Inquiry</span></h2>
                                </div>
                                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything hidden in the middle of text</p>
                                <form method="post" name="enq" className="pt-md-2 form_transparent">
                                    <div className="row">
                                        <div className="form-group col-sm-6">
                                            <input required="required" placeholder="Enter Name *" className="form-control" name="name" type="text" />
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <input required="required" placeholder="Enter Email *" className="form-control" name="email" type="email" />
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <input required="required" placeholder="Enter Phone No *" className="form-control" name="phone" type="tel" />
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <div className="custom_select">
                                                <select className="form-control">
                                                    <option>Select Course</option>
                                                    <option>Select Course 1</option>
                                                    <option>Select Course 2</option>
                                                    <option>Select Course 3</option>
                                                    <option>Select Course 4</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <textarea required="required" placeholder="Message *" className="form-control" name="message" rows={4} defaultValue={""} />
                                        </div>
                                        <div className="col-md-12">
                                            <button type="submit" title="Submit Your Message!" className="btn btn-default rounded-0" name="submit" value="Submit">Register Now</button>
                                        </div>
                                        <div className="col-sm-12">
                                            <div id="alert-msg" className="alert-msg text-center" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="large_divider" />
                        </div>
                        <div className="col-lg-6 col-md-5">
                            <div className="text-center animation" data-animation="fadeInRight" data-animation-delay="0.03s">
                                <img src="assets/images/girl_img.png" alt="girl_img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* END SECTION INQUIRY */}
            {/* START SECTION TEACHER */}
            <section className="bg_gray">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading_s1 text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
                                <h2>Our Teachers</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="team_box team_style2 box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
                                <div className="team_img">
                                    <img src="assets/images/team_img1.jpg" alt="team1" />
                                </div>
                                <div className="team_title text-center">
                                    <h5><a href="!#">Aden Smith</a></h5>
                                    <span>Head Of Department</span>
                                    <ul className="list_none social_icons">
                                        <li><a href="!#" className="sc_facebook"><i className="ion-social-facebook" /></a></li>
                                        <li><a href="!#" className="sc_twitter"><i className="ion-social-twitter" /></a></li>
                                        <li><a href="!#" className="sc_gplus"><i className="ion-social-googleplus" /></a></li>
                                        <li><a href="!#" className="sc_instagram"><i className="ion-social-instagram-outline" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="team_box team_style2 box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.03s">
                                <div className="team_img">
                                    <img src="assets/images/team_img2.jpg" alt="team2" />
                                </div>
                                <div className="team_title text-center">
                                    <h5><a href="!#">Kally Brooks</a></h5>
                                    <span>Professor</span>
                                    <ul className="list_none social_icons">
                                        <li><a href="!#" className="sc_facebook"><i className="ion-social-facebook" /></a></li>
                                        <li><a href="!#" className="sc_twitter"><i className="ion-social-twitter" /></a></li>
                                        <li><a href="!#" className="sc_gplus"><i className="ion-social-googleplus" /></a></li>
                                        <li><a href="!#" className="sc_instagram"><i className="ion-social-instagram-outline" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="team_box team_style2 box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.04s">
                                <div className="team_img">
                                    <img src="assets/images/team_img3.jpg" alt="team3" />
                                </div>
                                <div className="team_title text-center">
                                    <h5><a href="!#">David clark</a></h5>
                                    <span>Chemistry Teacher</span>
                                    <ul className="list_none social_icons">
                                        <li><a href="!#" className="sc_facebook"><i className="ion-social-facebook" /></a></li>
                                        <li><a href="!#" className="sc_twitter"><i className="ion-social-twitter" /></a></li>
                                        <li><a href="!#" className="sc_gplus"><i className="ion-social-googleplus" /></a></li>
                                        <li><a href="!#" className="sc_instagram"><i className="ion-social-instagram-outline" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="team_box team_style2 box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.05s">
                                <div className="team_img">
                                    <img src="assets/images/team_img4.jpg" alt="team4" />
                                </div>
                                <div className="team_title text-center">
                                    <h5><a href="!#">Rebeka Alig</a></h5>
                                    <span>English Teacher</span>
                                    <ul className="list_none social_icons">
                                        <li><a href="!#" className="sc_facebook"><i className="ion-social-facebook" /></a></li>
                                        <li><a href="!#" className="sc_twitter"><i className="ion-social-twitter" /></a></li>
                                        <li><a href="!#" className="sc_gplus"><i className="ion-social-googleplus" /></a></li>
                                        <li><a href="!#" className="sc_instagram"><i className="ion-social-instagram-outline" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* END SECTION TEACHER */}
            {/* START SECTION TESTIMONIAL */}
            <section className="background_bg bg_fixed" data-img-src="assets/images/pattern_bg3.png">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
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
                            <div className="testimonial_slider testimonial_style2 carousel_slider owl-carousel owl-theme" data-margin={30} data-loop="true" data-autoplay="true" data-dots="false" data-responsive="{&quot;0&quot;:{&quot;items&quot;: &quot;1&quot;}, &quot;380&quot;:{&quot;items&quot;: &quot;1&quot;}, &quot;576&quot;:{&quot;items&quot;: &quot;2&quot;}, &quot;1199&quot;:{&quot;items&quot;: &quot;3&quot;}}">
                                <div className="testimonial_box">
                                    <div className="testimonial_img">
                                        <img src="assets/images/client_img1.jpg" alt="client" />
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
                                        <img src="assets/images/client_img2.jpg" alt="client" />
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
                                        <img src="assets/images/client_img3.jpg" alt="client" />
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
            {/* START SECTION BLOG */}
            <section className="bg_gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading_s1 text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
                                <h2>Our Blog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog_post box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
                                <div className="blog_img">
                                    <a href="!#">
                                        <img src="assets/images/blog_small_img1.jpg" alt="blog_small_img1" />
                                        <div className="link_blog">
                                            <span className="ripple"><i className="fa fa-link" /></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="blog_content bg-white">
                                    <h6 className="blog_title"><a href="!#">Why are tickets to fly to Lagos expensive?</a></h6>
                                    <p>If you are going to use a passage of Lorem Ipsum you need to be sure there anything embarrassing hidden in the middle of text</p>
                                    <a href="!#" className="text-capitalize">Read More</a>
                                </div>
                                <div className="blog_footer bg-white">
                                    <ul className="list_none blog_meta">
                                        <li><a href="!#"><i className="ion-calendar" />15 May, 2019</a></li>
                                        <li><a href="!#"><i className="ion-chatbubbles" />2 Comment</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog_post box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.03s">
                                <div className="blog_img">
                                    <a href="!#">
                                        <img src="assets/images/blog_small_img2.jpg" alt="blog_small_img2" />
                                        <div className="link_blog">
                                            <span className="ripple"><i className="fa fa-link" /></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="blog_content bg-white">
                                    <h6 className="blog_title"><a href="!#">Why are tickets to fly to Lagos expensive?</a></h6>
                                    <p>If you are going to use a passage of Lorem Ipsum you need to be sure there anything embarrassing hidden in the middle of text</p>
                                    <a href="!#" className="text-capitalize">Read More</a>
                                </div>
                                <div className="blog_footer bg-white">
                                    <ul className="list_none blog_meta">
                                        <li><a href="!#"><i className="ion-calendar" />23 May, 2019</a></li>
                                        <li><a href="!#"><i className="ion-chatbubbles" />2 Comment</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog_post box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.04s">
                                <div className="blog_img">
                                    <a href="!#">
                                        <img src="assets/images/blog_small_img3.jpg" alt="blog_small_img3" />
                                        <div className="link_blog">
                                            <span className="ripple"><i className="fa fa-link" /></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="blog_content bg-white">
                                    <h6 className="blog_title"><a href="!#">Why are tickets to fly to Lagos expensive?</a></h6>
                                    <p>If you are going to use a passage of Lorem Ipsum you need to be sure there anything embarrassing hidden in the middle of text</p>
                                    <a href="!#" className="text-capitalize">Read More</a>
                                </div>
                                <div className="blog_footer bg-white">
                                    <ul className="list_none blog_meta">
                                        <li><a href="!#"><i className="ion-calendar" />16 May, 2019</a></li>
                                        <li><a href="!#"><i className="ion-chatbubbles" />2 Comment</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.04s">
                                <div className="medium_divider" />
                                <a href="!#" className="btn btn-default rounded-0">View All Blog <i className="ion-ios-arrow-thin-right ml-1" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* END SECTION BLOG */}
            {/* START SECTION CLIENT LOGO */}
            {/* <section className="light_gray_bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
                                <div className="heading_s1 text-center">
                                    <h2>Our Client</h2>
                                </div>
                                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                                <div className="small_divider" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.01s">
                            <div className="cl_logo_slider carousel_slider owl-carousel owl-theme" data-margin={15} data-loop="true" data-autoplay="true" data-dots="false" data-responsive="{&quot;0&quot;:{&quot;items&quot;: &quot;2&quot;}, &quot;380&quot;:{&quot;items&quot;: &quot;3&quot;}, &quot;600&quot;:{&quot;items&quot;: &quot;4&quot;}, &quot;1000&quot;:{&quot;items&quot;: &quot;5&quot;}, &quot;1199&quot;:{&quot;items&quot;: &quot;6&quot;}}">
                                <div className="item">
                                    <a href="!#"><img src="assets/images/cl_logo1.png" alt="cl_logo1" /></a>
                                </div>
                                <div className="item">
                                    <a href="!#"><img src="assets/images/cl_logo2.png" alt="cl_logo2" /></a>
                                </div>
                                <div className="item">
                                    <a href="!#"><img src="assets/images/cl_logo3.png" alt="cl_logo3" /></a>
                                </div>
                                <div className="item">
                                    <a href="!#"><img src="assets/images/cl_logo4.png" alt="cl_logo4" /></a>
                                </div>
                                <div className="item">
                                    <a href="!#"><img src="assets/images/cl_logo5.png" alt="cl_logo5" /></a>
                                </div>
                                <div className="item">
                                    <a href="!#"><img src="assets/images/cl_logo2.png" alt="cl_logo2" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>

    )
}

export default Home

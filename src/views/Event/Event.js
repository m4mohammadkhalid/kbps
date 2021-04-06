import React from 'react'
import NavBar from '../../components/Navbar/Header';
import { Footer } from '../../components/Footer';
import { Link } from "react-router-dom";

const Event = () => {
    return (
        <>

<NavBar />
  <section className="page-title-light breadcrumb_section parallax_bg overlay_bg_50" style={{backgroundImage:'url("https://image.shutterstock.com/image-photo/butterfly-on-flower-hd-pic-260nw-1802530627.jpg")', height:'80px'}}>
    <div  className="container">
      <div  className="row align-items-center">
        <div  className="col-sm-12">
          <div  className="page-title">
            <h1 style={{textAlign:'center'}}>Event</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END SECTION BANNER */}
  {/* START SECTION EVENT */}
  <section className="small_pt">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-sm-6">
          <div className="content_box event_box radius_all_10 box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.01s">
            <div className="content_img radius_ltrt_10">
              <Link to="#"><img src="assets/images/event_img1.jpg" alt="event_img1" /></Link>
              <div className="event_date radius_all_5">
                <h5><span>16</span> May</h5>
                <span className="event_time radius_lbrb_5 bg_default">10:00 am 3:00 pm</span>
              </div>
            </div>
            <div className="content_desc">
              <h4 className="content_title"><Link to="#">Nullam id varius nunc id varius nunc</Link></h4>
              <hr />
              <p>If you are going to use a passage of Lorem Ipsum you need to be sure anything embarrassing hidden in the middle of text.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="content_box event_box radius_all_10 box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
            <div className="content_img radius_ltrt_10">
              <Link to="#"><img src="assets/images/event_img2.jpg" alt="event_img2" /></Link>
              <div className="event_date radius_all_5">
                <h5><span>27</span> Apr</h5>
                <span className="event_time radius_lbrb_5 bg_default">9:00 am 4:00 pm</span>
              </div>
            </div>
            <div className="content_desc">
              <h4 className="content_title"><Link to="#">Nullam id varius nunc id varius nunc</Link></h4>
              <hr />
              <p>If you are going to use a passage of Lorem Ipsum you need to be sure anything embarrassing hidden in the middle of text.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="content_box event_box radius_all_10 box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.03s">
            <div className="content_img radius_ltrt_10">
              <Link to="#"><img src="assets/images/event_img3.jpg" alt="event_img3" /></Link>
              <div className="event_date radius_all_5">
                <h5><span>22</span> Jun</h5>
                <span className="event_time radius_lbrb_5 bg_default">11:00 am 4:00 pm</span>
              </div>
            </div>
            <div className="content_desc">
              <h4 className="content_title"><Link to="#">Nullam id varius nunc id varius nunc</Link></h4>
              <hr />
              <p>If you are going to use a passage of Lorem Ipsum you need to be sure anything embarrassing hidden in the middle of text.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="content_box event_box radius_all_10 box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.04s">
            <div className="content_img radius_ltrt_10">
              <Link to="#"><img src="assets/images/event_img4.jpg" alt="event_img4" /></Link>
              <div className="event_date radius_all_5">
                <h5><span>25</span> Jun</h5>
                <span className="event_time radius_lbrb_5 bg_default">11:00 am 4:00 pm</span>
              </div>
            </div>
            <div className="content_desc">
              <h4 className="content_title"><Link to="#">Nullam id varius nunc id varius nunc</Link></h4>
              <hr />
              <p>If you are going to use a passage of Lorem Ipsum you need to be sure anything embarrassing hidden in the middle of text.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="content_box event_box radius_all_10 box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.05s">
            <div className="content_img radius_ltrt_10">
              <Link to="#"><img src="assets/images/event_img5.jpg" alt="event_img5" /></Link>
              <div className="event_date radius_all_5">
                <h5><span>26</span> Jun</h5>
                <span className="event_time radius_lbrb_5 bg_default">11:00 am 4:00 pm</span>
              </div>
            </div>
            <div className="content_desc">
              <h4 className="content_title"><Link to="#">Nullam id varius nunc id varius nunc</Link></h4>
              <hr />
              <p>If you are going to use a passage of Lorem Ipsum you need to be sure anything embarrassing hidden in the middle of text.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="content_box event_box radius_all_10 box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.06s">
            <div className="content_img radius_ltrt_10">
              <Link to="#"><img src="assets/images/event_img5.jpg" alt="event_img5" /></Link>
              <div className="event_date radius_all_5">
                <h5><span>29</span> Jun</h5>
                <span className="event_time radius_lbrb_5 bg_default">11:00 am 4:00 pm</span>
              </div>
            </div>
            <div className="content_desc">
              <h4 className="content_title"><Link to="#">Nullam id varius nunc id varius nunc</Link></h4>
             <hr />
              <p>If you are going to use a passage of Lorem Ipsum you need to be sure anything embarrassing hidden in the middle of text.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="medium_divider" />
          <ul className="pagination justify-content-center">
            <li className="page-item disabled"><Link className="page-link" to="#" tabIndex={-1}><i className="ion-ios-arrow-thin-left" /></Link></li>
            <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
            <li className="page-item"><Link className="page-link" to="#">4</Link></li>
            <li className="page-item"><Link className="page-link" to="#">5</Link></li>
            <li className="page-item"><Link className="page-link" to="#"><i className="ion-ios-arrow-thin-right" /></Link></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* START SECTION EVENT */}
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
  <Footer />



        </>
    )
}

export default Event

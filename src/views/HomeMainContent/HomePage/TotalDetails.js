import React from "react";

const TotalDetails = () => {
  return (
    <>
      <div>
        <section
          className="parallax_bg overlay_bg_blue_70"
          data-parallax-bg-image="assets/images/video_bg.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-6 ">
                <div
                  className="box_counter counter_style1 text_white text-center animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.02s"
                >
                  <div className="counter_icon">
                    <img
                      src="assets/images/counter_icon1.png"
                      alt="counter_icon1"
                    />
                  </div>
                  <div className="counter_content">
                    <h3 className="counter_text">
                      <span className="counter">1800</span>+
                    </h3>
                    <p>Students</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6 ">
                <div
                  className="box_counter counter_style1 text_white text-center animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.03s"
                >
                  <div className="counter_icon">
                    <img
                      src="assets/images/counter_icon2.png"
                      alt="counter_icon2"
                    />
                  </div>
                  <div className="counter_content">
                    <h3 className="counter_text">
                      <span className="counter">70</span>
                    </h3>
                    <p>Courses</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6 ">
                <div
                  className="box_counter counter_style1 text_white text-center animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.04s"
                >
                  <div className="counter_icon">
                    <img
                      src="assets/images/counter_icon3.png"
                      alt="counter_icon3"
                    />
                  </div>
                  <div className="counter_content">
                    <h3 className="counter_text">
                      <span className="counter">700</span>+
                    </h3>
                    <p>Certified teachers</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6 ">
                <div
                  className="box_counter counter_style1 text_white text-center animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.05s"
                >
                  <div className="counter_icon">
                    <img
                      src="assets/images/counter_icon4.png"
                      alt="counter_icon4"
                    />
                  </div>
                  <div className="counter_content">
                    <h3 className="counter_text">
                      <span className="counter">1200</span>+
                    </h3>
                    <p>Award Winning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section
          className="pb-0 background_bg bg_blue_dark"
          data-img-src="assets/images/pattern_bg.png"
        >
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-6 col-md-7">
                <div
                  className="register_form text_white padding_eight_all animation"
                  data-animation="fadeInLeft"
                  data-animation-delay="0.02s"
                >
                  <div className="heading_s1 heading_light">
                    <h2>
                      Get a Free <span className="text_default">Inquiry</span>
                    </h2>
                  </div>
                  <p>
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything hidden in the middle of text
                  </p>
                  <form
                    method="post"
                    name="enq"
                    className="pt-md-2 form_transparent"
                  >
                    <div className="row">
                      <div className="form-group col-sm-6">
                        <input
                          required="required"
                          placeholder="Enter Name *"
                          className="form-control"
                          name="name"
                          type="text"
                        />
                      </div>
                      <div className="form-group col-sm-6">
                        <input
                          required="required"
                          placeholder="Enter Email *"
                          className="form-control"
                          name="email"
                          type="email"
                        />
                      </div>
                      <div className="form-group col-sm-6">
                        <input
                          required="required"
                          placeholder="Enter Phone No *"
                          className="form-control"
                          name="phone"
                          type="tel"
                        />
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
                        <textarea
                          required="required"
                          placeholder="Message *"
                          className="form-control"
                          name="message"
                          rows={4}
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-md-12">
                        <button
                          type="submit"
                          title="Submit Your Message!"
                          className="btn btn-default rounded-0"
                          name="submit"
                          value="Submit"
                        >
                          Register Now
                        </button>
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
                <div
                  className="text-center animation"
                  data-animation="fadeInRight"
                  data-animation-delay="0.03s"
                >
                  <img src="assets/images/girl_img.png" alt="girl_img" />
                </div>
              </div>
            </div>
          </div>
        </section>
              </div>
    </>
  );
};

export default TotalDetails;

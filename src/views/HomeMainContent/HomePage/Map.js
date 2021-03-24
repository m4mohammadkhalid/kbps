import React from "react";

const Map = () => {
  return (
    <>
      <section className="small_pb">
        <div style={{maxWidth: '100%'}} className="container">
          <div  className="row justify-content-center">
            <div  className="col-xl-6 col-lg-8">
                          <div
                              
                className="text-center animation"
                data-animation="fadeInUp"
                data-animation-delay="0.01s"
              >
                <div  className="heading_s1 text-center">
                  <h2 className="font_style1">Get In Touch</h2>
                </div>
                <p>
                  If you are going to use a passage of Lorem Ipsum, you need to
                  be sure there isn't anything embarrassing hidden in the middle
                  of text
                </p>
                <div className="small_divider" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row">
                              <div
                                  style={{width:'100vh', height:"50vh"}}
                  className="col-md-12 animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.03s"
                >
                  <div className="contact_map overflow-hidden h-100 mt-4 mt-md-0">
                    <iFrame
                      src="https://maps.google.com/maps?q=Kanwal%20Bharti%20Public%20School,%20Plot%20no.%2050,,%20Chander%20Vihar%20Main%20Rd,%20Chander%20Vihar,%20Nilothi,%20Delhi,%20110041&t=&z=17&ie=UTF8&iwloc=&output=embed"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Map;

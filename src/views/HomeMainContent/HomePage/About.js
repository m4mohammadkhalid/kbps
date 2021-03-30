import React from 'react'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section style={{backgroundImage: 'url("https://lh3.googleusercontent.com/GQ-VzAL0NFDxkO1I0VTT6SbbVagrGEDMVXSn2sJsAFkrMf0ZYIWI2-ExeHuFVtb_h7pcqJwGKCPOVwvva0Iz68f26Q6BiSjAJj9pcJ3rDFIe5Te_vOlC65bfSCbSnjUzu3k9qWdV-Y-ej_qrPrQJlnRaaAX1UhCKicob-4EjsnzJNPhzy6sUvVCkzmWHPKBmmWpNDeB40ehGgGK-wdL-KNgPZMN26rak56sKLDDyD9CMV-jUDKHNnCcesBh5SvJ9bGjmlWfXdBeOX1w0CBvDWiLnbtH5MbX79TdemogDkzua11zLRijSpd8B-tzBLk9ms1i-rPGyn4RIqMhiMSvdS5cQVjgoqdHgskjLaPNO3lMqIUf5I4vUVBy_MyeQT60YXFtgUOAVdz5x_fackqi1S9ELGlJ31SRwl6gCkupkuOhBXJBCqpTqKkhuxuW7VKD_JrDTDA33Vl1ZgOI-oiu7PdtaV4WZGC_ktBaE6tAP2Ytb-1dyWTwJ6hN1zaQ57ObAatNbYZyve4zNVH-PCZw3vVUfyOrF1JaA3VsGwyZBascvUsbjQkogFNpNKxRU1PPTIL1EL9J5Nzzek8f2XXtIss3OQgxyjWC8Xb2C-rtxeVXMRGbtuh6GHxaRcZJoApYGhS-61YtTgEyYhjnTEL5jTErsTg1HJ5bVPyIfTJ2Uo04m9UmYqw3_aLjA2_7HsmLInd5q6T5XL7ZEpspKi6M4W6E=w1310-h478-no?authuser=0")', backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}} className="overflow_hide">
        <div  className="container">
        <div className="heading_s1"> 
            <h2><center>About Us</center></h2>
          </div>
          <div  className="row align-items-center">
            <div className="col-md-7">
              <div className="animation" data-animation="fadeInLeft" data-animation-delay="0.01s">
                <div className="floating">
                  <div className="card-object rotate">
                    <header></header>
                    <aside></aside>
                    <main><blockquote className="message">May all the <em className="forgotten">tiny</em> black <em className="forget">insects</em> crawling on the peonies be my sons <em className="forget">and daughters</em> in future lives.</blockquote></main>
                    <footer className="author">John Giorno</footer>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <img src="assets/images/about_img2.png" alt="about_img2" />
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default About

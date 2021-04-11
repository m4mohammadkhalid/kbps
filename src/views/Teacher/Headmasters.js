import React from 'react'
import NavBar from '../../components/Navbar/Header';
import { Footer } from '../../components/Footer';
import '../../Gallery.css'
const Headmasters = () => {
    return (
        <>
        <NavBar />
        <section  className="page-title-light breadcrumb_section parallax_bg overlay_bg_50" style={{backgroundImage:'url("https://images.pexels.com/photos/1400141/pexels-photo-1400141.jpeg")', backgroundRepeat:'no-repeat',backgroundPosition: 'center',backgroundSize: 'cover',height:'80px', paddingTop:'18px'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="page-title">
                <h1 style={{textAlign:'center'}}>Headmasters</h1>
              </div>
            </div>
            
          </div>
        </div>
      </section>
<div  className="about-me_container">
  <div style={{backgroundImage: 'url("/assets/images/white_wall.png")', backgroundRepeat:'no-repeat',backgroundPosition: 'center',backgroundSize: 'cover',paddingTop:'80px'}}  className="about-me_item about-me_item_1">
    <img className="about-me_image" src="/assets/images/m1.jpg" alt="KHALID" />
  </div>
  <div style={{backgroundImage: 'url("/assets/images/white_wall.png")', backgroundRepeat:'no-repeat',backgroundPosition: 'center',backgroundSize: 'cover',paddingTop:'90px'}}  className="about-me_item about-me_item_2">
    <p>Mr khalid (2014 – Present)</p><br />
    
      <p>Lorem Ipsum isso the leap into electronic typesetting, 
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
      sheets containing Lorem Ipsum passages, and more recently in the 1960s with the release of Letraset 
      sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
      software like Aldus PageMaker including versions of Lorem Ipsum.</p>
     
    <br />
    <div className="byhand about-me_byhand">KBPS.</div>
  </div>
</div>




<Footer />
        </>
    )
}

export default Headmasters

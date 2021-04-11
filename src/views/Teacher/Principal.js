import React from 'react'
import NavBar from '../../components/Navbar/Header';
import { Footer } from '../../components/Footer';
import '../../Gallery.css'
const Principal = () => {
    return (
        <>
        <NavBar />
        <section  className="page-title-light breadcrumb_section parallax_bg overlay_bg_50" style={{backgroundImage:'url("https://images.pexels.com/photos/1400141/pexels-photo-1400141.jpeg")', backgroundRepeat:'no-repeat',backgroundPosition: 'center',backgroundSize: 'cover',height:'80px', paddingTop:'18px'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="page-title">
                <h1 style={{textAlign:'center'}}>Principal</h1>
              </div>
            </div>
            
          </div>
        </div>
      </section>
<div  className="about-me_container">
  <div style={{backgroundImage: 'url("/assets/images/white_wall.png")', backgroundRepeat:'no-repeat',backgroundPosition: 'center',backgroundSize: 'cover',paddingTop:'80px'}}  className="about-me_item about-me_item_1">
    <img className="about-me_image" src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/33083/college-student-clipart-xl.png" alt="KHALID" />
  </div>
  <div style={{backgroundImage: 'url("/assets/images/white_wall.png")', backgroundRepeat:'no-repeat',backgroundPosition: 'center',backgroundSize: 'cover',paddingTop:'200px'}}  className="about-me_item about-me_item_2">
    <p>Mr khalid (2014 – Present)</p><br />
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, 
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
      sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
      software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, 
      remaining essentially unchanged. It was popularised<br /> <br />in the 1960s with the release of Letraset 
      sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
      software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, 
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
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

export default Principal

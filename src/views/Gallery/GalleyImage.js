import React from 'react'
import '../../Gallery.css'
import Header from '../../components/Navbar/Header'
import Footer from '../../components/Footer/Footer'

const GalleyImage = () => {
    return (
        <>
<Header />

  <div id="page-start" className="page">
    
 

    <div style={{paddingTop:'40px'}} className="links-block">
      <h1>Gallery</h1>
    </div>
  </div>
  <div id="page-gallery" className="page">
    <div className="card">
      <div className="photo" />
    </div>
    <div className="card">
      <div className="photo" />
    </div>
    <div className="card">
      <div className="photo" />
    </div>
    <div className="card">
      <div className="photo" />
    </div>
    <div className="card">
      <div className="photo" />
    </div>
    <div className="card">
      <div className="photo" />
    </div>
    <div className="card">
      <div className="photo" />
    </div>
    <div className="card">
      <div className="photo" />
    </div>
    <div className="card">
      <div className="photo" />
    </div>
  </div>
  <div id="page-gallery-1" className="page">
    <div className="grid">
      <div className="photo" />
      <div className="photo" />
      <div className="photo" />
      <div className="photo" />
    </div>
    <div className="center-photo">
      <div className="photo" />
    </div>
  </div>


<Footer />
        </>
    )
}

export default GalleyImage

import React from 'react'
import NavBar from '../../components/Navbar/Header';
import { Footer } from '../../components/Footer';
const Vacancies = () => {
const pagetitle={
    backgroundColor:'red',
    borderRadius:'40px',
    textAlign:'center',
    
}
    return (
        <>
            <NavBar />

            <section className="page-title-light breadcrumb_section parallax_bg overlay_bg_50" style={{ backgroundImage: 'url("https://images.pexels.com/photos/1400141/pexels-photo-1400141.jpeg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', height: '80px', paddingTop: '18px' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12">
                            <div className="page-title">
                                <h1 style={{ textAlign: 'center' }}>Principal</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-title-light breadcrumb_section parallax_bg overlay_bg_50" style={{ backgroundImage: 'url("/assets/images/white_wall.png")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', height: '80px', paddingTop: '18px' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12">
                            <div className="page-title">
                               <h4>Vacancies at Modern School, Barakhamba Road, New Delhi</h4>
                               <p>Modern School Barakhamba Road New Delhi is looking for qualified teachers preferably with teaching experience of senior classes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-title-light breadcrumb_section parallax_bg overlay_bg_50" style={{ backgroundImage: 'url("/assets/images/white_wall.png")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', height: '80px', paddingTop: '18px' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12">
                            <div className="page-title">
                               <h4>The anticipated vacancies for the Academic Year 2020-21, are as follows:</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section  className="page-title-light breadcrumb_section parallax_bg overlay_bg_50" style={{ backgroundImage: 'url("/assets/images/white_wall.png")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', height: '80px', paddingTop: '18px' }}>
                <div  className="container">
                    <div  className="row align-items-center">
                        <div style={pagetitle} className="col-sm-2">
                            <div className="page-title">
                               <h4>Physics</h4>
                            </div>
                        </div>
                        <div style={pagetitle} className="col-sm-2">
                            <div className="page-title">
                               <h4>Physics</h4>
                            </div>
                        </div>
                        <div style={pagetitle} className="col-sm-2">
                            <div className="page-title">
                               <h4>Physics</h4>
                            </div>
                        </div>
                        <div style={pagetitle} className="col-sm-2">
                            <div className="page-title">
                               <h4>Physics</h4>
                            </div>
                        </div>
                        <div style={pagetitle} className="col-sm-2">
                            <div className="page-title">
                               <h4>Physics</h4>
                            </div>
                        </div>
                        <div style={pagetitle} className="col-sm-2">
                            <div className="page-title">
                               <h4>Physics</h4>
                            </div>
                        </div>
                        <div style={pagetitle} className="col-sm-2">
                            <div className="page-title">
                               <h4>Physics</h4>
                            </div>
                        </div>
                        <div style={pagetitle} className="col-sm-2">
                            <div  className="page-title">
                               <h4>Physics</h4>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section className="page-title-light breadcrumb_section parallax_bg overlay_bg_50" style={{ backgroundImage: 'url("/assets/images/white_wall.png")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', height: '80px', paddingTop: '18px' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12">
                            <div className="page-title">
                               <h6>Interested candidates are requested to send their CV in the given Proforma with photocopies of all 
                                   educational & professional qualification and past experience, if any, to the following address: </h6>
                                   <p>The Principal
                                    Modern School
                                    Barakhamba Road
                                    New Delhi – 110001

</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}

export default Vacancies

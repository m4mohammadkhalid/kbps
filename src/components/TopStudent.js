import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function TopStudent() {
    let settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        autoplaySpeed:1400,
        arrows:false,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear",
    }
    return (
        <Slider {...settings}>
            <div className="card-wrapperr">
                <div className="cardd">
                    <div className="card-image">
                        <img src="assets/images/top1.png" alt="khalid" />
                    </div>
                    <div className="details">
                        <h2>A</h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapperr">
                <div className="cardd">
                    <div className="card-image">
                        <img src="assets/images/top2.png" alt="khalid" />
                    </div>
                    <div className="details">
                        <h2>B</h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapperr">
                <div className="cardd">
                    <div className="card-image">
                        <img src="assets/images/top3.png" alt="khalid" />
                    </div>
                    <div className="details">
                        <h2>C</h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapperr">
                <div className="cardd">
                    <div className="card-image">
                        <img src="assets/images/top1.png" alt="khalid" />
                    </div>
                    <div className="details">
                        <h2>D </h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapperr">
                <div className="cardd">
                    <div className="card-image">
                        <img src="assets/images/top2.png" alt="khalid" />
                    </div>
                    <div className="details">
                        <h2>E</h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapperr">
                <div className="cardd">
                    <div className="card-image">
                        <img src="assets/images/top3.png" alt="khalid" />
                    </div>
                    <div className="details">
                        <h2>F </h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapperr">
                <div className="cardd">
                    <div className="card-image">
                        <img src="assets/images/top1.png" alt="khalid" />
                    </div>
                    <div className="details">
                        <h2>G</h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapperr">
                <div className="cardd">
                    <div className="card-image">
                        <img src="assets/images/top2.png" alt="khalid" />
                    </div>
                    <div className="details">
                        <h2>H </h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapperr">
                <div className="cardd">
                    <div className="card-image">
                        <img src="assets/images/top3.png" alt="khalid" />
                    </div>
                    <div className="details">
                        <h2>I</h2>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default TopStudent

//... is called spread operator

//thanks for watching
//pleae subscribe my channel
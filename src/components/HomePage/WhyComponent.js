import React from 'react'


const WhyComponent = ({name,Disc}) => {
    return (
          <div className="col-lg-4 col-md-6">
                        <div className="icon_box icon_box_style1 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
                            <div className="box_icon mb-3">
                                <i className="fa fa-book text_default" />
                            </div>
                            <div className="intro_desc">
                                <h5>{name}</h5>
                                <p>{Disc}</p>
                            </div>
                        </div>
                    </div>
    )
}

export default WhyComponent

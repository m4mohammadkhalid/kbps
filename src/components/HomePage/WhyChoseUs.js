import React from 'react'
import WhyComponent from './WhyComponent'


const WhyChose=[
    {
            name:"Books Library",
            Disc:"If you are going to use a passage of anything embarrassing hidden in the middle of text"
    },
    {
        name:"Books Library",
        Disc:"If you are going to use a passage of anything embarrassing hidden in the middle of text"
    },
    {
        name:"Books Library",
        Disc:"If you are going to use a passage of anything embarrassing hidden in the middle of text"
    },
    {
        name:"Books Library",
        Disc:"If you are going to use a passage of anything embarrassing hidden in the middle of text"
    },
    {
        name:"Books Library",
        Disc:"If you are going to use a passage of anything embarrassing hidden in the middle of text"
    },
    {
        name:"Books Library",
        Disc:"If you are going to use a passage of anything embarrassing hidden in the middle of text"
    },
];


const WhyChoseUs = (val) => {
    return (

        <section className="small_pb">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="text-center animation" data-animation="fadeInUp" data-animation-delay="0.01s">
                            <div className="heading_s1 text-center">
                                <h2>Why Choose Us</h2>
                            </div>
                            <p>If you are going to use a passage of you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                {WhyChose.map((WhyChosee)=>
                        <WhyComponent {...WhyChosee} />
                )}
                    
                </div>
            </div>
        </section>
    )
}

export default WhyChoseUs

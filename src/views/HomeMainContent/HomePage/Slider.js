import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const Slider = () => {
  const items = [
    <div className="item" data-value="1"><img className="item245" alt="khalid" src="/assets/images/slide-1.jpg" /></div>,
    <div className="item" data-value="2"><img className="item245" alt="khalid" src="/assets/images/slide-2.jpg" /></div>,
    <div className="item" data-value="3"><img className="item245" alt="khalid" src="/assets/images/slide-3.jpg" /></div>,
    <div className="item" data-value="4"><img className="item245" alt="khalid" src="/assets/images/slide-4.jpg" /></div>,
    <div className="item" data-value="5"><img className="item245" alt="khalid" src="/assets/images/slide-5.jpg" /></div>,
];
  return (
    <AliceCarousel
    autoPlay
    
    autoPlayStrategy="none"
    autoPlayInterval={1000}
    animationDuration={1000}
    animationType="fadeout"
    infinite
    touchTracking={false}
    disableDotsControls
    disableButtonsControls
    items={items}
/>
  )
}

export default Slider

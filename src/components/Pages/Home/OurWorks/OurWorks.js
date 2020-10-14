import React from 'react';
import './OurWorks.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import img1 from '../../../../images/carousel-1.png';            
import img2 from '../../../../images/carousel-2.png';            
import img3 from '../../../../images/carousel-5.png';            

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={img1} onDragStart={handleDragStart} style={{width:'97%'}} alt="img"/>,
  <img src={img2}  onDragStart={handleDragStart} style={{width:'97%'}} alt="img"/>,
  <img src={img2}  onDragStart={handleDragStart} style={{width:'97%'}} alt="img"/>,
  <img src={img2}  onDragStart={handleDragStart} style={{width:'97%'}} alt="img"/>,
  <img src={img3}  onDragStart={handleDragStart} style={{width:'97%'}} alt="img"/> 
]
  const OurWorks = () => {
    return (
        <div className="py-5" id="our-works">
           <div className="our-works container">
           <h3 className="py-5 text-center text-white">Here are some of <span className="span-color">our works</span></h3>

            <div className="carousel-slide ">
                <AliceCarousel 
                    mouseTracking 
                    items={items}
                    responsive={responsive}
                    disableButtonsControls
                    autoPlay
                    infinite
                    animationDuration={1900}
                    autoPlayInterval={1100}
                />
            </div>
           </div>
        </div>
    )
}



export default OurWorks;

import React from 'react'
import banner1 from '../img/banner/banner1.png';
import banner2 from '../img/banner/banner2.png';
import banner3 from '../img/banner/banner3.png';
import banner4 from '../img/banner/banner4.png';
import banner5 from '../img/banner/banner5.png';
import {carousel} from '../js/carousel';

export const Carousel = () => {
  return (
    <div className="carousel">
        <img src={banner1} alt="img-banner1" className="img-show" id="imgBanner1" />
        <img src={banner2} alt="img-banner2" className="img-left" id="imgBanner2" />
        <img src={banner3} alt="img-banner3" className="img-left" id="imgBanner3" />
        <img src={banner4} alt="img-banner4" className="img-left" id="imgBanner4" />
        <img src={banner5} alt="img-banner5" className="img-left" id="imgBanner5" />
    </div>
  )
  carousel();
}
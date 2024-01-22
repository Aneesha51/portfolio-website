import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Portfolio1 from '../../Assets/Kali.png';
import Portfolio2 from '../../Assets/Lorem_ipsome.png';
import Portfolio3 from '../../Assets/React-weather.png';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './carousels.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Carousel() {
  return (
    <div className='workImgs'>
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Portfolio1} className='carouselsImg' alt='Kali'/>
        </SwiperSlide>,
        <SwiperSlide>
          <img src={Portfolio2} className='carouselsImg' alt='Demo'/>
        </SwiperSlide>,
        <SwiperSlide>
          <img src= {Portfolio3} className='carouselsImg' alt='Weather'/>
        </SwiperSlide>
      </Swiper>
    </>
    </div>
    
  );
}
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { EffectCube, Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        modules={[EffectCube, Pagination, Navigation, Autoplay]}
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: false,
          slideShadows: false,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{
          type: 'fraction',
        }}
        navigation={false}
        
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
           }}
        className="mySwiper"
      >

        <SwiperSlide>
          <a href="#/"><img src="./src/assets/Project-4-Fashion-sq.jpg" data-swiper-autoplay="3000"/></a>
          <h3>Fashion Designer</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./src/assets/Project-2-cars.jpg" />
          <h3>Classic Car Rental</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./src/assets/Project-3-Hotel-sq.jpg"  />
          <h3>Grand Hotel</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./src/assets/Project-5-Volunteer.jpg" />
          <h3>White Bean Caritative</h3>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

{/* <SwiperSlide>
<a href="#/"><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></a>
</SwiperSlide>
<SwiperSlide>
<img src="https://swiperjs.com/demos/images/nature-2.jpg" />
</SwiperSlide>
<SwiperSlide>
<img src="https://swiperjs.com/demos/images/nature-3.jpg" />
</SwiperSlide>
<SwiperSlide>
<img src="https://swiperjs.com/demos/images/nature-4.jpg" />
</SwiperSlide> */}
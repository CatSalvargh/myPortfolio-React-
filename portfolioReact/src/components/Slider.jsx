import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCube, Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Slider() {

  const [swiperRef, setSwiperRef] = useState(null);
 
  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

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
          clickable: true,
          type: 'fraction',
        }}
        navigation={false}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
            }}
        className="mySwiper"
      >

        <SwiperSlide>
          <img src="./src/assets/Project-4-Fashion-sq.jpg" data-swiper-autoplay="3000"   />
          <h3 id='1' className='slideTitle'>Fashion Designer</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./src/assets/Project-2-cars.jpg" />
          <h3 id='P1-ClassicHC'>Classic Car Rental</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./src/assets/Project-5-Volunteer.jpg" />
          <h3 id='P3-WBCaritative'>White Bean Caritative</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./src/assets/Project-3-Hotel-sq.jpg"  />
          <h3 id='P4-GrandHotel'>Grand Hotel</h3>
        </SwiperSlide>
      </Swiper>
      <button className="slider-btn" onClick={prevHandler}>Prev</button>
      <button className="slider-btn" onClick={nextHandler}>Next</button>
     </>
  );
}
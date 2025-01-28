import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const CustomSlider = () => {
  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation
      >
        <SwiperSlide>
          <img src="https://via.placeholder.com/800x400/FF5733/FFFFFF?text=Image+1" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/800x400/33FF57/FFFFFF?text=Image+2" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/800x400/3357FF/FFFFFF?text=Image+3" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/800x400/5733FF/FFFFFF?text=Image+4" alt="Slide 4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CustomSlider;

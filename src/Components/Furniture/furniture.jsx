import styles from './furniture.module.scss';
import React from 'react';

// Autoplay modülünü import ediyoruz, çünkü "kayıp bekleme" işini o yapacak
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';

import 'swiper/css';

const slides = [
  { id: 1, image: '/assets/furniture/furniture1.png', title: 'Furniture 1' },
  { id: 2, image: '/assets/furniture/furniture2.png', title: 'Furniture 2' },
  { id: 3, image: '/assets/furniture/furniture3.png', title: 'Furniture 3' },
  { id: 4, image: '/assets/furniture/furniture4.png', title: 'Furniture 4' },
  { id: 5, image: '/assets/furniture/furniture2.png', title: 'Furniture 5' },
  { id: 6, image: '/assets/furniture/furniture4.png', title: 'Furniture 6' },

  { id: 8, image: '/assets/furniture/furniture2.png', title: 'Furniture 2' },
  { id: 9, image: '/assets/furniture/furniture3.png', title: 'Furniture 3' },
];

function Furniture({ reverse }) {
  return (
    <div className={styles.container}>
      <Swiper
        className={styles.swiper}
        modules={[Autoplay, A11y]}
        loop={false}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          reverseDirection: reverse,
        }}
        onReachEnd={(swiper) => {
          setTimeout(() => {
            swiper.slideTo(0, 1300);
          }, 1800);
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 10 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
          1440: { slidesPerView: 4, spaceBetween: 30 },
          1800: { slidesPerView: 5, spaceBetween: 40 },
        }}
        centeredSlides={false}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.card}>
              <img
                className={styles.furniture}
                src={slide.image}
                alt={slide.title}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Furniture;

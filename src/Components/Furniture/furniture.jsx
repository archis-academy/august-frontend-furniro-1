import styles from "./furniture.module.scss";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import ExploreCard from "../ExploreCard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  { id: 1, image: "/assets/furniture/furniture1.png" },
  { id: 2, image: "/assets/furniture/furniture2.png" },
  { id: 3, image: "/assets/furniture/furniture3.png" },
  { id: 4, image: "/assets/furniture/furniture4.png" },
  { id: 5, image: "/assets/furniture/furniture2.png" },
  { id: 6, image: "/assets/furniture/furniture4.png" },
];

function Furniture() {
  const swiperRef = useRef(null);
  const [slideCount, setSlideCount] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!swiperRef.current) return;

      const swiper = swiperRef.current;

      if (slideCount === 5) {
        swiper.slideTo(0, 600); 
        setSlideCount(0);
      } else {
        swiper.slideNext();
        setSlideCount((prev) => prev + 1);
      }
    }, 1800);

    return () => clearInterval(interval);
  }, [slideCount]);

  return (
    <div className={styles.exploreSectionCarousel}>
      <Swiper
        modules={[A11y]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        centeredSlides
        loop={false} 
        slidesPerView={4}
        breakpoints={{
          768: { slidesPerView: 1.6, spaceBetween: 12 },
          1024: { slidesPerView: 2.2, spaceBetween: 16 },
          1280: { slidesPerView: 2.6, spaceBetween: 20 },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.card}>
              <img  className={styles.furniture} src={slide.image} alt={slide.title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Furniture;

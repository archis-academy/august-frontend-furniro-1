import React, { useState }  from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './carousel.scss';
import ExploreCard from '../ExploreCard';

const slides = [
    { id: 1, image: "/assets/explore-section/2.png", title: "Inner Peace", room: "Living Room" },
    { id: 2, image: "/assets/explore-section/2.png", title: "Kitchen", room: "Kitchen" },
    { id: 3, image: "/assets/explore-section/2.png", title: "Bedroom", room: "Bedroom" },
    { id: 4, image: "/assets/explore-section/2.png", title: "Bedroom", room: "Bedroom" },
    { id: 5, image: "/assets/explore-section/2.png", title: "Bedroom", room: "Bedroom" },
]
const Carousel = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    return (
        <div className="explore-section-carousel">
            <Swiper
                modules={[Pagination, Autoplay, A11y]}
                navigation
                // loop={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                slidesPerView={2}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                breakpoints={{
                    768: { slidesPerView: 1.6, spaceBetween: 12 },
                    1024: { slidesPerView: 2.2, spaceBetween: 16 },
                    1280: { slidesPerView: 2.6, spaceBetween: 20 },
                }}
            >
                {slides.map(slide => (
                    <SwiperSlide key={slide.id}>
                        <div className="card">
                            <img src={slide.image} alt={slide.title} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <ExploreCard data={slides[activeIndex]} />
        </div>
    );
}

export default Carousel
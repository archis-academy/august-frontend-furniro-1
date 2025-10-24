// Furniture.jsx

import styles from './wrapper.module.scss';
import React, { useState, useEffect, useRef, createRef } from 'react';

const slides = [
  { id: 1, image: '/assets/furniture/furniture1.png', title: 'Furniture 1' },
  { id: 1, image: '/assets/furniture/furniture5.png', title: 'Furniture 1' },
  { id: 2, image: '/assets/furniture/furniture2.png', title: 'Furniture 2' },
  { id: 3, image: '/assets/furniture/furniture3.png', title: 'Furniture 3' },
  { id: 4, image: '/assets/furniture/furniture4.png', title: 'Furniture 4' },
  { id: 5, image: '/assets/furniture/furniture2.png', title: 'Furniture 5' },
  { id: 6, image: '/assets/furniture/furniture4.png', title: 'Furniture 6' },
  { id: 7, image: '/assets/furniture/furniture1.png', title: 'Furniture 7' },
  { id: 8, image: '/assets/furniture/furniture2.png', title: 'Furniture 8' },
];

function Wrapper() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidePositions, setSlidePositions] = useState([]);
  const [lastValidIndex, setLastValidIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true); 

  const slideRefs = useRef([]);
  const sliderContainerRef = useRef(null);
  slideRefs.current = slides.map((_, i) => slideRefs.current[i] ?? createRef());
  
  // Yüklenen resim sayısını takip etmek için bir ref
  const imagesLoaded = useRef(0);

  // --- 1. ÖLÇÜM ve HESAPLAMA FONKSİYONU ---
  const calculateLayout = () => {
    if (!sliderContainerRef.current) return;

    const positions = slideRefs.current.map(ref => ref.current.offsetLeft);
    setSlidePositions(positions);

    const containerWidth = sliderContainerRef.current.offsetWidth;
    const lastSlide = slideRefs.current[slides.length - 1].current;
    const totalWidth = lastSlide.offsetLeft + lastSlide.offsetWidth;
    const maxScroll = totalWidth - containerWidth;

    let lastIndex = 0;
    for (let i = positions.length - 1; i >= 0; i--) {
      if (positions[i] <= maxScroll + 5) {
        lastIndex = i;
        break;
      }
    }
    setLastValidIndex(lastIndex);
    setIsLoading(false); // Her şey hazır, yüklemeyi bitir.
  };

  // Her bir resim yüklendiğinde bu fonksiyon tetiklenecek
  const handleImageLoad = () => {
    imagesLoaded.current += 1;
    if (imagesLoaded.current === slides.length) {
      // Bütün resimler yüklendi, şimdi ölçüm yapabiliriz!
      calculateLayout();
    }
  };

  // --- 2. OTOMASYON useEffect'i ---
  useEffect(() => {
    // Yükleme devam ediyorsa veya son index hesaplanmadıysa başlama
    if (isLoading || lastValidIndex === 0) return;

    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => {
        if (prevIndex >= lastValidIndex) {
          setTimeout(() => setCurrentIndex(0), 1500);
          return lastValidIndex; 
        }
        return prevIndex + 1;
      });
    }, 2500);

    return () => clearInterval(intervalId);
  }, [isLoading, lastValidIndex]);

  return (
    <div className={styles.sliderContainer} ref={sliderContainerRef}>
      {isLoading && <div className={styles.loading}>Yükleniyor...</div>}
      <div
        className={styles.sliderWrapper}
        style={{
          opacity: isLoading ? 0 : 1, // Yüklenirken görünmez yap
          transform: `translateX(-${slidePositions[currentIndex] || 0}px)`
        }}
      >
        {slides.map((slide, index) => (
          // Artık large/small class'ları yok!
          <div key={slide.id} ref={slideRefs.current[index]} className={styles.slide}>
            <img
              src={slide.image}
              alt={slide.title}
              className={styles.furnitureImage}
              onLoad={handleImageLoad} // Resim yüklenince fonksiyonu çağır
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wrapper;
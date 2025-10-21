import Furniture from '../Furniture/furniture';
import styles from './furnitureSection.module.scss';

function FurnitureSection() {
  const slides = [
    { id: 1, image: './assets/furniture/furniture1.png' },
    { id: 2, image: './assets/furniture/furniture2.png' },
    { id: 3, image: './assets/furniture/furniture3.png' },
    { id: 4, image: './assets/furniture/furniture4.png' },
    { id: 5, image: './assets/furniture/furniture5.png' },
     { id: 2, image: './assets/furniture/furniture2.png' },
    { id: 3, image: './assets/furniture/furniture3.png' },
    { id: 4, image: './assets/furniture/furniture4.png' },
  ];
  return (
    <div>
      <Furniture reverse={false} />
      <div className={styles.container}>
        {slides.map((slide) => (
          <div key={slide.id} className={styles.card}>
            <img
              className={styles.furniture}
              src={slide.image}
              alt={slide.title}
              height={350}
            />
          </div>
        ))}
      </div>
      <Furniture reverse={true} />
    </div>
  );
}

export default FurnitureSection;

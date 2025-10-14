import Furniture from '../Furniture/furniture';
import styles from './furnitureSection.module.scss'



function FurnitureSection() {
    const slides = [
  { id: 1, image: './assets/furniture/furniture1.png' },
  { id: 2, image: './assets/furniture/furniture2.png' },
  { id: 3, image: './assets/furniture/furniture3.png' },
  { id: 4, image: './assets/furniture/furniture4.png'},
];
  return (
    <div>
      <Furniture />
      <div className={styles.container}>
        {slides.map((slide) => (
          <div key={slide.id} className={styles.card}>
            <img
              className={styles.furniture}
              src={slide.image}
              alt={slide.title}
            />
          </div>
        ))}
      </div>
      <Furniture />
    </div>
  );
}

export default FurnitureSection;

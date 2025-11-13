import styles from './productCompare.module.scss';
import Buttons from '../Button/button';
import { Star } from 'lucide-react';

function ProductCompare() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>Go to Product page for more Products</h2>
        <p>View More</p>
      </div>
      <div className={styles.card}>
        <img
          src="assets/images/comparison/asgaard.svg"
          alt="Asgaard Sofa"
          className={styles.image}
        />

        <div className={styles.details}>
          <h3 className={styles.title}>Asgaard Sofa</h3>
          <p className={styles.price}>$ 250,000</p>

          <div className={styles.rating}>
            <p className={styles.score}>5</p>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="#FFC107" stroke="#FFC107" size={18} />
              ))}
            </div>
            <p className={styles.review}>204 Review</p>
          </div>
        </div>
      </div>
       <div className={styles.card}>
        <img
          src="assets/images/comparison/outdoor.svg"
          alt="Asgaard Sofa"
          className={styles.image}
        />

        <div className={styles.details}>
          <h3 className={styles.title}>Outdoor Sofa Set</h3>
          <p className={styles.price}>$ 224,000</p>

          <div className={styles.rating}>
            <p className={styles.score}>4</p>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill={i < 4 ? "#FFC107" : "none"} stroke="#FFC107" size={18} />
              ))}
            </div>
            <p className={styles.review}>204 Review</p>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <h2>Add A Product</h2>
        <div>
          <Buttons text="Choose a Product" variant="quinary" />
        </div>
      </div>
    </div>
  );
}

export default ProductCompare;

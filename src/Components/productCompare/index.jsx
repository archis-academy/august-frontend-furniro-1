import ProductCard from '../ProductCard';
import styles from './productCompare.module.scss';
import Buttons from '../Button/button';

function ProductCompare() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>Go to Product page for more Products</h2>
        <p>View More</p>
      </div>
      <ProductCard />
      <ProductCard />
      <div className={styles.button}>
        <h2>Add A Product</h2>
        <div>
          <Buttons text="Choose a Product" variant="primary" />
        </div>
      </div>
    </div>
  );
}

export default ProductCompare;

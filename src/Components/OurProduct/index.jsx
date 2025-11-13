import ProductCard from '../ProductCard';
import styles from './OurProduct.module.scss';

function OurProduct({ products }) {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {products.map((item, i) => (
          <ProductCard
            key={i}
            variant={item?.isNew ? 'pill' : 'ribbon'}
            badgeText={
              item?.isNew
                ? 'NEW'
                : item?.discount
                  ? `${item?.discount}%`
                  : '10%'
            }
            rating={4}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}

export default OurProduct;

import ProductCard from '../ProductCard';
import { useState } from 'react';
import styles from './relatedProducts.module.scss';
import Buttons from '../Button/button';

const products = [1,2,3,4,5,6,7,8,9,10]; // toplam 10 ürün

function RelatedProducts() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    if (showMore) {
      setVisibleCount(5); // geri 5'e döner
    } else {
      setVisibleCount(10); // 10’a çıkar (2 satır x 5 sütun)
    }
    setShowMore(!showMore);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}><h2>Related Products</h2></div>

      <div className={styles.cards}>
        {products.slice(0, visibleCount).map((item, index) => (
          <ProductCard key={index} />
        ))}
      </div>

      <div>
        <Buttons
          variant="tertiary"
          text={showMore ? 'Show Less' : 'Show More'}
          onClick={handleShowMore}
        />
      </div>
    </div>
  );
}

export default RelatedProducts;



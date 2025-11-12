import { useState } from 'react';
import ProductCard from '../ProductCard';
import Buttons from '../Button/button';
import styles from './OurProduct.module.scss';


const order = [
  'NEW',
  'NEW',
  'NEW',
  'NEW',
  '%15',
  '%15',
  '%15',
  '%15',
  '%15',
  'NEW',
  '%15',
  'NEW',
];

const makeBadges = (count) =>
  Array.from({ length: count }, (_, i) => order[i % 12]);

function OurProduct({ products }) {
  const [showMore, setShowMore] = useState(false);
  // const visibleCount = showMore ? 24 : 6;
  // const badges = makeBadges(visibleCount);

  const [pageNumber, setPageNumber] = useState(1);

  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {products.map((item, i) => (
          <ProductCard
            key={i}
            variant={item === 'NEW' ? 'ribbon' : 'pill'}
            badgeText={"NEW"}
            rating={4}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}

export default OurProduct;

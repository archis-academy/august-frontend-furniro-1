import React, { useState } from 'react';
import ProductCard from '../ProductCard';
import Buttons from '../Button/button';
import styles from './OurProduct.module.scss';

const order = [
  'NEW','NEW','NEW','NEW',
  '%15','%15','%15','%15','%15',
  'NEW','%15','NEW',
];

const makeBadges = (count) =>
  Array.from({ length: count }, (_, i) => order[i % 12]);

function OurProduct() {
  const [showMore, setShowMore] = useState(false);
  const visibleCount = showMore ? 24 : 12;
  const badges = makeBadges(visibleCount);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Our Products</h2>

      <div className={styles.grid}>
        {badges.map((badge, i) => (
          <ProductCard
            key={i}
            variant={badge === 'NEW' ? 'ribbon' : 'pill'}
            badgeText={badge}
            rating={4}
          />
        ))}
      </div>

      <div className={styles.btnWrap}>
        <Buttons
          variant="tertiary"
          text={showMore ? 'Show Less' : 'Show More'}
          onClick={() => setShowMore((v) => !v)}
        />
      </div>
    </section>
  );
}

export default OurProduct;

import React, { useState } from 'react';
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

function OurProduct({ showTitle }) {
  const [showMore, setShowMore] = useState(false);
  const visibleCount = showMore ? 24 : 12;
  const badges = makeBadges(visibleCount);

  const [pageNumber, setPageNumber] = useState(1);

  return (
    <section className={styles.container}>
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
        {showTitle ? (
          <div className={styles.showbtnWrap}>
          <Buttons
            variant="tertiary"
            text={showMore ? 'Show Less' : 'Show More'}
            onClick={() => setShowMore((v) => !v)}
          />
          </div>
        ) : (
          <div className={styles.shopBtn}>
            <Buttons
              variant={pageNumber === 1 ? 'primary' : 'secondary'}
              text="1"
              onClick={() => setPageNumber(1)}
            />
            <Buttons
              variant={pageNumber === 2 ? 'primary' : 'secondary'}
              text="2"
              onClick={() => setPageNumber(2)}
            />
            <Buttons
              variant={pageNumber === 3 ? 'primary' : 'secondary'}
              text="3"
              onClick={() => setPageNumber(3)}
            />
            <Buttons
              variant="secondary"
              text="Next"
              onClick={() => setPageNumber((prev) => prev + 1)}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default OurProduct;

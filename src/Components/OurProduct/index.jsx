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

function OurProduct({ showTitle,products }) {
  const [showMore, setShowMore] = useState(false);
  const visibleCount = showMore ? 24 : 6;
  const badges = makeBadges(visibleCount);

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
          <div className={styles.buttons}>
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
            onClick={() => setPageNumber(pageNumber + 1)}
            disabled={pageNumber >= 3}
          />
        </div>
        )}
      </div>
    </section>
  );
}

export default OurProduct;

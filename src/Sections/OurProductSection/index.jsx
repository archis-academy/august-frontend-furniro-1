import React from 'react';
import OurProduct from '../../Components/OurProduct';
import styles from './OurProductSection.module.scss';
import Filters from '../../Components/ProductCategory/index';
import { BestSellersList } from '../../Components/BestSellers';

function OurProductSection({showTitle = true}) {
  return (
    <section className={styles.sectionContainer}>
      {showTitle && <h2 className={styles.title}>Our Products</h2>}
      <div className={styles.contentWrap}>
        <aside className={styles.sidePart}>
          <div className={styles.container}>
            <Filters />
            <BestSellersList />
          </div>
        </aside>

        <div className={styles.ourProductWrap}>
          <OurProduct />
        </div>
      </div>
    </section>
  );
}

export default OurProductSection;

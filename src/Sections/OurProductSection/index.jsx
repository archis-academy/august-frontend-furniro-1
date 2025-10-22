import React from 'react';
import OurProduct from '../../Components/OurProduct';
import styles from './OurProductSection.module.scss';
import Filters from '../../Components/ProductCategory';

function OurProductSection() {
  return (
    <section className={styles.sectionContainer}>
      <aside className={styles.sidePart}>
        <Filters />
      </aside>

      <div className={styles.ourProductWrap}>
        <OurProduct />
      </div>
    </section>
  );
}

export default OurProductSection;

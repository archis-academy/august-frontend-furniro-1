import React from 'react';
import OurProduct from '../../Components/OurProduct';
import styles from './OurProductSection.module.scss';

function OurProductSection() {
  return (
    <section className={styles.sectionContainer}>
      <aside className={styles.sidePart}>
        {/* Sidebar content can go here (şimdilik boş alan) */}
      </aside>

      <div className={styles.ourProductWrap}>
        <OurProduct />
      </div>
    </section>
  );
}

export default OurProductSection;

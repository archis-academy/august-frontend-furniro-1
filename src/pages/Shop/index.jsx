import React from 'react';
import OurProductSection from '../../Sections/OurProductSection';
import PageHeader from '../../Components/PageHeader';
import styles from './Shop.module.scss';


function Shop() {
  return (
    <div className={styles.shopContainer}>
      <PageHeader />
      <OurProductSection showTitle={false} />
    </div>
  );
}

export default Shop;

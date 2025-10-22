import React from 'react';
import OurProductSection from '../../Sections/OurProductSection';
import PageHeader from '../../Components/PageHeader';
import styles from './Shop.module.scss';
import FeaturesSection from '../../Components/FeaturesSection';


function Shop() {
  return (
    <div className={styles.shopContainer}>
      <PageHeader />
      <OurProductSection showTitle={false} />
      <FeaturesSection />
    </div>
  );
}

export default Shop;

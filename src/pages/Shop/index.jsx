import React from 'react';
import OurProductSection from '../../Sections/OurProductSection';
import PageHeader from '../../Components/PageHeader';
import styles from './Shop.module.scss';
import FeaturesSection from '../../Components/FeaturesSection';
import ShoppingMenuSection from '../../Sections/ShoppingMenuSection/index';
import Buttons from '../../Components/Button/button';
import { useState } from 'react';

function Shop() {
  
  return (
    <div className={styles.shopContainer}>
      <PageHeader />
      <ShoppingMenuSection />
      <OurProductSection showTitle={true} />
      <FeaturesSection />
    </div>
  );
}

export default Shop;

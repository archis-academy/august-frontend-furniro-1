import React from 'react';
import styles from './Cart.module.scss';
import PageHeader from '../../Components/PageHeader';
import FeaturesSection from '../../Components/FeaturesSection';
import SingleProductDetails from '../../Components/SingleProductDetails';

export const Cart = () => {
  return (
    <>
      <div className={styles.container}>
        <PageHeader />
        <FeaturesSection />
      </div>
    </>
  );
};

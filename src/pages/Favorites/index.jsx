import React from 'react';
import styles from './Favorites.module.scss';
import PageHeader from '../../Components/PageHeader';
import FeaturesSection from '../../Components/FeaturesSection';
import SingleProductDetails from '../../Components/SingleProductDetails';
import ShoppingMenuSection from '../../Sections/ShoppingMenuSection';

export const Favorites = () => {
  return (
    <>
      <div className={styles.container}>
        <PageHeader />
        <FeaturesSection />
      </div>
    </>
  );
};

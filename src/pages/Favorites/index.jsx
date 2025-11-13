import React from 'react';
import styles from './Favorites.module.scss';
import PageHeader from '../../Components/PageHeader';
import FeaturesSection from '../../Components/FeaturesSection';
import SingleProductDetails from '../../Components/SingleProductDetails';
import ShoppingMenuSection from '../../Sections/ShoppingMenuSection';
// import FavoritesProducts from '../../Components/FavoritesProducts';

export const Favorites = () => {
  //api çekilmeli

  return (
    <>
      <div className={styles.container}>
        <PageHeader />
        {/* <FavoritesProducts /> */}
        <FeaturesSection />
      </div>
    </>
  );
};

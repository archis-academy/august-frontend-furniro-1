import React from 'react';
import styles from './FavoritesProducts.module.scss';

export const FavoritesProducts = ({ image, name, price }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={image} alt={name} />
        </div>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
        <img src="/assets/icons/favorites/delete_icon.svg" alt="delete" />
      </div>
    </>
  );
};

import React from 'react';
import styles from './Favorites.module.scss';

import PageHeader from '../../Components/PageHeader';
import FeaturesSection from '../../Components/FeaturesSection';
import { FavoritesProducts } from '../../Components/FavoritesProducts';
import { useFavorites } from '../../context/FavoriteContext';
import Buttons from '../../Components/Button/button';

export const Favorites = () => {
  const { favoritesItems, toggleFavorites } = useFavorites();

  return (
    <div className={styles.container}>
      <PageHeader />

      <div className={styles.favoritesList}>
        {favoritesItems.length === 0 ? (
          <div className={styles.emptyFavorites}>
          <p className={styles.emptyText}>No favorite products yet.</p>
          <Buttons text="Discover Our Products" onClick={() => window.location.href = '/shop'} />
          </div>

        ) : (
          favoritesItems.map((item) => {
            const firstImageObj = item.images?.[0];

            const mainImage =
              firstImageObj?.image ||
              firstImageObj?.img ||
              firstImageObj?.url ||
              firstImageObj?.src ||
              '';

            return (
              <FavoritesProducts
                key={item.id}
                image={mainImage}
                name={item.name}
                price={`$ ${item.price}`}
                onRemove={() => toggleFavorites(item)}
              />
            );
          })
        )}
      </div>

      <FeaturesSection />
    </div>
  );
};

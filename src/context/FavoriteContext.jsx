import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoritesItems, setFavoritesItems] = useState(() => {
    try {
      const saved = localStorage.getItem('favorite');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(favoritesItems));
  }, [favoritesItems]);

  const toggleFavorites = (item) => {
    const existing = favoritesItems.find((i) => i.id === item.id);
    if (existing) {
      setFavoritesItems((prev) => prev.filter((i) => i.id !== item?.id));
      toast.error(`"${item.name || 'Ürün'}" favorilerden kaldırıldı`);
    } else {
      setFavoritesItems((prev) => [...prev, item]);
      toast.success(`"${item.name || 'Ürün'}" favorilere eklendi!`);
    }
  };

  const clearFavorites = () => setFavoritesItems([]);
  return (
    <FavoritesContext.Provider
      value={{
        favoritesItems,
        setFavoritesItems,
        toggleFavorites,
        clearFavorites,
      }}
    >
      {' '}
      {children}{' '}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

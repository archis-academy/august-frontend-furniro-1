import { useFavorites } from '../../../context/FavoriteContext';
import styles from './favorites.module.scss';
import { useNavigate } from 'react-router-dom';

function Favorites({ toggle, setToggle }) {
  const { favoritesItems, toggleFavorites } = useFavorites();
  const navigate = useNavigate();

  return (
    <div className={styles.icon}>
      <img
        src="/assets/icons/navbar/like.svg"
        alt="like icon"
        onClick={(e) => {
          e.stopPropagation();
          toggle === 'favorites' ? setToggle(null) : setToggle('favorites');
        }}
      />

      {toggle === 'favorites' && (
        <div className={styles.container} onClick={(e) => e.stopPropagation()}>
          <div className={styles.title}>
            Favorites Card
            <img src="/assets/icons/navbar/lock.svg" alt="lock" />
          </div>

          <hr className={styles.line}></hr>

          <div className={styles.scrollArea}>
            {favoritesItems.length === 0 && (
              <p className={styles.emptyText}>No favorite products yet.</p>
            )}

            {favoritesItems.slice(0, 4).map((product) => (
              <div className={styles.product1} key={product.id}>
                <div className={styles.image}>
                  <img
                    src={product.images[0].url}
                    alt="product"
                    width={105}
                    height={105}
                  />
                </div>
                <div className={styles.info}>
                  <div>{product.name}</div>
                </div>
                <div
                  className={styles.vector}
                  onClick={() => toggleFavorites(product)}
                >
                  <img src="/assets/icons/navbar/vector.svg" alt="remove" />
                </div>
              </div>
            ))}
          </div>

          <hr className={styles.line}></hr>

          <div className={styles.tabs}>
            <p
              className={styles.tab}
              onClick={() => navigate(favoritesItems?.length === 0 ?   '/shop' : '/favorites' )}
              role="button"
            >
              {favoritesItems?.length === 0 ? 'Discover Our Products' : 'See More'  }
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Favorites;

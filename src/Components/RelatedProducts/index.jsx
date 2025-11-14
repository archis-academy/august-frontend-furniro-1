import ProductCard from '../ProductCard';
import { useState, useEffect } from 'react';
import styles from './relatedProducts.module.scss';
import Buttons from '../Button/button';

function RelatedProducts({ currentProductId }) {
  const API_URL = 'https://furniro-api-vd0v.onrender.com/products';

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [visibleCount, setVisibleCount] = useState(5);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchRelatedProducts = async () => {
      try {
        const response = await fetch(API_URL + `?_limit=11`);
        if (!response.ok) {
          throw new Error(`HTTP hatası! Durum: ${response.status}`);
        }
        const data = await response.json();

        const filteredProducts = data.filter(
          (product) => product.id !== currentProductId,
        );

        setProducts(filteredProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [currentProductId]);

  const handleShowMore = () => {
    if (showMore) {
      setVisibleCount(5);
    } else {
      setVisibleCount(10);
    }
    setShowMore(!showMore);
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Related Products</h2>
        </div>
        <div className={styles.loaderWrapper}>
          <div className={styles.spinner}></div>{' '}
          <p>İlgili ürünler yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Related Products</h2>
        </div>
        <div>Bir hata oluştu: {error}</div>
      </div>
    );
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>RelatedProducts</h2>
      </div>

      <div className={styles.cards}>
        {products.slice(0, visibleCount).map((item, i) => (
          <ProductCard
            key={i}
            variant={item?.isNew ? 'pill' : 'ribbon'}
            badgeText={
              item?.isNew
                ? 'NEW'
                : item?.discount
                  ? `${item?.discount}%`
                  : '10%'
            }
            rating={item?.rating?.stars}
            item={item}
          />
        ))}
      </div>

      {products.length > 5 && (
        <div className={styles.buttonWrapper}>
          <Buttons
            variant="tertiary"
            text={showMore ? 'Show Less' : 'Show More'}
            onClick={handleShowMore}
          />
        </div>
      )}
    </div>
  );
}

export default RelatedProducts;

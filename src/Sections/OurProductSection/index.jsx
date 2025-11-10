import OurProduct from '../../Components/OurProduct';
import styles from './OurProductSection.module.scss';
import Filters from '../../Components/ProductCategory/index';
import { BestSellersList } from '../../Components/BestSellers';
import { useState, useEffect } from 'react';

function OurProductSection({ showTitle = true }) {
  const API_URL =
    'https://furniro-api-vd0v.onrender.com/products';
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP hatası! Durum: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        seterror(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Ürünler yükleniyor, lütfen bekleyin...</div>;
  }
   if (error) {
    return <div>Bir hata oluştu: {error}</div>;
  }

  return (
    <section className={styles.sectionContainer}>
      {showTitle && <h2 className={styles.title}>Our Products</h2>}
      <div className={styles.contentWrap}>
        <aside className={styles.sidePart}>
          <div className={styles.container}>
            <Filters />
            <BestSellersList />
          </div>
        </aside>

        <div className={styles.ourProductWrap}>
          <OurProduct showTitle={showTitle} products={products} />
        </div>
      </div>
    </section>
  );
}

export default OurProductSection;

import OurProduct from '../../Components/OurProduct';
import styles from './OurProductSection.module.scss';
import Filters from '../../Components/ProductCategory/index';
import { BestSellersList } from '../../Components/BestSellers';
import { useState, useEffect } from 'react';
import Buttons from '../../Components/Button/button';

function OurProductSection({ showTitle = true }) {
  const API_URL = 'https://furniro-api-vd0v.onrender.com/products';

  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          API_URL + `?_page=${pageNumber}&_limit=${pageSize}`,
        );
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
  }, [pageNumber, pageSize]);
  if (loading) {
    return (
      <div className={styles.loaderWrapper}>
        <div className={styles.spinner}></div>
        <p>Ürünler yükleniyor, lütfen bekleyin...</p>
      </div>
    );
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
            <BestSellersList products={products} />
          </div>
        </aside>
        <div className={styles.btnWrapper}>
          <div className={styles.ourProductWrap}>
            <OurProduct showTitle={showTitle} products={products} />
          </div>
          {showTitle ? (
            <div className={styles.showbtnWrap}>
              <Buttons
                variant="tertiary"
                text={pageSize === 12 ? 'Show More' : 'Show Less'}
                onClick={() =>
                  pageSize === 12 ? setPageSize(24) : setPageSize(12)
                }
              />
            </div>
          ) : (
            <div className={styles.buttons}>
              <Buttons
                variant={pageNumber === 1 ? 'primary' : 'secondary'}
                text="1"
                onClick={() => setPageNumber(1)}
              />
              <Buttons
                variant={pageNumber === 2 ? 'primary' : 'secondary'}
                text="2"
                onClick={() => setPageNumber(2)}
              />
              <Buttons
                variant={pageNumber === 3 ? 'primary' : 'secondary'}
                text="3"
                onClick={() => setPageNumber(3)}
              />
              <Buttons
                variant="secondary"
                text="Next"
                onClick={() => setPageNumber(pageNumber + 1)}
                disabled={pageNumber >= 3}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default OurProductSection;

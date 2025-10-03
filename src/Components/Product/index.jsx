import React from 'react';
import styles from './Product.module.scss';

function Product({ variant = 'ribbon', badgeText = 'NEW' }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageWrapper}>
        <div className={styles.imageClip}>
          {variant === 'ribbon' && (
            <span className={`${styles.badge} ${styles.badgeRibbon}`}>
              {badgeText}
            </span>
          )}
          {variant === 'pill' && (
            <span className={`${styles.badge} ${styles.badgePill}`}>
              {badgeText}
            </span>
          )}
          <img
            className={styles.image}
            src="/assets/product/cardImage.svg"
            alt="resim"
          />
        </div>
      </div>

      <div className={styles.productDetails}>
        <div className={styles.productName}>Syltherine</div>
        <div className={styles.productDesc}>Stylish cafe chair</div>

        <div className={styles.productStars}>
          <span className={styles.starFilled}>★</span>
          <span className={styles.starFilled}>★</span>
          <span className={styles.starFilled}>★</span>
          <span className={styles.starFilled}>★</span>
          <span className={styles.starEmpty}>★</span>
        </div>

        <div className={styles.prices}>
          <span className={styles.discountPrice}>$ 120</span>
          <span className={styles.originalPrice}>$ 150</span>
        </div>
      </div>
    </div>
  );
}

export default Product;

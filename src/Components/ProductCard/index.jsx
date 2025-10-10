import React, { useState } from 'react';
import styles from './ProductCard.module.scss';

function ProductCard({ variant = 'ribbon', badgeText = 'NEW', rating = 4 }) {
  const [liked, setLiked] = useState(false);
  const totalStars = 5;

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
            alt="Syltherine"
          />

          <div className={styles.actions}>
            <button
              type="button"
              className={`${styles.actionBtn} ${liked ? styles.liked : ''}`}
              aria-label="Like"
              aria-pressed={liked}
              onClick={() => setLiked((v) => !v)}
            >
              <img
                className={styles.likeIcon}
                src={
                  liked
                    ? '/assets/product/likeIcon-filled-red.svg'
                    : '/assets/product/likeIcon.svg'
                }
                alt=""
              />
            </button>

            <button
              type="button"
              className={styles.actionBtn}
              aria-label="Search"
            >
              <img
                className={styles.searchIcon}
                src="/assets/product/searchIcon.svg"
                alt=""
              />
            </button>

            <button
              type="button"
              className={styles.actionBtn}
              aria-label="Add to cart"
            >
              <img
                className={styles.shopIcon}
                src="/assets/product/shopIcon.svg"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.productDetails}>
        <div className={styles.productName}>Syltherine</div>
        <div className={styles.productDesc}>Stylish cafe chair</div>

        <div className={styles.productStars}>
          {Array.from({ length: totalStars }, (_, i) => (
            <span
              key={i}
              className={i < rating ? styles.starFilled : styles.starEmpty}
            >
              ★
            </span>
          ))}
        </div>

        <div className={styles.prices}>
          <span className={styles.discountPrice}>$ 120</span>
          <span className={styles.originalPrice}>$ 150</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

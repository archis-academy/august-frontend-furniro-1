import React, { useState } from 'react';
import styles from './ProductCard.module.scss';

function ProductCard({
  variant = 'ribbon',
  badgeText = 'NEW',
  rating = 4,
  item,
}) {
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
            src={item?.images[0]?.url}
            onError={(e) => {
              e.currentTarget.src =
              item?.images[1]?.url; 
            }}
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
                    ? '/assets/icons/product/likeIcon-filled-red.svg'
                    : '/assets/icons/product/likeIcon.svg'
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
                src="/assets/icons/product/searchIcon.svg"
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
                src="/assets/icons/product/shopIcon.svg"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.productDetails}>
        <div className={styles.productName}>{item?.name}</div>
        <div className={styles.productDesc}>
          {item?.description.slice(0, 30)}...
        </div>

        <div className={styles.productStars}>
          {Array.from({ length: totalStars }, (_, i) => (
            <span
              key={i}
              className={
                i < item.rating.stars ? styles.starFilled : styles.starEmpty
              }
            >
              ★
            </span>
          ))}
        </div>

        <div className={styles.prices}>
          <span className={styles.discountPrice}>{item?.price}</span>
          <span className={styles.originalPrice}>{item?.oldPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

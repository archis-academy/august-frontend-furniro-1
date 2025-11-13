import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.scss';

function ProductCard({ variant = 'ribbon', badgeText = 'NEW', item }) {
  const [liked, setLiked] = useState(false);
  const totalStars = 5;

  const slugify = (text) => {
    if (!text) return ''; // text yoksa boş string dön
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-') // Boşlukları - ile değiştir
      .replace(/[^\w-]+/g, '') // Geçersiz karakterleri (ç,ö,ü, vb.) kaldır
      .replace(/--+/g, '-'); // Birden fazla -- varsa tek - yap
  };
  const productNameUrl = slugify(item?.name);
  const productUrl = `/shop/${productNameUrl}?id=${item?.id}`;
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
              e.currentTarget.src = item?.images[1]?.url;
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
      <Link to={productUrl} key={item?.id} className={styles.productLink}>
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
      </Link>
    </div>
  );
}

export default ProductCard;

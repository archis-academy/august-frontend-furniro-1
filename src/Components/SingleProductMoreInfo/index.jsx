import { useState } from 'react';
import styles from './SingleProductMoreInfo.module.scss';

export const SingleProductMoreInfo = ({ product }) => {
  const more = product?.moreInfo;
  const description = Array.isArray(more?.description) && more.description.length > 0
    ? more.description
    : [product?.description || 'No description available.'];

  const descriptionImages = Array.isArray(more?.descriptionImages) && more.descriptionImages.length > 0
    ? more.descriptionImages
    : Array.isArray(product?.images)
      ? product.images.slice(0, 2)
      : [];

  const additionalInfo = Array.isArray(more?.additionalInfo) ? more.additionalInfo : [];

  const reviews = Array.isArray(more?.reviews) ? more.reviews : [];
  const reviewsCount = reviews.length;

  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className={styles.container}>
      <div className={styles.tabComponent}>
        <button
          className={activeTab === 'description' ? styles.active : ''}
          onClick={() => setActiveTab('description')}
          type="button"
        >
          Description
        </button>
        <button
          className={activeTab === 'info' ? styles.active : ''}
          onClick={() => setActiveTab('info')}
          type="button"
        >
          Additional Information
        </button>
        <button
          className={activeTab === 'reviews' ? styles.active : ''}
          onClick={() => setActiveTab('reviews')}
          type="button"
        >
          Reviews [{reviewsCount}]
        </button>
      </div>

      <div className={styles.content}>
        {activeTab === 'description' && (
          <div className={styles.desc}>
            {description.map((text, i) => (
              <p key={i}>{text}</p>
            ))}

            {descriptionImages.length > 0 && (
              <div className={styles.imageWrapper}>
                {descriptionImages.map((img, i) => (
                  <img
                    key={img.id ?? i}
                    className={i === 0 ? styles.image_1 : styles.image_2}
                    src={img.url || img}
                    alt={img.alt || `desc_${i + 1}`}
                    loading="lazy"
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'info' && (
          <div className={styles.infoList}>
            {additionalInfo.length === 0 ? (
              <p>No additional information.</p>
            ) : (
              additionalInfo.map((row, i) => (
                <p key={i}>
                  <strong>{row.key}:</strong> {row.value}
                </p>
              ))
            )}
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className={styles.reviews}>
            <h4>Customer Reviews ({reviewsCount})</h4>
            {reviewsCount === 0 ? (
              <p>There are no reviews yet.</p>
            ) : (
              <ul>
                {reviews.map((r, i) => (
                  <li key={r.id ?? i}>
                    <strong>{r.author || 'Anonymous'}</strong>: {r.comment}
                    <span>{'⭐'.repeat(Math.max(0, Math.min(5, r.rating || 0)))}</span>{' '}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

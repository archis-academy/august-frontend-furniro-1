import React, { useState } from 'react';
import styles from './BlogPost.module.scss';
export const BlogPost = ({ image, title, category, author, date, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const maxChars = 120;
  const text = content || '';
  const displayedDesc = isExpanded
    ? text
    : text.length > maxChars
      ? text.substring(0, maxChars) + '...'
      : text;

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} alt={title} />
      </div>

      <div className={styles.meta}>
        <div className={styles.meta_item}>
          <img src="/assets/icons/blogpost/icon_1.svg" alt="admin" />
          <span className={styles.meta_info}>{author}</span>
        </div>
        <div className={styles.meta_item}>
          <img src="/assets/icons/blogpost/icon_2.svg" alt="date" />
          <span className={styles.meta_info}>{date}</span>
        </div>
        <div className={styles.meta_item}>
          <img src="/assets/icons/blogpost/icon_3.svg" alt="category" />
          <span className={styles.meta_info}>{category}</span>
        </div>
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{displayedDesc}</p>
      </div>

      {text && text.length > maxChars && (
        <a onClick={toggleExpanded} className={styles.readMoreButton}>
          {isExpanded ? 'Read less' : 'Read more'}
        </a>
      )}
    </div>
  );
};

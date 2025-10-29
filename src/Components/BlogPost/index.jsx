import React from 'react';
import styles from './BlogPost.module.scss';

export const BlogPost = ({ image, title, category }) => {
  const desc =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.';

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} alt={title} />
      </div>

      <div className={styles.meta}>
        <div className={styles.meta_item}>
          <img src="/assets/icons/blogpost/icon_1.svg" alt="admin" />
          <span className={styles.meta_info}>Admin</span>
        </div>
        <div className={styles.meta_item}>
          <img src="/assets/icons/blogpost/icon_2.svg" alt="date" />
          <span className={styles.meta_info}>14 Oct 2022</span>
        </div>
        <div className={styles.meta_item}>
          <img src="/assets/icons/blogpost/icon_3.svg" alt="category" />
          <span className={styles.meta_info}>{category}</span>
        </div>
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{desc}</p>
      </div>
    </div>
  );
};

import React from 'react';
import styles from './RecentPost.module.scss';

export const RecentPost = () => {
  const data = [
    {
      img: '/assets/recentPost/image_1.svg',
      name: 'Going all-in with millennial design',
    },
    {
      img: '/assets/recentPost/image_2.svg',
      name: 'Exploring new ways of decorating',
    },
    {
      img: '/assets/recentPost/image_3.svg',
      name: 'Handmade pieces that took time to make',
    },
    {
      img: '/assets/recentPost/image_4.svg',
      name: 'Modern home in Milan',
    },
    {
      img: '/assets/recentPost/image_5.svg',
      name: 'Colorful office redesign',
    },
  ];

  return (
    <>
      <div className={styles.recentPost__container}>
        <h2 className={styles.recentPost__title}>Recent Posts</h2>

        <div className={styles.recentPost__list}>
          {data.map((post, index) => (
            <div key={index} className={styles.recentPost__item}>
              <img
                src={post.img}
                alt={post.name}
                className={styles.recentPost__image}
              />
              <div className={styles.recentPost__info}>
                <span className={styles.recentPost__itemName}>{post.name}</span>
                <span className={styles.recentPost__itemDate}>03 Aug 2022</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

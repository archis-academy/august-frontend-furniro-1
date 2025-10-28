import React from 'react';
import styles from './BlogPost.module.scss';

export const BlogPost = () => {
  const data = [
    {
      img: '/assets/blogpost/icon_1.svg',
      info: 'Admin',
    },
    {
      img: '/assets/blogpost/icon_2.svg',
      info: '14 Oct 2022',
    },
    {
      img: '/assets/blogpost/icon_3.svg',
      info: 'Wood',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src="/assets/blogpost/post.png"
          alt="post"
        />
      </div>

      <div className={styles.meta}>
        {data.map((item, index) => (
          <div key={index} className={styles.meta_item}>
            <img src={item.img} alt={item.info} />
            <span className={styles.meta_info}>{item.info}</span>
          </div>
        ))}
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>Going all-in with millennial design</h2>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris
          vitae ultricies leo integer malesuada nunc. In nulla posuere
          sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices
          mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis
          molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
          libero. Pellentesque elit ullamcorper dignissim cras tincidunt.
          Pharetra et ultrices neque ornare aenean euismod elementum.
        </p>
      </div>
    </div>
  );
};

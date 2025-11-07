import React, { useEffect, useState } from 'react';

import styles from './Blog.module.scss';
import PageHeader from '../../Components/PageHeader';
import { BlogPost } from '../../Components/BlogPost';
import { RecentPost } from '../../Components/RecentPost';
import FeaturesSection from '../../Components/FeaturesSection';
import BlogPostSorting from '../../Components/BlogPostSorting';
import Buttons from '../../Components/Button/button.jsx';

export const Blog = () => {
  const API_URL = 'https://furniro-api-vd0v.onrender.com/blogs';
  const PAGE_SIZE = 3;

  const [blogs, setBlogs] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`HTTP hatası Durum : ${response.status}`);
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <PageHeader />
        </div>

        <div className={styles.wrapper}>
          <div className={styles.blogPost}>
            {/* <BlogPost /> bu kısımda gelen api a göre çekicez */}
            <BlogPost
              image="/assets/images/blogpost/post.png"
              title="Going all-in with millennial design"
              category="Wood"
            />

            <BlogPost
              image="/assets/images/blogpost/post_2.png"
              title="Exploring new ways of decorating"
              category="Handmade"
            />

            <BlogPost
              image="/assets/images/blogpost/post_3.png"
              title="Handmade pieces that took time to make"
              category="Wood"
            />
          </div>
          <div className={styles.sidebar}>
            <BlogPostSorting />
            <RecentPost />
          </div>
        </div>
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
            onClick={() => setPageNumber((prev) => prev + 1)}
          />
        </div>

        <div className={styles.featuresSection}>
          <FeaturesSection />
        </div>
      </div>
    </>
  );
};

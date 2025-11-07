import React, { useEffect, useMemo, useState } from 'react';

import styles from './Blog.module.scss';
import PageHeader from '../../Components/PageHeader';
import { BlogPost } from '../../Components/BlogPost';
import { RecentPost } from '../../Components/RecentPost';
import FeaturesSection from '../../Components/FeaturesSection';
import BlogPostSorting from '../../Components/BlogPostSorting';
import Buttons from '../../Components/Button/button.jsx';

export const Blog = () => {
  const API_URL = 'https://furniro-api-vd0v.onrender.com/blogs';

  const [blogs, setBlogs] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const PAGE_SIZE = 3;

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          API_URL + `?_page=${pageNumber}&_limit=${PAGE_SIZE}`,
        );
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const data = await response.json();
        setBlogs(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [pageNumber]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pageNumber]);

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <PageHeader />
        </div>

        <div className={styles.wrapper}>
          <div className={styles.blogPost}>
            {error && !loading && <div>Error: {error}</div>}

            {!loading &&
              !error &&
              blogs.map((item) => (
                <BlogPost
                  key={item.id ?? item.title}
                  image={item.image}
                  title={item.title}
                  category={item.category}
                  author={item.author}
                  date={item.date}
                  content={item.content}
                />
              ))}

            {!loading && !error && blogs.length === 0 && (
              <div>No posts found.</div>
            )}
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
            onClick={() => setPageNumber(pageNumber + 1)}
            disabled={pageNumber >= 3}
          />
        </div>

        <div className={styles.featuresSection}>
          <FeaturesSection />
        </div>
      </div>
    </>
  );
};

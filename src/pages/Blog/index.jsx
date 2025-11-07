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
        const response = await fetch(API_URL);
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
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // butona basınca hafifce yukarı atsın
  }, [pageNumber]);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(blogs.length / PAGE_SIZE)),
    [blogs.length],
  );

  const currentPage = Math.min(Math.max(1, pageNumber), totalPages);
  const pageStart = (currentPage - 1) * PAGE_SIZE;

  const pageItems = useMemo(
    () => blogs.slice(pageStart, pageStart + PAGE_SIZE),
    [blogs, pageStart],
  );

  const goToPage = (n) => setPageNumber(Math.min(Math.max(1, n), totalPages));

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <PageHeader />
        </div>

        <div className={styles.wrapper}>
          <div className={styles.blogPost}>
            {loading && <div>Loading...</div>}
            {error && !loading && <div>Error: {error}</div>}

            {!loading &&
              !error &&
              pageItems.map((item) => (
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

            {!loading && !error && pageItems.length === 0 && (
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
            variant={currentPage === 1 ? 'primary' : 'secondary'}
            text="1"
            onClick={() => goToPage(1)}
          />
          <Buttons
            variant={currentPage === 2 ? 'primary' : 'secondary'}
            text="2"
            onClick={() => goToPage(2)}
          />
          <Buttons
            variant={currentPage === 3 ? 'primary' : 'secondary'}
            text="3"
            onClick={() => goToPage(3)}
          />
          <Buttons
            variant="secondary"
            text="Next"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage >= totalPages}
          />
        </div>

        <div className={styles.featuresSection}>
          <FeaturesSection />
        </div>
      </div>
    </>
  );
};

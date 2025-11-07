import React, { useMemo, useState, useEffect } from 'react';
import styles from './BlogPostSorting.module.scss';

export const BlogPostSorting = ({
  blogs,
  onCategoryChange,
  initialCategory = null,
}) => {
  const allCategories = ['Crafts', 'Design', 'Handmade', 'Interior', 'Wood'];

  const mockBlogs = useMemo(
    () => [
      { category: 'Wood' },
      { category: 'Handmade' },
      { category: 'Wood' },
    ],
    [],
  );

  const data = blogs && blogs.length ? blogs : mockBlogs;

  const [query, setQuery] = useState('');
  const [activeCat, setActiveCat] = useState(initialCategory);

  useEffect(() => {
    onCategoryChange?.(activeCat ?? null);
  }, [activeCat, onCategoryChange]);

  const categoryCounts = useMemo(() => {
    const map = new Map();
    data.forEach((b) => {
      const key = (b.category || 'Uncategorized').trim();
      map.set(key, (map.get(key) || 0) + 1);
    });

    return allCategories.map((cat) => [cat, map.get(cat) || 0]);
  }, [data]);

  const handleSubmit = (e) => e.preventDefault();

  return (
    <div className={styles.container}>
      <form className={styles.search} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder=""
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className={styles.icon}>
          <img src="/assets/icons/blogpost-sorting/search_icon.svg" alt="" />
        </span>
      </form>

      <h3 className={styles.title}>Categories</h3>

      <ul className={styles.list}>
        {categoryCounts.map(([name, count]) => {
          const isActive = activeCat === name;
          return (
            <li key={name} className={styles.item}>
              <a
                type="button"
                className={`${styles.left} ${isActive ? styles.active : ''}`}
                onClick={() => setActiveCat(isActive ? null : name)}
              >
                {name}
              </a>
              <span className={styles.count}>{count}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogPostSorting;

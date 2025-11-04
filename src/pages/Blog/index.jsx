import React from 'react';
import styles from './Blog.module.scss';
import PageHeader from '../../Components/PageHeader';
import { BlogPost } from '../../Components/BlogPost';
import { RecentPost } from '../../Components/RecentPost';
import FeaturesSection from '../../Components/FeaturesSection';
import BlogPostSorting from '../../Components/BlogPostSorting';

export const Blog = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <PageHeader />
        </div>

        <div className={styles.middlePart}>
          <div className={styles.leftPart}>
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
          <div className={styles.rightPart}>
            <BlogPostSorting />
            <RecentPost />
          </div>
        </div>

        <div>
          <FeaturesSection />
        </div>
      </div>
    </>
  );
};

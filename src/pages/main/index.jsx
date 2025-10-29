import { ExploreMoreSection, HeroSection } from '../../Sections';
import FurnitureSection from '../../Components/FurnitureSection/index';
import OurProductSection from '../../Sections/OurProductSection';
import { TopCategories } from '../../Sections/TopCategories';
import { BlogPost } from '../../Components/BlogPost';

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <TopCategories />
      <OurProductSection />
      <ExploreMoreSection />
      <FurnitureSection />
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
  );
};

import { ExploreMoreSection, HeroSection } from '../../Sections';
import FurnitureSection from '../../Components/FurnitureSection/index';
import OurProductSection from '../../Sections/OurProductSection';
import { TopCategories } from '../../Sections/TopCategories';
import { RecentPost } from '../../Components/RecentPost';

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <TopCategories />
      <OurProductSection />
      <ExploreMoreSection />
      <FurnitureSection />
      <RecentPost />
    </div>
  );
};

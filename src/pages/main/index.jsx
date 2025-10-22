import React from 'react';
import { ExploreMoreSection, HeroSection } from '../../Sections';
import OurProductSection from '../../Sections/OurProductSection';
import Product from '../../Components/ProductCard';
import { TopCategories } from '../../Sections/TopCategories';

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <TopCategories />
      <ExploreMoreSection />
      <OurProductSection  showTile={true}/>
      
    </div>
  );
};

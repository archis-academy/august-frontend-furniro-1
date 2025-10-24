import React from 'react';
import { ExploreMoreSection, HeroSection } from '../../Sections';
import OurProductSection from '../../Sections/OurProductSection';
import Product from '../../Components/ProductCard';
import { TopCategories } from '../../Sections/TopCategories';
import FurnitureSection from '../../Components/FurnitureSection/index';
import ShoppingMenuSection from '../../Sections/ShoppingMenuSection/index';

export const Home = () => {
  return (
    <div>
      <ShoppingMenuSection/>
      <HeroSection />
      <TopCategories />
      <OurProductSection showTile={true} />
      <ExploreMoreSection />
      <FurnitureSection/>
    </div>
  );
};

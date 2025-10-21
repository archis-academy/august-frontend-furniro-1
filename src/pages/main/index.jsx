import React from 'react';
import { ExploreMoreSection, HeroSection } from '../../Sections';
import FurnitureSection from '../../Components/FurnitureSection/index';
import ShoppingMenuSection from '../../Sections/ShoppingMenuSection/index';

export const Home = () => {
  return (
    <div>
      <ShoppingMenuSection/>
      <HeroSection />
      <ExploreMoreSection />
      <FurnitureSection/>
    </div>
  );
};

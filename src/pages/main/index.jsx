import React from 'react';
import { ExploreMoreSection, HeroSection } from '../../Sections';
import OurProductSection from '../../Sections/OurProductSection';
import Product from '../../Components/ProductCard';

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <ExploreMoreSection />
      <OurProductSection />
      
    </div>
  );
};

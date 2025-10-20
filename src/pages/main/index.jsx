import React from 'react';
import { ExploreMoreSection, HeroSection } from '../../Sections';
import OurProductSection from '../../Sections/OurProductSection';
import Product from '../../Components/ProductCard';
import FeaturesSection from '../../Components/FeaturesSection';

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <ExploreMoreSection />
      <FeaturesSection />
    </div>
  );
};

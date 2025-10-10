import React from 'react';
import { ExploreMoreSection, HeroSection } from '../../Sections';
import Product from '../../Components/Product';

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <ExploreMoreSection />
{/* 
      <Product variant="ribbon" badgeText="NEW" />
      <Product variant="pill" badgeText="15%" /> */}
    </div>
  );
};

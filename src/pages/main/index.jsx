import React from 'react';
import { ExploreMoreSection, HeroSection } from '../../Sections';
import FurnitureSection from '../../Components/FurnitureSection/index';


export const Home = () => {
  return (
    <div>
      <HeroSection />
      <ExploreMoreSection />
      <FurnitureSection/>
    </div>
  );
};

import React from 'react';
import { ExploreMoreSection, HeroSection } from '../../Sections';
import Furniture from '../../Components/Furniture/furniture';


export const Home = () => {
  return (
    <div>
      <HeroSection />
      <ExploreMoreSection />
      <Furniture/>
    </div>
  );
};

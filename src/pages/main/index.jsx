import React from 'react';
import { ExploreMoreSection, HeroSection } from '../../Sections';
import FurnitureSection from '../../Components/FurnitureSection/index';
import Wrapper from '../../Components/Wrapper';
import WrapperReverse from '../../Components/Wrapper/reverse';


export const Home = () => {
  return (
    <div>
      <HeroSection />
      <Wrapper />
      <WrapperReverse />
      <ExploreMoreSection />
      <FurnitureSection/>
    </div>
  );
};

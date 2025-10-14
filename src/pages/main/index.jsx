import React from 'react';
import { ExploreMoreSection, HeroSection } from '../../Sections';
import OurProductSection from '../../Sections/OurProductSection';
import PageHeader from '../../Components/PageHeader';

export const Home = () => {
  return (
    <div>
      <PageHeader />
      <HeroSection />
      <ExploreMoreSection />
      <OurProductSection />
    </div>
  );
};

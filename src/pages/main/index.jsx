import React from 'react';
import { ExploreMoreSection, HeroSection } from '../../Sections';
import OurProductSection from '../../Sections/OurProductSection';
import Product from '../../Components/ProductCard';
import Footer from '../../Components/Footer';

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <ExploreMoreSection />
      <Footer />
    </div>
  );
};

import React from 'react';
import Carousel from '../../Components/Carousel';
import Buttons from '../../Components/Button/button';
import './explore.scss'

const ExploreMoreSection = () => {
  return (
    <div className='explore-more-section'>
      <div className='explore-more-section-left'>
        <h1>50+ Beautiful rooms
          inspiration</h1>
        <p>
          Our designer already made a lot of beautiful prototipe of rooms that inspire you
        </p>
        <Buttons variant='quaternary' text={'Explore More'}/>
      </div>
      <div className='explore-more-section-right'>
        <Carousel/>
      </div>
    </div>
  );
};

export default ExploreMoreSection;

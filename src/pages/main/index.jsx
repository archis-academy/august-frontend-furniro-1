import React from 'react';
import Product from '../../Components/Product';

export const Home = () => {
  return (
    <>
      {/* <div>Home</div> */}
      <Product variant="ribbon" badgeText="NEW" />
      <Product variant="pill" badgeText="15%" />
    </>
  );
};

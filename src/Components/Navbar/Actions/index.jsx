import React, { useState } from 'react';
import ShoppingCard from './shoppingCard';
import Favorites from './favorites';
import Search from './search';
import Profile from './profile';
import styles from '../navbar.module.scss';
const Actions = () => {
  const [toggle, setToggle] = useState(null);
  return (
    <div className={styles.navIcons}>
      {' '}
      <Profile toggle={toggle} setToggle={setToggle} />
      <Search toggle={toggle} setToggle={setToggle} />
      <Favorites toggle={toggle} setToggle={setToggle} />
      <ShoppingCard toggle={toggle} setToggle={setToggle} />
    </div>
  );
};

export default Actions;

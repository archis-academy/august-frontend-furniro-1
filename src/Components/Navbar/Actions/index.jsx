import React, { useState, useEffect, useRef } from 'react';
import ShoppingCard from './shoppingCard';
import Favorites from './favorites';
import Search from './search';
import Profile from './profile';

const Actions = () => {
  const [toggle, setToggle] = useState(null);

  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setToggle(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
      }}
      ref={containerRef}
    >
      <Profile toggle={toggle} setToggle={setToggle} />
      <Search toggle={toggle} setToggle={setToggle} />
      <Favorites toggle={toggle} setToggle={setToggle} />
      <ShoppingCard toggle={toggle} setToggle={setToggle} />
    </div>
  );
};

export default Actions;

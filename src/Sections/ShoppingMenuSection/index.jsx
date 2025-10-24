import styles from './shoppingMenu.module.scss';
import { useState } from 'react';

function ShoppingMenuSection() {
  const [menu, setMenu] = useState(false);
  const [selection, setSelection] = useState('Default');
  const selections = [
    'A to Z',
    'Z to A',
    'Price: Low to High',
    'Price: High to Low',
  ];
  const handleClick = () => {
    setMenu(!menu);
  };
  const handleSelection = (select) => {
    setSelection(select);
    setMenu(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.filter}>
          <div>
            <img src="assets/shopping-menu/vector.svg" />
          </div>
          <p>Filter</p>
        </div>
        <div>
          <p>|</p>
        </div>
        <div>
          <p>Showing 1–16 of 32 results</p>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.sort}>
          <p>Sort by</p>
        </div>
        <div className={styles.dropdownWrapper}>
          <button className={styles.default} onClick={handleClick}>
            {selection}
          </button>
          {menu && (
            <ul
              className={styles.dropdownMenu}
              style={{ listStyle: 'none', padding: 0, marginTop: '10px' }}
            >
              {selections.map((select, index) => (
                <li
                  key={index}
                  className={styles.dropdownItem}
                  onClick={() => handleSelection(select)}
                  style={{
                    cursor: 'pointer',
                    padding: '8px',
                    backgroundColor: '#B88E2F ',
                    color:'white',
                    marginBottom: '5px',
                    borderRadius: '4px',
                  }}
                >
                  {select}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingMenuSection;

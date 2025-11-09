import styles from './shoppingMenu.module.scss';
import { useState, useRef, useEffect } from 'react';
import Filters from "../../Components/Filters/index";

function ShoppingMenuSection() {
  const [showFilters, setShowFilters] = useState(false);
  const filterRef = useRef(null);

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  // 🔹 Filters dışına tıklanırsa kapat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilters(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔸 Dropdown (senin orijinal kısmın)
  const [menu, setMenu] = useState(false);
  const [selection, setSelection] = useState('Default');
  const selections = ['A to Z', 'Z to A', 'Price: Low to High', 'Price: High to Low'];

  const handleClick = () => setMenu(!menu);
  const handleSelection = (select) => {
    setSelection(select);
    setMenu(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.filter} ref={filterRef}>
          <div onClick={toggleFilters}>
            <img src="assets/shopping-menu/vector.svg" alt="filter icon" />
          </div>
          <p onClick={toggleFilters}>Filter</p>

          {/* 🪟 Filters componenti */}
          <div
            className={`${styles.filtersWrapper} ${showFilters ? styles.show : styles.hide}`}
          >
            <Filters />
          </div>
        </div>

        <div><p>|</p></div>
        <div><p>Showing 1–16 of 32 results</p></div>
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
                    backgroundColor: '#B88E2F',
                    color: 'white',
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

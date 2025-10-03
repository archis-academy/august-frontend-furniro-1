
import { useState } from 'react';
import styles from './search.module.scss';

function Search() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className={styles.icon} onClick={() => setToggle(!toggle)}>
        <img src="assets/navbar/search.svg" alt="search icon" />
        {toggle && (
          <div className={styles.container}>
                  <input className={styles.input} type="text" placeholder="What are you looking for?" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;






import styles from './search.module.scss';

function Search({ toggle, setToggle }) {


  return (
    <div>
      <div className={styles.icon} onClick={() => (toggle === "search" ? setToggle(null) : setToggle("search"))}>
        <img src="assets/navbar/search.svg" alt="search icon" />
        {toggle === "search" && (
          <div className={styles.container}>
                  <input className={styles.input} type="text" placeholder="What are you looking for?" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;




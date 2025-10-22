import styles from './search.module.scss';

function Search({ toggle, setToggle }) {
  return (
    <div className={styles.icon}>
      <img
        src="assets/icons/navbar/search.svg"
        alt="search icon"
        onClick={(e) => {
          e.stopPropagation(); 
          toggle === "search" ? setToggle(null) : setToggle("search");
        }}
      />

      {toggle === "search" && (
        <div
          className={styles.container}
          onClick={(e) => e.stopPropagation()} 
        >
          <input
            className={styles.input}
            type="text"
            placeholder="What are you looking for?"
          />
        </div>
      )}
    </div>
  );
}

export default Search;

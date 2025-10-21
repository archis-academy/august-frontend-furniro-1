import styles from './shoppingMenu.module.scss';

function ShoppingMenuSection() {
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
        <div className={styles.default}>
          <p>Default</p>
        </div>
      </div>
    </div>
  );
}

export default ShoppingMenuSection;

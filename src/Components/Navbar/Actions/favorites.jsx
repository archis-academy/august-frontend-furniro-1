import styles from './favorites.module.scss';

function Favorites({ toggle, setToggle }) {
  const products = [
    { id: 1, title: 'Asgaard Sofa', image: 'assets/icons/navbar/sofa.svg' },
    { id: 2, title: 'Casaliving Wood', image: 'assets/icons/navbar/table.svg' },
    { id: 3, title: 'Casaliving Wood', image: 'assets/icons/navbar/wood.svg' },
    { id: 4, title: 'Asgaard Sofa', image: 'assets/icons/navbar/sofa.svg' },
    { id: 5, title: 'Casaliving Wood', image: 'assets/icons/navbar/wood.svg' },
    { id: 6, title: 'Asgaard Sofa', image: 'assets/icons/navbar/sofa.svg' },
    { id: 7, title: 'Casaliving Wood', image: 'assets/icons/navbar/table.svg' },
    { id: 8, title: 'Casaliving Wood', image: 'assets/icons/navbar/wood.svg' },
    { id: 9, title: 'Asgaard Sofa', image: 'assets/icons/navbar/sofa.svg' },
    { id: 10, title: 'Casaliving Wood', image: 'assets/icons/navbar/table.svg' },
  ];

  return (
    <div className={styles.icon}>
      <img
        src="/assets/icons/navbar/like.svg"
        alt="like icon"
        onClick={(e) => {
          e.stopPropagation(); 
          toggle === "favorites" ? setToggle(null) : setToggle("favorites");
        }}
      />

      {toggle === "favorites" && (
        <div
          className={styles.container}
          onClick={(e) => e.stopPropagation()} 
        >
          <div className={styles.title}>
            Shopping Card
            <img src="/assets/icons/navbar/lock.svg" alt="lock" />
          </div>

          <hr className={styles.line}></hr>

          <div className={styles.scrollArea}>
            {products.map((product) => (
              <div className={styles.product1} key={product.id}>
                <div className={styles.image}>
                  <img src={product.image} alt="product" />
                </div>
                <div className={styles.info}>
                  <div>{product.title}</div>
                </div>
                <div className={styles.vector}>
                  <img src="/assets/icons/navbar/vector.svg" alt="remove" />
                </div>
              </div>
            ))}
          </div>

          <hr className={styles.line}></hr>

          <div className={styles.tabs}>
            <p className={styles.tab}>See More</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Favorites;

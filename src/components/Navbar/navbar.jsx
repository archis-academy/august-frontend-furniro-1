import styles from "./navbar.module.scss";
import "@fontsource/montserrat/700.css";
import "@fontsource/poppins";

function Navbar() {
  return (
    <div className={styles.navContainer} >
      <div className={styles.navTitle}>
        <div>
          <img src="/assets/navbar/nav-icon.svg" alt="nav-icon" />
        </div>
        <div>
          <h1 className={styles.title}>Furniro.</h1>
        </div>
      </div>
      <div className={styles.navLinks}>
        <div className={styles.link}>
          <p>Home</p>
        </div>
        <div className={styles.link}>
          <p>Shop</p>
        </div>
        <div className={styles.link}>
          <p>About</p>
        </div>
        <div className={styles.link}>
          <p>Contact</p>
        </div>
      </div>
      <div className={styles.navIcons}>
        <div className={styles.icon}>
          <img src="assets/navbar/profile.svg" alt="profile icon" />
        </div>
        <div className={styles.icon}>
          <img src="assets/navbar/search.svg" alt="search icon" />
        </div>
        <div className={styles.icon}>
          <img src="assets/navbar/like.svg" alt="like icon" />
        </div>
        <div className={styles.icon}>
          <img src="assets/navbar/basket.svg" alt="basket icon" />
        </div>
      </div>
    </div>
  )
}

export default Navbar;


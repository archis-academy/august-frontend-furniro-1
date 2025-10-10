import styles from './navbar.module.scss';
import '@fontsource/montserrat/700.css';
import '@fontsource/poppins';
import Actions from './Actions';
import NavbarLink from './Links';

function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navTitle}>
        <div>
          <img src="/assets/navbar/nav-icon.svg" alt="nav-icon" />
        </div>
        <div>
          <h1 className={styles.title}>Furniro.</h1>
        </div>
      </div>
      <div className={styles.navLinks}>
        <NavbarLink name="Home" page="/" />
        <NavbarLink name="Shop" page="/shop" />
        <NavbarLink name="About" page="/about" />
        <NavbarLink name="Contact" page="/contact" />
      </div>

      <Actions />
    </div>
  );
}

export default Navbar;

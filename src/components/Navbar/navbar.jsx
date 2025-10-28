import styles from './navbar.module.scss';
import Actions from './Actions';
import NavbarLink from './Links';

function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navTitle}>
        <a  className={styles.navIcon} href='/'>
        <div>
          <img src="/assets/icons/navbar/nav-icon.svg" alt="nav-icon" />
        </div>
        <div>
          <h1 className={styles.title}>Furniro.</h1>
        </div>
        </a>
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

import styles from './navbar.module.scss';
import '@fontsource/montserrat/700.css';
import '@fontsource/poppins';
import Actions from './Actions';
import About from "./Links/about";
 

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
        <About name="Home" page="/"/>
        <About name="Shop"/>
        <About name="About"/>
        <About name="Contact"/>
      </div>

        <Actions />
  
    </div>
  );
}

export default Navbar;

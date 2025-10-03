import styles from "./navbar.module.scss";
import "@fontsource/montserrat/700.css";
import "@fontsource/poppins";
import ShoppingCard from "./Actions/shoppingCard";
import Favorites from "./Actions/favorites";
import Search from "./Actions/search";
import Profile from "./Actions/profile";

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
           <Profile/>
           <Search/>
          <Favorites/>    
          <ShoppingCard/>
        </div>
    </div>
  )
}

export default Navbar;


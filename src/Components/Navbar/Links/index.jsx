import styles from './links.module.scss';
import { Link, useLocation } from 'react-router-dom';



function NavbarLink ({page, name }) {
  const location = useLocation();

  const isActive = location.pathname === page
  return (
    <div>
      <div className={isActive ? styles.activeLink : styles.link}>
        <nav>
          {/* <a href={page}>{name}</a> */}
          <Link  to={page}>{name}</Link>
        </nav>
      </div>
    </div>
  );
}

export default NavbarLink;

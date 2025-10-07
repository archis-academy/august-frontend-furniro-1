import styles from './about.module.scss';
import { Link } from 'react-router-dom';


function About({page, name }) {
  return (
    <div>
      <div className={styles.link}>
        <nav>
          <a href={page}>{name}</a>
        </nav>
      </div>
    </div>
  );
}

export default About;

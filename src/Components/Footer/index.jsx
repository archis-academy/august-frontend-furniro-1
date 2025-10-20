import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';

function Footer() {
  return (
    <>
      <footer className={styles.footerContainer}>
        <div className={styles.logo}>Furniro.</div>

        <div className={styles.navigations}>
          <div className={styles.block}>
            <div className={styles.title}>LINKS</div>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className={styles.block}>
            <div className={styles.title}>HELP</div>
            <ul>
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>

          <div className={styles.block}>
            <div className={styles.title}>LOCATION</div>
            <ul>
              <li>400 University Drive Suite 200 Coral</li>
              <li>Gables,</li>
              <li>FL 33134 USA</li>
            </ul>
          </div>

          <div className={styles.block}>
            <div className={styles.title}>NEWSLETTER</div>
            <form
              className={styles.newsletter}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className={styles.input}
                required
              />
              <a className={styles.subscribeBtn}>SUBSCRIBE</a>
            </form>
          </div>
        </div>

        <div className={styles.subTxt}>2023 furniro. All rights reserved</div>
      </footer>

      <div></div>
    </>
  );
}

export default Footer;

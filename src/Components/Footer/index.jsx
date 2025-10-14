import React from 'react';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <>
      <footer className={styles.footerContainer}>
        <div className={styles.logo}>Furniro.</div>

        <div className={styles.navigations}>
          <div className={styles.block}>
            <div className={styles.title}>LINKS</div>
            <div className={styles.line} />

            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
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
            </form>
          </div>
          <a className={styles.subscribeBtn}>SUBSCRIBE</a>
        </div>

        <div className={styles.hr} />
        <div className={styles.subTxt}>2023 furniro. All rights reserved</div>
      </footer>
    </>
  );
}

export default Footer;

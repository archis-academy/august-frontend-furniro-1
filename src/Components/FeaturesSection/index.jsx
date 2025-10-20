import React from 'react';
import styles from './FeaturesSection.module.scss';

function FeaturesSection() {
  return (
    <div className={styles.features}>
      <div className={styles.features__item}>
        <div className={styles.icon__wrapper}>
          <img
            className={styles.icon}
            src="/assets/features-section/trophy.svg"
            alt="High quality trophy"
          />
        </div>
        <div className={styles.features__text}>
          <h4 className={styles.features__title}>High Quality</h4>
          <p className={styles.features__subtitle}>
            crafted from top materials
          </p>
        </div>
      </div>

      <div className={styles.features__item}>
        <div className={styles.icon__wrapper}>
          <img
            className={styles.icon}
            src="/assets/features-section/guarantee.svg"
            alt="Warranty check badge"
          />
        </div>
        <div className={styles.features__text}>
          <h4 className={styles.features__title}>Warranty Protection</h4>
          <p className={styles.features__subtitle}>Over 2 years</p>
        </div>
      </div>

      <div className={styles.features__item}>
        <div className={styles.icon__wrapper}>
          <img
            className={styles.icon}
            src="/assets/features-section/shipping.svg"
            alt="Free shipping box"
          />
        </div>
        <div className={styles.features__text}>
          <h4 className={styles.features__title}>Free Shipping</h4>
          <p className={styles.features__subtitle}>Order over 150 $</p>
        </div>
      </div>

      <div className={styles.features__item}>
        <div className={styles.icon__wrapper}>
          <img
            className={styles.icon}
            src="/assets/features-section/customer-support.svg"
            alt="24/7 customer support headset"
          />
        </div>
        <div className={styles.features__text}>
          <h4 className={styles.features__title}>24 / 7 Support</h4>
          <p className={styles.features__subtitle}>Dedicated support</p>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;

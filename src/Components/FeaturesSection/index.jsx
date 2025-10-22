import React from 'react';
import styles from './FeaturesSection.module.scss';

function FeaturesSection() {
  const featuresData = [
    {
      icon: '/assets/features-section/trophy.svg',
      title: 'High Quality',
      subtitle: 'crafted from top materials',
      alt: 'High quality trophy',
    },
    {
      icon: '/assets/features-section/guarantee.svg',
      title: 'Warranty Protection',
      subtitle: 'Over 2 years',
      alt: 'Warranty check badge',
    },
    {
      icon: '/assets/features-section/shipping.svg',
      title: 'Free Shipping',
      subtitle: 'Order over 150 $',
      alt: 'Free shipping box',
    },
    {
      icon: '/assets/features-section/customer-support.svg',
      title: '24 / 7 Support',
      subtitle: 'Dedicated support',
      alt: '24/7 customer support headset',
    },
  ];
  return (
    <div className={styles.features}>
      {featuresData.map((feature, index) => (
        <div key={index} className={styles.features__item}>
          <div className={styles.icon__wrapper}>
            <img className={styles.icon} src={feature.icon} alt={feature.alt} />
          </div>
          <div className={styles.features__text}>
            <h4 className={styles.features__title}>{feature.title}</h4>
            <p className={styles.features__subtitle}>{feature.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeaturesSection;

import React, { useState } from 'react';
import styles from './SingleProductMoreInfo.module.scss';

export const SingleProductMoreInfo = () => {
  const desc1 =
    'Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.';
  const desc2 =
    'Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced.The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.';
  const [activeTab, setActiveTab] = useState('description');

  const handleClick = (e, tab) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'info', label: 'Additional Information' },
    { id: 'reviews', label: 'Reviews [5]' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.tabComponent}>
        {tabs.map((tab) => (
          <a
            key={tab.id}
            className={activeTab === tab.id ? styles.active : ''}
            onClick={(e) => handleClick(e, tab.id)}
          >
            {tab.label}
          </a>
        ))}
      </div>
      <div className={styles.content}>
        {activeTab === 'description' && (
          <div className={styles.desc}>
            <p>{desc1}</p>
            <p>{desc2}</p>
            <div className={styles.imageWrapper}>
              <img
                className={styles.image_1}
                src="/assets/images/single-product-morel/sofa_1.png"
                alt="sofa1"
              />
              <img
                className={styles.image_2}
                src="/assets/images/single-product-morel/sofa_2.png"
                alt="sofa2"
              />
            </div>
          </div>
        )}

        {activeTab === 'info' && (
          <div>
            <p>
              <strong>Material:</strong> Linen and wood
            </p>
            <p>
              <strong>Dimensions:</strong> 200 x 150 x 80 cm
            </p>
            <p>
              <strong>Color:</strong> Beige
            </p>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div>
            <h4>Customer Reviews (5)</h4>
            <ul>
              <li>⭐️⭐️⭐️⭐️⭐️ Great product! Very comfortable.</li>
              <li>⭐️⭐️⭐️⭐️ Good quality, but delivery was late.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

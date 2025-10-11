import { useState } from 'react';
import styles from './shoppingCard.module.scss';

function ShoppingCard({ toggle, setToggle }) {
  return (
    <div className={styles.icon}>
      <img
        src="assets/navbar/basket.svg"
        alt="profile icon"
        onClick={(e) => {
          e.stopPropagation(); 
          toggle === "shoppingCard" ? setToggle(null) : setToggle("shoppingCard");
        }}
      />

      {toggle === "shoppingCard" && (
        <div
          className={styles.container}
          onClick={(e) => e.stopPropagation()} 
        >
          <div className={styles.topSide}>
            <div className={styles.title}>
              Shopping Card
              <img src="assets/navbar/lock.svg" alt="lock" />
            </div>
            <hr className={styles.line}></hr>

            <div className={styles.product1}>
              <div className={styles.image}>
                <img src="assets/navbar/sofa.svg" alt="sofa" />
              </div>
              <div className={styles.info}>
                <div>Asgaard Sofa</div>
                <div className={styles.price}>1 x Rs. 250,000.00</div>
              </div>
              <div className={styles.vector}>
                <img src="assets/navbar/vector.svg" alt="remove" />
              </div>
            </div>

            <div className={styles.product2}>
              <div className={styles.image}>
                <img src="assets/navbar/wood.svg" alt="wood" />
              </div>
              <div className={styles.info}>
                <div>Casaliving Wood</div>
                <div className={styles.price}>1 x Rs. 270,000.00</div>
              </div>
              <div className={styles.vector}>
                <img src="assets/navbar/vector.svg" alt="remove" />
              </div>
            </div>
          </div>

          <div className={styles.bottomSide}>
            <div className={styles.total}>
              <p>Subtotal</p>
              <p className={styles.price}>Rs. 520,000.00</p>
            </div>
            <hr className={styles.line}></hr>
            <div className={styles.tabs}>
              <p className={styles.tab}>Cart</p>
              <p className={styles.tab}>Checkout</p>
              <p className={styles.tab}>Comparison</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCard;

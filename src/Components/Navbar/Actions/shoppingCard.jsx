import { useCart } from '../../../context/CartContext';
import styles from './shoppingCard.module.scss';

function ShoppingCard({ toggle, setToggle }) {
  const { cartItems, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.price || 0;
      return total + (price * item.quantity);
    }, 0);
  };

  const totalAmount = calculateTotal();

  return (
    <div className={styles.icon}>
      <img
        src="/assets/icons/navbar/basket.svg"
        alt="Basket icon"
        onClick={(e) => {
          e.stopPropagation();
          toggle === "shoppingCard" ? setToggle(null) : setToggle("shoppingCard");
        }}
      />

      {cartItems.length > 0 && (
        <span className={styles.cartCount}>{cartItems.length}</span>
      )}

      {toggle === "shoppingCard" && (
        <div
          className={styles.container}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.topSide}>
            <div className={styles.title}>
              Shopping Card ({cartItems.length})
              <img src="/assets/icons/navbar/lock.svg" alt="lock" />
            </div>
            <hr className={styles.line}></hr>

            {cartItems.length === 0 ? (
              <div className={styles.emptyCart}>Sepetinizde ürün bulunmamaktadır.</div>
            ) : (
              cartItems.map((product) => (
                <div key={product.id} className={styles.productItem}>
                  <div className={styles.image}>
                    <img src={product.images[0]?.url || "assets/icons/navbar/default.svg"} alt={product.name} />
                  </div>
                  <div className={styles.info}>
                    <div>{product.name}</div>
                    <div className={styles.price}>
                      {product.quantity} x $ {parseFloat(product.price)?.toLocaleString('en-IN') || '0.00'}
                    </div>
                  </div>
                  <div
                    className={styles.vector}
                    onClick={() => removeFromCart(product.id)}
                  >
                    <img src="/assets/icons/navbar/vector.svg" alt="remove" />
                  </div>
                </div>
              ))
            )}

          </div>

          <div className={styles.bottomSide}>
            <div className={styles.total}>
              <p>Subtotal</p>
              <p className={styles.price}> $ {totalAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
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